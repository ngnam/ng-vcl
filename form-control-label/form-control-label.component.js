var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';
var FormControlLabelComponent = /** @class */ (function () {
    function FormControlLabelComponent() {
        this.disabled = false;
        this.requiredIndicatorCharacter = '•';
        // Whether the label wraps the control
        this.wrapping = false;
        // TODO enable when it is possible to determine if there is ng-content
        // without having to wrap ng-content in another span element
        // get hasContent() {
        //   return this.content.nativeElement.childNodes.length > 0;
        // }
        // Whether an indicator that an input in to the labelled control is required
        this.required = false;
    }
    __decorate([
        ViewChild('content'),
        __metadata("design:type", ElementRef)
    ], FormControlLabelComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        HostBinding('class.vclDisabled'),
        __metadata("design:type", Object)
    ], FormControlLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FormControlLabelComponent.prototype, "requiredIndicatorCharacter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormControlLabelComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormControlLabelComponent.prototype, "subLabel", void 0);
    __decorate([
        HostBinding('class.vclFormControlLabelWrapping'),
        Input(),
        __metadata("design:type", Object)
    ], FormControlLabelComponent.prototype, "wrapping", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], FormControlLabelComponent.prototype, "required", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FormControlLabelComponent.prototype, "requiredIndLabel", void 0);
    FormControlLabelComponent = __decorate([
        Component({
            selector: 'label[vcl-form-control-label]',
            template: "{{label | loc}} <em *ngIf=\"required\" class=\"vclRequiredIndicator\" aria-hidden=\"true\" [attr.aria-label]=\"requiredIndLabel | loc\"> {{requiredIndicatorCharacter}} </em> <span *ngIf=\"subLabel\" class=\"vclFormControlSubLabel\">{{subLabel | loc}}</span> <!--<span #content><ng-content></ng-content></span> --> <ng-content></ng-content> ",
            host: {
                '[class.vclFormControlLabel]': 'true',
            },
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormControlLabelComponent);
    return FormControlLabelComponent;
}());
export { FormControlLabelComponent };
