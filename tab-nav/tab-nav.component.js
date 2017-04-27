var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WormholeHost } from './../wormhole/index';
import { Component, ContentChildren, QueryList, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TabComponent } from './tab.component';
var TabNavComponent = (function () {
    function TabNavComponent() {
        this.layout = '';
        this.tabbableClass = '';
        this.tabsClass = '';
        this.tabContentClass = '';
        // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
        this.borders = false;
        this.selectedTabIndex = 0;
        this.selectedTabIndexChange$ = new EventEmitter();
    }
    Object.defineProperty(TabNavComponent.prototype, "tabContent", {
        set: function (tabContent) {
            this.wormholeHost = new WormholeHost(tabContent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabNavComponent.prototype, "selectedTabIndexChange", {
        get: function () {
            return this.selectedTabIndexChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Sets a valid selectedTabIndex
    TabNavComponent.prototype.selectTab = function (tab) {
        var tabs = this.tabs.toArray();
        var tabIdx;
        var tabComp;
        if (tab instanceof TabComponent) {
            tabIdx = tabs.indexOf(tab);
            tabComp = tab;
        }
        else if (typeof tab === 'number' && tabs[tab]) {
            tabIdx = tab;
            tabComp = tabs[tabIdx];
        }
        else {
            tabIdx = -1;
            tabComp = null;
        }
        if (tabIdx >= 0 && tabComp instanceof TabComponent && !tabComp.disabled) {
            this.wormholeHost.clearWormholes();
            this.selectedTabIndex = tabIdx;
            this.selectedTabIndexChange$.emit(tabIdx);
            this.wormholeHost.connectWormhole(tabComp.content);
        }
    };
    TabNavComponent.prototype.ngAfterContentInit = function () {
        this.selectTab(this.selectedTabIndex);
    };
    TabNavComponent.prototype.ngOnDestroy = function () {
        this.wormholeHost.clearWormholes();
    };
    return TabNavComponent;
}());
__decorate([
    ViewChild('tabContent', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef),
    __metadata("design:paramtypes", [ViewContainerRef])
], TabNavComponent.prototype, "tabContent", null);
__decorate([
    ContentChildren(TabComponent),
    __metadata("design:type", QueryList)
], TabNavComponent.prototype, "tabs", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabNavComponent.prototype, "layout", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabNavComponent.prototype, "tabbableClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabNavComponent.prototype, "tabsClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabNavComponent.prototype, "tabContentClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TabNavComponent.prototype, "borders", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TabNavComponent.prototype, "selectedTabIndex", void 0);
__decorate([
    Output(),
    __metadata("design:type", Observable),
    __metadata("design:paramtypes", [])
], TabNavComponent.prototype, "selectedTabIndexChange", null);
TabNavComponent = __decorate([
    Component({
        selector: 'vcl-tab-nav',
        template: "<div class=\"vclTabbable {{tabbableClass}}\" [class.vclTabsLeft]=\"layout==='left'\" [class.vclTabsRight]=\"layout==='right'\"> <div class=\"vclTabs {{tabsClass}}\" [class.vclTabStyleUni]=\"!!borders\" role=\"tablist\"> <div *ngFor=\"let tab of tabs; let i = index\" class=\"vclTab {{tab.tabClass}}\" role=\"tab\" [class.vclDisabled]=\"tab.disabled\" [class.vclSelected]=\"selectedTabIndex===i\" [class.aria-selected]=\"selectedTabIndex===i\" (tap)=\"selectTab(tab)\"> <span class=\"vclTabLabel\">  <wormhole [connect]=\"tab.label\"></wormhole> </span> </div> </div> <div class=\"vclTabContent {{tabContentClass}}\" [class.vclNoBorder]=\"!borders\"> <div role=\"tabpanel\" class=\"vclTabPanel\"> <div #tabContent></div> </div> <div role=\"tabpanel\" class=\"vclTabPanel\"> <ng-content></ng-content> </div> </div> </div> "
    })
], TabNavComponent);
export { TabNavComponent };
