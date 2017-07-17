var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
var InputControlGroup = (function () {
    function InputControlGroup(elRef) {
        this.elRef = elRef;
        this.elRef = elRef;
    }
    InputControlGroup.prototype.ucfirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    __decorate([
        Input('type'),
        __metadata("design:type", Object)
    ], InputControlGroup.prototype, "type", void 0);
    __decorate([
        Input('label'),
        __metadata("design:type", String)
    ], InputControlGroup.prototype, "label", void 0);
    InputControlGroup = __decorate([
        Component({
            selector: 'vcl-input-control-group',
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclInputControlGroup]': 'true',
            },
            template: "<ng-content></ng-content> <div *ngIf=\"type!==null && label!==null && label!==''\" class=\"vclFormControlHint\" [class.vclError]=\"type=='error'\" [class.vclWarning]=\"type=='warning'\" [class.vclSuccess]=\"type=='success'\"> {{label}} </div> "
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], InputControlGroup);
    return InputControlGroup;
}());
export { InputControlGroup };
