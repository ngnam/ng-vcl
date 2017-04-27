import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { LayerRef } from './layer-ref';
export declare class LayerService {
    baseZIndex: number;
    visibleLayers: LayerRef[];
    private layerRegister;
    readonly currentZIndex: number;
    getLayers$(base?: string): Observable<{
        register: boolean;
        ref: LayerRef;
        injector?: Injector | undefined;
    }>;
    hasVisibleLayers(): boolean;
    getTopLayer(): LayerRef | undefined;
    closeAll(base?: string): void;
    closeTop(base?: string): void;
    addVisibleLayer(layer: LayerRef): void;
    removeVisibleLayer(layer: LayerRef): void;
    register(layer: LayerRef, injector: Injector): void;
    unregister(layer: LayerRef): void;
}
