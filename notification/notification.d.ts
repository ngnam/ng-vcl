import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/never';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/skipWhile';
import { Subject } from 'rxjs/Subject';
import { NotificationOptions } from './types';
export declare class Notification extends Observable<any> {
    private opts;
    closeSubject: Subject<{}>;
    constructor(opts: NotificationOptions);
    state: string;
    close(): void;
    mouseEnter(): void;
    mouseLeave(): void;
    readonly text: string | undefined;
    readonly html: boolean | undefined;
    readonly showCloseButton: boolean | undefined;
    readonly backgroundColor: string | undefined;
    readonly textColor: string | undefined;
    readonly layerClass: string;
    readonly iconClass: string;
    readonly calculatedTimeout: number | null;
}
