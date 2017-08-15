import { QueryList } from "@angular/core";
import { NavigationComponent } from './navigation.component';
import { Router } from "@angular/router";
export interface NavigationItem {
    label: string;
    selected?: boolean;
    opened?: boolean;
    heading: boolean;
    prepIcon?: string;
    appIcon?: string;
    class?: string;
    items: NavigationItem[] | undefined;
    href?: string;
    route?: any[];
}
export declare class NavigationItemDirective implements NavigationItem {
    private router;
    private nav;
    parent: NavigationItemDirective;
    private _route;
    private _urlTree;
    private _subscription;
    label: string;
    readonly items: any;
    selected: boolean;
    opened: boolean;
    heading: boolean;
    prepIcon: string | undefined;
    appIcon: string | undefined;
    class: string | undefined;
    href: string | undefined;
    exactRoute: boolean;
    route: any[] | undefined;
    contentItems: QueryList<NavigationItemDirective>;
    constructor(router: Router, nav: NavigationComponent, parent: NavigationItemDirective);
    private updateSelectedState();
    openParents(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    readonly calcPrepIcon: string | undefined;
    readonly calcAppIcon: string | undefined;
}
