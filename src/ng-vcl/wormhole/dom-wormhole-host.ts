import { ApplicationRef, Injectable, ComponentFactoryResolver, Injector, ComponentRef, EmbeddedViewRef, TemplateRef, ViewContainerRef, Type } from '@angular/core';

@Injectable()
export class DomWormholeHost {

  constructor(private appRef: ApplicationRef, private componentFactoryResolver: ComponentFactoryResolver, private defaultInjector: Injector) {}

  attachComponentToRoot<T>(componentClass: Type<T>) {
    const rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
    if (!rootComponent) {
      throw 'Application root component not found';
    }
    const node = this.getComponentRootNode(rootComponent);
    if (!node) {
      throw 'root node not found';
    }
    this.attachComponent(componentClass, node);
  }

  attachComponent<T>(componentClass: Type<T>, node: HTMLElement) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const componentRef = componentFactory.create(this.defaultInjector);
    const componentRefRootNode = this.getComponentRootNode(componentRef);
    if (!componentRefRootNode) {
      throw 'component root not not found';
    }
    this.appRef.attachView(componentRef.hostView);
    node.appendChild(componentRefRootNode);

    return {
      componentRef,
      dispose: () => {
        this.appRef.detachView(componentRef.hostView);
        node.removeChild(componentRefRootNode);
      }
    };
  }

  private getComponentRootNode(componentRef: ComponentRef<any>) {
    const rootNodes = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes;
    return (rootNodes && rootNodes.length && rootNodes[0] as HTMLElement) || undefined;
  }
}