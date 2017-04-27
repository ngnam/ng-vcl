import { EventEmitter } from '@angular/core';
export interface Token {
    label: string;
    selected?: boolean;
    removable?: boolean;
}
export declare class TokenComponent implements Token {
    label: string;
    onTap(e: Event): void;
    onRemoveClick(event: any): void;
    selected: boolean;
    removable: boolean;
    remove: EventEmitter<{}>;
    select: EventEmitter<{}>;
}
