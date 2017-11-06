import { WormholeAttributes } from '../wormhole/wormhole';
export declare enum NotificationType {
    None = 0,
    Info = 1,
    Success = 2,
    Warning = 3,
    Error = 4,
}
export declare enum NotificationPosition {
    TopRight = 0,
    Top = 1,
    TopLeft = 2,
    BottomRight = 3,
    Bottom = 4,
    BottomLeft = 5,
}
export interface NotificationOptions {
    text?: string;
    html?: boolean;
    contentComponentDetails?: {
        contentComponentClass: any;
        attributes?: WormholeAttributes;
    };
    type?: NotificationType;
    showCloseButton?: boolean;
    position?: NotificationPosition;
    timeout?: number | boolean;
    backgroundColor?: string;
    textColor?: string;
}
export declare const NOTIFICATION_DEFAULTS: NotificationOptions;
export declare const TYPE_CLASS_MAP: {
    [NotificationType.None]: {
        notificationClass: string;
        iconClass: string;
    };
    [NotificationType.Info]: {
        notificationClass: string;
        iconClass: string;
    };
    [NotificationType.Success]: {
        notificationClass: string;
        iconClass: string;
    };
    [NotificationType.Warning]: {
        notificationClass: string;
        iconClass: string;
    };
    [NotificationType.Error]: {
        notificationClass: string;
        iconClass: string;
    };
};
export declare const POSITION_MAP: {
    [NotificationPosition.TopRight]: {
        class: string;
        reverse: boolean;
    };
    [NotificationPosition.Top]: {
        class: string;
        reverse: boolean;
    };
    [NotificationPosition.TopLeft]: {
        class: string;
        reverse: boolean;
    };
    [NotificationPosition.BottomRight]: {
        class: string;
        reverse: boolean;
    };
    [NotificationPosition.Bottom]: {
        class: string;
        reverse: boolean;
    };
    [NotificationPosition.BottomLeft]: {
        class: string;
        reverse: boolean;
    };
};
