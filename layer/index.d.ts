import { Type, Injector, ModuleWithProviders, OpaqueToken } from '@angular/core';
import { LayerManagerService } from './layer-manager.service';
import { LayerService } from './layer.service';
import { LayerRef, LayerAttributes } from './layer-ref';
import { LayerContainerComponent } from './layer-container.component';
import { LayerRefDirective } from './layer-ref.directive';
export { LayerRefDirective, LayerRef, LayerAttributes, LayerService, LayerManagerService, LayerContainerComponent };
export declare const CHILD_LAYER_CONFIG: OpaqueToken;
export interface LayerConfig {
    layers?: Type<LayerRef>[];
}
export declare function Layer<T>(component: Type<T>): (target: any) => void;
export declare class VCLLayerModule {
    private configs;
    private layerService;
    private layerManagerService;
    private injector;
    static forRoot(config?: LayerConfig): ModuleWithProviders;
    static forChild(config?: LayerConfig): ModuleWithProviders;
    constructor(configs: LayerConfig[], layerService: LayerService, layerManagerService: LayerManagerService, injector: Injector);
}
