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
import { Component, Input, Output, forwardRef, EventEmitter, HostListener, ElementRef, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Directive, ContentChild, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TokenInputComponent; }),
    multi: true
};
var TokenInputLabelPre = /** @class */ (function () {
    function TokenInputLabelPre() {
    }
    TokenInputLabelPre = __decorate([
        Directive({ selector: '[vcl-token-input-pre]' })
    ], TokenInputLabelPre);
    return TokenInputLabelPre;
}());
export { TokenInputLabelPre };
var TokenInputLabelPost = /** @class */ (function () {
    function TokenInputLabelPost() {
    }
    TokenInputLabelPost = __decorate([
        Directive({ selector: '[vcl-token-input-post]' })
    ], TokenInputLabelPost);
    return TokenInputLabelPost;
}());
export { TokenInputLabelPost };
var TokenInputComponent = /** @class */ (function () {
    function TokenInputComponent(cdRef) {
        this.cdRef = cdRef;
        this.tokens = [];
        this.selectable = true;
        this.selectedAfterAdd = false;
        this.placeholder = 'Type to add tokens';
        this.icon = 'fa:remove';
        this.tabindex = 0;
        this.disabled = false;
        this.change = new EventEmitter();
        this.add = new EventEmitter();
        this.remove = new EventEmitter();
        this.confirm = new EventEmitter();
        this.focused = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    TokenInputComponent.prototype.onFocus = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 1000); })];
                    case 1:
                        _a.sent();
                        this.input.nativeElement.focus();
                        return [2 /*return*/];
                }
            });
        });
    };
    TokenInputComponent.prototype.onInputFocus = function () {
        this.focused = true;
    };
    TokenInputComponent.prototype.onInputBlur = function () {
        this.focused = false;
        this.onTouched();
    };
    Object.defineProperty(TokenInputComponent.prototype, "vclFocused", {
        get: function () {
            return this.input && typeof document !== 'undefined' && document.activeElement === this.input.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    TokenInputComponent.prototype.onKeydown = function (ev) {
        var value = this.input && this.input.nativeElement.value;
        var code = ev && (ev.code || ev.key); // fallback for ie11
        if (code == 'Backspace' && this.lastKey == 'Backspace' && value === '') {
            // remove last token
            var token = this.tokens.pop();
            this.remove.emit(token);
            this.triggerChange();
        }
        else if (code) {
            this.lastKey = code;
        }
    };
    TokenInputComponent.prototype.addToken = function (label) {
        if (label) {
            var token = {
                selected: this.selectedAfterAdd,
                label: label
            };
            this.tokens.push(token);
            this.input.nativeElement.value = '';
            this.add.emit(token);
            this.triggerChange();
        }
        else if (label === '') {
            this.confirm.emit(this.tokens);
        }
    };
    TokenInputComponent.prototype.select = function (token) {
        if (this.selectable) {
            token.selected = !token.selected;
            this.triggerChange();
        }
    };
    TokenInputComponent.prototype.removeToken = function (token) {
        this.tokens = this.tokens.filter(function (t) { return t !== token; });
        this.remove.emit(token);
        this.triggerChange();
        this.input.nativeElement.focus();
    };
    TokenInputComponent.prototype.triggerChange = function () {
        this.change.emit(this.tokens);
        this.onChange(this.tokens);
    };
    TokenInputComponent.prototype.writeValue = function (tokens) {
        var _this = this;
        if (Array.isArray(tokens)) {
            this.tokens = tokens.map(function (t) { return typeof t === 'string' ? { label: t, selected: _this.selectedAfterAdd } : t; })
                .filter(function (t) { return typeof t === 'object' && t; });
        }
        else {
            this.tokens = [];
        }
        this.cdRef.markForCheck();
    };
    TokenInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TokenInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TokenInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    __decorate([
        ViewChild('input'),
        __metadata("design:type", ElementRef)
    ], TokenInputComponent.prototype, "input", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenInputComponent.prototype, "selectable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenInputComponent.prototype, "selectedAfterAdd", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TokenInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TokenInputComponent.prototype, "inputClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TokenInputComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TokenInputComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TokenInputComponent.prototype, "tokenClass", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata("design:type", Object)
    ], TokenInputComponent.prototype, "disabled", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenInputComponent.prototype, "change", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenInputComponent.prototype, "add", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenInputComponent.prototype, "remove", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenInputComponent.prototype, "confirm", void 0);
    __decorate([
        ContentChild(TokenInputLabelPre, { read: TemplateRef }),
        __metadata("design:type", TokenInputLabelPre)
    ], TokenInputComponent.prototype, "labelPre", void 0);
    __decorate([
        ContentChild(TokenInputLabelPost, { read: TemplateRef }),
        __metadata("design:type", TokenInputLabelPost)
    ], TokenInputComponent.prototype, "labelPost", void 0);
    __decorate([
        HostListener('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], TokenInputComponent.prototype, "onFocus", null);
    __decorate([
        HostBinding('class.vclFocused'),
        __metadata("design:type", Object)
    ], TokenInputComponent.prototype, "focused", void 0);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], TokenInputComponent.prototype, "onKeydown", null);
    TokenInputComponent = __decorate([
        Component({
            selector: 'vcl-token-input',
            template: "<div class=\"vclTokenContainer\"> <wormhole *ngIf=\"labelPre\" [connect]=\"labelPre\"></wormhole> <vcl-token *ngFor=\"let token of tokens\" (remove)=\"removeToken(token)\" (tap)=\"select(token)\" [disabled]=\"disabled\" [ngClass]=\"tokenClass\" [selected]=\"token.selected\" [removable]=\"true\" [icon]=\"icon\" [attr.tabindex]=\"-1\" [label]=\"token.label\"> </vcl-token> <wormhole *ngIf=\"labelPost\" [connect]=\"labelPost\"></wormhole> </div> <ng-content></ng-content> <input  vcl-input #input [disabled]=\"disabled\" [placeholder]=\"placeholder\"  [ngClass]=\"inputClass\" autocomplete=\"off\"  [tabindex]=\"tabindex\" (keyup.enter)=\"addToken(input.value)\" (focus)=\"onInputFocus()\" (blur)=\"onInputBlur()\" flex /> ",
            host: {
                '[class.vclInput]': 'true',
                '[class.vclTokenInput]': 'true',
                '[class.vclLayoutHorizontal]': 'true',
                '[class.vclLayoutWrap]': 'true',
                '[attr.tabindex]': '-1',
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], TokenInputComponent);
    return TokenInputComponent;
}());
export { TokenInputComponent };
