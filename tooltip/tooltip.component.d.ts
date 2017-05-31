import { ElementRef, AfterViewInit } from '@angular/core';
import { ICoordinate } from "./ICoordinate";
export declare class TooltipComponent implements AfterViewInit {
    private element;
    animationState: 'shown' | 'hidden';
    content: string;
    placement: "top" | "bottom" | "left" | "right";
    hostElement: HTMLElement;
    tooltipPlacement: ICoordinate;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    readonly tooltipPosition: string;
}
