import { PipeTransform, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
export declare class L10nPipe implements PipeTransform, OnDestroy {
    private l10n;
    key: string;
    args: string[];
    value: string;
    subscription: Subscription | null;
    constructor(l10n: any);
    compare(key: any, ...args: any[]): boolean;
    transform(key: string, ...args: string[]): any;
    private dispose();
    ngOnDestroy(): void;
}
