var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, trigger, state, transition, animate, style } from '@angular/core';
import { tooltipService } from './tooltip.service';
var TooltipComponent = (function () {
    function TooltipComponent(element) {
        this.element = element;
        this.animationState = 'hidden';
        this.placement = "top";
        // Initial position should out of screen
        this.tooltipPlacement = { Top: -1000, Left: -1000 };
    }
    TooltipComponent.prototype.ngAfterViewInit = function () {
        if (this.hostElement) {
            var tooltipOffset_1 = tooltipService.positionElements(this.hostElement, this.element.nativeElement.children[0].children[0], this.placement);
            var context_1 = this;
            // to avoid from ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(function () {
                context_1.tooltipPlacement = {
                    Top: tooltipOffset_1.Top,
                    Left: tooltipOffset_1.Left
                };
                context_1.animationState = 'shown';
            });
        }
        else {
            console.error('Host element not specified');
        }
    };
    Object.defineProperty(TooltipComponent.prototype, "tooltipPosition", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    Component({
        selector: 'vcl-tooltip-container',
        template: "<div [@enterAnimation]=\"animationState\" [style.left]=\"tooltipPlacement.Left + 'px'\" [style.top]=\"tooltipPlacement.Top + 'px'\" style=\"opacity:0; white-space:nowrap;\" role=\"tooltip\" [class]=\"tooltipPosition\"> <div class=\"vclTooltipContent\"> {{content}} </div> <div class=\"vclArrowPointer\"></div> </div> ",
        host: {
            '[class.vclTooltip]': 'true',
        },
        styles: [":host{ top: 0; left: 0}"],
        animations: [
            trigger('enterAnimation', [
                state('shown', style({ opacity: 1 })),
                state('hidden', style({ opacity: 0 })),
                transition('* => *', animate('.2s'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [ElementRef])
], TooltipComponent);
export { TooltipComponent };
