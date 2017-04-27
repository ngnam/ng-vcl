import { ApplicationRef, Injector } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import { Wormhole, DomWormholeHost } from '../wormhole/index';
import { LayerService } from './layer.service';
import { LayerRef } from './layer-ref';
export declare class LayerManagerService extends DomWormholeHost {
    private layerService;
    private injector;
    layerMap: Map<LayerRef, {
        subscription: Subscription;
        wormhole: Wormhole;
    }>;
    sub: Subscription;
    name: string;
    constructor(layerService: LayerService, appRef: ApplicationRef, injector: Injector);
    registerLayer(layer: LayerRef, injector: Injector | undefined): void;
    unregisterLayer(layer: LayerRef): void;
    ngOnDestroy(): void;
}
