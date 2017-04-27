import { Observable } from 'rxjs/Observable';
import { AlertOptions, AlertResult } from './types';
import { AlertLayer } from './alert.component';
export declare class AlertService {
    private alertLayerRef;
    constructor(alertLayerRef: AlertLayer);
    alert(text: string, opts?: AlertOptions): Observable<AlertResult>;
    info(text: string, opts?: AlertOptions): Observable<AlertResult>;
    success(text: string, opts?: AlertOptions): Observable<AlertResult>;
    warning(text: string, opts?: AlertOptions): Observable<AlertResult>;
    error(text: string, opts?: AlertOptions): Observable<AlertResult>;
    question(text: string, opts?: AlertOptions): Observable<AlertResult>;
    open(...opts: AlertOptions[]): Observable<AlertResult>;
    close(): void;
    noop: () => void;
}
