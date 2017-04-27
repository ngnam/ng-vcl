var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Inject, Injectable, Injector, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLWormholeModule } from '../wormhole/index';
import { defineMetadata } from './../core/index';
import { LayerManagerService } from './layer-manager.service';
import { LayerService } from './layer.service';
import { LayerRef } from './layer-ref';
import { LayerContainerComponent, COMPONENT_LAYER_ANNOTATION_ID } from './layer-container.component';
import { LayerRefDirective } from './layer-ref.directive';
export { LayerRefDirective, LayerRef, LayerService, LayerManagerService, LayerContainerComponent };
export var CHILD_LAYER_CONFIG = new OpaqueToken('@ng-vcl/ng-vcl#child_layer_config');
// The @Layer annotation
export function Layer(component) {
    return function (target) {
        Injectable()(target);
        defineMetadata(COMPONENT_LAYER_ANNOTATION_ID, component, target);
    };
}
var VCLLayerModule = VCLLayerModule_1 = (function () {
    function VCLLayerModule(configs, layerService, layerManagerService, injector) {
        var _this = this;
        this.configs = configs;
        this.layerService = layerService;
        this.layerManagerService = layerManagerService;
        this.injector = injector;
        if (configs) {
            configs.forEach(function (config) {
                (config.layers || []).forEach(function (layerCls) {
                    var layerRef = _this.injector.get(layerCls);
                    _this.layerService.register(layerRef, injector);
                });
            });
        }
    }
    VCLLayerModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return { ngModule: VCLLayerModule_1, providers: [
                LayerService,
                LayerManagerService
            ].concat((config.layers || []), [
                {
                    provide: LayerRef,
                    useValue: null
                },
                {
                    provide: CHILD_LAYER_CONFIG,
                    multi: true,
                    useValue: config
                }
            ]) };
    };
    VCLLayerModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: VCLLayerModule_1,
            providers: (config.layers || []).concat([
                {
                    provide: CHILD_LAYER_CONFIG,
                    multi: true,
                    useValue: config
                }
            ])
        };
    };
    return VCLLayerModule;
}());
VCLLayerModule = VCLLayerModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            VCLWormholeModule
        ],
        exports: [LayerRefDirective, LayerContainerComponent],
        declarations: [LayerRefDirective, LayerContainerComponent],
        entryComponents: [LayerContainerComponent],
        providers: []
    }),
    __param(0, Inject(CHILD_LAYER_CONFIG)),
    __metadata("design:paramtypes", [Array, LayerService,
        LayerManagerService,
        Injector])
], VCLLayerModule);
export { VCLLayerModule };
var VCLLayerModule_1;
