import { ElementRef } from '@angular/core';
export declare class SortIconComponent {
    private document;
    private element;
    constructor(document: any, element: ElementRef);
    sort: -1 | 0 | 1;
    faIcon: 'fa-sort' | 'fa-sort-up' | 'fa-sort-down';
    ChangeSortOrder(order: -1 | 0 | 1): void;
}
