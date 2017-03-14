import { ViewContainerRef, Directive, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Wormhole, WormholeManager, WormholeRef, WormholeAttributes } from './wormhole';

@Directive({
  selector: '[wormhole]'
})
export class WormholeDirective extends WormholeManager {

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef);
   }

  get isConnected() {
    return !!this.wormhole && this.wormhole.isConnected;
  }

  @Input('wormhole')
  target: any;

  @Input('wormholeAttrs')
  attrs: WormholeAttributes;

  wormhole: WormholeRef;

  ngOnChanges(changes: SimpleChanges) {
    const attrs = ('attrs' in changes && changes.attrs.currentValue as WormholeAttributes) || undefined;

    if ('target' in changes) {
      if (this.wormhole) {
        this.wormhole.disconnect();
      }

      const target = changes.target.currentValue;

      if (target) {
        this.wormhole = this.connect(target, {
          attrs
        });
      }
    } else if (attrs && this.wormhole) {
      this.wormhole.setAttributes(attrs);
    }
  }

  ngOnDestroy() {
    if (this.wormhole) {
      this.wormhole.disconnect();
    }
  }
}
