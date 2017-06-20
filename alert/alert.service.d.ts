import { Observable } from 'rxjs/Observable';
import { AlertOptions, AlertResult } from './types';
import { LayerService, LayerRef, LayerResult } from "@ng-vcl/ng-vcl";
export declare class AlertService {
    private ls;
    constructor(ls: LayerService);
    currentLayer: LayerRef | undefined;
    alert(text: string, opts?: AlertOptions): Observable<AlertResult>;
    info(text: string, opts?: AlertOptions): Observable<AlertResult>;
    success(text: string, opts?: AlertOptions): Observable<AlertResult>;
    warning(text: string, opts?: AlertOptions): Observable<AlertResult>;
    error(text: string, opts?: AlertOptions): Observable<AlertResult>;
    question(text: string, opts?: AlertOptions): Observable<AlertResult>;
    open(...opts: AlertOptions[]): LayerResult<AlertResult>;
    create(...opts: AlertOptions[]): LayerRef;
    noop: () => void;
}
