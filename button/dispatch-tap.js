function dispatch(el, eventType) {
    var x = 10, y = 10;
    var msEventType = window.MSPointerEvent &&
        eventType.replace(/pointer([a-z])/, function (_, a) { return 'MSPointer' + a.toUpperCase(); });
    var event = document.createEvent('Event');
    event.initEvent(msEventType || eventType, true, true);
    event.getCurrentPoint = function () { return ({ x: x, y: y }); };
    event.setPointerCapture = event.releasePointerCapture = function () { };
    event.pointerId = 0;
    event.buttons = 1;
    event.pageX = x;
    event.pageY = y;
    event.clientX = x;
    event.clientY = y;
    event.screenX = x;
    event.screenY = y;
    event.pointerType = 'touch';
    event.identifier = 0;
    el.dispatchEvent(event);
}
export function dispatchTap(el) {
    dispatch(el, 'pointerdown');
    setTimeout(function () {
        dispatch(el, 'pointerup');
    }, 100);
}
