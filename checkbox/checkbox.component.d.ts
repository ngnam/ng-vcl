import { EventEmitter, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class CheckboxComponent implements ControlValueAccessor {
    private elementRef;
    tabindex: number;
    checkedIcon: string;
    uncheckedIcon: string;
    disabled: boolean;
    labelPosition: 'left' | 'right';
    /**
    Reflects the checked state, `true` is checked and `false` is unchecked
    @public
    */
    checked: boolean;
    /**
    Action fired when the `checked` state changes due to user interaction.
    */
    checkedChange: EventEmitter<boolean>;
    constructor(elementRef: ElementRef);
    onKeyup(e: any): void;
    onTap(e: any): void;
    updateValue(): void;
    readonly icon: string;
    onBlur(e: any): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
