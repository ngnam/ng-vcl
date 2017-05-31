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
import { Directive, ContentChildren, Input, QueryList, SkipSelf, Inject, forwardRef, Optional } from "@angular/core";
import { NavigationComponent } from './navigation.component';
import { Router, NavigationEnd } from "@angular/router";
var NavigationItemDirective = NavigationItemDirective_1 = (function () {
    function NavigationItemDirective(router, nav, parent) {
        var _this = this;
        this.router = router;
        this.nav = nav;
        this.parent = parent;
        // @Input()
        this.selected = false;
        this.opened = false;
        this.heading = false;
        if (nav.useRouter) {
            this._subscription = router.events.subscribe(function (s) {
                if (s instanceof NavigationEnd) {
                    _this.updateSelectedState();
                }
            });
        }
    }
    Object.defineProperty(NavigationItemDirective.prototype, "items", {
        get: function () {
            var _this = this;
            return (this.contentItems && this.contentItems.filter(function (item) { return item !== _this; })) || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "route", {
        get: function () {
            return this._route;
        },
        set: function (route) {
            this._route = Array.isArray(route) ? route : [route];
            this._urlTree = this.router.createUrlTree(this._route);
        },
        enumerable: true,
        configurable: true
    });
    NavigationItemDirective.prototype.updateSelectedState = function () {
        this.selected = !!this._urlTree && this.router.isActive(this._urlTree, true);
        if (this.selected) {
            this.openParents();
        }
    };
    NavigationItemDirective.prototype.openParents = function () {
        var openParents = function (item) {
            if (item.parent) {
                item.parent.opened = true;
                openParents(item.parent);
            }
        };
        openParents(this);
    };
    NavigationItemDirective.prototype.ngOnDestroy = function () {
        this._subscription && this._subscription.unsubscribe();
    };
    Object.defineProperty(NavigationItemDirective.prototype, "calcPrepIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'left' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "calcAppIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'right' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.appIcon;
        },
        enumerable: true,
        configurable: true
    });
    return NavigationItemDirective;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NavigationItemDirective.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NavigationItemDirective.prototype, "opened", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavigationItemDirective.prototype, "heading", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NavigationItemDirective.prototype, "prepIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NavigationItemDirective.prototype, "appIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NavigationItemDirective.prototype, "class", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NavigationItemDirective.prototype, "href", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NavigationItemDirective.prototype, "route", null);
__decorate([
    ContentChildren(NavigationItemDirective_1),
    __metadata("design:type", QueryList)
], NavigationItemDirective.prototype, "contentItems", void 0);
NavigationItemDirective = NavigationItemDirective_1 = __decorate([
    Directive({
        selector: 'vcl-navitem'
    }),
    __param(1, Inject(forwardRef(function () { return NavigationComponent; }))),
    __param(2, Optional()), __param(2, SkipSelf()), __param(2, Inject(NavigationItemDirective_1)),
    __metadata("design:paramtypes", [Router,
        NavigationComponent,
        NavigationItemDirective])
], NavigationItemDirective);
export { NavigationItemDirective };
var NavigationItemDirective_1;
