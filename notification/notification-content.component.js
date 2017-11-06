var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { WormholeHost } from '../wormhole/index';
var VCLNotificationContentComponent = /** @class */ (function () {
    function VCLNotificationContentComponent() {
    }
    Object.defineProperty(VCLNotificationContentComponent.prototype, "target", {
        set: function (vcRef) {
            this.host = new WormholeHost(vcRef);
        },
        enumerable: true,
        configurable: true
    });
    VCLNotificationContentComponent.prototype.ngAfterViewInit = function () {
        this.host.connectWormhole(this.wormholeComponentDetails.contentComponentClass, this.wormholeComponentDetails.attributes);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], VCLNotificationContentComponent.prototype, "wormholeComponentDetails", void 0);
    __decorate([
        ViewChild('wormholeHost', { read: ViewContainerRef }),
        __metadata("design:type", ViewContainerRef),
        __metadata("design:paramtypes", [ViewContainerRef])
    ], VCLNotificationContentComponent.prototype, "target", null);
    VCLNotificationContentComponent = __decorate([
        Component({
            selector: 'vcl-notification-content-component',
            template: "<div #wormholeHost></div> "
        })
    ], VCLNotificationContentComponent);
    return VCLNotificationContentComponent;
}());
export { VCLNotificationContentComponent };
