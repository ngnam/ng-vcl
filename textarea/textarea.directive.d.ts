import { ElementRef } from '@angular/core';
export declare class TextareaDirective {
    private elRef;
    constructor(elRef: ElementRef);
    selectAllOnFocus: boolean;
    autogrow: boolean;
    maxRows: number | undefined;
    minRows: number | undefined;
    rows: number;
    onModelChange(value: any): void;
    onFocus(value: any): void;
    setRowsByValue(value: string): void;
}
