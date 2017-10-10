var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, forwardRef, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MetalistItem } from "./metalist-item.component";
export var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Multiple"] = 0] = "Multiple";
    SelectionMode[SelectionMode["Single"] = 1] = "Single";
})(SelectionMode || (SelectionMode = {}));
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MetalistComponent; }),
    multi: true
};
var MetalistComponent = /** @class */ (function () {
    function MetalistComponent(cdRef) {
        this.cdRef = cdRef;
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.selectionMode = SelectionMode.Single;
        this.change = new EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(MetalistComponent.prototype, "mode", {
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
    Object.defineProperty(MetalistComponent.prototype, "selectedItem", {
        get: function () {
            return this.selectedItems[0] || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetalistComponent.prototype, "selectedItems", {
        get: function () {
            return (this.items || []).filter(function (i) { return i.selected; });
        },
        enumerable: true,
        configurable: true
    });
    MetalistComponent.prototype.syncItems = function () {
        var value = this.value;
        if (this.selectionMode === SelectionMode.Multiple && Array.isArray(value)) {
            (this.items || []).forEach(function (item) {
                item.selected = value.includes(item.value);
            });
        }
        else {
            (this.items || []).forEach(function (item) {
                item.selected = item.value === value;
            });
        }
        this.cdRef.markForCheck();
    };
    MetalistComponent.prototype.syncValue = function () {
        var values = this.selectedItems.map(function (i) { return i.value; });
        this.value = this.selectionMode === SelectionMode.Single ? values[0] : values;
    };
    MetalistComponent.prototype.triggerChange = function () {
        this.change.emit(this.value);
        this.onChange(this.value);
    };
    MetalistComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Changes of metalist-items take the selected state of the current value;
        this.items.changes.subscribe(function () {
            Promise.resolve(null).then(function () {
                _this.syncItems();
            });
        });
    };
    MetalistComponent.prototype.select = function (item) {
        if (typeof item === 'number') {
            item = this.items.toArray()[item];
        }
        if (item instanceof MetalistItem) {
            if (item.disabled) {
                return;
            }
            if (this.selectionMode === SelectionMode.Multiple) {
                var selectedItems = (this.items || []).filter(function (i) { return i.selected; });
                // prevent overflow
                var maxSelectableItems = typeof this.maxSelectableItems === 'number' ? this.maxSelectableItems : Infinity;
                var overflow = this.selectionMode === SelectionMode.Multiple && !item.selected && selectedItems.length >= maxSelectableItems;
                if (!overflow) {
                    item.selected = !item.selected;
                }
            }
            else {
                this.items.forEach(function (citem) { return citem.selected = citem === item; });
            }
            this.syncValue();
            this.triggerChange();
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.deselect = function (item) {
        if (typeof item === 'number') {
            item = this.items.toArray()[item];
        }
        if (item instanceof MetalistItem) {
            item.selected = false;
            this.syncValue();
            this.triggerChange();
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.determineMarkedIndex = function () {
        var idx = this.items.toArray().findIndex(function (item) { return item.marked; });
        return idx >= 0 ? idx : this.items.toArray().findIndex(function (metaItem) { return metaItem.selected; });
    };
    MetalistComponent.prototype.markNext = function () {
        var items = this.items.toArray();
        var newIdx = this.determineMarkedIndex() + 1;
        if (newIdx >= (items.length)) {
            newIdx = items.length - 1;
        }
        items.every(function (item, cidx) {
            var mark = cidx >= newIdx;
            item.marked = !item.disabled && mark;
            return !item.marked;
        });
        this.cdRef.markForCheck();
    };
    MetalistComponent.prototype.markPrev = function () {
        var items = this.items.toArray().reverse();
        var newIdx = this.determineMarkedIndex() - 1;
        if (newIdx <= 0 && items.length > 0) {
            newIdx = 0;
        }
        newIdx = (items.length - 1) - newIdx;
        items.every(function (item, cidx) {
            var mark = cidx >= newIdx;
            item.marked = !item.disabled && mark;
            return !item.marked;
        });
        this.cdRef.markForCheck();
    };
    MetalistComponent.prototype.selectMarked = function () {
        var item = this.items.toArray().find(function (i) { return i.marked === true && !i.disabled; });
        if (item) {
            this.select(item);
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.setValue = function (value) {
        this.value = value;
        this.syncItems();
    };
    MetalistComponent.prototype.writeValue = function (value) {
        this.setValue(value);
    };
    MetalistComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MetalistComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MetalistComponent.prototype, "selectionMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MetalistComponent.prototype, "mode", null);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MetalistComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MetalistComponent.prototype, "change", void 0);
    __decorate([
        ContentChildren(MetalistItem),
        __metadata("design:type", QueryList)
    ], MetalistComponent.prototype, "items", void 0);
    MetalistComponent = __decorate([
        Component({
            selector: 'vcl-metalist, [vcl-metalist]',
            template: "<wormhole *ngFor=\"let item of items\" [connect]=\"item._content\"></wormhole>",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], MetalistComponent);
    return MetalistComponent;
}());
export { MetalistComponent };
