import { OnDestroy, QueryList, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/index';
import { ControlValueAccessor } from "@angular/forms";
export declare enum SelectionMode {
    Single = 0,
    Multiple = 1,
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class ButtonGroupComponent implements OnDestroy, ControlValueAccessor {
    private pressSubscription;
    buttons: QueryList<ButtonComponent>;
    selectionMode: SelectionMode;
    mode: string;
    change: EventEmitter<number | number[]>;
    selectedIndex: number | number[];
    private syncButtons();
    private syncSelectedIndex();
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
