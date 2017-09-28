var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, TemplateRef, ViewChild, Input } from "@angular/core";
var MetalistItem = /** @class */ (function () {
    function MetalistItem() {
        this.disabled = false;
        this.marked = false;
        this.selected = false;
    }
    __decorate([
        ViewChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], MetalistItem.prototype, "_content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MetalistItem.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MetalistItem.prototype, "metadata", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MetalistItem.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MetalistItem.prototype, "marked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MetalistItem.prototype, "selected", void 0);
    MetalistItem = __decorate([
        Component({
            selector: 'vcl-metalist-item',
            template: '<ng-template><ng-content></ng-content></ng-template>'
        })
    ], MetalistItem);
    return MetalistItem;
}());
export { MetalistItem };
