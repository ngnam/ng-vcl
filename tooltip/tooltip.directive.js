var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener, Input, ElementRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
var TooltipDirective = (function () {
    function TooltipDirective(element, resolver, viewContainerRef) {
        this.element = element;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.content = '';
        this.position = 'top';
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        var factory = this.resolver.resolveComponentFactory(TooltipComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.content = this.content;
        this.tooltip.instance.position = this.position;
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        this.tooltip.destroy();
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (this.tooltip)
            this.tooltip.destroy();
    };
    return TooltipDirective;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipDirective.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipDirective.prototype, "position", void 0);
__decorate([
    HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipDirective.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipDirective.prototype, "onMouseLeave", null);
TooltipDirective = __decorate([
    Directive({ selector: '[vcl-tooltip]' }),
    __metadata("design:paramtypes", [ElementRef,
        ComponentFactoryResolver,
        ViewContainerRef])
], TooltipDirective);
export { TooltipDirective };
