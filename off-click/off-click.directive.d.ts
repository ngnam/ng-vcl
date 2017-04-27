import { EventEmitter, ElementRef } from '@angular/core';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/skipUntil';
export declare class OffClickDirective {
    private elem;
    offClick: EventEmitter<{}>;
    private sub;
    constructor(elem: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
