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
import { ViewContainerRef, Directive, TemplateRef, Input } from '@angular/core';
import { WormholeHost } from "../wormhole/index";
var ButtonStateContentDirective = /** @class */ (function (_super) {
    __extends(ButtonStateContentDirective, _super);
    function ButtonStateContentDirective(viewContainerRef, tempRef) {
        var _this = _super.call(this, viewContainerRef) || this;
        _this.tempRef = tempRef;
        _this.states = ['enabled'];
        _this.wormhole = _this.createWormhole(_this.tempRef);
        return _this;
    }
    Object.defineProperty(ButtonStateContentDirective.prototype, "state", {
        set: function (value) {
            this.states = (typeof value === 'string' ? [value] : value) || [];
        },
        enumerable: true,
        configurable: true
    });
    ButtonStateContentDirective.prototype.updateState = function (state) {
        if (this.states.includes(state)) {
            this.wormhole.connect();
        }
        else {
            this.wormhole.disconnect();
        }
    };
    __decorate([
        Input('vclButtonStateContent'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ButtonStateContentDirective.prototype, "state", null);
    ButtonStateContentDirective = __decorate([
        Directive({
            selector: '[vclButtonStateContent]'
        }),
        __metadata("design:paramtypes", [ViewContainerRef, TemplateRef])
    ], ButtonStateContentDirective);
    return ButtonStateContentDirective;
}(WormholeHost));
export { ButtonStateContentDirective };
