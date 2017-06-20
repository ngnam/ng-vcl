import { Type, Injector, ModuleWithProviders, OpaqueToken } from '@angular/core';
import { LayerManagerService } from './layer-manager.service';
import { LayerService } from './layer.service';
import { LayerRef, LayerAttributes, DynamicLayerRef, LayerResult } from './layer-ref';
import { LayerContainerComponent, LAYER_ANIMATIONS, LayerAnimationConfig, LayerOptions } from './layer-container.component';
import { LayerRefDirective } from './layer-ref.directive';
export { LayerRefDirective, LayerRef, LayerAttributes, LayerService, LayerContainerComponent, DynamicLayerRef, LayerAnimationConfig, LAYER_ANIMATIONS, LayerResult };
export declare const LAYERS: OpaqueToken;
export interface RootLayerConfig {
    layers?: Type<LayerRef>[];
}
export interface ChildLayerConfig {
    layers?: Type<LayerRef>[];
}
export declare function Layer<T>(component: Type<T>, opts?: LayerOptions): (target: any) => void;
export declare class VCLLayerModule {
    private layers;
    private layerManager;
    private injector;
    static forRoot(config?: RootLayerConfig): ModuleWithProviders;
    static forChild(config?: ChildLayerConfig): ModuleWithProviders;
    constructor(layers: Type<LayerRef>[], layerManager: LayerManagerService, injector: Injector);
}
