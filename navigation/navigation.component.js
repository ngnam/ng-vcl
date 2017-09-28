var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChildren, QueryList, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { NavigationItemDirective } from './navigation-item.directive';
import { Router } from "@angular/router";
// import { containsTree } from "@angular/router/url_tree";
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
        this.type = 'horizontal';
        this.useRouter = false;
        this.subLevelHintIconClosed = 'fa:chevron-right';
        this.subLevelHintIconOpened = 'fa:chevron-down';
        this.subLevelHintIconSide = 'right';
        this.select = new EventEmitter();
        this.navigate = new EventEmitter();
    }
    Object.defineProperty(NavigationComponent.prototype, "navigationItems", {
        get: function () {
            return this.inputItems || this.contentItems || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isVertical", {
        get: function () {
            return this.type === 'vertical';
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.runItems = function (cb) {
        var runItems = function (items) {
            items.forEach(function (item) {
                cb(item);
                if (item.items) {
                    runItems(item.items);
                }
            });
        };
        runItems(this.navigationItems);
    };
    NavigationComponent.prototype.selectRoute = function (route, openParents) {
        var _this = this;
        if (openParents === void 0) { openParents = true; }
        this.runItems(function (item) {
            if (item.route) {
                // TODO should use containsTree from @angular/router for comparison
                // currently not exposed as public api
                item.selected = item.route.length === route.length && item.route.every(function (v, i) { return v === route[i]; });
                if (item.selected) {
                    _this.selectedItem = item;
                    if (openParents) {
                        item.openParents();
                    }
                }
            }
        });
    };
    NavigationComponent.prototype.selectItem = function (item) {
        if (item.items && item.items.length > 0) {
            item.opened = !item.opened;
            return;
        }
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        item.selected = true;
        this.selectedItem = item;
        if (item.href) {
            window.location.href = item.href;
        }
        else if (item.route) {
            if (this.useRouter) {
                this.router.navigate(item.route);
            }
            else {
                this.navigate.emit(item.route);
            }
        }
        this.select.emit(item);
    };
    NavigationComponent.prototype.onSubItemSelect = function (item) {
        this.selectItem(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "ident", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "ariaRole", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NavigationComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "useRouter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconClosed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconOpened", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconSide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "inputItems", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "select", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "navigate", void 0);
    __decorate([
        ContentChildren(NavigationItemDirective),
        __metadata("design:type", QueryList)
    ], NavigationComponent.prototype, "contentItems", void 0);
    __decorate([
        HostBinding('class.vclVertical'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NavigationComponent.prototype, "isVertical", null);
    NavigationComponent = __decorate([
        Component({
            selector: 'vcl-navigation',
            host: {
                '[class.vclNavigation]': 'true'
            },
            template: "  <ul> <li *ngFor=\"let item of navigationItems\" [class.vclSelected]=\"item.selectable && item.selected\" [class.vclOpen]=\"item.opened\" [class.vclClose]=\"!item.opened\" [class.vclNavigationHeading]=\"item.heading\" [class.vclNavigationItem]=\"!item.heading\" [attr.aria-selected]=\"item.selectable && item.selected\" [attr.role]=\"item.heading && 'sectionhead' || ariaRole\" [attr.tabindex]=\"tabindex\" [ngClass]=\"item.class\" > <span *ngIf=\"item.heading\"> {{item.label | loc}} </span> <a vcl-link class=\"vclNavigationItemLabel\" *ngIf=\"!item.heading\" [label]=\"item.label | loc\" [prepIcon]=\"item.calcPrepIcon\" [appIcon]=\"item.calcAppIcon\" (click)=\"selectItem(item)\"> </a> <vcl-navigation *ngIf=\"item.items && item.items.length > 0\" [inputItems]=\"item.items\" [type]=\"type\" [useRouter]=\"useRouter\" [subLevelHintIconOpened]=\"subLevelHintIconOpened\" [subLevelHintIconClosed]=\"subLevelHintIconClosed\" [subLevelHintIconSide]=\"subLevelHintIconSide\" (select)=\"onSubItemSelect($event)\"> </vcl-navigation> </li> </ul> ",
        }),
        __metadata("design:paramtypes", [Router])
    ], NavigationComponent);
    return NavigationComponent;
}());
export { NavigationComponent };
