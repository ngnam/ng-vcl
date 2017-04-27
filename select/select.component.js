var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
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
import { Component, forwardRef, ChangeDetectionStrategy, HostBinding, ViewChild, ContentChildren, ElementRef, Input, QueryList, EventEmitter, Output, HostListener, ChangeDetectorRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectionMode } from '../metalist/index';
import { DropdownComponent } from '../dropdown/index';
import { SelectOption } from './select-option.component';
var DropDirection;
(function (DropDirection) {
    DropDirection[DropDirection["Top"] = 0] = "Top";
    DropDirection[DropDirection["Bottom"] = 1] = "Bottom";
})(DropDirection || (DropDirection = {}));
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = (function () {
    function SelectComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.selectionMode = SelectionMode.Single;
        this.tabindex = 0;
        this.expanded = false;
        this.listenKeys = true;
        // multi-select
        this.maxSelectableItems = 1;
        // styling
        this.expandedIcon = 'fa:chevron-up';
        this.collapsedIcon = 'fa:chevron-down';
        this.change = new EventEmitter();
        this.focused = false;
        this.dropdownTop = -1;
        /**
         * Things needed for ControlValueAccessor-Interface.
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(SelectComponent.prototype, "mode", {
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
    SelectComponent.prototype.keydown = function (ev) {
        if (this.listenKeys) {
            var prevent = true;
            switch (ev.code) {
                case 'ArrowDown':
                    if (this.expanded) {
                        this.dropdown.metalist.markNext();
                    }
                    else {
                        this.open();
                    }
                    break;
                case 'ArrowUp':
                    if (this.expanded) {
                        this.dropdown.metalist.markPrev();
                    }
                    else {
                        this.open();
                    }
                    break;
                case 'Enter':
                    if (this.expanded) {
                        this.dropdown.metalist.selectMarked();
                    }
                    else {
                        this.open();
                    }
                    break;
                case 'Space':
                    this.toggle();
                    break;
                case 'Tab':
                    this.close();
                case 'Escape':
                    this.close();
                default:
                    prevent = false;
            }
            prevent && ev.preventDefault();
        }
    };
    SelectComponent.prototype.reFocus = function () {
        this.elementRef.nativeElement.focus();
    };
    SelectComponent.prototype.onFocus = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.focused = true;
                return [2 /*return*/];
            });
        });
    };
    /**
     * when the element losses focus, the dropdown should close
     */
    SelectComponent.prototype.onBlur = function (event) {
        this.close();
        this.focused = false;
        this.onTouched();
    };
    SelectComponent.prototype.toggle = function () {
        if (!this.expanded) {
            this.open();
        }
        else {
            this.close();
        }
    };
    SelectComponent.prototype.close = function () {
        this.expanded = false;
    };
    SelectComponent.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var position, screenHeight, spaceBottom, spaceTop, dropDirection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.expanded = true;
                        position = this.elementRef.nativeElement.getBoundingClientRect();
                        screenHeight = window.innerHeight
                            || document.documentElement.clientHeight
                            || document.body.clientHeight;
                        spaceBottom = screenHeight - position.bottom;
                        spaceTop = position.top;
                        dropDirection = (spaceBottom < spaceTop) ? DropDirection.Top : DropDirection.Bottom;
                        // Wait for the dropdown to be rendered, so the offsetHeight can be determined
                        return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 0); })];
                    case 1:
                        // Wait for the dropdown to be rendered, so the offsetHeight can be determined
                        _a.sent();
                        switch (dropDirection) {
                            case DropDirection.Top:
                                this.dropdownTop = -1 *
                                    (this.dropdown.elementRef.nativeElement.children[0].offsetHeight
                                        - 1 // border
                                        + 0.3 // fix chrome ugly 1-pixel-render
                                    );
                                break;
                            case DropDirection.Bottom:
                                this.dropdownTop = -1.1
                                    + this.select.nativeElement.offsetHeight;
                                break;
                        }
                        this.cdRef.markForCheck();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(SelectComponent.prototype, "displayValue", {
        get: function () {
            var item = this.selectedItems.shift();
            if (item) {
                return item.label || String(item.value);
            }
            else {
                return 'Select Value';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "selectedMetaItems", {
        get: function () {
            return (this.dropdown && this.dropdown.metalist && this.dropdown.metalist.selectedItems) || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "selectedItems", {
        get: function () {
            var items = (this.dropdown && this.dropdown.metalist && this.dropdown.metalist.selectedItems) || [];
            return items.map(function (metaItem) { return metaItem.metadata.metadata; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "showDisplayValue", {
        get: function () {
            return this.selectionMode === SelectionMode.Single || this.selectedMetaItems.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.deselectItem = function (item, event) {
        var idx = this.items.toArray().findIndex(function (citem) { return item === citem; });
        this.dropdown.metalist.deselect(idx);
    };
    SelectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.items.changes.subscribe(function () {
            _this.cdRef.markForCheck();
        });
    };
    SelectComponent.prototype.onDropdownChange = function (value) {
        var _this = this;
        if (this.selectionMode === SelectionMode.Single) {
            this.close();
        }
        // propagate value change
        this.change.emit(value);
        // propagate form-change
        this.onChange(value);
        // refocus
        setTimeout(function () { return _this.reFocus(); }, 0);
    };
    SelectComponent.prototype.writeValue = function (value) {
        this.dropdown.metalist.setValue(value);
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return SelectComponent;
}());
__decorate([
    ViewChild('dropdown'),
    __metadata("design:type", DropdownComponent)
], SelectComponent.prototype, "dropdown", void 0);
__decorate([
    ContentChildren(SelectOption),
    __metadata("design:type", QueryList)
], SelectComponent.prototype, "items", void 0);
__decorate([
    ViewChild('select'),
    __metadata("design:type", ElementRef)
], SelectComponent.prototype, "select", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectComponent.prototype, "selectionMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SelectComponent.prototype, "mode", null);
__decorate([
    HostBinding('attr.tabindex'),
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "expanded", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "listenKeys", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectComponent.prototype, "maxSelectableItems", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "expandedIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "collapsedIcon", void 0);
__decorate([
    Output('change'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "change", void 0);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelectComponent.prototype, "keydown", null);
__decorate([
    HostListener('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SelectComponent.prototype, "onFocus", null);
__decorate([
    HostListener('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelectComponent.prototype, "onBlur", null);
SelectComponent = __decorate([
    Component({
        selector: 'vcl-select',
        template: "<div (offClick)=\"close()\"> <div #select class=\"vclLayoutHorizontal vclSelect vclInputGroupEmb\" [style.marginBottom]=\"0\" > <div *ngIf=\"showDisplayValue\" class=\"vclInput\" readonly [class.vclSelected]=\"focused\" (tap)=\"toggle($event)\"> {{displayValue}} </div> <div *ngIf=\"!showDisplayValue\" class=\"vclInput vclTokenInput vclLayoutHorizontal vclLayoutWrap\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle($event)\"> <vcl-token-list> <vcl-token *ngFor=\"let item of selectedItems\" [label]=\"item.label\" [removable]=\"true\" (remove)=\"deselectItem(item, $event)\"></vcl-token> </vcl-token-list> </div> <button vcl-button type=\"button\" tabindex=\"-1\" class=\"vclTransparent vclSquare vclAppended\" [appIcon]=\"expanded ? expandedIcon : collapsedIcon\" (tap)=\"toggle()\"> </button> </div> <vcl-dropdown  #dropdown [style.display]=\"expanded ? null : 'none'\" (change)=\"onDropdownChange($event)\" [selectionMode]=\"selectionMode\" [maxSelectableItems]=\"maxSelectableItems\" tabindex=\"-1\" [style.position]=\"'relative'\" [style.top.px]=\"dropdownTop\" [style.width]=\"'100%'\" [style.position]=\"'absolute'\" [style.zIndex]=\"999999\"> <vcl-dropdown-option  *ngFor=\"let item of items\"  [metadata]=\"item\"  [value]=\"item.value\"  [selected]=\"item.selected\"  [disabled]=\"item.disabled\"  [label]=\"item.label\"  [sublabel]=\"item.sublabel\"> </vcl-dropdown-option> </vcl-dropdown> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        host: {
            '[style.position]': '"relative"',
            '[style.display]': '"block"'
        }
    }),
    __metadata("design:paramtypes", [ElementRef,
        ChangeDetectorRef])
], SelectComponent);
export { SelectComponent };
