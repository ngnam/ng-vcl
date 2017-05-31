var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ElementRef, trigger, HostListener, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { ObservableComponent } from "../core/index";
export var AttachmentX = {
    Left: 'left',
    Center: 'center',
    Right: 'right',
};
export var AttachmentY = {
    Top: 'top',
    Center: 'center',
    Bottom: 'bottom',
};
var Dimension = {
    Width: 'width',
    Height: 'height',
};
var PopoverState = {
    Visible: 'visible',
    Void: 'void',
};
var PopoverComponent = PopoverComponent_1 = (function (_super) {
    __extends(PopoverComponent, _super);
    function PopoverComponent(me) {
        var _this = _super.call(this) || this;
        _this.me = me;
        _this.targetX = AttachmentX.Left;
        _this.targetY = AttachmentY.Bottom;
        _this.attachmentX = AttachmentX.Left;
        _this.attachmentY = AttachmentY.Top;
        _this._visible = false;
        _this.visibleChange = new EventEmitter();
        _this.translateX = 1;
        _this.translateY = 0;
        _this.visibility = 'visible';
        _this.observeChanges('target').subscribe(function () {
            var tag = _this.tag + ".[target]$";
            _this.setTag();
            // if (this.debug) console.log(tag, 'this.target:', this.target);
            // if (this.debug) console.log(tag, 'this.tag:', this.tag);
        });
        var observe = ['target', 'targetX', 'targetY', 'attachmentX', 'attachmentY'];
        _this.observeChanges.apply(_this, observe).subscribe(function () {
            var tag = _this.tag + ".[" + observe.join(', ') + "]$";
            // if (this.debug) console.log(tag, 'this.target:', this.target);
            _this.reposition();
        });
        return _this;
    }
    Object.defineProperty(PopoverComponent.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            var _this = this;
            // We have to wait one runloop before calling reposition(), so the element is rendered and the right bounds can be determined.
            // Also hide the popover via the visibility-style. This avoids flashing up on the wrong position.
            if (!this._visible && value) {
                this.visibility = 'hidden';
                setTimeout(function () {
                    _this.reposition();
                    _this.visibility = 'visible';
                }, 0);
            }
            else {
                this.visibility = 'visible';
            }
            this._visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "hidden", {
        get: function () {
            return !this.visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "transform", {
        get: function () {
            return "translate(" + String(this.translateX) + "px, " + String(this.translateY) + "px)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "popoverState", {
        get: function () {
            return this.visible ? PopoverState.Visible : PopoverState.Void;
        },
        enumerable: true,
        configurable: true
    });
    PopoverComponent.prototype.setTag = function () {
        this.tag = PopoverComponent_1.Tag + "." + this.target;
    };
    PopoverComponent.prototype.ngOnInit = function () {
        var tag = this.tag + ".ngOnInit()";
        if (this.debug)
            console.log(tag, 'this:', this);
        this.setTag();
    };
    PopoverComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.reposition(); });
    };
    PopoverComponent.prototype.ngOnChanges = function (changes) {
        var tag = this.tag + ".ngOnChanges()";
        if (this.debug)
            console.log(tag, 'changes:', changes);
        _super.prototype.ngOnChanges.call(this, changes);
    };
    PopoverComponent.prototype.onWindowResize = function (ev) {
        this.reposition();
    };
    PopoverComponent.prototype.getTargetPosition = function () {
        var tag = this.tag + ".getTargetPosition()";
        var targetEl;
        if (typeof this.target === 'string') {
            targetEl = document.querySelector(this.target);
        }
        else if (this.target instanceof Element) {
            targetEl = this.target;
        }
        else if (this.target instanceof ElementRef && this.target.nativeElement) {
            targetEl = this.target.nativeElement;
        }
        if (this.debug)
            console.log(tag, 'targetEl:', targetEl);
        return targetEl instanceof Element ? targetEl.getBoundingClientRect() : undefined;
    };
    PopoverComponent.prototype.getAttachmentPosition = function () {
        return this.me.nativeElement.getBoundingClientRect();
    };
    PopoverComponent.prototype.open = function () {
        if (this.visible)
            return;
        this.visible = true;
        this.visibleChange.emit(this.visible);
    };
    PopoverComponent.prototype.close = function () {
        if (!this.visible)
            return;
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    PopoverComponent.prototype.toggle = function () {
        this.visible ? this.close() : this.open();
    };
    PopoverComponent.prototype.reposition = function () {
        var tag = this.tag + ".reposition()";
        // if (this.debug) console.log(tag, 'this:', this);
        var targetPos = this.getTargetPosition();
        if (this.debug)
            console.log(tag, 'targetPos:', targetPos);
        if (!this.visible || !targetPos)
            return;
        var ownPos = this.getAttachmentPosition();
        if (this.debug)
            console.log(tag, 'ownPos:', ownPos);
        var mustX = this.targetX === AttachmentX.Center ?
            targetPos[AttachmentX.Left] + targetPos[Dimension.Width] / 2 :
            targetPos[this.targetX];
        var isX = this.attachmentX === AttachmentX.Center ?
            ownPos[AttachmentX.Left] + ownPos[Dimension.Width] / 2 :
            ownPos[this.attachmentX];
        var diffX = mustX - isX;
        this.translateX = this.translateX + diffX;
        var mustY = this.targetY === AttachmentY.Center ?
            targetPos[AttachmentY.Top] - targetPos[Dimension.Height] / 2 :
            targetPos[this.targetY];
        var isY = this.attachmentY === AttachmentY.Center ?
            ownPos[AttachmentY.Top] - ownPos[Dimension.Height] / 2 :
            ownPos[this.attachmentY];
        var diffY = mustY - isY;
        if (this.debug)
            console.log(tag, {
                targetPos: targetPos,
                ownPos: ownPos,
                mustX: mustX,
                isX: isX,
                diffX: diffX,
                mustY: mustY,
                isY: isY,
                diffY: diffY
            });
        this.translateY = this.translateY + diffY;
    };
    return PopoverComponent;
}(ObservableComponent));
PopoverComponent.Tag = 'PopoverComponent';
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PopoverComponent.prototype, "debug", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PopoverComponent.prototype, "target", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverComponent.prototype, "targetX", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverComponent.prototype, "targetY", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverComponent.prototype, "attachmentX", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverComponent.prototype, "attachmentY", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PopoverComponent.prototype, "visible", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PopoverComponent.prototype, "visibleChange", void 0);
__decorate([
    HostBinding('class.vclLayoutHidden'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], PopoverComponent.prototype, "hidden", null);
__decorate([
    HostBinding('style.visibility'),
    __metadata("design:type", String)
], PopoverComponent.prototype, "visibility", void 0);
__decorate([
    HostBinding('style.transform'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], PopoverComponent.prototype, "transform", null);
__decorate([
    HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PopoverComponent.prototype, "onWindowResize", null);
PopoverComponent = PopoverComponent_1 = __decorate([
    Component({
        selector: 'vcl-popover',
        template: '<ng-content></ng-content>',
        changeDetection: ChangeDetectionStrategy.OnPush,
        // The close/open animation is set in the application itself through:
        // setAnimations(PopoverComponent, [
        //   trigger('popoverState', [
        //     [..]
        //   ]);
        animations: [trigger('popoverState', [])],
        host: {
            '[@popoverState]': 'popoverState',
            '[class.vclPopOver]': 'true',
            '[style.position]': '"absolute"'
        }
    }),
    __metadata("design:paramtypes", [ElementRef])
], PopoverComponent);
export { PopoverComponent };
var PopoverComponent_1;
