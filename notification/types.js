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
export var TYPE_CLASS_MAP = (_a = {},
    _a[NotificationType.None] = {
        notificationClass: '',
        iconClass: ''
    },
    _a[NotificationType.Info] = {
        notificationClass: 'vclInfo',
        iconClass: 'fa fa-info-circle'
    },
    _a[NotificationType.Success] = {
        notificationClass: 'vclSuccess',
        iconClass: 'fa fa-check-circle'
    },
    _a[NotificationType.Warning] = {
        notificationClass: 'vclWarning',
        iconClass: 'fa fa-warning'
    },
    _a[NotificationType.Error] = {
        notificationClass: 'vclError',
        iconClass: 'fa fa-exclamation-circle'
    },
    _a);
export var POSITION_MAP = (_b = {},
    _b[NotificationPosition.TopRight] = {
        class: 'vclLayerNotificationTopRight',
        reverse: true
    },
    _b[NotificationPosition.Top] = {
        class: 'vclLayerNotificationTop',
        reverse: true,
    },
    _b[NotificationPosition.TopLeft] = {
        class: 'vclLayerNotificationTopLeft',
        reverse: true
    },
    _b[NotificationPosition.BottomRight] = {
        class: 'vclLayerNotificationBottomRight',
        reverse: false
    },
    _b[NotificationPosition.Bottom] = {
        class: 'vclLayerNotificationBottom',
        reverse: false
    },
    _b[NotificationPosition.BottomLeft] = {
        class: 'vclLayerNotificationBottomLeft',
        reverse: false
    },
    _b);
var _a, _b;
