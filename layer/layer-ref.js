import { Subject } from 'rxjs/Subject';
var LayerRef = (function () {
    function LayerRef() {
        this.base = 'default';
        this.modal = false;
        this.transparent = false;
        this.fill = false;
        this.stickToBottom = false;
        this.gutterPadding = false;
        this.stateChange = new Subject();
        this.state$ = this.stateChange.asObservable();
    }
    LayerRef.prototype.open = function (attrs) {
        this.visible = true;
        this.attrs = attrs;
        this.stateChange.next({ attrs: attrs, visible: true });
        if (this.results) {
            this.results.complete();
        }
        this.results = new Subject();
        return this.results.asObservable();
    };
    LayerRef.prototype.close = function (data) {
        this.visible = false;
        this.stateChange.next({ visible: false });
        if (this.results) {
            if (data !== undefined) {
                this.results.next(data);
            }
            this.results.complete();
            this.results = undefined;
        }
    };
    LayerRef.prototype.closeWithError = function (data) {
        this.visible = false;
        this.stateChange.next({ visible: false });
        if (this.results) {
            this.results.error(data);
            this.results = undefined;
        }
    };
    LayerRef.prototype.send = function (data) {
        if (data !== undefined && this.results) {
            this.results.next(data);
        }
    };
    LayerRef.prototype.offClick = function () {
        if (!this.modal) {
            this.close();
        }
    };
    return LayerRef;
}());
export { LayerRef };
