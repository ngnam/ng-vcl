var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef } from '@angular/core';
var TooltipComponent = (function () {
    // TODO: calculate proper tooltip position
    // TODO: calculate proper tooltip position
    // @Input() offsetTop: number = 30;
    // widthCorrection: number = 50;
    function TooltipComponent(element) {
        this.element = element;
    }
    Object.defineProperty(TooltipComponent.prototype, "tooltipPosiiton", {
        get: function () {
            switch (this.position) {
                case 'right':
                    return 'vclTooltip vclArrowPointerRight';
                case 'left':
                    return 'vclTooltip vclArrowPointerLeft';
                case 'bottom':
                    return 'vclTooltip vclArrowPointerBottom';
                default: return 'vclTooltip vclArrowPointerTop';
            }
        },
        enumerable: true,
        configurable: true
    });
    return TooltipComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipComponent.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipComponent.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "ref", void 0);
TooltipComponent = __decorate([
    Component({
        selector: 'vcl-tooltip-container',
        template: "<div role=\"tooltip\" [class]=\"tooltipPosiiton\"> <div class=\"vclTooltipContent\">{{content}}</div> <div class=\"vclArrowPointer\"></div> </div>",
        host: {
            '[class.vclTooltip]': 'true',
        }
    }),
    __metadata("design:paramtypes", [ElementRef])
], TooltipComponent);
export { TooltipComponent };
