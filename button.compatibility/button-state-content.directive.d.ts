import { ViewContainerRef, TemplateRef } from '@angular/core';
import { WormholeHost } from "../wormhole/index";
export declare class ButtonStateContentDirective extends WormholeHost {
    private tempRef;
    private wormhole;
    constructor(viewContainerRef: ViewContainerRef, tempRef: TemplateRef<any>);
    state: string | string[];
    states: string[];
    updateState(state: string): void;
}
