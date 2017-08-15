import { ElementRef, QueryList, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { ControlValueAccessor } from '@angular/forms';
import { MetalistItem, SelectionMode } from '../metalist/index';
import { DropdownComponent } from '../dropdown/index';
import { SelectOption } from './select-option.component';
import 'rxjs/add/operator/startWith';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class SelectComponent implements ControlValueAccessor {
    private elementRef;
    private cdRef;
    dropdown: DropdownComponent;
    items: QueryList<SelectOption>;
    select: ElementRef;
    selectionMode: SelectionMode;
    mode: 'multiple' | 'single';
    tabindex: number;
    expanded: boolean;
    disabled: boolean;
    listenKeys: boolean;
    maxSelectableItems: number;
    expandedIcon: string;
    collapsedIcon: string;
    change: EventEmitter<any>;
    focused: boolean;
    constructor(elementRef: ElementRef, cdRef: ChangeDetectorRef);
    keydown(ev: any): void;
    reFocus(): void;
    onFocus(event?: any): Promise<void>;
    onBlur(event?: any): void;
    toggle(): void;
    close(): void;
    dropdownTop: number;
    open(): Promise<void>;
    readonly displayValue: string;
    readonly selectedMetaItems: MetalistItem[];
    readonly selectedItems: SelectOption[];
    readonly showDisplayValue: boolean;
    deselectItem(item: SelectOption, event?: any): void;
    ngAfterViewInit(): void;
    onDropdownChange(value: any): void;
    setValue(value: any): void;
    /**
     * Things needed for ControlValueAccessor-Interface.
     */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
