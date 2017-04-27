import { LayerRef } from './../layer/index';
import { NotificationComponent } from './notification.component';
import { Notification } from './notification';
export declare abstract class NotificationLayer<T> extends LayerRef {
    transparent: boolean;
    abstract reverse: boolean;
    notifications: Notification[];
    add(notification: Notification): Notification;
    remove(notification: Notification): void;
    offClick(): void;
}
export declare class NotificationLayerTopRight extends NotificationLayer<NotificationComponent> {
    customClass: string;
    reverse: boolean;
}
export declare class NotificationLayerTop extends NotificationLayer<NotificationComponent> {
    customClass: 'vclLayerNotificationTop';
    reverse: boolean;
}
export declare class NotificationLayerTopLeft extends NotificationLayer<NotificationComponent> {
    customClass: string;
    reverse: boolean;
}
export declare class NotificationLayerBottomRight extends NotificationLayer<NotificationComponent> {
    customClass: string;
    reverse: boolean;
}
export declare class NotificationLayerBottom extends NotificationLayer<NotificationComponent> {
    customClass: string;
    reverse: boolean;
}
export declare class NotificationLayerBottomLeft extends NotificationLayer<NotificationComponent> {
    customClass: string;
    reverse: boolean;
}
