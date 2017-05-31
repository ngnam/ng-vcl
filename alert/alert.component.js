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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { forwardRef, Inject, Component, ChangeDetectionStrategy, ChangeDetectorRef, HostListener, Input } from '@angular/core';
import { LayerRef, LayerService, Layer } from './../layer/index';
import { AlertError, AlertType, AlertAlignment, TYPE_CLASS_MAP, TEXT_ALIGNMENT_CLASS_MAP, BUTTON_ALIGNMENT_CLASS_MAP } from './types';
var AlertComponent = (function () {
    function AlertComponent(alertLayer, layerService, cdRef) {
        this.layerService = layerService;
        this.cdRef = cdRef;
        this.alert = {};
        this.alertLayer = alertLayer;
    }
    AlertComponent.prototype.onKeyUp = function (ev) {
        // Check if the top layer is the alert layer
        if (this.layerService.getTopLayer() === this.alertLayer) {
            if (ev.key === 'Escape' && this.alert.escClose) {
                this.alertLayer.dismiss('esc');
            }
            else if (ev.key === 'Enter') {
                this.confirm();
            }
        }
    };
    Object.defineProperty(AlertComponent.prototype, "alertClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || AlertType.None].alertClass + ' ' + this.alert.customClass || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || AlertType.None].iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "titleAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.titleAlignment || AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.iconAlignment || AlertAlignment.Center];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "contentAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.contentAlignment || AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "buttonAlignmentClass", {
        get: function () {
            return BUTTON_ALIGNMENT_CLASS_MAP[this.alert.buttonAlignment || AlertAlignment.Right];
        },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.confirm = function () {
        if (this.alert.loader)
            return;
        var result = {};
        if (this.alert.input) {
            if (this.alert.inputValidator) {
                var validationError = 'Invalid value';
                try {
                    var valid = this.alert.inputValidator(this.value);
                    if (!valid) {
                        this.validationError = 'Invalid value';
                        return;
                    }
                    result.value = this.value;
                }
                catch (ex) {
                    this.validationError = String(ex);
                    return;
                }
            }
        }
        if (this.alert.loaderOnConfirm) {
            this.alert.loader = true;
            this.cdRef.markForCheck();
            this.alertLayer.send(result);
        }
        else {
            this.alertLayer.close(result);
        }
    };
    AlertComponent.prototype.cancel = function (reason) {
        this.alertLayer.dismiss('cancel');
    };
    AlertComponent.prototype.offClick = function () {
    };
    AlertComponent.prototype.close = function (reason) {
        this.alertLayer.dismiss('close');
    };
    AlertComponent.prototype.valueChange = function (value) {
        this.value = value;
    };
    return AlertComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "alert", void 0);
__decorate([
    HostListener('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AlertComponent.prototype, "onKeyUp", null);
AlertComponent = __decorate([
    Component({
        template: "<div class=\"vclNotification\" [ngClass]=\"alertClass\"> <div class=\"vclNotificationHeader vclLayoutHorizontal vclLayoutCenter\" [ngClass]=\"titleAlignmentClass\" *ngIf=\"alert.title\"> <div class=\"vclLayoutFlex\">{{alert.title}}</div> <button *ngIf=\"alert.showCloseButton\" type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"close()\"><i class=\"fa fa-times\"></i></button> </div> <div class=\"vclNotificationContent vclLayoutVertical vclLayoutCenterJustified \"> <div style=\"padding-bottom: 1em\" *ngIf=\"iconClass\" [ngClass]=\"iconAlignmentClass\"> <span class=\"vclIcon vclNotificationIcon\" [ngClass]=\"iconClass\"></span> </div> <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" *ngIf=\"alert.text && !alert.html\">{{alert.text}}</div> <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" [innerHtml]=\"alert.text\" *ngIf=\"alert.text && alert.html\"></div> <div style=\"padding-bottom: 0.5em\" *ngIf=\"alert.input\"><alert-input [alert]=\"alert\" (valueChange)=\"valueChange($event)\"></alert-input></div> <div *ngIf=\"validationError\" class=\"vclNotification vclError\"> <div class=\"vclNotificationContent\"> <vcl-icogram label=\"{{validationError}}\" prepIcon=\"fa:exclamation-circle\"></vcl-icogram> </div> </div> <div class=\"vclLayoutHorizontal vclLooseButtonGroup\" [ngClass]=\"buttonAlignmentClass\"> <button vcl-button *ngIf=\"!!alert.showConfirmButton\" (click)=\"confirm()\" [style.background-color]=\"alert.confirmButtonColor\" [ngClass]=\"alert.confirmButtonClass\" [busy]=\"!!alert.loader\" type=\"button\" > <vcl-icogram *vclButtonStateContent=\"['enabled','disabled']\" [appIcon]=\"alert.confirmButtonAppIcon\" [prepIcon]=\"alert.confirmButtonPrepIcon\" [label]=\"alert.confirmButtonLabel\"> </vcl-icogram> <vcl-icogram *vclButtonStateContent=\"'busy'\" prepIcon=\"fa:refresh fa-spin\" [label]=\"alert.confirmButtonLabel\"> </vcl-icogram> </button> <button vcl-button *ngIf=\"!!alert.showCancelButton\" [style.background-color]=\"!!alert.cancelButtonColor\" [ngClass]=\"alert.cancelButtonClass\" [busy]=\"!alert.showConfirmButton && !!alert.loader\" [disabled]=\"!!alert.showConfirmButton && !!alert.loader\" type=\"button\" (click)=\"cancel()\" > <vcl-icogram *vclButtonStateContent=\"['enabled','disabled']\" [appIcon]=\"alert.cancelButtonAppIcon\" [prepIcon]=\"alert.cancelButtonPrepIcon\" [label]=\"alert.cancelButtonLabel\"> </vcl-icogram> <vcl-icogram *vclButtonStateContent=\"'busy'\" prepIcon=\"fa:refresh fa-spin\" [label]=\"alert.cancelButtonLabel\"> </vcl-icogram> </button> </div> <div *ngIf=\"!alert.showCancelButton && !alert.showConfirmButton && !!alert.loader\"> <div class=\"vclBusyIndicator\" role=\"status\"> <i class=\"vclBusy-busyIndCircular\"></i> </div> </div> </div> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(0, Inject(forwardRef(function () { return AlertLayer; }))),
    __metadata("design:paramtypes", [AlertLayer, LayerService, ChangeDetectorRef])
], AlertComponent);
export { AlertComponent };
var AlertLayer = (function (_super) {
    __extends(AlertLayer, _super);
    function AlertLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modal = true;
        _this.transparent = true;
        return _this;
    }
    AlertLayer.prototype.dismiss = function (reason) {
        this.closeWithError(new AlertError(reason));
    };
    Object.defineProperty(AlertLayer.prototype, "alert", {
        get: function () {
            return (this.attrs && this.attrs['alert']) || {};
        },
        enumerable: true,
        configurable: true
    });
    AlertLayer.prototype.offClick = function () {
        if (this.alert.offClickClose) {
            this.dismiss('offClick');
        }
    };
    return AlertLayer;
}(LayerRef));
AlertLayer = __decorate([
    Layer(AlertComponent)
], AlertLayer);
export { AlertLayer };
