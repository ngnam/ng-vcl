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
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, HostBinding, HostListener, ElementRef, ContentChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishBehavior';
import 'rxjs/add/operator/distinctUntilChanged';
import { ObservableComponent } from '../core/index';
import { ButtonStateContentDirective } from './button-state-content.directive';
import { dispatchTap } from './dispatch-tap';
var InteractionType;
(function (InteractionType) {
    InteractionType[InteractionType["Click"] = 0] = "Click";
    InteractionType[InteractionType["Tap"] = 1] = "Tap";
})(InteractionType || (InteractionType = {}));
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.latestInteractionTime = 0;
        _this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        _this.selected = false;
        _this.disabled = false;
        _this.disableA11yClick = false;
        _this.busy = false;
        _this.flexLabel = false;
        _this.pressEvent = new EventEmitter();
        _this.stateChange = Observable.merge(_this.observeChange('disabled'), _this.observeChange('busy'))
            .map(function () { return _this.state; })
            .distinctUntilChanged()
            .publishBehavior(_this.state)
            .refCount();
        _this.stateSub = _this.stateChange.subscribe(function (state) {
            if (_this.buttonContent) {
                _this.buttonContent.forEach(function (bc) { return bc.updateState(state); });
            }
        });
        return _this;
    }
    Object.defineProperty(ButtonComponent.prototype, "isDisabled", {
        get: function () {
            return this.disabled || this.busy ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "press", {
        get: function () {
            return this.pressEvent.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "state", {
        get: function () {
            return this.busy ? 'busy' : (this.disabled ? 'disabled' : 'enabled');
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.onKeypress = function (ev) {
        // Trigger a11yClick
        if (!this.disableA11yClick &&
            this.elementRef.nativeElement &&
            (ev.code === 'Space' ||
                ev.code === 'NumpadEnter' ||
                ev.code === 'Enter')) {
            ev.preventDefault();
            dispatchTap(this.elementRef.nativeElement);
        }
    };
    ButtonComponent.prototype.onMouseEnter = function (e) { this.hovered = true; };
    ButtonComponent.prototype.onMouseLeave = function (e) { this.hovered = false; };
    ButtonComponent.prototype.onTap = function (e) {
        this.handleGhostClick(InteractionType.Tap, e);
    };
    ButtonComponent.prototype.onClick = function (e) {
        this.handleGhostClick(InteractionType.Click, e);
    };
    ButtonComponent.prototype.handleGhostClick = function (type, e) {
        var ANTI_GHOST_DELAY = 2000;
        var now = Date.now();
        if (type !== this.latestInteractionType) {
            if ((now - this.latestInteractionTime) > ANTI_GHOST_DELAY) {
                this.latestInteractionType = type;
                this.pressEvent.emit(e);
            }
        }
        else {
            this.latestInteractionType = type;
            this.pressEvent.emit(e);
        }
        this.latestInteractionTime = now;
    };
    ButtonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.buttonContent.forEach(function (bc) { return bc.updateState(_this.state); });
    };
    ButtonComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    __decorate([
        HostBinding('class.vclHovered'),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "hovered", void 0);
    __decorate([
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "isDisabled", null);
    __decorate([
        Input(),
        HostBinding('class.vclSelected'),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "selected", void 0);
    __decorate([
        HostBinding('attr.aria-label'),
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "disableA11yClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "busy", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "flexLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "prepIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "appIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "appIconSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "prepIconSrc", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Observable),
        __metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "press", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "stateChange", void 0);
    __decorate([
        ContentChildren(ButtonStateContentDirective),
        __metadata("design:type", QueryList)
    ], ButtonComponent.prototype, "buttonContent", void 0);
    __decorate([
        HostListener('keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onKeypress", null);
    __decorate([
        HostListener('mouseenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onMouseLeave", null);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onTap", null);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onClick", null);
    ButtonComponent = __decorate([
        Component({
            selector: 'button[vcl-button]',
            host: {
                '[class.vclButton]': 'true',
            },
            template: "<div vcl-icogram [label]=\"label\" [flexLabel]=\"flexLabel\" [prepIcon]=\"prepIcon\" [appIcon]=\"appIcon\" [appIconSrc]=\"appIconSrc\" [prepIconSrc]=\"prepIconSrc\"> <ng-content></ng-content> </div> ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ButtonComponent);
    return ButtonComponent;
}(ObservableComponent));
export { ButtonComponent };
