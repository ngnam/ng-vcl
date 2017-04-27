import { Observable } from 'rxjs/Observable';
export interface LayerAttributes {
    [key: string]: any;
}
export interface LayerOptions {
    base?: string;
    modal?: boolean;
    transparent?: boolean;
    fill?: boolean;
    stickToBottom?: boolean;
    gutterPadding?: boolean;
    customClass?: string;
}
export declare abstract class LayerRef implements LayerOptions {
    base: string;
    modal: boolean;
    transparent: boolean;
    fill: boolean;
    stickToBottom: boolean;
    gutterPadding: boolean;
    customClass?: string;
    visible: boolean;
    attrs: LayerAttributes | undefined;
    private results;
    private stateChange;
    state$: Observable<{
        attrs?: LayerAttributes | undefined;
        visible: boolean;
    }>;
    open(attrs?: LayerAttributes): Observable<any>;
    close(data?: any): void;
    closeWithError(data?: any): void;
    send(data: any): void;
    offClick(): void;
}
