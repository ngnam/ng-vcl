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
import { Injectable, ApplicationRef, Injector } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import { DomWormholeHost } from '../wormhole/index';
import { LayerService } from './layer.service';
import { LayerContainerComponent } from './layer-container.component';
var LayerManagerService = (function (_super) {
    __extends(LayerManagerService, _super);
    function LayerManagerService(layerService, appRef, injector) {
        var _this = _super.call(this, appRef, undefined, injector) || this;
        _this.layerService = layerService;
        _this.injector = injector;
        _this.layerMap = new Map();
        _this.name = 'default';
        _this.sub = _this.layerService
            .getLayers$(_this.name)
            .subscribe(function (l) {
            if (l.register) {
                _this.registerLayer(l.ref, l.injector);
            }
            else {
                _this.unregisterLayer(l.ref);
            }
        });
        return _this;
    }
    LayerManagerService.prototype.registerLayer = function (layer, injector) {
        var _this = this;
        var containerWormholeRef = this.createWormhole(LayerContainerComponent);
        var layerSub = layer.state$.subscribe(function (state) {
            if (state.visible && !containerWormholeRef.isConnected) {
                containerWormholeRef.connect({
                    attrs: {
                        layer: layer,
                        zIndex: _this.layerService.currentZIndex,
                        layerAttrs: state.attrs,
                        injector: injector || _this.injector
                    }
                });
                _this.layerService.addVisibleLayer(layer);
            }
            else if (state.visible) {
                containerWormholeRef.setAttributes({
                    layerAttrs: state.attrs
                });
            }
            else {
                containerWormholeRef.disconnect();
                _this.layerService.removeVisibleLayer(layer);
            }
        });
        this.layerMap.set(layer, {
            subscription: layerSub,
            wormhole: containerWormholeRef
        });
    };
    LayerManagerService.prototype.unregisterLayer = function (layer) {
        layer.close();
        var meta = this.layerMap.get(layer);
        if (meta) {
            meta.subscription.unsubscribe();
            meta.wormhole.disconnect();
        }
        this.layerMap.delete(layer);
    };
    LayerManagerService.prototype.ngOnDestroy = function () {
        var _this = this;
        this.clearWormholes();
        this.layerMap.forEach(function (meta, layer) { return _this.unregisterLayer(layer); });
        this.sub && this.sub.unsubscribe();
    };
    return LayerManagerService;
}(DomWormholeHost));
LayerManagerService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [LayerService, ApplicationRef, Injector])
], LayerManagerService);
export { LayerManagerService };
