import { OnDestroy, ElementRef, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
export declare class TooltipDirective implements OnDestroy {
    private element;
    private resolver;
    private viewContainerRef;
    private document;
    content: string;
    position: "top" | "bottom" | "left" | "right";
    tooltip: ComponentRef<TooltipComponent>;
    constructor(element: ElementRef, resolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, document: any);
    onMouseEnter(): void;
    ngOnDestroy(): void;
}
