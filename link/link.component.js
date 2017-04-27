var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Observable } from 'rxjs/Observable';
import { Component, Input, HostBinding, Optional } from '@angular/core';
import { L10nService } from '../l10n/index';
import { ObservableComponent } from '../core/index';
var LinkComponent = (function (_super) {
    __extends(LinkComponent, _super);
    function LinkComponent(l10n) {
        var _this = _super.call(this) || this;
        _this.l10n = l10n;
        _this.locLabel$ = _this.observeChangeValue('label').switchMap(function (label) { return _this.l10n ? _this.l10n.localize(label) : Observable.of(label); });
        _this.locTitle$ = _this.observeChangeValue('title').switchMap(function (title) { return _this.l10n ? _this.l10n.localize(title) : Observable.of(title); });
        _this.locTitleSub = _this.locTitle$.subscribe(function (title) { return _this.locTitle = title; });
        return _this;
    }
    Object.defineProperty(LinkComponent.prototype, "styleCursor", {
        get: function () {
            return this.disabled ? 'not-allowed' : 'pointer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkComponent.prototype, "attrHref", {
        get: function () {
            var href = this.scheme && this.href ? this.scheme + ":" + this.href : this.href;
            return this.disabled ? null : href || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkComponent.prototype, "useIcogram", {
        get: function () {
            return (this.appIcon || this.prepIcon);
        },
        enumerable: true,
        configurable: true
    });
    LinkComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.locTitleSub && this.locTitleSub.unsubscribe();
    };
    return LinkComponent;
}(ObservableComponent));
__decorate([
    Input(),
    __metadata("design:type", String)
], LinkComponent.prototype, "href", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LinkComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LinkComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LinkComponent.prototype, "prepIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LinkComponent.prototype, "appIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LinkComponent.prototype, "scheme", void 0);
__decorate([
    HostBinding('class.vclDisabled'),
    Input(),
    __metadata("design:type", Boolean)
], LinkComponent.prototype, "disabled", void 0);
__decorate([
    HostBinding('attr.title'),
    HostBinding('attr.aria-label'),
    __metadata("design:type", String)
], LinkComponent.prototype, "locTitle", void 0);
__decorate([
    HostBinding('style.cursor'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], LinkComponent.prototype, "styleCursor", null);
__decorate([
    HostBinding('attr.href'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], LinkComponent.prototype, "attrHref", null);
__decorate([
    HostBinding('class.vclContentLink'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], LinkComponent.prototype, "useIcogram", null);
LinkComponent = __decorate([
    Component({
        selector: '[vcl-link]',
        template: "<vcl-icogram *ngIf=\"useIcogram\" [label]=\"(locLabel$ | async) || href\" [prepIcon]=\"prepIcon\" [appIcon]=\"appIcon\"> <ng-content></ng-content> </vcl-icogram> <ng-container *ngIf=\"!useIcogram\"> {{(locLabel$ | async) || href}} <ng-content></ng-content> </ng-container> "
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [L10nService])
], LinkComponent);
export { LinkComponent };
