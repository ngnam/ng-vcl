var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, trigger, state, transition, animate, style } from '@angular/core';
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.notifications = [];
    }
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "notifications", void 0);
    NotificationComponent = __decorate([
        Component({
            template: "<div *ngFor=\"let notification of notifications\"  (mouseenter)=\"notification.mouseEnter()\"  (mouseleave)=\"notification.mouseLeave()\"  class=\"vclNotification vclLayoutHorizontal vclLayoutCenter\"  [ngClass]=\"notification.layerClass\"  [style.color]=\"notification.textColor\" [style.background-color]=\"notification.backgroundColor\" [@notificationState]=\"notification.state\"  > <div class=\"vclNotificationIconContainer\"> <span *ngIf=\"notification.iconClass\" class=\"vclIcon vclNotificationIcon\" [ngClass]=\"notification.iconClass\"></span> </div> <div class=\"vclNotificationContent vclLayoutFlex\"> <div *ngIf=\"notification.text && !notification.html\">{{notification.text}}</div> <div *ngIf=\"notification.text && notification.html\" [innerHtml]=\"notification.text\"></div> </div> <button vcl-button *ngIf=\"notification.showCloseButton\" (click)=\"notification.close()\" class=\"vclSquare vclTransparent vclLayoutSelfStart\" prepIcon=\"fa:times\" title=\"Close\"></button> </div> ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: [
                "\n     .vclLayerNotificationTopRight { left: auto; bottom: auto; top: 1em; right: 1em; }\n     .vclLayerNotificationTop { left: 0; bottom: auto; top: 1em; right: 0; }\n     .vclLayerNotificationTopLeft { left: 1em; bottom: auto; top: 1em; right: auto; }\n     .vclLayerNotificationBottomRight { left: auto; bottom: 1em; top: auto; right: 1em; }\n     .vclLayerNotificationBottom { left: 0; bottom: 1em; top: auto; right: 0; }\n     .vclLayerNotificationBottomLeft { left: 1em; bottom: 1em; top: auto; right: auto; }\n    "
            ],
            animations: [
                trigger('notificationState', [
                    state('visible', style({ opacity: 0.91 })),
                    state('hovered', style({ opacity: 1.0 })),
                    transition(':enter', [
                        style({ opacity: 0 }),
                        animate('200ms ease-in')
                    ]),
                    transition(':leave', [
                        animate('200ms ease-out', style({ opacity: 0 }))
                    ]),
                    transition('visible <=> hovered', animate('300ms'))
                ]),
            ],
            host: {
                '[@notificationState]': 'true'
            },
        })
    ], NotificationComponent);
    return NotificationComponent;
}());
export { NotificationComponent };
