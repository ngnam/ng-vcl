import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, Directive, ViewChild, ViewContainerRef, Input, TemplateRef, HostBinding, HostListener, ElementRef, ContentChildren, QueryList, forwardRef, AfterContentInit, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { WormholeHost } from '../wormhole/index';
import { PopoverComponent } from '../popover/index';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'vcl-autocomplete',
  exportAs: 'vclAutocomplete',
  styles: [`
    .vclDropdown {
      padding: 0;
      position: static;
    }
    .vclPopOver {
      padding: 0;
    }
  `],
  templateUrl: 'autocomplete.component.html'
})
export class Autocomplete implements AfterContentInit, OnDestroy {


  @ViewChild('popover')
  popover: PopoverComponent;

  @ContentChildren(forwardRef(() => AutocompleteOption))
  items?: QueryList<AutocompleteOption>;

  @Output()
  select = new EventEmitter<any>();

  target$ = new BehaviorSubject<any>(undefined);

  private items$ = new BehaviorSubject<AutocompleteOption[]>([]);

  highlightedItem: number = -1;

  open(targetElement: any) {
    this.highlightedItem = -1;
    const selectSubject = new Subject<AutocompleteOption>();
    const offClickSubject = new Subject();
    const value = new Subject<AutocompleteOption>();

    const destroy = () => {
      selectSubject.complete();
      offClickSubject.complete();
      this.target$.next(undefined);
    };

    const offClickSub = offClickSubject.subscribe(() => destroy());
    this.target$.next({ element: targetElement, select: selectSubject, offClick: offClickSubject });
    return new Observable<AutocompleteOption>(observer => {
      const sub = selectSubject.subscribe(observer);
      // const sub = selectSubject.subscribe(aco => observer.next(aco) || destroy());
      return () => {
        destroy();
        sub.unsubscribe();
      };
    });
  }

  selectHighlighted() {
    if (this.highlightedItem >= 0 && this.target$.value && this.items && this.items.toArray()[this.highlightedItem]) {
      const item = this.items.toArray()[this.highlightedItem];
      this.target$.value.select.next(item);
    }
  }

  highlightPrev() {
    if (this.items) {
      if (this.highlightedItem < 0) {
        this.highlightedItem = this.items.toArray().findIndex(item => item.type === 'item');
      } else {
        const revIdx = this.items.toArray().reverse().findIndex((item, thisRevId, items) => {
          const thisIdx = (items.length - 1) - thisRevId;
          return item.type === 'item' && thisIdx < this.highlightedItem;
        });
        if (revIdx === - 1) {
          this.highlightedItem = this.items.toArray().findIndex(item => item.type === 'item');
        } else {
          const idx = (this.items.length - 1) - revIdx;
          this.highlightedItem = idx;
        }
      }
    }
  }

  highlightNext() {
    if (this.items) {
      let idx = this.items.toArray().findIndex((item, thisIdx) => item.type === 'item' && thisIdx > this.highlightedItem);
      if (idx === -1) {
        // const reversedIdx = this.items.toArray().reverse().findIndex(item => item.type === 'item');
        // idx = (this.items.length - 1) - reversedIdx;
      } else {
        this.highlightedItem = idx;
      }
    }
  }

  visible$ = Observable.combineLatest(this.target$, this.items$, ((target, items) => {
    return target && items.length > 0;
  }));

  itemsSub?: Subscription;

  ngAfterContentInit(): void {
    const items = this.items;
    this.itemsSub = items && items.changes.startWith(items.toArray()).map(() => items.toArray()).subscribe(this.items$);
  }

  ngOnDestroy(): void {
    this.itemsSub && this.itemsSub.unsubscribe();
  }
}

@Directive({
  selector: 'vcl-autocomplete-option'
})
export class AutocompleteOption {
  @Input()
  type: 'item' | 'seperator' | 'header' = 'item';
  @Input()
  value?: any;
  @Input()
  label?: string;
  @Input()
  sublabel?: string;
  @Input()
  disabled?: boolean = false;
}
