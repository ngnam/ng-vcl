var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from './../button/index';
import { VCLLayerModule } from './../layer/index';
import { NotificationComponent } from './notification.component';
import { NotificationLayerTopRight, NotificationLayerBottomRight, NotificationLayerBottom, NotificationLayerBottomLeft, NotificationLayerTopLeft, NotificationLayerTop } from './notification.layer';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { NotificationType, NotificationPosition } from './types';
export { Notification, NotificationService, NotificationType, NotificationPosition, NotificationComponent };
var VCLNotificationModule = (function () {
    function VCLNotificationModule() {
    }
    return VCLNotificationModule;
}());
VCLNotificationModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            VCLButtonModule,
            VCLLayerModule.forChild({ layers: [
                    NotificationLayerTopRight,
                    NotificationLayerBottomRight,
                    NotificationLayerBottom,
                    NotificationLayerBottomLeft,
                    NotificationLayerTopLeft,
                    NotificationLayerTop
                ] })
        ],
        exports: [],
        declarations: [NotificationComponent],
        entryComponents: [NotificationComponent],
        providers: [
            NotificationService,
        ],
    })
], VCLNotificationModule);
export { VCLNotificationModule };
