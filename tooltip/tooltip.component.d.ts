import { ElementRef, AfterViewInit, Renderer, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ICoordinate } from "./ICoordinate";
import { TooltipService } from './tooltip.service';
export declare class TooltipComponent implements AfterViewInit, OnDestroy, OnChanges {
    private element;
    private document;
    private renderer;
    private tooltipService;
    content: string;
    placement: "top" | "bottom" | "left" | "right";
    hostElement: HTMLElement;
    animationState: 'shown' | 'hidden' | 'none';
    tooltipPlacement: ICoordinate;
    tooltipPosition: string;
    showOnInit: boolean;
    constructor(element: ElementRef, document: any, renderer: Renderer, tooltipService: TooltipService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ShowTooltip(context?: this): Function;
    TooltipPosition(): string;
    ngOnDestroy(): void;
}
