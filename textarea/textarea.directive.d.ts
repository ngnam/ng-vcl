import { ElementRef } from '@angular/core';
export declare class TextareaDirective {
    private elRef;
    constructor(elRef: ElementRef);
    selectAllOnFocus: boolean;
    autogrow: boolean;
    maxRows: number;
    minRows: number;
    rows: number;
    onModelChange(value: any): void;
    onFocus(value: any): void;
    setRowsByValue(value: string): void;
}
