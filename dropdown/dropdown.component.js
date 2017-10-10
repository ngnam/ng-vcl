var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, forwardRef, ElementRef, ViewChild, ContentChildren, QueryList, ChangeDetectorRef, OpaqueToken, Optional, Inject, } from '@angular/core';
import { AnimationBuilder } from "@angular/animations";
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownOption } from "./dropdown-option.component";
import { MetalistComponent, SelectionMode } from "../metalist/index";
export var DropdownState;
(function (DropdownState) {
    DropdownState[DropdownState["Expanded"] = 0] = "Expanded";
    DropdownState[DropdownState["Closed"] = 1] = "Closed";
    DropdownState[DropdownState["Expanding"] = 2] = "Expanding";
    DropdownState[DropdownState["Closing"] = 3] = "Closing";
})(DropdownState || (DropdownState = {}));
export var DROPDOWN_ANIMATIONS = new OpaqueToken('@ng-vcl/ng-vcl#dropdown_animations');
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DropdownComponent; }),
    multi: true
};
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(elementRef, cdRef, builder, animations) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.builder = builder;
        this.animations = animations;
        this.tabindex = 0;
        this.state = DropdownState.Expanded;
        this.willClose = new EventEmitter();
        this.willExpand = new EventEmitter();
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.selectionMode = SelectionMode.Single;
        this.disabled = false;
        this.listenKeys = true;
        this.change = new EventEmitter();
        this.focused = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
        this.DropdownState = DropdownState;
    }
    Object.defineProperty(DropdownComponent.prototype, "expanded", {
        get: function () {
            return (this.state === DropdownState.Expanding || this.state === DropdownState.Expanded);
        },
        set: function (value) {
            if (value) {
                this.expand();
            }
            else {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "mode", {
        get: function () {
            return this.selectionMode === SelectionMode.Multiple ? 'multiple' : 'single';
        },
        // String alias for selectionMode
        set: function (value) {
            this.selectionMode = value === 'multiple' ? SelectionMode.Multiple : SelectionMode.Single;
        },
        enumerable: true,
        configurable: true
    });
    DropdownComponent.prototype.expand = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var player_1;
            return __generator(this, function (_a) {
                if (this.state === DropdownState.Expanded || this.state === DropdownState.Expanding) {
                    return [2 /*return*/];
                }
                this.state = DropdownState.Expanding;
                this.willExpand.emit();
                if (this.enterAnimationFactory && this.elementRef) {
                    player_1 = this.enterAnimationFactory.create(this.elementRef.nativeElement);
                    player_1.onDone(function () {
                        player_1.destroy();
                        _this.state = DropdownState.Expanded;
                    });
                    player_1.play();
                }
                else {
                    this.state = DropdownState.Expanded;
                }
                return [2 /*return*/];
            });
        });
    };
    DropdownComponent.prototype.close = function () {
        var _this = this;
        if (this.state === DropdownState.Closed || this.state === DropdownState.Closing) {
            return;
        }
        this.state = DropdownState.Closing;
        this.willClose.emit();
        if (this.leaveAnimationFactory && this.elementRef) {
            var player_2 = this.leaveAnimationFactory.create(this.elementRef.nativeElement);
            player_2.onDone(function () {
                player_2.destroy();
                _this.state = DropdownState.Closed;
                _this.cdRef.markForCheck();
            });
            player_2.play();
        }
        else {
            this.state = DropdownState.Closed;
        }
    };
    DropdownComponent.prototype.scrollToMarked = function () {
        return __awaiter(this, void 0, void 0, function () {
            var itemEl, scrollPos, boxHeight, itemHeight, itemOffset, scrollToItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 0); })];
                    case 1:
                        _a.sent();
                        if (this.listbox.nativeElement) {
                            itemEl = this.listbox.nativeElement.querySelectorAll('.vclHighlighted')[0];
                            if (!itemEl) {
                                return [2 /*return*/];
                            }
                            scrollPos = this.listbox.nativeElement.scrollTop;
                            boxHeight = this.listbox.nativeElement.offsetHeight;
                            itemHeight = itemEl.offsetHeight;
                            itemOffset = itemEl.offsetTop;
                            scrollToItem = ((itemOffset + itemHeight) > (scrollPos + boxHeight)) // item below scroll bounds
                                || (itemOffset < scrollPos);
                            if (scrollToItem) {
                                // TODO enable
                                // this.listbox.nativeElement.scrollTop = itemOffset;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DropdownComponent.prototype.onMetalistItemTap = function (metaItem) {
        this.metalist.select(metaItem);
        this.onTouched();
    };
    DropdownComponent.prototype.onMetalistKeydown = function (ev) {
        if (this.listenKeys) {
            var prevent = true;
            switch (ev.code) {
                case 'ArrowDown':
                    this.metalist.markNext();
                    this.scrollToMarked();
                    break;
                case 'ArrowUp':
                    this.metalist.markPrev();
                    this.scrollToMarked();
                    break;
                case 'Enter':
                    this.metalist.selectMarked();
                    break;
                default:
                    prevent = false;
            }
            this.onTouched();
            prevent && ev.preventDefault();
        }
    };
    DropdownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.items.changes.subscribe(function () {
            _this.cdRef.markForCheck();
        });
        if (this.animations) {
            if (this.animations.enter) {
                this.enterAnimationFactory = this.builder.build(this.animations.enter);
            }
            if (this.animations.leave) {
                this.leaveAnimationFactory = this.builder.build(this.animations.leave);
            }
        }
    };
    DropdownComponent.prototype.onMetalistFocus = function () {
        this.focused = true;
    };
    DropdownComponent.prototype.onMetalistBlur = function () {
        this.focused = false;
        this.onTouched();
    };
    DropdownComponent.prototype.onMetalistChange = function (value) {
        this.change.emit(value);
        this.onChange(value);
    };
    DropdownComponent.prototype.setValue = function (value) {
        this.metalist.setValue(value);
    };
    DropdownComponent.prototype.writeValue = function (value) {
        this.setValue(value);
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DropdownComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate([
        ViewChild('metalist'),
        __metadata("design:type", MetalistComponent)
    ], DropdownComponent.prototype, "metalist", void 0);
    __decorate([
        ViewChild('metalist', { read: ElementRef }),
        __metadata("design:type", ElementRef)
    ], DropdownComponent.prototype, "listbox", void 0);
    __decorate([
        ContentChildren(DropdownOption),
        __metadata("design:type", QueryList)
    ], DropdownComponent.prototype, "items", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DropdownComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DropdownComponent.prototype, "expanded", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "willClose", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "willExpand", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DropdownComponent.prototype, "selectionMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DropdownComponent.prototype, "mode", null);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DropdownComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "listenKeys", void 0);
    __decorate([
        Output('change'),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "change", void 0);
    DropdownComponent = __decorate([
        Component({
            selector: 'vcl-dropdown',
            template: "<ul vcl-metalist #metalist [class.vclLayoutHidden]=\"state === DropdownState.Closed\"  [selectionMode]=\"selectionMode\" [maxSelectableItems]=\"maxSelectableItems\" class=\"vclDropdown vclOpen\" role=\"listbox\" [class.vclDisabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.aria-multiselectable]=\"mode === 'multiple'\" [style.position]=\"'static'\" (change)=\"onMetalistChange($event)\" (focus)=\"onMetalistFocus()\" (blur)=\"onMetalistBlur()\" (keydown)=\"onMetalistKeydown($event)\" > <vcl-metalist-item #metaItem *ngFor=\"let item of items\"  [metadata]=\"item\" [selected]=\"item.selected\" [disabled]=\"disabled || item.disabled\" [marked]=\"item.marked\" [value]=\"item.value\"> <li role=\"option\" class=\"vclDropdownItem\" [class.vclSelected]=\"metaItem.selected\" [class.vclDisabled]=\"disabled || metaItem.disabled\" [class.vclHighlighted]=\"focused && metaItem.marked\" [attr.aria-selected]=\"metaItem.selected\" (tap)=\"onMetalistItemTap(metaItem)\"> <div *ngIf=\"item.label\" class=\"vclDropdownItemLabel\"> {{item.label}} </div> <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\"> {{item.sublabel}} </div> <wormhole *ngIf=\"item.content\" [connect]=\"item.content\"></wormhole> </li> </vcl-metalist-item> </ul> ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[attr.tabindex]': '-1',
            }
        }),
        __param(3, Optional()), __param(3, Inject(DROPDOWN_ANIMATIONS)),
        __metadata("design:paramtypes", [ElementRef,
            ChangeDetectorRef,
            AnimationBuilder, Object])
    ], DropdownComponent);
    return DropdownComponent;
}());
export { DropdownComponent };
