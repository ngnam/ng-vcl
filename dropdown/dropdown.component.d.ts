import { EventEmitter, ElementRef, QueryList, ChangeDetectorRef, OpaqueToken } from '@angular/core';
import { AnimationMetadata, AnimationFactory, AnimationBuilder } from "@angular/animations";
import { ControlValueAccessor } from '@angular/forms';
import { DropdownOption } from "./dropdown-option.component";
import { MetalistComponent, MetalistItem, SelectionMode } from "../metalist/index";
export declare enum DropdownState {
    Expanded = 0,
    Closed = 1,
    Expanding = 2,
    Closing = 3,
}
export declare const DROPDOWN_ANIMATIONS: OpaqueToken;
export interface DropdownAnimationConfig {
    enter?: AnimationMetadata | AnimationMetadata[];
    leave?: AnimationMetadata | AnimationMetadata[];
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class DropdownComponent implements ControlValueAccessor {
    readonly elementRef: ElementRef;
    private readonly cdRef;
    private readonly builder;
    private animations;
    metalist: MetalistComponent;
    listbox: ElementRef;
    items: QueryList<DropdownOption>;
    tabindex: number;
    state: DropdownState;
    expanded: boolean;
    willClose: EventEmitter<any>;
    willExpand: EventEmitter<any>;
    selectionMode: SelectionMode;
    mode: 'multiple' | 'single';
    maxSelectableItems?: number;
    disabled: boolean;
    listenKeys: boolean;
    change: EventEmitter<any>;
    focused: boolean;
    enterAnimationFactory: AnimationFactory | undefined;
    leaveAnimationFactory: AnimationFactory | undefined;
    constructor(elementRef: ElementRef, cdRef: ChangeDetectorRef, builder: AnimationBuilder, animations: DropdownAnimationConfig);
    expand(): Promise<void>;
    close(): void;
    scrollToMarked(): Promise<void>;
    onMetalistItemTap(metaItem: MetalistItem): void;
    onMetalistKeydown(ev: any): void;
    ngAfterViewInit(): void;
    onMetalistFocus(): void;
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
    setDisabledState(isDisabled: boolean): void;
    readonly DropdownState: typeof DropdownState;
}
