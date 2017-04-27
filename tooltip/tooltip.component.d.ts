import { ElementRef } from '@angular/core';
export declare class TooltipComponent {
    private element;
    content: string;
    position: string;
    ref: any;
    constructor(element: ElementRef);
    readonly tooltipPosiiton: string;
}
