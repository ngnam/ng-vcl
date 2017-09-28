var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ContentChildren, Output, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import { RadioButtonComponent } from './radio-button.component';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
export var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(SelectionMode || (SelectionMode = {}));
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioGroupComponent; }),
    multi: true
};
var RadioGroupComponent = /** @class */ (function () {
    function RadioGroupComponent(cdRef) {
        this.cdRef = cdRef;
        this.change = new EventEmitter();
        /**
        * things needed for ControlValueAccessor-Interface
        */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    RadioGroupComponent.prototype.syncValue = function () {
        var value = undefined;
        if (this.radioButtons) {
            this.radioButtons.toArray().every(function (rbtn, idx) {
                if (rbtn.checked) {
                    value = rbtn.value === undefined ? idx : rbtn.value;
                    return false;
                }
                return !rbtn.checked;
            });
            this.value = value;
        }
    };
    RadioGroupComponent.prototype.syncRadioButtons = function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (rbtn, idx) {
                var value = rbtn.value === undefined ? idx : rbtn.value;
                rbtn.setChecked(_this.value === value);
            });
            this.cdRef.markForCheck();
        }
    };
    RadioGroupComponent.prototype.triggerChange = function () {
        this.change.emit(this.value);
        this.onChange(this.value);
    };
    RadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Subscribes to radio button change event
        var listenChange = function () {
            _this.dispose();
            if (_this.radioButtons) {
                var checked$ = Observable.merge.apply(Observable, (_this.radioButtons.map(function (rbtn, idx) { return rbtn.checkedChange.map(function () { return ({ rbtn: rbtn, idx: idx }); }); })));
                _this.blurSub = _this.radioButtons.last.blur.subscribe(function () {
                    _this.onTouched();
                });
                _this.checkedSub = checked$.subscribe(function (source) {
                    if (_this.radioButtons) {
                        _this.radioButtons && _this.radioButtons.forEach(function (crbtn) {
                            crbtn.setChecked(crbtn === source.rbtn);
                        });
                        _this.syncValue();
                        _this.triggerChange();
                    }
                });
            }
        };
        this.radioButtons && this.radioButtons.changes.startWith(null).subscribe(function () {
            listenChange();
        });
    };
    RadioGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    RadioGroupComponent.prototype.dispose = function () {
        this.checkedSub && this.checkedSub.unsubscribe();
        this.blurSub && this.blurSub.unsubscribe();
    };
    RadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.syncRadioButtons();
    };
    RadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
        this.radioButtons && this.radioButtons.forEach(function (rb) { return rb.setDisabledState(isDisabled); });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], RadioGroupComponent.prototype, "change", void 0);
    __decorate([
        ContentChildren(RadioButtonComponent),
        __metadata("design:type", Object)
    ], RadioGroupComponent.prototype, "radioButtons", void 0);
    RadioGroupComponent = __decorate([
        Component({
            selector: 'vcl-radio-group',
            template: "<ng-content></ng-content>",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], RadioGroupComponent);
    return RadioGroupComponent;
}());
export { RadioGroupComponent };
