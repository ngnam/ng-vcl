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
import { NotificationType, NotificationPosition, NOTIFICATION_DEFAULTS } from './types';
import { Notification } from './notification';
import { NotificationLayerTopRight, NotificationLayerBottomRight, NotificationLayerBottom, NotificationLayerBottomLeft, NotificationLayerTopLeft, NotificationLayerTop } from './notification.layer';
var NotificationService = (function () {
    function NotificationService(notificationLayerTopRightRef, notificationLayerBottomRightRef, notificationLayerBottomRef, notificationLayerBottomLeftRef, notificationLayerTopLeftRef, notificationLayerTopRef) {
        this.notificationLayerTopRightRef = notificationLayerTopRightRef;
        this.notificationLayerBottomRightRef = notificationLayerBottomRightRef;
        this.notificationLayerBottomRef = notificationLayerBottomRef;
        this.notificationLayerBottomLeftRef = notificationLayerBottomLeftRef;
        this.notificationLayerTopLeftRef = notificationLayerTopLeftRef;
        this.notificationLayerTopRef = notificationLayerTopRef;
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
        if (notificationOpts.position === NotificationPosition.TopRight) {
            this.notificationLayerTopRightRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.BottomRight) {
            this.notificationLayerBottomRightRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.Bottom) {
            this.notificationLayerBottomRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.BottomLeft) {
            this.notificationLayerBottomLeftRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.TopLeft) {
            this.notificationLayerTopLeftRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.Top) {
            this.notificationLayerTopRef.add(notification);
        }
        else {
            this.notificationLayerTopRightRef.add(notification);
        }
        return notification;
    };
    NotificationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NotificationLayerTopRight,
            NotificationLayerBottomRight,
            NotificationLayerBottom,
            NotificationLayerBottomLeft,
            NotificationLayerTopLeft,
            NotificationLayerTop])
    ], NotificationService);
    return NotificationService;
}());
export { NotificationService };
