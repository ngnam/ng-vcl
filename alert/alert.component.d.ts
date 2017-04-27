import { ChangeDetectorRef } from '@angular/core';
import { LayerRef, LayerService } from './../layer/index';
import { AlertOptions } from './types';
export declare class AlertComponent {
    private layerService;
    private cdRef;
    constructor(alertLayer: AlertLayer, layerService: LayerService, cdRef: ChangeDetectorRef);
    alertLayer: AlertLayer;
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
    offClick(): void;
    close(reason: string): void;
    valueChange(value: any): void;
}
export declare class AlertLayer extends LayerRef {
    modal: boolean;
    transparent: boolean;
    dismiss(reason: string): void;
    readonly alert: AlertOptions;
    offClick(): void;
}
