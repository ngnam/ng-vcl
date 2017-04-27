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
    type?: NotificationType;
    showCloseButton?: boolean;
    position?: NotificationPosition;
    timeout?: number | boolean;
    backgroundColor?: string;
    textColor?: string;
}
export declare const NOTIFICATION_DEFAULTS: NotificationOptions;
export declare const POSITION_CLASS_MAP: {
    [x: number]: string;
};
export declare const TYPE_CLASS_MAP: {
    [x: number]: {
        notificationClass: string;
        iconClass: string;
    };
};
