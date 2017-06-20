import { LayerRef } from './../layer/index';
import { NotificationComponent } from './notification.component';
import { Notification } from './notification';
export declare abstract class NotificationLayer<T> extends LayerRef {
    abstract reverse: boolean;
    notifications: Notification[];
    add(notification: Notification): Notification;
    remove(notification: Notification): void;
}
export declare function noop(): void;
export declare class NotificationLayerTopRight extends NotificationLayer<NotificationComponent> {
    reverse: true;
}
export declare class NotificationLayerTop extends NotificationLayer<NotificationComponent> {
    reverse: true;
}
export declare class NotificationLayerTopLeft extends NotificationLayer<NotificationComponent> {
    reverse: true;
}
export declare class NotificationLayerBottomRight extends NotificationLayer<NotificationComponent> {
    reverse: false;
}
export declare class NotificationLayerBottom extends NotificationLayer<NotificationComponent> {
    reverse: false;
}
export declare class NotificationLayerBottomLeft extends NotificationLayer<NotificationComponent> {
    reverse: false;
}
