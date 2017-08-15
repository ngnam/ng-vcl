import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class PasswordInputComponent implements ControlValueAccessor {
    private cdRef;
    inputId: string | undefined;
    visibleIcon: string;
    invisibleIcon: string;
    visible: boolean;
    disabled: boolean;
    selectOnFocus: boolean;
    tabindex: number;
    placeholder: string;
    value: string;
    readonly buttonIcon: string;
    constructor(cdRef: ChangeDetectorRef);
    toggle(): void;
    onBlur(): void;
    onModelChange(value: any): void;
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
