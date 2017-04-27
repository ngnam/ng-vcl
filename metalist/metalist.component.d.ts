import { ChangeDetectorRef, EventEmitter, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MetalistItem } from "./metalist-item.component";
export declare enum SelectionMode {
    Multiple = 0,
    Single = 1,
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class MetalistComponent implements ControlValueAccessor {
    private cdRef;
    selectionMode: SelectionMode;
    mode: 'multiple' | 'single';
    maxSelectableItems: number;
    change: EventEmitter<any>;
    items: QueryList<MetalistItem>;
    value: any | any[];
    readonly selectedItem: MetalistItem | undefined;
    readonly selectedItems: MetalistItem[];
    constructor(cdRef: ChangeDetectorRef);
    private syncItems();
    private syncValue();
    private triggerChange();
    ngAfterContentInit(): void;
    select(item: MetalistItem | number): void;
    deselect(item: MetalistItem | number): void;
    private determineMarkedIndex();
    markNext(): void;
    markPrev(): void;
    selectMarked(): void;
    setValue(value: any): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
