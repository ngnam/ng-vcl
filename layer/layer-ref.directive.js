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
import { Input, TemplateRef, Directive, Injector } from '@angular/core';
import { LayerService } from './layer.service';
import { LayerRef } from './layer-ref';
var LayerRefDirective = (function (_super) {
    __extends(LayerRefDirective, _super);
    function LayerRefDirective(templateRef, layerService, injector) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        _this.layerService = layerService;
        _this.injector = injector;
        _this.base = 'default';
        return _this;
    }
    LayerRefDirective.prototype.ngOnInit = function () {
        this.layerService.register(this, this.injector);
    };
    LayerRefDirective.prototype.ngOnDestroy = function () {
        this.layerService.unregister(this);
    };
    return LayerRefDirective;
}(LayerRef));
__decorate([
    Input(),
    __metadata("design:type", String)
], LayerRefDirective.prototype, "base", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LayerRefDirective.prototype, "modal", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LayerRefDirective.prototype, "transparent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LayerRefDirective.prototype, "fill", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LayerRefDirective.prototype, "stickToBottom", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LayerRefDirective.prototype, "gutterPadding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LayerRefDirective.prototype, "customClass", void 0);
LayerRefDirective = __decorate([
    Directive({
        selector: '[vcl-layer]',
        exportAs: 'layer',
    }),
    __metadata("design:paramtypes", [TemplateRef, LayerService, Injector])
], LayerRefDirective);
export { LayerRefDirective };
