var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AlertType, ALERT_DEFAULTS } from './types';
import { AlertLayer } from './alert.component';
var AlertService = (function () {
    function AlertService(alertLayerRef) {
        this.alertLayerRef = alertLayerRef;
        this.noop = function () { };
    }
    AlertService.prototype.alert = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text }, opts);
    };
    AlertService.prototype.info = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Info }, opts);
    };
    AlertService.prototype.success = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Success }, opts);
    };
    AlertService.prototype.warning = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Warning }, opts);
    };
    AlertService.prototype.error = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Error }, opts);
    };
    AlertService.prototype.question = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Question, showCancelButton: true }, opts);
    };
    AlertService.prototype.open = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var alert = Object.assign.apply(Object, [{}, ALERT_DEFAULTS].concat(opts));
        return this.alertLayerRef.open({ alert: alert });
    };
    AlertService.prototype.close = function () {
        this.alertLayerRef.close();
    };
    return AlertService;
}());
AlertService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AlertLayer])
], AlertService);
export { AlertService };
