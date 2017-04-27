var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input, Output, HostBinding, HostListener, EventEmitter, ElementRef, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioButtonComponent; }),
    multi: true
};
var RadioButtonComponent = (function () {
    function RadioButtonComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.checkedIcon = 'fa:dot-circle-o';
        this.uncheckedIcon = 'fa:circle-o';
        this.disabled = false;
        this.labelPosition = 'right';
        this.tabindex = 0;
        this.checked = false;
        this.checkedChange = new EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    RadioButtonComponent.prototype.onKeydown = function (e) {
        switch (e.code) {
            case 'Space':
                this.triggerChangeAction(e);
                break;
        }
    };
    RadioButtonComponent.prototype.onTap = function (e) {
        return this.triggerChangeAction(e);
    };
    RadioButtonComponent.prototype.triggerChangeAction = function (e) {
        e.preventDefault();
        if (this.disabled)
            return;
        if (this.checked == true)
            return; // radio-buttons cannot be 'unchecked' by definition
        this.checked = true;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
    };
    RadioButtonComponent.prototype.setChecked = function (value) {
        this.checked = value;
        this.cdRef.markForCheck();
    };
    RadioButtonComponent.prototype.writeValue = function (value) {
        if (value !== this.checked) {
            this.checked = value;
        }
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return RadioButtonComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "checkedIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "uncheckedIcon", void 0);
__decorate([
    HostBinding('attr.aria-disabled'),
    HostBinding('class.vclDisabled'),
    Input(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "disabled", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RadioButtonComponent.prototype, "labelPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RadioButtonComponent.prototype, "label", void 0);
__decorate([
    HostBinding(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "tabindex", void 0);
__decorate([
    HostBinding('attr.checked'),
    Input(),
    __metadata("design:type", Boolean)
], RadioButtonComponent.prototype, "checked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "checkedChange", void 0);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], RadioButtonComponent.prototype, "onKeydown", null);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], RadioButtonComponent.prototype, "onTap", null);
RadioButtonComponent = __decorate([
    Component({
        selector: 'vcl-radio-button',
        template: "<vcl-icon [icon]=\"checked ? checkedIcon : uncheckedIcon\" *ngIf=\"labelPosition=='right'\"></vcl-icon> <label vcl-form-control-label *ngIf=\"label\" [label]=\"label\"></label> <ng-content></ng-content> <vcl-icon [icon]=\"checked ? checkedIcon : uncheckedIcon\" *ngIf=\"labelPosition=='left'\"></vcl-icon> ",
        host: {
            '[attr.role]': '"radio"',
            '[class.vclRadioButton]': 'true',
            '[style.userSelect]': '"none"'
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], RadioButtonComponent);
export { RadioButtonComponent };
