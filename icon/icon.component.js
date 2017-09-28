var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { IconService } from './icon.service';
var IconComponent = /** @class */ (function () {
    function IconComponent(_iconService) {
        this._iconService = _iconService;
    }
    Object.defineProperty(IconComponent.prototype, "mergedIconClass", {
        get: function () {
            var fontIconClass = this.icon ? this._iconService.lookup(this.icon) : '';
            return "vclIcon " + fontIconClass + " " + (this.iconClass || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "isAriaHidden", {
        // Do not hide from aria when a label is provided
        get: function () {
            return !this.label;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "src", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "svguse", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "iconClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "icon", void 0);
    __decorate([
        HostBinding('attr.aria-label'),
        Input(),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "label", void 0);
    __decorate([
        HostBinding('attr.role'),
        Input(),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "ariaRole", void 0);
    __decorate([
        HostBinding('class'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], IconComponent.prototype, "mergedIconClass", null);
    __decorate([
        HostBinding('attr.aria-hidden'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], IconComponent.prototype, "isAriaHidden", null);
    IconComponent = __decorate([
        Component({
            selector: 'vcl-icon, [vcl-icon]',
            template: "<img *ngIf=\"src\" [attr.src]=\"src\"> <svg *ngIf=\"svguse\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"> <use [attr.xmlns:xlink]=\"'http://www.w3.org/1999/xlink'\"></use> </svg> ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclIcon]': 'true',
            },
        }),
        __metadata("design:paramtypes", [IconService])
    ], IconComponent);
    return IconComponent;
}());
export { IconComponent };
