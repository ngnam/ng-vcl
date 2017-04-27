import { WormholeHost } from './../wormhole/index';
import { QueryList, EventEmitter, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TabComponent } from './tab.component';
export declare class TabNavComponent {
    wormholeHost: WormholeHost;
    tabContent: ViewContainerRef;
    tabs: QueryList<TabComponent>;
    layout: string;
    tabbableClass: string;
    tabsClass: string;
    tabContentClass: string;
    borders: boolean;
    selectedTabIndex: number;
    selectedTabIndexChange$: EventEmitter<number>;
    readonly selectedTabIndexChange: Observable<number>;
    selectTab(tab: number | TabComponent): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
