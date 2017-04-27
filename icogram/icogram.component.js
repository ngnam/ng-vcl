var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
var IcogramComponent = (function () {
    function IcogramComponent(elRef) {
        this.elRef = elRef;
    }
    return IcogramComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], IcogramComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], IcogramComponent.prototype, "flexLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IcogramComponent.prototype, "prepIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IcogramComponent.prototype, "appIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IcogramComponent.prototype, "prepIconSrc", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IcogramComponent.prototype, "appIconSrc", void 0);
IcogramComponent = __decorate([
    Component({
        selector: 'vcl-icogram, [vcl-icogram]',
        host: {
            '[class.vclIcogram]': 'true',
            '[attr.role]': 'img'
        },
        template: "<div vcl-icon *ngIf=\"prepIcon || prepIconSrc\" [icon]=\"prepIcon\" [src]=\"prepIconSrc\"></div> <ng-content></ng-content> <span *ngIf=\"!!label\" [class.vclLayoutFlex]=\"!!flexLabel\" class=\"vclText\"> {{label | loc}} </span> <div vcl-icon *ngIf=\"appIcon || appIconSrc\" [icon]=\"appIcon\" [src]=\"appIconSrc\"></div> ",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], IcogramComponent);
export { IcogramComponent };
