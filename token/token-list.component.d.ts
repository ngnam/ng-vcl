import { EventEmitter, QueryList, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ControlValueAccessor } from '@angular/forms';
import { TokenComponent } from './token.component';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TokenListComponent implements ControlValueAccessor {
    private cdRef;
    tokenSubscription: Subscription | undefined;
    tokens: QueryList<TokenComponent>;
    selectable: boolean;
    change: EventEmitter<{}>;
    labels: any[];
    constructor(cdRef: ChangeDetectorRef);
    private syncTokens();
    private syncSelectedValues();
    private triggerChange();
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    dispose(): void;
    /**
   * things needed for ControlValueAccessor-Interface
   */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
