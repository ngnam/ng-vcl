var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return PasswordInputComponent; }),
    multi: true
};
var PasswordInputComponent = /** @class */ (function () {
    function PasswordInputComponent(cdRef) {
        this.cdRef = cdRef;
        this.visibleIcon = 'fa:eye-slash';
        this.invisibleIcon = 'fa:eye';
        this.visible = false;
        this.disabled = false;
        this.selectOnFocus = false;
        this.tabindex = 0;
        this.placeholder = '';
        this.value = '';
        /**
         * Things needed for ControlValueAccessor-Interface.
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(PasswordInputComponent.prototype, "buttonIcon", {
        get: function () {
            return this.visible ? this.visibleIcon : this.invisibleIcon;
        },
        enumerable: true,
        configurable: true
    });
    PasswordInputComponent.prototype.toggle = function () {
        this.visible = !this.visible;
        this.cdRef.markForCheck();
    };
    PasswordInputComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    PasswordInputComponent.prototype.onModelChange = function (value) {
        this.value = String(value);
        this.onChange(this.value);
    };
    PasswordInputComponent.prototype.writeValue = function (value) {
        this.value = (value === null || value === undefined) ? '' : String(value);
        this.cdRef.markForCheck();
    };
    PasswordInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PasswordInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PasswordInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "inputId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "visibleIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "invisibleIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "visible", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "selectOnFocus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "placeholder", void 0);
    PasswordInputComponent = __decorate([
        Component({
            template: "<input  vcl-input [attr.id]=\"inputId\" [attr.type]=\"visible ? 'text' : 'password'\" [disabled]=\"disabled\" [tabindex]=\"tabindex\" [selectOnFocus]=\"selectOnFocus\" [placeholder]=\"placeholder\" [ngModel]=\"value\" (ngModelChange)=\"onModelChange($event)\" (blur)=\"onBlur()\"> <button vcl-button [prepIcon]=\"buttonIcon\"  [disabled]=\"disabled\" class=\"vclSquare\"  (click)=\"toggle()\"> </button> ",
            selector: 'vcl-password-input',
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[class.vclInputGroup]': 'true',
                '[attr.tabindex]': '-1'
            }
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], PasswordInputComponent);
    return PasswordInputComponent;
}());
export { PasswordInputComponent };
