var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ViewChild, Input, ViewContainerRef, ChangeDetectorRef, ReflectiveInjector, ElementRef } from '@angular/core';
import { trigger } from '@angular/animations';
import { ComponentWormhole, TemplateWormhole } from '../wormhole/index';
import { getMetadata } from './../core/index';
import { LayerRef } from './layer-ref';
import { LayerRefDirective } from './layer-ref.directive';
export var COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';
var LayerContainerComponent = (function () {
    function LayerContainerComponent(cdRef) {
        this.cdRef = cdRef;
        this.zIndex = 1000;
        this.visible = false;
    }
    Object.defineProperty(LayerContainerComponent.prototype, "layerAttrs", {
        get: function () {
            return this._layerAttrs;
        },
        set: function (layerAttrs) {
            this._layerAttrs = layerAttrs;
            if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
                this.wormhole.setAttributes(layerAttrs);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerContainerComponent.prototype, "state", {
        get: function () {
            return this.visible ? 'visible' : 'hidden';
        },
        enumerable: true,
        configurable: true
    });
    LayerContainerComponent.prototype.disconnect = function () {
        if (this.wormhole) {
            this.wormhole.disconnect();
        }
    };
    LayerContainerComponent.prototype.connect = function () {
        if (this.wormhole) {
            this.wormhole.connect();
        }
    };
    LayerContainerComponent.prototype.ngAfterViewInit = function () {
        var layer = this.layer;
        if (layer && this.layerContentContainer) {
            // Creates a wormhole out of the LayerRef
            if (this.layer instanceof LayerRefDirective) {
                this.wormhole = new TemplateWormhole(this.layer.templateRef, this.layerContentContainer);
            }
            else {
                var component = getMetadata(COMPONENT_LAYER_ANNOTATION_ID, this.layer.constructor);
                // The created injector injects this instance as LayerRef
                // It is used in the component instance created within the wormhole
                var layerInjector = ReflectiveInjector.resolveAndCreate([{
                        provide: LayerRef,
                        useValue: this.layer
                    }], this.injector);
                this.wormhole = component ? new ComponentWormhole(component, this.layerContentContainer, layerInjector) : undefined;
            }
            if (!this.wormhole) {
                throw 'invalid layer';
            }
            this.wormhole.connect({
                attrs: this._layerAttrs
            });
        }
    };
    LayerContainerComponent.prototype.ngOnDestroy = function () {
        if (this.wormhole) {
            this.wormhole.disconnect();
        }
    };
    LayerContainerComponent.prototype.triggerOffClick = function (event) {
        if (event.target === this.container.nativeElement) {
            this.layer.offClick();
        }
    };
    return LayerContainerComponent;
}());
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], LayerContainerComponent.prototype, "container", void 0);
__decorate([
    Input(),
    __metadata("design:type", LayerRef)
], LayerContainerComponent.prototype, "layer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LayerContainerComponent.prototype, "layerAttrs", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LayerContainerComponent.prototype, "zIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LayerContainerComponent.prototype, "injector", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LayerContainerComponent.prototype, "visible", void 0);
__decorate([
    ViewChild('layerContent', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], LayerContainerComponent.prototype, "layerContentContainer", void 0);
LayerContainerComponent = __decorate([
    Component({
        template: "<div  #container  class=\"vclLayer\" [ngClass]=\"layer.customClass\" [class.vclTransparent]=\"layer.transparent\" [class.vclLayerFill]=\"layer.fill\" [class.vclLayerStickToBottom]=\"layer.stickToBottom\" [style.z-index]=\"zIndex + 1\" [style.pointer-events]=\"'all'\"  role=\"dialog\"  (click)='triggerOffClick($event)' > <div class=\"vclLayerBox\" [class.vclLayerGutterPadding]=\"layer.gutterPadding\" [style.pointer-events]=\"'all'\" [style.z-index]=\"zIndex + 2\"> <div #layerContent></div> </div> </div> <div *ngIf=\"layer.modal\" class=\"vclLayerCover\" [@layerState]=\"state\" [style.z-index]=\"zIndex\"></div> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [
            trigger('boxState', []),
            trigger('layerState', [])
        ],
        host: {
            '[@boxState]': 'true',
            '[@layerState]': 'true'
        }
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], LayerContainerComponent);
export { LayerContainerComponent };
