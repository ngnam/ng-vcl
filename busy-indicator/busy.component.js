var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
var BusyComponent = /** @class */ (function () {
    function BusyComponent() {
        this.busy = false;
        this.busyIndicatorType = 'circular';
        this.busyIconHeight = '3em';
        this.busyIconWidth = '3em';
    }
    __decorate([
        Input('vclBusy'),
        HostBinding('class.vclLoadingLayerContainer'),
        __metadata("design:type", Object)
    ], BusyComponent.prototype, "busy", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BusyComponent.prototype, "busyIndicatorType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyComponent.prototype, "busyLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyComponent.prototype, "busyIconHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyComponent.prototype, "busyIconWidth", void 0);
    BusyComponent = __decorate([
        Component({
            selector: '[vclBusy]',
            template: "<ng-content></ng-content> <div *ngIf=\"busy\" tabindex=\"-1\" class=\"vclLoadingLayer\"> <div class=\"vclLoadingLayerContent\"> <vcl-busy-indicator [type]=\"busyIndicatorType\" [label]=\"busyLabel\" [iconHeight]=\"busyIconHeight\" [iconWidth]=\"busyIconWidth\"> <span *ngIf=\"busyLabel\">{{busyLabel}}</span> </vcl-busy-indicator> </div> </div> ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], BusyComponent);
    return BusyComponent;
}());
export { BusyComponent };
