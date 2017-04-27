import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { L10nService } from '../l10n/index';
import { ObservableComponent } from '../core/index';
export declare class LinkComponent extends ObservableComponent {
    private l10n;
    href: string | undefined;
    label: string | undefined;
    title: string | undefined;
    prepIcon: string | undefined;
    appIcon: string | undefined;
    scheme: string | undefined;
    disabled: boolean | undefined;
    locLabel$: Observable<string>;
    locTitle$: Observable<string>;
    locTitle: string;
    locLabel: string;
    locTitleSub: Subscription | undefined;
    readonly styleCursor: string;
    readonly attrHref: string | null;
    readonly useIcogram: string | undefined;
    constructor(l10n: L10nService);
    ngOnDestroy(): void;
}
