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
import { Layer, LayerRef } from './../layer/index';
import { NotificationComponent } from './notification.component';
var NotificationLayer = (function (_super) {
    __extends(NotificationLayer, _super);
    function NotificationLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transparent = true;
        _this.notifications = [];
        return _this;
    }
    NotificationLayer.prototype.add = function (notification) {
        var _this = this;
        notification.subscribe(function () {
            _this.remove(notification);
        });
        this.notifications = this.reverse ? [notification].concat(this.notifications) : this.notifications.concat([notification]);
        this.open({ notifications: this.notifications });
        return notification;
    };
    NotificationLayer.prototype.remove = function (notification) {
        this.notifications = this.notifications.filter(function (g) { return g !== notification; });
        if (this.notifications.length === 0) {
            this.close();
            // this.open({ notifications: this.notifications });
        }
        else {
            this.open({ notifications: this.notifications });
        }
    };
    NotificationLayer.prototype.offClick = function () {
    };
    return NotificationLayer;
}(LayerRef));
export { NotificationLayer };
var NotificationLayerTopRight = (function (_super) {
    __extends(NotificationLayerTopRight, _super);
    function NotificationLayerTopRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationTopRight';
        _this.reverse = true;
        return _this;
    }
    return NotificationLayerTopRight;
}(NotificationLayer));
NotificationLayerTopRight = __decorate([
    Layer(NotificationComponent)
], NotificationLayerTopRight);
export { NotificationLayerTopRight };
var NotificationLayerTop = (function (_super) {
    __extends(NotificationLayerTop, _super);
    function NotificationLayerTop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reverse = true;
        return _this;
    }
    return NotificationLayerTop;
}(NotificationLayer));
NotificationLayerTop = __decorate([
    Layer(NotificationComponent)
], NotificationLayerTop);
export { NotificationLayerTop };
var NotificationLayerTopLeft = (function (_super) {
    __extends(NotificationLayerTopLeft, _super);
    function NotificationLayerTopLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationTopLeft';
        _this.reverse = true;
        return _this;
    }
    return NotificationLayerTopLeft;
}(NotificationLayer));
NotificationLayerTopLeft = __decorate([
    Layer(NotificationComponent)
], NotificationLayerTopLeft);
export { NotificationLayerTopLeft };
var NotificationLayerBottomRight = (function (_super) {
    __extends(NotificationLayerBottomRight, _super);
    function NotificationLayerBottomRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationBottomRight';
        _this.reverse = false;
        return _this;
    }
    return NotificationLayerBottomRight;
}(NotificationLayer));
NotificationLayerBottomRight = __decorate([
    Layer(NotificationComponent)
], NotificationLayerBottomRight);
export { NotificationLayerBottomRight };
var NotificationLayerBottom = (function (_super) {
    __extends(NotificationLayerBottom, _super);
    function NotificationLayerBottom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationBottom';
        _this.reverse = false;
        return _this;
    }
    return NotificationLayerBottom;
}(NotificationLayer));
NotificationLayerBottom = __decorate([
    Layer(NotificationComponent)
], NotificationLayerBottom);
export { NotificationLayerBottom };
var NotificationLayerBottomLeft = (function (_super) {
    __extends(NotificationLayerBottomLeft, _super);
    function NotificationLayerBottomLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationBottomLeft';
        _this.reverse = false;
        return _this;
    }
    return NotificationLayerBottomLeft;
}(NotificationLayer));
NotificationLayerBottomLeft = __decorate([
    Layer(NotificationComponent)
], NotificationLayerBottomLeft);
export { NotificationLayerBottomLeft };
