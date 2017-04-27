import { EventEmitter, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Token } from './token.component';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TokenInputComponent implements ControlValueAccessor {
    tokens: Token[];
    input: ElementRef;
    selectable: boolean;
    tabindex: number;
    onFocus(ev?: any): Promise<void>;
    focused: boolean;
    onInputFocus(): void;
    onInputBlur(): void;
    readonly vclFocused: boolean;
    /**
     * remove last token on double-backspace
     */
    lastKey: string | null;
    onKeydown(ev?: KeyboardEvent): void;
    change: EventEmitter<{}>;
    add(label: string): void;
    select(token: Token): void;
    remove(token: Token): void;
    triggerChange(): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(tokens: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
