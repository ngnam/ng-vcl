import { Observable } from 'rxjs/Observable';
import { Directive, ElementRef, Input, HostListener, OnDestroy, Output, EventEmitter, HostBinding } from '@angular/core';
import { Autocomplete, AutocompleteOption } from './autocomplete.component';
import { ObservableComponent } from '../core/index';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: 'input[vcl-input-autocomplete]',
})
export class InputAutocomplete extends ObservableComponent implements OnDestroy  {

  constructor(public elementRef: ElementRef) {
    super();
  }

  @Output()
  autocompleteSelect = new EventEmitter<AutocompleteOption>();

  @Input('vcl-input-autocomplete')
  ac?: Autocomplete;

  acSub?: Subscription;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled: boolean = false;

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? true : null;
  }

  active = false;

  @HostListener('focus')
  onFocus() {
    this.activate();
  }

  activate() {
    if (!(this.ac instanceof Autocomplete)) {
      throw 'invalid vcl-input-autocomplete parameter';
    }
    this.active = true;
    this.acSub = this.ac.open(this.elementRef).subscribe(selection => {
      this.elementRef.nativeElement.value = selection.value || selection.label;
      this.acSub && this.acSub.unsubscribe();
      this.active = false;
      this.autocompleteSelect.emit(selection);
    }, undefined, () => this.active = false);
  }


  @HostListener('input')
  onInput() {
    this.activate();
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event) {
    if (event.code === 'ArrowUp') {
      this.ac && this.ac.highlightPrev();
      event.preventDefault();
      return false;
    } else if (event.code === 'ArrowDown') {
      if (!this.active) {
        this.activate();
      } else {
        this.ac && this.ac.highlightNext();
      }
      event.preventDefault();
      return false;
    }
  }

  @HostListener('keypress', ['$event'])
  async handleKeyPressEvent(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      event.preventDefault();
      this.ac && this.ac.selectHighlighted();
    }
  }

  @HostListener('enter')
  onKeyEnter() {
    this.ac && this.ac.highlightNext();
  }


  ngOnDestroy() {
    this.acSub && this.acSub.unsubscribe();
    super.ngOnDestroy();
  }
}
