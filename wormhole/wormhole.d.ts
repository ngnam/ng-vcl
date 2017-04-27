import { EmbeddedViewRef, ApplicationRef, ViewContainerRef, TemplateRef, ComponentRef, Injector, Type } from '@angular/core';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { WormholeAttributes } from './wormhole';
export interface WormholeAttributes {
    [key: string]: any;
}
export interface WormholeEvent {
    event: string;
    value: any;
}
export interface WormholeOptions {
    index?: number;
    attrs?: WormholeAttributes;
    events?: string[];
}
export declare abstract class Wormhole {
    readonly abstract isConnected: boolean;
    abstract connect(opts?: WormholeOptions): Observable<WormholeEvent>;
    abstract disconnect(): any;
    abstract setAttributes(attrs: WormholeAttributes): any;
    readonly abstract currentIndex: number;
}
export declare class TemplateWormhole extends Wormhole {
    private templateRef;
    private viewContainerRef;
    private cachedAttrs;
    viewRef: EmbeddedViewRef<any> | null;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
    readonly isConnected: boolean;
    connect(opts?: WormholeOptions): Observable<WormholeEvent>;
    disconnect(): void;
    setAttributes(attrs: WormholeAttributes): void;
    readonly currentIndex: number;
}
export declare class ComponentWormhole<T> extends Wormhole {
    private componentClass;
    private viewContainerRef;
    private injector;
    private compFactory;
    private cachedAttrs;
    compRef: ComponentRef<T> | null;
    constructor(componentClass: Type<T>, viewContainerRef: ViewContainerRef, injector?: Injector);
    readonly isConnected: boolean;
    connect(opts?: WormholeOptions): Observable<WormholeEvent>;
    disconnect(): void;
    setAttributes(attrs: WormholeAttributes): void;
    readonly currentIndex: number;
}
export declare class DomComponentWormhole<T> extends Wormhole {
    private componentClass;
    private appRef;
    private node;
    private injector;
    private compFactory;
    private cachedAttrs;
    compRef: ComponentRef<T> | null;
    compRefRootNode: HTMLElement;
    constructor(componentClass: Type<T>, appRef: ApplicationRef, node?: HTMLElement, injector?: Injector);
    readonly rootComponentRef: ComponentRef<any>;
    readonly componentNode: HTMLElement;
    readonly isConnected: boolean;
    connect(opts?: WormholeOptions): Observable<WormholeEvent>;
    disconnect(): void;
    setAttributes(attrs: WormholeAttributes): void;
    readonly currentIndex: number;
    private getComponentRootNode(componentRef);
}
