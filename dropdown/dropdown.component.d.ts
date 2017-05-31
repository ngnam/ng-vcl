import { EventEmitter, ElementRef, QueryList, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DropdownOption } from "./dropdown-option.component";
import { MetalistComponent, MetalistItem, SelectionMode } from "../metalist/index";
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class DropdownComponent implements ControlValueAccessor {
    elementRef: ElementRef;
    private cdRef;
    metalist: MetalistComponent;
    listbox: ElementRef;
    items: QueryList<DropdownOption>;
    tabindex: number;
    selectionMode: SelectionMode;
    mode: 'multiple' | 'single';
    maxSelectableItems: number | undefined;
    listenKeys: boolean;
    change: EventEmitter<any>;
    constructor(elementRef: ElementRef, cdRef: ChangeDetectorRef);
    scrollToMarked(): Promise<void>;
    onMetalistItemTap(metaItem: MetalistItem): void;
    onMetalistKeydown(ev: any): void;
    ngAfterViewInit(): void;
    onMetalistBlur(): void;
    onMetalistChange(value: any): void;
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
