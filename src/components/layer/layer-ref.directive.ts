import { TemplateWormholeRef } from './../../directives/wormhole/wormhole.ref';
import { Input, TemplateRef, ChangeDetectorRef, Directive, ViewContainerRef } from '@angular/core';
import { WormholeRef } from './../../directives/wormhole/wormhole.module';
import { LayerService } from './layer.service';
import { LayerRef, LayerOptions } from './layer-ref';

@Directive({
  selector: '[vcl-layer]',
  exportAs: 'layer',
})
export class LayerRefDirective extends LayerRef {

  @Input()
  public base: string;

  @Input()
  public modal: boolean;

  @Input()
  public offClickClose: boolean;

  @Input()
  transparent: boolean;

  @Input()
  fill: boolean;

  @Input()
  stickToBottom: boolean;

  @Input()
  gutterPadding: boolean;

  @Input()
  customClass: string;

  constructor(public templateRef: TemplateRef<any>, private layerService: LayerService, private cdRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    const opts: LayerOptions = {};
    if (this.base !== undefined) opts.base = this.base;
    if (this.modal !== undefined) opts.modal = this.modal;
    if (this.offClickClose !== undefined) opts.offClickClose = this.offClickClose;
    if (this.transparent !== undefined) opts.transparent = this.transparent;
    if (this.fill !== undefined) opts.fill = this.fill;
    if (this.stickToBottom !== undefined) opts.stickToBottom = this.stickToBottom;
    if (this.gutterPadding !== undefined) opts.gutterPadding = this.gutterPadding;
    if (this.customClass !== undefined) opts.customClass = this.customClass;
    this._setOptions(opts);
    this.layerService.register(this);
  }

  ngOnDestroy() {
    this.layerService.unregister(this);
  }

  // Wormhole stuff
  create(viewContainerRef: ViewContainerRef) {
    if (!viewContainerRef) {
      throw 'viewContainerRef required';
    }
    return new TemplateWormholeRef(viewContainerRef, this.templateRef);
  }
}