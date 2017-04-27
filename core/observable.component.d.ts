import { SimpleChanges, SimpleChange, OnDestroy, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
export declare abstract class ObservableComponent implements OnDestroy, OnChanges {
    private changesSubject;
    private observedProps;
    protected changes$: Observable<SimpleChanges>;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    protected observeChanges(...props: string[]): Observable<SimpleChanges>;
    protected observeChange(prop: string): Observable<SimpleChange>;
    protected observeChangeValue<T>(prop: string): Observable<T>;
}
