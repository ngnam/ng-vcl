import { NotificationOptions } from './types';
import { Notification } from './notification';
import { NotificationLayerTopRight, NotificationLayerBottomRight, NotificationLayerBottom, NotificationLayerBottomLeft, NotificationLayerTopLeft, NotificationLayerTop } from './notification.layer';
export declare class NotificationService {
    private notificationLayerTopRightRef;
    private notificationLayerBottomRightRef;
    private notificationLayerBottomRef;
    private notificationLayerBottomLeftRef;
    private notificationLayerTopLeftRef;
    private notificationLayerTopRef;
    constructor(notificationLayerTopRightRef: NotificationLayerTopRight, notificationLayerBottomRightRef: NotificationLayerBottomRight, notificationLayerBottomRef: NotificationLayerBottom, notificationLayerBottomLeftRef: NotificationLayerBottomLeft, notificationLayerTopLeftRef: NotificationLayerTopLeft, notificationLayerTopRef: NotificationLayerTop);
    show(text: string, opts?: NotificationOptions): Notification;
    info(text: string, opts?: NotificationOptions): Notification;
    success(text: string, opts?: NotificationOptions): Notification;
    warning(text: string, opts?: NotificationOptions): Notification;
    error(text: string, opts?: NotificationOptions): Notification;
    private queue(...opts);
}
