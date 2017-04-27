import { OnDestroy, ElementRef, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
export declare class TooltipDirective implements OnDestroy {
    private element;
    private resolver;
    private viewContainerRef;
    content: string;
    position: string;
    tooltip: ComponentRef<TooltipComponent>;
    constructor(element: ElementRef, resolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    onMouseEnter(): void;
    onMouseLeave(): void;
    ngOnDestroy(): void;
}
