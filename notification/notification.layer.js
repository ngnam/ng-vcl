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
        }
        else {
            this.open({ notifications: this.notifications });
        }
    };
    return NotificationLayer;
}(LayerRef));
export { NotificationLayer };
export function noop() { }
var NotificationLayerTopRight = (function (_super) {
    __extends(NotificationLayerTopRight, _super);
    function NotificationLayerTopRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerTopRight;
}(NotificationLayer));
NotificationLayerTopRight = __decorate([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationTopRight', offClick: noop })
], NotificationLayerTopRight);
export { NotificationLayerTopRight };
var NotificationLayerTop = (function (_super) {
    __extends(NotificationLayerTop, _super);
    function NotificationLayerTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerTop;
}(NotificationLayer));
NotificationLayerTop = __decorate([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationTop', offClick: noop })
], NotificationLayerTop);
export { NotificationLayerTop };
var NotificationLayerTopLeft = (function (_super) {
    __extends(NotificationLayerTopLeft, _super);
    function NotificationLayerTopLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerTopLeft;
}(NotificationLayer));
NotificationLayerTopLeft = __decorate([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationTopLeft', offClick: noop })
], NotificationLayerTopLeft);
export { NotificationLayerTopLeft };
var NotificationLayerBottomRight = (function (_super) {
    __extends(NotificationLayerBottomRight, _super);
    function NotificationLayerBottomRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerBottomRight;
}(NotificationLayer));
NotificationLayerBottomRight = __decorate([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationBottomRight', offClick: noop })
], NotificationLayerBottomRight);
export { NotificationLayerBottomRight };
var NotificationLayerBottom = (function (_super) {
    __extends(NotificationLayerBottom, _super);
    function NotificationLayerBottom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerBottom;
}(NotificationLayer));
NotificationLayerBottom = __decorate([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationBottom', offClick: noop })
], NotificationLayerBottom);
export { NotificationLayerBottom };
var NotificationLayerBottomLeft = (function (_super) {
    __extends(NotificationLayerBottomLeft, _super);
    function NotificationLayerBottomLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerBottomLeft;
}(NotificationLayer));
NotificationLayerBottomLeft = __decorate([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationBottomLeft', offClick: noop })
], NotificationLayerBottomLeft);
export { NotificationLayerBottomLeft };
