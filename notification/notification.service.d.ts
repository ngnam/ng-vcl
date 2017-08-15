import { NotificationOptions, NotificationPosition } from './types';
import { Notification } from './notification';
import { LayerService, LayerRef } from "../layer/index";
export declare class NotificationLayerRef extends LayerRef {
    notifications: Notification[];
}
export declare class NotificationService {
    private ls;
    constructor(ls: LayerService);
    layers: Map<NotificationPosition, NotificationLayerRef>;
    show(text: string, opts?: NotificationOptions): void;
    info(text: string, opts?: NotificationOptions): void;
    success(text: string, opts?: NotificationOptions): void;
    warning(text: string, opts?: NotificationOptions): void;
    error(text: string, opts?: NotificationOptions): void;
    private queue(...opts);
}
