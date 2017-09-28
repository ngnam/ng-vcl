var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ButtonComponent } from '../button/index';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
export var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(SelectionMode || (SelectionMode = {}));
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ButtonGroupComponent; }),
    multi: true
};
var ButtonGroupComponent = /** @class */ (function () {
    function ButtonGroupComponent() {
        // If `Single`, a single button from the group can be selected
        // If `Multiple` multiple buttons can be selected
        this.selectionMode = SelectionMode.Single;
        this.change = new EventEmitter();
        /**
       * things needed for ControlValueAccessor-Interface
       */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(ButtonGroupComponent.prototype, "mode", {
        // String alias for selectionMode
        set: function (value) {
            if (value === 'multiple') {
                this.selectionMode = SelectionMode.Multiple;
            }
            else {
                this.selectionMode = SelectionMode.Single;
            }
        },
        enumerable: true,
        configurable: true
    });
    ButtonGroupComponent.prototype.syncButtons = function () {
        var selectedIndex = this.selectedIndex;
        if (this.selectionMode === SelectionMode.Multiple && Array.isArray(selectedIndex)) {
            (this.buttons || []).forEach(function (btn, idx) {
                btn.selected = selectedIndex.includes(idx);
            });
        }
        else if (this.selectionMode === SelectionMode.Single && typeof selectedIndex === 'number') {
            (this.buttons || []).forEach(function (btn, idx) {
                btn.selected = selectedIndex === idx;
            });
        }
    };
    ButtonGroupComponent.prototype.syncSelectedIndex = function () {
        var items = this.buttons || [];
        var selectedIndex = items.map(function (btn, idx) { return ({ selected: btn.selected, idx: idx }); }).filter(function (v) { return v.selected; }).map(function (v) { return v.idx; });
        this.selectedIndex = this.selectionMode === SelectionMode.Multiple ? selectedIndex : selectedIndex[0];
    };
    ButtonGroupComponent.prototype.triggerChange = function () {
        this.change.emit(this.selectedIndex);
        this.onChange(this.selectedIndex);
    };
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Subscribes to buttons press event
        var listenButtonPress = function () {
            _this.dispose();
            var press$ = Observable.merge.apply(Observable, (_this.buttons.map(function (btn) { return btn.press.map(function () { return btn; }); })));
            _this.pressSubscription = press$.subscribe(function (btn) {
                _this.buttons.forEach(function (cbtn, idx) {
                    if (_this.selectionMode === SelectionMode.Single) {
                        // Mark one button on single mode
                        cbtn.selected = cbtn === btn;
                    }
                    else if (_this.selectionMode === SelectionMode.Multiple && btn === cbtn) {
                        // Toggle pressed button on multiple mode
                        cbtn.selected = !cbtn.selected;
                    }
                });
                _this.syncSelectedIndex();
                _this.triggerChange();
                _this.onTouched();
            });
        };
        listenButtonPress();
        this.buttons.changes.subscribe(function () {
            listenButtonPress();
            setTimeout(function () { return _this.syncButtons(); });
        });
    };
    ButtonGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    ButtonGroupComponent.prototype.dispose = function () {
        this.pressSubscription && this.pressSubscription.unsubscribe();
    };
    ButtonGroupComponent.prototype.writeValue = function (value) {
        this.selectedIndex = value;
        this.syncButtons();
    };
    ButtonGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        ContentChildren(ButtonComponent),
        __metadata("design:type", QueryList)
    ], ButtonGroupComponent.prototype, "buttons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ButtonGroupComponent.prototype, "selectionMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonGroupComponent.prototype, "mode", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ButtonGroupComponent.prototype, "change", void 0);
    ButtonGroupComponent = __decorate([
        Component({
            selector: 'vcl-button-group',
            host: {
                '[class.vclButtonGroup]': 'true',
            },
            template: "<ng-content></ng-content>",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
    ], ButtonGroupComponent);
    return ButtonGroupComponent;
}());
export { ButtonGroupComponent };
