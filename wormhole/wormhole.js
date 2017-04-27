var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { TemplateRef, ComponentFactoryResolver } from '@angular/core';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
var Wormhole = (function () {
    function Wormhole() {
    }
    return Wormhole;
}());
export { Wormhole };
var TemplateWormhole = (function (_super) {
    __extends(TemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormhole(templateRef, viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        _this.viewContainerRef = viewContainerRef;
        _this.cachedAttrs = null;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        if (!(templateRef instanceof TemplateRef)) {
            throw 'invalid TemplateRef';
        }
        return _this;
    }
    Object.defineProperty(TemplateWormhole.prototype, "isConnected", {
        get: function () {
            return !!(this.viewRef);
        },
        enumerable: true,
        configurable: true
    });
    TemplateWormhole.prototype.connect = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (typeof opts.attrs === 'object' && opts.attrs) {
            this.cachedAttrs = opts.attrs;
        }
        var index = typeof opts.index === 'number' ? opts.index : null;
        this.disconnect();
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef, null, typeof index === 'number' ? index : this.viewContainerRef.length);
        this.viewRef.onDestroy(function () {
            _this.viewRef = null;
        });
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(this.viewRef.context, this.cachedAttrs);
        }
        this.viewRef.detectChanges();
        return Observable.never();
    };
    TemplateWormhole.prototype.disconnect = function () {
        if (this.isConnected && this.currentIndex >= 0) {
            this.viewContainerRef.remove(this.currentIndex);
        }
    };
    TemplateWormhole.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.viewRef && attrs && typeof attrs === 'object') {
            Object.assign(this.viewRef.context, attrs);
            this.viewRef.markForCheck();
        }
    };
    Object.defineProperty(TemplateWormhole.prototype, "currentIndex", {
        get: function () {
            return this.viewRef ? this.viewContainerRef.indexOf(this.viewRef) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return TemplateWormhole;
}(Wormhole));
export { TemplateWormhole };
var ComponentWormhole = (function (_super) {
    __extends(ComponentWormhole, _super);
    function ComponentWormhole(componentClass, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.componentClass = componentClass;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.cachedAttrs = null;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        if (!(typeof componentClass === 'function')) {
            throw 'invalid component class';
        }
        return _this;
    }
    Object.defineProperty(ComponentWormhole.prototype, "isConnected", {
        get: function () {
            return !!this.compRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentWormhole.prototype.connect = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (typeof opts.attrs === 'object' && opts.attrs) {
            this.cachedAttrs = opts.attrs;
        }
        var index = typeof opts.index === 'number' ? opts.index : null;
        var injector = this.injector || this.viewContainerRef.parentInjector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(this.componentClass);
        }
        this.disconnect();
        this.compRef = this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index : this.viewContainerRef.length, injector);
        var subs = [];
        this.compRef.onDestroy(function () {
            _this.compRef = null;
        });
        var instance = this.compRef.instance;
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(instance, this.cachedAttrs);
        }
        this.compRef.changeDetectorRef.detectChanges();
        var events = opts.events || [];
        var events$ = events.map(function (event) {
            if (!instance[event])
                throw 'Event not found: ' + event;
            return instance[event] && instance[event].map(function (value) { return ({ event: event, value: value }); });
        });
        return Observable.merge.apply(Observable, events$);
    };
    ComponentWormhole.prototype.disconnect = function () {
        if (this.compRef) {
            this.compRef.destroy();
            this.compRef = null;
        }
    };
    ComponentWormhole.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.compRef && attrs && typeof attrs === 'object') {
            Object.assign(this.compRef.instance, attrs);
            // TODO: Change detection is not triggering when changedetection is set to onPush
            // Workaround for ng 4
            // https://github.com/angular/angular/issues/12313
            var cdRef = this.compRef.changeDetectorRef;
            if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
                this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 1);
            }
            this.compRef.changeDetectorRef.markForCheck();
        }
    };
    Object.defineProperty(ComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? this.viewContainerRef.indexOf(this.compRef.hostView) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return ComponentWormhole;
}(Wormhole));
export { ComponentWormhole };
var DomComponentWormhole = (function (_super) {
    __extends(DomComponentWormhole, _super);
    function DomComponentWormhole(componentClass, appRef, node, injector) {
        var _this = _super.call(this) || this;
        _this.componentClass = componentClass;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        _this.cachedAttrs = undefined;
        if (!(typeof componentClass === 'function')) {
            throw 'invalid component class';
        }
        return _this;
    }
    Object.defineProperty(DomComponentWormhole.prototype, "rootComponentRef", {
        get: function () {
            var rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
            if (!rootComponent) {
                throw 'Application root component not found';
            }
            return rootComponent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomComponentWormhole.prototype, "componentNode", {
        get: function () {
            if (this.node) {
                return this.node;
            }
            var rootCompRef = this.rootComponentRef;
            var node = this.getComponentRootNode(rootCompRef);
            if (!node) {
                throw 'root node not found';
            }
            return node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomComponentWormhole.prototype, "isConnected", {
        get: function () {
            return !!this.compRef;
        },
        enumerable: true,
        configurable: true
    });
    DomComponentWormhole.prototype.connect = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (typeof opts.attrs === 'object' && opts.attrs) {
            this.cachedAttrs = opts.attrs;
        }
        var index = typeof opts.index === 'number' ? opts.index : null;
        var injector = this.injector || this.rootComponentRef.injector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(this.componentClass);
        }
        this.compRef = this.compFactory.create(injector);
        this.appRef.attachView(this.compRef.hostView);
        var compRefRootNode = this.getComponentRootNode(this.compRef);
        var node = this.componentNode;
        if (!compRefRootNode) {
            throw 'component root node not found';
        }
        node.appendChild(compRefRootNode);
        this.compRef.onDestroy(function () {
            if (_this.compRef) {
                _this.appRef.detachView(_this.compRef.hostView);
            }
            if (compRefRootNode.parentNode != null) {
                compRefRootNode.parentNode.removeChild(compRefRootNode);
            }
            _this.compRef = null;
        });
        var instance = this.compRef.instance;
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(instance, this.cachedAttrs);
        }
        this.compRef.changeDetectorRef.detectChanges();
        var events = opts.events || [];
        var events$ = events.map(function (event) {
            if (!instance[event])
                throw 'Event not found: ' + event;
            return instance[event] && instance[event].map(function (value) { return ({ event: event, value: value }); });
        });
        return Observable.merge.apply(Observable, events$);
    };
    DomComponentWormhole.prototype.disconnect = function () {
        if (this.compRef) {
            this.compRef.destroy();
            this.compRef = null;
        }
    };
    DomComponentWormhole.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.compRef && attrs && typeof attrs === 'object') {
            Object.assign(this.compRef.instance, attrs);
            // TODO: Change detection is not triggering when changedetection is set to onPush
            // Workaround for ng 4
            // https://github.com/angular/angular/issues/12313
            var cdRef = this.compRef.changeDetectorRef;
            if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
                this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 1);
            }
            this.compRef.changeDetectorRef.markForCheck();
        }
    };
    Object.defineProperty(DomComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    DomComponentWormhole.prototype.getComponentRootNode = function (componentRef) {
        var rootNodes = componentRef.hostView.rootNodes;
        return (rootNodes && rootNodes.length && rootNodes[0]) || undefined;
    };
    return DomComponentWormhole;
}(Wormhole));
export { DomComponentWormhole };
