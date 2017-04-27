var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { LayerRef } from './layer-ref';
var LayerService = (function () {
    function LayerService() {
        this.baseZIndex = 1000;
        this.visibleLayers = [];
        this.layerRegister = new ReplaySubject();
    }
    Object.defineProperty(LayerService.prototype, "currentZIndex", {
        get: function () {
            return this.baseZIndex + (this.visibleLayers.length * 10);
        },
        enumerable: true,
        configurable: true
    });
    LayerService.prototype.getLayers$ = function (base) {
        if (base === void 0) { base = 'default'; }
        return this.layerRegister.asObservable().filter(function (lr) { return !!lr.ref && lr.ref.base === base; });
    };
    LayerService.prototype.hasVisibleLayers = function () {
        return this.visibleLayers.length > 0;
    };
    LayerService.prototype.getTopLayer = function () {
        return this.visibleLayers.slice().pop();
    };
    LayerService.prototype.closeAll = function (base) {
        this.visibleLayers.forEach(function (layer) { return layer.close(); });
    };
    LayerService.prototype.closeTop = function (base) {
        var layer = this.getTopLayer();
        if (layer) {
            layer.close();
        }
    };
    LayerService.prototype.addVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.concat([layer]);
    };
    LayerService.prototype.removeVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.filter(function (l) { return l !== layer; });
    };
    LayerService.prototype.register = function (layer, injector) {
        if (!(layer instanceof LayerRef)) {
            throw 'Invalid layer';
        }
        this.layerRegister.next({
            ref: layer,
            injector: injector,
            register: true
        });
    };
    LayerService.prototype.unregister = function (layer) {
        this.layerRegister.next({
            ref: layer,
            register: false
        });
    };
    return LayerService;
}());
LayerService = __decorate([
    Injectable()
], LayerService);
export { LayerService };
