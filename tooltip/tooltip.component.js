var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, ElementRef, trigger, state, transition, animate, style, Inject, Renderer } from '@angular/core';
import { TooltipService } from './tooltip.service';
import { DOCUMENT } from '@angular/platform-browser';
var TooltipComponent = (function () {
    function TooltipComponent(element, document, renderer, tooltipService) {
        this.element = element;
        this.document = document;
        this.renderer = renderer;
        this.tooltipService = tooltipService;
        this.placement = "top";
        this.animationState = 'none';
        // Initial position should out of screen
        this.tooltipPlacement = { Top: -1000, Left: -1000 };
        this.tooltipPosition = 'vclTooltip vclArrowPointerTop';
        // true if initialized by directive
        this.showOnInit = false;
    }
    TooltipComponent.prototype.ngOnChanges = function (changes) {
        if (changes.placement || changes.content) {
            this.ShowTooltip()();
        }
    };
    TooltipComponent.prototype.ngAfterViewInit = function () {
        var context = this;
        // behavior being handled by directive
        if (context.showOnInit) {
            setTimeout(function () {
                context.ShowTooltip()();
            });
        }
        else {
            context.animationState = 'none';
            context.renderer.listen(context.hostElement, 'mouseenter', context.ShowTooltip(context));
            context.renderer.listen(context.hostElement, 'focusin', context.ShowTooltip(context));
            context.renderer.listen(context.hostElement, 'focusout', function () { context.animationState = 'hidden'; });
            context.renderer.listen(context.hostElement, 'mouseleave', function () { context.animationState = 'hidden'; });
        }
    };
    TooltipComponent.prototype.ShowTooltip = function (context) {
        if (context === void 0) { context = this; }
        return function () {
            if (context.hostElement) {
                var tooltipOffset = context.tooltipService.positionElements(context.hostElement, context.element.nativeElement.children[0].children[0], context.placement);
                context.tooltipPlacement = {
                    Top: tooltipOffset.Top,
                    Left: tooltipOffset.Left
                };
                context.animationState = 'shown';
                context.tooltipPosition = context.TooltipPosition();
                context.document.querySelector('body').appendChild(context.element.nativeElement);
                return true;
            }
            else {
                console.error('Host element not specified');
                return false;
            }
        };
    };
    TooltipComponent.prototype.TooltipPosition = function () {
        switch (this.placement) {
            case 'right':
                {
                    return 'vclTooltip vclArrowPointerLeft';
                }
            case 'left':
                {
                    return 'vclTooltip vclArrowPointerRight';
                }
            case 'bottom':
                {
                    return 'vclTooltip vclArrowPointerTop';
                }
            default:
                {
                    return 'vclTooltip vclArrowPointerBottom';
                }
        }
    };
    TooltipComponent.prototype.ngOnDestroy = function () {
        if (!this.showOnInit) {
            this.element.nativeElement.parentNode.removeChild(this.element.nativeElement);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "placement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", HTMLElement)
    ], TooltipComponent.prototype, "hostElement", void 0);
    TooltipComponent = __decorate([
        Component({
            selector: 'vcl-tooltip',
            template: "<div [@enterAnimation]=\"animationState\" [style.left]=\"tooltipPlacement.Left + 'px'\" [style.top]=\"tooltipPlacement.Top + 'px'\" style=\"white-space:nowrap;\" role=\"tooltip\" [class]=\"tooltipPosition\"> <div class=\"vclTooltipContent\"> {{content}} <ng-content></ng-content> </div> <div class=\"vclArrowPointer\"></div> </div> ",
            host: {
                '[class.vclTooltip]': 'true',
            },
            styles: [":host{ top: 0; left: 0 }"],
            animations: [
                trigger('enterAnimation', [
                    state('shown', style({ opacity: 1, 'z-index': 'initial' })),
                    state('hidden', style({ opacity: 0, 'z-index': '-1' })),
                    state('none', style({ opacity: 0 })),
                    transition('hidden => shown', animate('0.2s')),
                ])
            ]
        }),
        __param(1, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [ElementRef, Object, Renderer,
            TooltipService])
    ], TooltipComponent);
    return TooltipComponent;
}());
export { TooltipComponent };
