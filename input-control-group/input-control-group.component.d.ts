import { ElementRef } from '@angular/core';
export declare class InputControlGroup {
    private elRef;
    type: 'error' | 'warning' | 'success' | undefined;
    label: string;
    constructor(elRef: ElementRef);
    ucfirst(str: string): string;
}
