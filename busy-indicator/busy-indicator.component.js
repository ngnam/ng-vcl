var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var BusyIndicatorComponent = (function () {
    function BusyIndicatorComponent() {
        this.type = 'circular';
    }
    Object.defineProperty(BusyIndicatorComponent.prototype, "indicatorClass", {
        get: function () {
            return this.type === 'straight' ? 'vclBusy-busyIndStraight' : 'vclBusy-busyIndCircular';
        },
        enumerable: true,
        configurable: true
    });
    return BusyIndicatorComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], BusyIndicatorComponent.prototype, "type", void 0);
BusyIndicatorComponent = __decorate([
    Component({
        selector: 'vcl-busy-indicator',
        template: "<div class=\"vclLayoutVertical vclLayoutCenterJustified\"> <div class=\"vclBusyIndicator\" role=\"status\"> <i [ngClass]=\"indicatorClass\"></i> <ng-content></ng-content> </div> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BusyIndicatorComponent);
export { BusyIndicatorComponent };
