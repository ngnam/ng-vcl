import { OnDestroy, QueryList, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RadioButtonComponent } from './radio-button.component';
import { ControlValueAccessor } from "@angular/forms";
export declare enum SelectionMode {
    Single = 0,
    Multiple = 1,
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class RadioGroupComponent implements OnDestroy, ControlValueAccessor {
    checkedSubscription: Subscription | undefined;
    value: any;
    change: EventEmitter<any>;
    radioButtons: QueryList<RadioButtonComponent>;
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
}
