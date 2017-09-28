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
import { Injectable } from '@angular/core';
import { NotificationType, NotificationPosition, NOTIFICATION_DEFAULTS, POSITION_MAP } from './types';
import { Notification } from './notification';
import { LayerService, LayerRef } from "../layer/index";
import { NotificationComponent } from "./notification.component";
var NotificationLayerRef = /** @class */ (function (_super) {
    __extends(NotificationLayerRef, _super);
    function NotificationLayerRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerRef;
}(LayerRef));
export { NotificationLayerRef };
var NotificationService = /** @class */ (function () {
    function NotificationService(ls) {
        this.ls = ls;
        this.layers = new Map();
    }
    NotificationService.prototype.show = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text }, opts);
    };
    NotificationService.prototype.info = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: NotificationType.Info }, opts);
    };
    NotificationService.prototype.success = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: NotificationType.Success }, opts);
    };
    NotificationService.prototype.warning = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: NotificationType.Warning }, opts);
    };
    NotificationService.prototype.error = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: NotificationType.Error }, opts);
    };
    NotificationService.prototype.queue = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var notificationOpts = Object.assign.apply(Object, [{}, NOTIFICATION_DEFAULTS].concat(opts));
        var notification = new Notification(notificationOpts);
        var pos = notificationOpts.position || NotificationPosition.TopRight;
        var reverse = POSITION_MAP[pos].reverse;
        if (!this.layers.has(pos)) {
            var layerRef = this.ls.create(NotificationComponent, {
                transparent: true,
                customClass: POSITION_MAP[pos].class
            });
            layerRef.notifications = [];
            this.layers.set(pos, layerRef);
        }
        var layer = this.layers.get(pos);
        if (layer) {
            notification.subscribe(function () {
                layer.notifications = layer.notifications.filter(function (g) { return g !== notification; });
                if (layer.notifications.length === 0) {
                    layer.close();
                }
                else {
                    layer.open({ notifications: layer.notifications });
                }
            });
            layer.notifications = reverse ? [notification].concat(layer.notifications) : layer.notifications.concat([notification]);
            layer.open({ notifications: layer.notifications });
        }
    };
    NotificationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LayerService])
    ], NotificationService);
    return NotificationService;
}());
export { NotificationService };
