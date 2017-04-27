import { ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publishReplay';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class FileInputComponent implements ControlValueAccessor {
    accept: string;
    multiple: boolean;
    files: EventEmitter<FileList>;
    tabindex: number;
    disabled: boolean;
    invalidFiles: boolean;
    isDragging: boolean;
    isFocused: boolean;
    input: ElementRef;
    value: FileList | undefined;
    filename: string | undefined;
    readonly fileInput: HTMLInputElement | undefined;
    onFocus(): void;
    onBlur(): void;
    onInputChange(): void;
    checkFiles(files: FileList): void;
    keydown(ev: any): void;
    onClick(value: any): void;
    onDragOver(e: any): void;
    onDragLeave(e: any): void;
    onDrop(e: any): void;
    updateFiles(files: FileList): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(files: FileList): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
