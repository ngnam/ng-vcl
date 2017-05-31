import { QueryList, EventEmitter } from '@angular/core';
import { NavigationItem, NavigationItemDirective } from './navigation-item.directive';
import { Router } from "@angular/router";
export declare class NavigationComponent {
    private router;
    ident: string;
    ariaRole: string;
    tabindex: number;
    type: string;
    useRouter: boolean;
    subLevelHintIconClosed: string;
    subLevelHintIconOpened: string;
    subLevelHintIconSide: 'left' | 'right';
    inputItems: QueryList<NavigationItem> | undefined;
    select: EventEmitter<NavigationItem>;
    navigate: EventEmitter<{}>;
    contentItems: QueryList<NavigationItem>;
    constructor(router: Router);
    readonly navigationItems: QueryList<NavigationItem>;
    readonly isVertical: boolean;
    private runItems(cb);
    selectRoute(route: any[], openParents?: boolean): void;
    private selectedItem;
    selectItem(item: NavigationItemDirective): void;
    onSubItemSelect(item: any): void;
}
