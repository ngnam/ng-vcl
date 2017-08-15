import { ElementRef } from '@angular/core';
export declare class InputDirective {
    private elRef;
    type: string;
    selectOnFocus: boolean;
    disabled: boolean;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    readonly value: any;
    readonly attrDisabled: boolean | null;
    clear(): void;
    focus(): void;
    onFocus(): void;
}
