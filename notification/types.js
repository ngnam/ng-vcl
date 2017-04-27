export var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["None"] = 0] = "None";
    NotificationType[NotificationType["Info"] = 1] = "Info";
    NotificationType[NotificationType["Success"] = 2] = "Success";
    NotificationType[NotificationType["Warning"] = 3] = "Warning";
    NotificationType[NotificationType["Error"] = 4] = "Error";
})(NotificationType || (NotificationType = {}));
export var NotificationPosition;
(function (NotificationPosition) {
    NotificationPosition[NotificationPosition["TopRight"] = 0] = "TopRight";
    NotificationPosition[NotificationPosition["Top"] = 1] = "Top";
    NotificationPosition[NotificationPosition["TopLeft"] = 2] = "TopLeft";
    NotificationPosition[NotificationPosition["BottomRight"] = 3] = "BottomRight";
    NotificationPosition[NotificationPosition["Bottom"] = 4] = "Bottom";
    NotificationPosition[NotificationPosition["BottomLeft"] = 5] = "BottomLeft";
})(NotificationPosition || (NotificationPosition = {}));
export var NOTIFICATION_DEFAULTS = {
    html: false,
    type: NotificationType.None,
    position: NotificationPosition.TopRight,
    showCloseButton: true
};
export var POSITION_CLASS_MAP = (_a = {},
    _a[NotificationPosition.TopRight] = 'vclLayerNotificationTopRight',
    _a[NotificationPosition.Top] = 'vclLayerNotificationTop',
    _a[NotificationPosition.TopLeft] = 'vclLayerNotificationTopLeft',
    _a[NotificationPosition.BottomRight] = 'vclLayerNotificationBottomRight',
    _a[NotificationPosition.Bottom] = 'vclLayerNotificationBottom',
    _a[NotificationPosition.BottomLeft] = 'vclLayerNotificationBottomLeft',
    _a);
export var TYPE_CLASS_MAP = (_b = {},
    _b[NotificationType.None] = {
        notificationClass: '',
        iconClass: ''
    },
    _b[NotificationType.Info] = {
        notificationClass: 'vclInfo',
        iconClass: 'fa fa-info-circle'
    },
    _b[NotificationType.Success] = {
        notificationClass: 'vclSuccess',
        iconClass: 'fa fa-check-circle'
    },
    _b[NotificationType.Warning] = {
        notificationClass: 'vclWarning',
        iconClass: 'fa fa-warning'
    },
    _b[NotificationType.Error] = {
        notificationClass: 'vclError',
        iconClass: 'fa fa-exclamation-circle'
    },
    _b);
var _a, _b;
