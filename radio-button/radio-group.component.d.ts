import { OnDestroy, QueryList, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/startWith';
import { RadioButtonComponent } from './radio-button.component';
import { ControlValueAccessor } from "@angular/forms";
export declare enum SelectionMode {
    Single = 0,
    Multiple = 1,
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class RadioGroupComponent implements OnDestroy, ControlValueAccessor {
    private cdRef;
    checkedSub: Subscription | undefined;
    blurSub: Subscription | undefined;
    value: any;
    change: EventEmitter<any>;
    radioButtons: QueryList<RadioButtonComponent> | undefined;
    constructor(cdRef: ChangeDetectorRef);
    private syncValue();
    private syncRadioButtons();
    private triggerChange();
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    dispose(): void;
    /**
    * things needed for ControlValueAccessor-Interface
    */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
