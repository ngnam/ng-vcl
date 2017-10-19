import { ElementRef, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
export declare class TextareaDirective implements OnInit {
    private model;
    private elRef;
    constructor(model: NgModel, elRef: ElementRef);
    selectAllOnFocus: boolean;
    autogrow: boolean;
    maxRows: number | undefined;
    minRows: number | undefined;
    rows: number;
    ngOnInit(): void;
    onModelChange(value: any): void;
    onFocus(value: any): void;
    setRowsByValue(value: string): void;
}
