import { EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Token } from './token.component';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TokenInputLabelPre {
}
export declare class TokenInputLabelPost {
}
export declare class TokenInputComponent implements ControlValueAccessor {
    private cdRef;
    tokens: Token[];
    input: ElementRef;
    selectable: boolean;
    selectedAfterAdd: boolean;
    placeholder: string | undefined;
    inputClass: string | undefined;
    icon: string;
    tabindex: number;
    tokenClass: string | undefined;
    change: EventEmitter<Token[]>;
    add: EventEmitter<Token>;
    remove: EventEmitter<Token>;
    confirm: EventEmitter<Token[]>;
    labelPre: TokenInputLabelPre;
    labelPost: TokenInputLabelPost;
    constructor(cdRef: ChangeDetectorRef);
    onFocus(ev?: any): Promise<void>;
    focused: boolean;
    onInputFocus(): void;
    onInputBlur(): void;
    readonly vclFocused: boolean;
    /**
     * remove last token on double-backspace
     */
    private lastKey;
    onKeydown(ev?: KeyboardEvent): void;
    addToken(label: string): void;
    select(token: Token): void;
    removeToken(token: Token): void;
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
