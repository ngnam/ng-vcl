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
import { Component, Input, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
var SortIconComponent = (function () {
    function SortIconComponent(document, element) {
        this.document = document;
        this.element = element;
        this.faIcon = 'fa-sort';
    }
    SortIconComponent.prototype.ChangeSortOrder = function (order) {
        switch (order) {
            case 1: {
                this.faIcon = 'fa-sort-up';
                break;
            }
            case -1: {
                this.faIcon = 'fa-sort-down';
                break;
            }
            default: {
                this.faIcon = 'fa-sort';
                break;
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SortIconComponent.prototype, "sort", void 0);
    SortIconComponent = __decorate([
        Component({
            selector: 'sort-icon',
            template: "<div class=\"vclFloatRight vclIcon fa {{faIcon}}\"></div>"
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, ElementRef])
    ], SortIconComponent);
    return SortIconComponent;
}());
export { SortIconComponent };
