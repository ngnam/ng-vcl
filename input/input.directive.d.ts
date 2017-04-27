import { ElementRef } from '@angular/core';
export declare class InputDirective {
    private elRef;
    type: string;
    selectOnFocus: boolean;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    readonly value: any;
    clear(): void;
    focus(): void;
    onFocus(): void;
}
