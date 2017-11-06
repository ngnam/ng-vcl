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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
export var L10N_LOADER_CONFIG = new InjectionToken('l10n.loader.config');
var L10nLoaderService = /** @class */ (function () {
    function L10nLoaderService() {
    }
    return L10nLoaderService;
}());
export { L10nLoaderService };
function extractLocales(group) {
    var supportedLocales = [];
    Object.keys(group).forEach(function (key) {
        if (group[key]) {
            Object.keys(group[key]).forEach(function (locale) {
                supportedLocales.push(locale);
            });
        }
    });
    // unique
    return Array.from(new Set(supportedLocales));
}
function flatten(locale, group) {
    var pkg = {};
    Object.keys(group).forEach(function (key) {
        if (group[key] && group[key][locale]) {
            pkg[key] = group[key][locale];
        }
    });
    return pkg;
}
var L10nStaticLoaderService = /** @class */ (function (_super) {
    __extends(L10nStaticLoaderService, _super);
    function L10nStaticLoaderService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        return _this;
    }
    L10nStaticLoaderService.prototype.getTranslationPackage = function (locale) {
        return Observable.of(flatten(locale, this.config));
    };
    L10nStaticLoaderService.prototype.getSupportedLocales = function () {
        return Observable.of(extractLocales(this.config));
    };
    L10nStaticLoaderService = __decorate([
        Injectable(),
        __param(0, Inject(L10N_LOADER_CONFIG)),
        __metadata("design:paramtypes", [Object])
    ], L10nStaticLoaderService);
    return L10nStaticLoaderService;
}(L10nLoaderService));
export { L10nStaticLoaderService };
var L10nAsyncLoaderService = /** @class */ (function (_super) {
    __extends(L10nAsyncLoaderService, _super);
    function L10nAsyncLoaderService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        var streamlike;
        if (typeof config === 'function') {
            streamlike = config();
        }
        else {
            streamlike = Observable.from(config);
        }
        // Enable caching
        _this.data$ = streamlike.publishReplay(1).refCount();
        return _this;
    }
    L10nAsyncLoaderService.prototype.getTranslationPackage = function (locale) {
        return this.data$.map(function (data) { return flatten(locale, data); });
    };
    L10nAsyncLoaderService.prototype.getSupportedLocales = function () {
        return this.data$.map(function (data) { return extractLocales(data); });
    };
    L10nAsyncLoaderService = __decorate([
        Injectable(),
        __param(0, Inject(L10N_LOADER_CONFIG)),
        __metadata("design:paramtypes", [Object])
    ], L10nAsyncLoaderService);
    return L10nAsyncLoaderService;
}(L10nLoaderService));
export { L10nAsyncLoaderService };
var L10nNoopLoaderService = /** @class */ (function (_super) {
    __extends(L10nNoopLoaderService, _super);
    function L10nNoopLoaderService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    L10nNoopLoaderService.prototype.getTranslationPackage = function (locale) {
        return Observable.of({});
    };
    L10nNoopLoaderService.prototype.getSupportedLocales = function () {
        return Observable.of([]);
    };
    L10nNoopLoaderService = __decorate([
        Injectable()
    ], L10nNoopLoaderService);
    return L10nNoopLoaderService;
}(L10nLoaderService));
export { L10nNoopLoaderService };
