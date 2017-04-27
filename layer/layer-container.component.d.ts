import { ViewContainerRef, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Wormhole } from '../wormhole/index';
import { LayerRef, LayerAttributes } from './layer-ref';
export declare const COMPONENT_LAYER_ANNOTATION_ID = "ng-vcl_component_layer";
export declare class LayerContainerComponent {
    private cdRef;
    container: ElementRef;
    layer: LayerRef;
    layerAttrs: LayerAttributes;
    _layerAttrs: LayerAttributes;
    zIndex: number;
    injector: any;
    visible: boolean;
    readonly state: string;
    wormhole: Wormhole | undefined;
    layerContentContainer: ViewContainerRef;
    constructor(cdRef: ChangeDetectorRef);
    disconnect(): void;
    connect(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    triggerOffClick(event: any): void;
}
