import { ChangeDetectorRef } from '@angular/core';
import { LayerRef, LayerService } from './../layer/index';
import { AlertOptions, AlertError } from './types';
export declare function dismiss(layer: LayerRef, err: AlertError | any): void;
export declare class AlertComponent {
    private alertLayer;
    private layerService;
    private cdRef;
    constructor(alertLayer: LayerRef, layerService: LayerService, cdRef: ChangeDetectorRef);
    alert: AlertOptions;
    value: any;
    validationError: string;
    onKeyUp(ev: KeyboardEvent): void;
    readonly alertClass: string;
    readonly iconClass: string;
    readonly titleAlignmentClass: string;
    readonly iconAlignmentClass: string;
    readonly contentAlignmentClass: string;
    readonly buttonAlignmentClass: string;
    confirm(): void;
    cancel(reason: string): void;
    close(reason: string): void;
    valueChange(value: any): void;
}
