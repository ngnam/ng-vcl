import { TemplateRef, Injector } from '@angular/core';
import { LayerService } from './layer.service';
import { LayerRef } from './layer-ref';
export declare class LayerRefDirective extends LayerRef {
    templateRef: TemplateRef<any>;
    private layerService;
    private injector;
    base: string;
    modal: boolean;
    transparent: boolean;
    fill: boolean;
    stickToBottom: boolean;
    gutterPadding: boolean;
    customClass: string;
    constructor(templateRef: TemplateRef<any>, layerService: LayerService, injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
