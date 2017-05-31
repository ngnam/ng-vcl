import { ViewContainerRef, Type, TemplateRef, ApplicationRef, Injector } from "@angular/core";
import { Wormhole, WormholeAttributes } from "./wormhole-base";
export declare abstract class WormholeHostBase {
    protected _wormholes: Wormhole[];
    readonly wormholes: number;
    readonly connectedWormholes: number;
    getWormhole(index: number): Wormhole | undefined;
    abstract createWormhole<T>(component: Type<T>): Wormhole;
    abstract createWormhole<T>(templateRef: TemplateRef<T>): Wormhole;
    abstract createWormhole<T>(arg2: Type<T> | TemplateRef<T>): Wormhole;
    connectWormhole<T>(component: Type<T>, attrs?: WormholeAttributes, events?: string[]): Wormhole;
    connectWormhole<T>(templateRef: TemplateRef<T>, attrs?: WormholeAttributes, events?: string[]): Wormhole;
    disconnectWormhole(index: number): void;
    disconnectWormholes(): void;
    clearWormholes(): void;
    removeWormhole(wormhole: Wormhole | number): void;
}
export declare class WormholeHost extends WormholeHostBase {
    private _host;
    private _injector;
    constructor(_host: ViewContainerRef, _injector?: Injector);
    createWormhole<T>(component: Type<T>): Wormhole;
    createWormhole<T>(templateRef: TemplateRef<T>): Wormhole;
}
export declare class DomWormholeHost extends WormholeHostBase {
    private _host;
    private _node;
    private _injector;
    constructor(_host: ApplicationRef, _node?: HTMLElement, _injector?: Injector);
    createWormhole<T>(component: Type<T>): Wormhole;
    createWormhole<T>(templateRef: TemplateRef<T>): Wormhole;
}
