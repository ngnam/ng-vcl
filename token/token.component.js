var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, trigger, HostListener } from '@angular/core';
var TokenComponent = (function () {
    function TokenComponent() {
        this.selected = false;
        this.removable = false;
        this.remove = new EventEmitter();
        this.select = new EventEmitter();
    }
    TokenComponent.prototype.onTap = function (e) {
        this.select.emit(e);
    };
    TokenComponent.prototype.onRemoveClick = function (event) {
        event.stopPropagation();
        this.remove.emit(event);
    };
    return TokenComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], TokenComponent.prototype, "label", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], TokenComponent.prototype, "onTap", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TokenComponent.prototype, "selected", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TokenComponent.prototype, "removable", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TokenComponent.prototype, "remove", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TokenComponent.prototype, "select", void 0);
TokenComponent = __decorate([
    Component({
        selector: 'vcl-token',
        template: "<span class=\"vclTokenLabel\">{{label}}</span> <button vcl-button *ngIf=\"removable\"  class=\"vclTransparent\" type=\"button\"  title=\"Remove\" appIcon=\"fa:remove\" (click)=\"onRemoveClick($event)\"> </button> ",
        animations: [trigger('checkState', [])],
        host: {
            '[class.vclToken]': 'true',
            '[class.vclSelected]': 'selected',
            '[@checkState]': 'selected'
        }
    })
], TokenComponent);
export { TokenComponent };
