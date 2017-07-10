import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Injectable, Injector, Input, NgModule, OpaqueToken, Optional, Output, Pipe, QueryList, ReflectiveInjector, Renderer, Renderer2, SkipSelf, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation, animate, forwardRef, state, style, transition, trigger } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/share';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/never';
import 'rxjs/add/operator/publishBehavior';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/skipUntil';
import 'rxjs/add/operator/first';
import { AnimationBuilder, trigger as trigger$1 } from '@angular/animations';
import 'rxjs/add/operator/startWith';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/skipWhile';
import { DOCUMENT } from '@angular/platform-browser';

var ObservableComponent = (function () {
    function ObservableComponent() {
        this.changesSubject = new Subject();
        this.observedProps = {};
        this.changes$ = this.changesSubject.asObservable();
    }
    ObservableComponent.prototype.ngOnChanges = function (changes) {
        this.changesSubject.next(changes);
    };
    ObservableComponent.prototype.ngOnDestroy = function () {
        this.changesSubject.complete();
    };
    ObservableComponent.prototype.observeChanges = function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        return this.changes$.filter(function (changes) { return props.some(function (p) { return changes.hasOwnProperty(p); }); });
    };
    ObservableComponent.prototype.observeChange = function (prop) {
        if (!this.observedProps[prop]) {
            var c$ = this.changes$
                .filter(function (changes) { return changes.hasOwnProperty(prop); })
                .map(function (changes) { return changes[prop]; })
                .publishReplay(1);
            c$.connect();
            this.observedProps[prop] = c$;
        }
        return this.observedProps[prop];
    };
    ObservableComponent.prototype.observeChangeValue = function (prop) {
        return this.observeChange(prop).map(function (change) { return change.currentValue; });
    };
    return ObservableComponent;
}());

function defineMetadata(key, value, target) {
    Reflect.defineMetadata(key, value, target);
}
function getMetadata(key, target) {
    return Reflect.getMetadata(key, target);
}

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Invalid input type. Using one of these will throw an error
var INPUT_INVALID_TYPES = [
    'button',
    'checkbox',
    'color',
    'file',
    'hidden',
    'image',
    'radio',
    'range',
    'reset',
    'submit'
];
var InputDirective = (function () {
    function InputDirective(elRef) {
        this.elRef = elRef;
        this.type = 'text';
        this.selectOnFocus = false;
    }
    InputDirective.prototype.ngOnInit = function () {
        if (INPUT_INVALID_TYPES.includes(this.type)) {
            throw new Error('type not allowed for vcl-input: ' + this.type);
        }
    };
    Object.defineProperty(InputDirective.prototype, "value", {
        get: function () {
            return this.elRef ? this.elRef.nativeElement.value : '';
        },
        enumerable: true,
        configurable: true
    });
    InputDirective.prototype.clear = function () {
        if (this.elRef) {
            this.elRef.nativeElement.value = '';
        }
    };
    InputDirective.prototype.focus = function () {
        if (this.elRef) {
            this.elRef.nativeElement.focus();
        }
    };
    // autoselect
    InputDirective.prototype.onFocus = function () {
        if (this.selectOnFocus && this.elRef) {
            this.elRef.nativeElement.select();
        }
    };
    return InputDirective;
}());
__decorate$1([
    Input('type'),
    __metadata("design:type", String)
], InputDirective.prototype, "type", void 0);
__decorate$1([
    Input(),
    __metadata("design:type", Boolean)
], InputDirective.prototype, "selectOnFocus", void 0);
__decorate$1([
    HostListener('focus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InputDirective.prototype, "onFocus", null);
InputDirective = __decorate$1([
    Directive({
        selector: '[vcl-input]',
        host: {
            '[class.vclInput]': 'true',
        }
    }),
    __metadata("design:paramtypes", [ElementRef])
], InputDirective);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLInputModule = (function () {
    function VCLInputModule() {
    }
    return VCLInputModule;
}());
VCLInputModule = __decorate([
    NgModule({
        imports: [],
        exports: [InputDirective],
        declarations: [InputDirective],
        providers: [],
    })
], VCLInputModule);

/**
 * Check if the provided file type should be accepted by the input with accept attribute.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-accept
 *
 * Inspired by https://github.com/enyo/dropzone
 *
 * @param file {File} https://developer.mozilla.org/en-US/docs/Web/API/File
 * @param acceptedFiles {string}
 * @returns {boolean}
 */
/**
 * Check if the provided file type should be accepted by the input with accept attribute.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-accept
 *
 * Inspired by https://github.com/enyo/dropzone
 *
 * @param file {File} https://developer.mozilla.org/en-US/docs/Web/API/File
 * @param acceptedFiles {string}
 * @returns {boolean}
 */ function accept(file, acceptedFiles) {
    if (file && acceptedFiles) {
        var acceptedFilesArray = (Array.isArray(acceptedFiles) ?
            acceptedFiles :
            acceptedFiles.split(','));
        var fileName_1 = file.name || '';
        var mimeType_1 = file.type || '';
        var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
        return acceptedFilesArray.some(function (type) {
            var validType = type.trim();
            if (validType.charAt(0) === '.') {
                return fileName_1.toLowerCase().endsWith(validType.toLowerCase());
            }
            else if (/\/\*$/.test(validType)) {
                // This is something like a image/* mime type
                return baseMimeType_1 === validType.replace(/\/.*$/, '');
            }
            return mimeType_1 === validType;
        });
    }
    return true;
}

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return FileInputComponent; }),
    multi: true
};
var FileInputComponent = (function () {
    function FileInputComponent(cdRef) {
        this.cdRef = cdRef;
        this.accept = '*';
        this.multiple = false;
        this.files = new EventEmitter();
        this.tabindex = 0;
        this.disabled = false;
        this.invalidFiles = false;
        this.isDragging = false;
        this.isFocused = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(FileInputComponent.prototype, "fileInput", {
        get: function () {
            return this.input && this.input.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    FileInputComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    FileInputComponent.prototype.onBlur = function () {
        this.isFocused = false;
        this.onTouched();
    };
    FileInputComponent.prototype.onInputChange = function () {
        if (this.fileInput && this.fileInput.files) {
            this.updateFiles(this.fileInput.files);
        }
    };
    FileInputComponent.prototype.checkFiles = function (files) {
        var _this = this;
        var hasWrongFiles = Array.from(files).some(function (file) { return !accept(file, _this.accept); });
        // TODO remove *-check after issue https://github.com/okonet/attr-accept/issues/8
        this.invalidFiles = hasWrongFiles && this.accept !== '*';
    };
    FileInputComponent.prototype.keydown = function (ev) {
        switch (ev.code) {
            case 'Enter':
            case 'Space':
                ev.preventDefault();
                if (this.disabled) {
                    return;
                }
                this.fileInput && this.fileInput.click();
                this.onTouched();
                break;
        }
    };
    FileInputComponent.prototype.onClick = function (value) {
        if (this.disabled) {
            return;
        }
        this.fileInput && this.fileInput.click();
        this.onTouched();
    };
    FileInputComponent.prototype.onDragOver = function (e) {
        this.isDragging = true;
        e.preventDefault();
        e.stopPropagation();
    };
    FileInputComponent.prototype.onDragLeave = function (e) {
        this.isDragging = false;
        e.preventDefault();
        e.stopPropagation();
    };
    FileInputComponent.prototype.onDrop = function (e) {
        // cancel event and hover styling
        e.preventDefault();
        e.stopPropagation();
        if (this.disabled)
            return;
        this.isDragging = false;
        // fetch FileList object
        var files = e.target.files || e.dataTransfer.files;
        this.updateFiles(files);
        this.onTouched();
    };
    FileInputComponent.prototype.updateFiles = function (files) {
        if (files instanceof FileList) {
            var name_1 = files[0].name;
            if (this.multiple) {
                name_1 += ' (' + files.length + ')';
            }
            this.filename = name_1;
            this.value = files;
            this.checkFiles(files);
            this.files.emit(files);
            this.onChange(files);
        }
    };
    FileInputComponent.prototype.writeValue = function (files) {
        this.value = files;
        this.cdRef.markForCheck();
    };
    FileInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FileInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return FileInputComponent;
}());
__decorate$3([
    Input(),
    __metadata$1("design:type", String)
], FileInputComponent.prototype, "accept", void 0);
__decorate$3([
    Input(),
    __metadata$1("design:type", Boolean)
], FileInputComponent.prototype, "multiple", void 0);
__decorate$3([
    Output(),
    __metadata$1("design:type", Object)
], FileInputComponent.prototype, "files", void 0);
__decorate$3([
    Input(),
    HostBinding('attr.tabindex'),
    __metadata$1("design:type", Number)
], FileInputComponent.prototype, "tabindex", void 0);
__decorate$3([
    Input(),
    HostBinding('class.vclDisabled'),
    __metadata$1("design:type", Boolean)
], FileInputComponent.prototype, "disabled", void 0);
__decorate$3([
    HostBinding('class.vclError'),
    __metadata$1("design:type", Object)
], FileInputComponent.prototype, "invalidFiles", void 0);
__decorate$3([
    HostBinding('class.vclDragndrop'),
    __metadata$1("design:type", Boolean)
], FileInputComponent.prototype, "isDragging", void 0);
__decorate$3([
    HostBinding('class.isFocused'),
    __metadata$1("design:type", Boolean)
], FileInputComponent.prototype, "isFocused", void 0);
__decorate$3([
    ViewChild('input'),
    __metadata$1("design:type", ElementRef)
], FileInputComponent.prototype, "input", void 0);
__decorate$3([
    HostListener('focus'),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onFocus", null);
__decorate$3([
    HostListener('blur'),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onBlur", null);
__decorate$3([
    HostListener('keydown', ['$event']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "keydown", null);
__decorate$3([
    HostListener('click', ['$event.target.value']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onClick", null);
__decorate$3([
    HostListener('dragover', ['$event']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onDragOver", null);
__decorate$3([
    HostListener('dragleave', ['$event']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onDragLeave", null);
__decorate$3([
    HostListener('drop', ['$event']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onDrop", null);
FileInputComponent = __decorate$3([
    Component({
        selector: 'vcl-file-input',
        template: "<input #input type=\"file\" style=\"display: none;\" (change)=\"onInputChange()\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\" /> <div class=\"vclFileInputIcon vclIcon fa fa-upload\" aria-hidden=\"true\" aria-label=\"account\" role=\"img\"></div> <div class=\"vclFileInputPlaceholder\"> <ng-container *ngIf=\"filename\">{{filename}}</ng-container> <div *ngIf=\"!filename\"> <ng-content></ng-content> </div> </div> ",
        host: {
            '[class.vclFileInput]': 'true',
            role: 'button'
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata$1("design:paramtypes", [ChangeDetectorRef])
], FileInputComponent);

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLFileInputModule = (function () {
    function VCLFileInputModule() {
    }
    return VCLFileInputModule;
}());
VCLFileInputModule = __decorate$2([
    NgModule({
        imports: [CommonModule],
        exports: [FileInputComponent],
        declarations: [FileInputComponent],
        providers: [],
    })
], VCLFileInputModule);

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TextareaDirective = (function () {
    function TextareaDirective(elRef) {
        this.elRef = elRef;
        this.selectAllOnFocus = false;
        this.autogrow = false;
    }
    TextareaDirective.prototype.onModelChange = function (value) {
        this.setRowsByValue(value);
    };
    TextareaDirective.prototype.onFocus = function (value) {
        if (this.selectAllOnFocus && this.elRef) {
            this.elRef.nativeElement.select();
        }
    };
    TextareaDirective.prototype.setRowsByValue = function (value) {
        if (this.autogrow && typeof value === 'string') {
            var rows = value.split('\n').length + 1;
            if (typeof this.minRows === 'number' && rows < this.minRows) {
                this.rows = this.minRows;
            }
            else if (typeof this.maxRows === 'number' && rows > this.maxRows) {
                this.rows = this.maxRows;
            }
            else {
                this.rows = rows;
            }
        }
    };
    return TextareaDirective;
}());
__decorate$5([
    Input(),
    __metadata$2("design:type", Object)
], TextareaDirective.prototype, "selectAllOnFocus", void 0);
__decorate$5([
    Input(),
    __metadata$2("design:type", Object)
], TextareaDirective.prototype, "autogrow", void 0);
__decorate$5([
    Input(),
    __metadata$2("design:type", Number)
], TextareaDirective.prototype, "maxRows", void 0);
__decorate$5([
    Input(),
    __metadata$2("design:type", Number)
], TextareaDirective.prototype, "minRows", void 0);
__decorate$5([
    HostBinding('attr.rows'),
    Input(),
    __metadata$2("design:type", Number)
], TextareaDirective.prototype, "rows", void 0);
__decorate$5([
    HostListener('ngModelChange', ['$event']),
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object]),
    __metadata$2("design:returntype", void 0)
], TextareaDirective.prototype, "onModelChange", null);
__decorate$5([
    HostListener('focus', ['$event.target.value']),
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object]),
    __metadata$2("design:returntype", void 0)
], TextareaDirective.prototype, "onFocus", null);
TextareaDirective = __decorate$5([
    Directive({
        selector: 'textarea[vcl-textarea]',
        host: {
            '[class.vclInput]': 'true',
        }
    }),
    __metadata$2("design:paramtypes", [ElementRef])
], TextareaDirective);

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTextareaModule = (function () {
    function VCLTextareaModule() {
    }
    return VCLTextareaModule;
}());
VCLTextareaModule = __decorate$4([
    NgModule({
        imports: [FormsModule],
        exports: [TextareaDirective],
        declarations: [TextareaDirective],
        providers: [],
    })
], VCLTextareaModule);

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$1 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return FlipSwitchComponent; }),
    multi: true
};
var FlipSwitchComponent = (function () {
    function FlipSwitchComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.onLabel = 'On';
        this.offLabel = 'Off';
        this.value = false;
        this.valueChange = new EventEmitter();
    }
    FlipSwitchComponent.prototype.onTap = function () {
        this.toggle();
    };
    FlipSwitchComponent.prototype.keydown = function (ev) {
        switch (ev.code) {
            case 'Space':
                ev.preventDefault();
                this.toggle();
                break;
            case 'ArrowLeft':
                ev.preventDefault();
                if (!this.value) {
                    this.toggle();
                }
                break;
            case 'ArrowRight':
                ev.preventDefault();
                if (this.value) {
                    this.toggle();
                }
                break;
        }
    };
    FlipSwitchComponent.prototype.toggle = function () {
        this.value = !this.value;
        this.valueChange.emit(this.value);
        this.onChangeCallback && this.onChangeCallback(this.value);
    };
    FlipSwitchComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.cdRef.markForCheck();
    };
    FlipSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FlipSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return FlipSwitchComponent;
}());
__decorate$7([
    HostBinding(),
    __metadata$3("design:type", Object)
], FlipSwitchComponent.prototype, "tabindex", void 0);
__decorate$7([
    Input(),
    __metadata$3("design:type", String)
], FlipSwitchComponent.prototype, "onLabel", void 0);
__decorate$7([
    Input(),
    __metadata$3("design:type", String)
], FlipSwitchComponent.prototype, "offLabel", void 0);
__decorate$7([
    Input(),
    __metadata$3("design:type", Boolean)
], FlipSwitchComponent.prototype, "value", void 0);
__decorate$7([
    Output(),
    __metadata$3("design:type", Object)
], FlipSwitchComponent.prototype, "valueChange", void 0);
__decorate$7([
    HostListener('tap', ['$event']),
    __metadata$3("design:type", Function),
    __metadata$3("design:paramtypes", []),
    __metadata$3("design:returntype", void 0)
], FlipSwitchComponent.prototype, "onTap", null);
__decorate$7([
    HostListener('keydown', ['$event']),
    __metadata$3("design:type", Function),
    __metadata$3("design:paramtypes", [Object]),
    __metadata$3("design:returntype", void 0)
], FlipSwitchComponent.prototype, "keydown", null);
FlipSwitchComponent = __decorate$7([
    Component({
        selector: 'vcl-flip-switch',
        template: "<label class=\"vclFlipSwitchLabel\"> <div class=\"vclFlipSwitchTrack\"> <div class=\"vclFlipSwitchActive\" [attr.aria-hidden]=\"!value\">{{onLabel}}</div> <div class=\"vclFlipSwitchInactive\" [attr.aria-hidden]=\"value\">{{offLabel}}</div> </div> <div class=\"vclFlipSwitchKnob\"></div> </label> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$1],
        host: {
            '[class.vclFlipSwitch]': 'true',
            '[class.vclFlipSwitchPressed]': 'value',
            '[attr.role]': '"button"',
            '[attr.aria-pressed]': 'value',
            '[attr.touch-action]': '"pan-y"'
        }
    }),
    __metadata$3("design:paramtypes", [ChangeDetectorRef])
], FlipSwitchComponent);

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
var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var L10N_LOADER_CONFIG = new OpaqueToken('l10n.loader.config');
var L10nLoaderService = (function () {
    function L10nLoaderService() {
    }
    return L10nLoaderService;
}());
function extractLocales(group) {
    var supportedLocales = [];
    Object.keys(group).forEach(function (key) {
        if (group[key]) {
            Object.keys(group[key]).forEach(function (locale) {
                supportedLocales.push(locale);
            });
        }
    });
    // unique
    return Array.from(new Set(supportedLocales));
}
function flatten(locale, group) {
    var pkg = {};
    Object.keys(group).forEach(function (key) {
        if (group[key] && group[key][locale]) {
            pkg[key] = group[key][locale];
        }
    });
    return pkg;
}
var L10nStaticLoaderService = (function (_super) {
    __extends(L10nStaticLoaderService, _super);
    function L10nStaticLoaderService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        return _this;
    }
    L10nStaticLoaderService.prototype.getTranslationPackage = function (locale) {
        return Observable.of(flatten(locale, this.config));
    };
    L10nStaticLoaderService.prototype.getSupportedLocales = function () {
        return Observable.of(extractLocales(this.config));
    };
    return L10nStaticLoaderService;
}(L10nLoaderService));
L10nStaticLoaderService = __decorate$10([
    Injectable(),
    __param(0, Inject(L10N_LOADER_CONFIG)),
    __metadata$4("design:paramtypes", [Object])
], L10nStaticLoaderService);
var L10nAsyncLoaderService = (function (_super) {
    __extends(L10nAsyncLoaderService, _super);
    function L10nAsyncLoaderService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        var streamlike;
        if (typeof config === 'function') {
            streamlike = config();
        }
        else {
            streamlike = Observable.from(config);
        }
        // Enable caching
        _this.data$ = streamlike.publishReplay(1).refCount();
        return _this;
    }
    L10nAsyncLoaderService.prototype.getTranslationPackage = function (locale) {
        return this.data$.map(function (data) { return flatten(locale, data); });
    };
    L10nAsyncLoaderService.prototype.getSupportedLocales = function () {
        return this.data$.map(function (data) { return extractLocales(data); });
    };
    return L10nAsyncLoaderService;
}(L10nLoaderService));
L10nAsyncLoaderService = __decorate$10([
    Injectable(),
    __param(0, Inject(L10N_LOADER_CONFIG)),
    __metadata$4("design:paramtypes", [Object])
], L10nAsyncLoaderService);
var L10nNoopLoaderService = (function (_super) {
    __extends(L10nNoopLoaderService, _super);
    function L10nNoopLoaderService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    L10nNoopLoaderService.prototype.getTranslationPackage = function (locale) {
        return Observable.of({});
    };
    L10nNoopLoaderService.prototype.getSupportedLocales = function () {
        return Observable.of([]);
    };
    return L10nNoopLoaderService;
}(L10nLoaderService));
L10nNoopLoaderService = __decorate$10([
    Injectable()
], L10nNoopLoaderService);

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var L10nParserService = (function () {
    function L10nParserService() {
    }
    return L10nParserService;
}());
var L10nFormatParserService = (function (_super) {
    __extends$1(L10nFormatParserService, _super);
    function L10nFormatParserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    L10nFormatParserService.prototype.parse = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.replace(/{(\d+)}/g, function (match, idx) {
            return typeof args[idx] === 'string' ? args[idx] : match;
        });
    };
    return L10nFormatParserService;
}(L10nParserService));
L10nFormatParserService = __decorate$11([
    Injectable()
], L10nFormatParserService);

var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var L10N_CONFIG = new OpaqueToken('l10n.config');
var L10nService = (function () {
    function L10nService(config, // TODO: L10nConfig - problem with ngc
        loader, parser) {
        var _this = this;
        this.config = config;
        this.loader = loader;
        this.parser = parser;
        this.packages = {};
        this.locale = (config.locale || this.getNavigatorLang() || 'en-us').toLowerCase();
        this._locale$ = new BehaviorSubject(this.locale);
        // Initialize the streams
        var supportedLocales$ = this.getSupportedLocales();
        // Set up stream of valid locale
        var locale$ = Observable.combineLatest(supportedLocales$, this.locale$, function (supportedLocales, locale) {
            if (supportedLocales.length > 0) {
                // If not supported use first locale as fallback
                return (supportedLocales.indexOf(locale) >= 0) ? locale : supportedLocales[0];
            }
            else {
                // If there are no supported locales, presume every locale as supported
                return locale;
            }
        });
        // Set up stream of valid fallback locale
        var fbLocale$ = Observable.combineLatest(supportedLocales$, locale$, function (supportedLocales, locale) {
            if (supportedLocales.length > 0 && supportedLocales[0] !== locale) {
                return supportedLocales[0];
            }
            else if (supportedLocales.length > 1 && supportedLocales[0] === locale) {
                return supportedLocales[1];
            }
            else {
                return null;
            }
        });
        this.package$ = locale$.switchMap(function (locale) { return _this.getTranslationPackage(locale); });
        // Setup the fallback package stream
        var fbPackageTemp$ = fbLocale$.switchMap(function (fbLocale) {
            return fbLocale ? _this.getTranslationPackage(fbLocale) : Observable.of({});
        });
        // The real fallback stream is a combination of the latest package and fallback package
        this.fbPackage$ = Observable.combineLatest(this.package$, fbPackageTemp$, function (pkg, fbPkg) {
            return fbPkg ? Object.assign({}, fbPkg, pkg) : pkg;
        });
    }
    Object.defineProperty(L10nService.prototype, "locale$", {
        get: function () {
            return this._locale$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
    * @internal
    */
    L10nService.prototype.getTranslationPackage = function (locale) {
        // Cache package streams and share
        if (!this.packages[locale]) {
            this.packages[locale] = this.loader
                .getTranslationPackage(locale)
                .publishReplay(1)
                .refCount();
        }
        return this.packages[locale];
    };
    /**
    * Gets supported locales
    */
    L10nService.prototype.getSupportedLocales = function () {
        // Cache supportedLocales and share
        if (!this.supportedLocales$) {
            this.supportedLocales$ = this.loader
                .getSupportedLocales()
                .map(function (sl) { return sl.map(function (locale) { return locale.toLowerCase(); }); })
                .publishReplay(1)
                .refCount();
        }
        return this.supportedLocales$;
    };
    /**
    * Set the current locale.
    * Emits new translation values to subscribers
    * @param locale
    */
    L10nService.prototype.setLocale = function (locale) {
        this.locale = locale.toLowerCase();
        this._locale$.next(this.locale);
    };
    /**
    * Looks up the value for the provided key in the current tranlsation package.
    * Falls back to the fbLocale translation package if the key is not found.
    * @param key
    * @param params
    * @returns {Observable<string>} The translated key
    */
    L10nService.prototype.localize = function (key) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.package$.switchMap(function (pkg) {
            return pkg[key] ? Observable.of(pkg) : _this.fbPackage$;
        }).map(function (pkg) {
            return pkg[key] ? (_a = _this.parser).parse.apply(_a, [pkg[key]].concat(args)) : key;
            var _a;
        });
    };
    // alias for localize
    L10nService.prototype.loc = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.localize.apply(this, [key].concat(args));
    };
    L10nService.prototype.getNavigatorLang = function () {
        var lang = '';
        if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
            var nav = window.navigator;
            if (nav['languages'] && nav['languages'].length > 0) {
                lang = nav['languages'][0];
            }
            else {
                lang = nav['language'] || nav['browserLanguage'];
            }
        }
        return lang || 'en-US';
    };
    return L10nService;
}());
L10nService = __decorate$12([
    Injectable(),
    __param$1(0, Inject(L10N_CONFIG)),
    __metadata$5("design:paramtypes", [Object, L10nLoaderService,
        L10nParserService])
], L10nService);

var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var L10nPipe = (function () {
    function L10nPipe(l10n) {
        this.l10n = l10n;
        this.args = [];
    }
    // Check if key and args match
    L10nPipe.prototype.compare = function (key) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return key === this.key &&
            args.length === this.args.length &&
            args.every(function (v, idx) { return v === _this.args[idx]; });
    };
    L10nPipe.prototype.transform = function (key) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.l10n) {
            return key;
        }
        if (this.subscription) {
            // Dispose subscription if key or params are different
            if (!this.compare.apply(this, [key].concat(args))) {
                this.dispose();
            }
            else {
                return this.value;
            }
        }
        // store key and args for comparison
        this.key = key;
        this.args = args;
        this.subscription = (_a = this.l10n).localize.apply(_a, [key].concat(args)).subscribe(function (value) {
            _this.value = value;
        });
        return this.value;
        var _a;
    };
    L10nPipe.prototype.dispose = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    L10nPipe.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    return L10nPipe;
}());
L10nPipe = __decorate$13([
    Pipe({
        name: 'loc',
        pure: false
    }),
    __param$2(0, Inject(L10nService)),
    __param$2(0, Optional()),
    __metadata$6("design:paramtypes", [Object])
], L10nPipe);

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var L10nModule = L10nModule_1 = (function () {
    function L10nModule() {
    }
    L10nModule.forRoot = function (config) {
        return {
            ngModule: L10nModule_1,
            providers: [
                L10nService,
                {
                    provide: L10N_CONFIG,
                    useValue: config.config || {}
                },
                {
                    provide: L10nLoaderService,
                    useClass: config.loader
                }, {
                    provide: L10N_LOADER_CONFIG,
                    useValue: config.loaderConfig
                }, {
                    provide: L10nParserService,
                    useClass: config.parser || L10nFormatParserService
                }
            ]
        };
    };
    return L10nModule;
}());
L10nModule = L10nModule_1 = __decorate$9([
    NgModule({
        imports: [],
        declarations: [L10nPipe],
        exports: [L10nPipe]
    })
], L10nModule);
var L10nModule_1;

var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wormhole = (function () {
    function Wormhole() {
    }
    return Wormhole;
}());
var TemplateWormholeBase = (function (_super) {
    __extends$2(TemplateWormholeBase, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormholeBase(templateRef) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        if (!(templateRef instanceof TemplateRef)) {
            throw 'invalid TemplateRef';
        }
        return _this;
    }
    Object.defineProperty(TemplateWormholeBase.prototype, "isConnected", {
        get: function () {
            return !!(this.viewRef);
        },
        enumerable: true,
        configurable: true
    });
    TemplateWormholeBase.prototype.connect = function (attrs, events, index) {
        var _this = this;
        if (typeof attrs === 'object' && attrs) {
            this.cachedAttrs = attrs;
        }
        this.disconnect();
        this.viewRef = this.attach(this.templateRef, index);
        this.viewRef.onDestroy(function () {
            _this.viewRef = undefined;
        });
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(this.viewRef.context, this.cachedAttrs);
        }
        this.viewRef.detectChanges();
        return Observable.never();
    };
    TemplateWormholeBase.prototype.disconnect = function () {
        this.detach();
        this.viewRef = undefined;
    };
    TemplateWormholeBase.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.viewRef && attrs && typeof attrs === 'object') {
            Object.assign(this.viewRef.context, attrs);
            this.viewRef.markForCheck();
        }
    };
    return TemplateWormholeBase;
}(Wormhole));
var ComponentWormholeBase = (function (_super) {
    __extends$2(ComponentWormholeBase, _super);
    function ComponentWormholeBase(componentClass) {
        var _this = _super.call(this) || this;
        _this.componentClass = componentClass;
        if (!(typeof componentClass === 'function')) {
            throw 'invalid component class';
        }
        return _this;
    }
    Object.defineProperty(ComponentWormholeBase.prototype, "compInstance", {
        get: function () {
            return this.compRef && this.compRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentWormholeBase.prototype, "isConnected", {
        get: function () {
            return !!this.compRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentWormholeBase.prototype.connect = function (attrs, events, index) {
        var _this = this;
        if (typeof attrs === 'object' && attrs) {
            this.cachedAttrs = attrs;
        }
        this.disconnect();
        this.compRef = this.attach(this.componentClass, index);
        this.compRef.onDestroy(function () {
            _this.compRef = undefined;
        });
        var instance = this.compRef.instance;
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(instance, this.cachedAttrs);
        }
        this.compRef.changeDetectorRef.detectChanges();
        var events$ = (events || []).map(function (event) {
            if (!instance[event])
                throw 'Event not found: ' + event;
            return instance[event] && instance[event].map(function (value) { return ({ event: event, value: value }); });
        });
        return Observable.merge.apply(Observable, events$);
    };
    ComponentWormholeBase.prototype.disconnect = function () {
        this.detach();
        this.compRef = undefined;
    };
    ComponentWormholeBase.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.compRef && attrs && typeof attrs === 'object') {
            Object.assign(this.compRef.instance, attrs);
            // TODO: Change detection is not triggering when changedetection is set to onPush
            // Workaround for ng 4
            // https://github.com/angular/angular/issues/12313
            var cdRef = this.compRef.changeDetectorRef;
            if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
                this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 3);
            }
            this.compRef.changeDetectorRef.markForCheck();
        }
    };
    return ComponentWormholeBase;
}(Wormhole));

var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TemplateWormhole = (function (_super) {
    __extends$3(TemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormhole(templateRef, viewContainerRef) {
        var _this = _super.call(this, templateRef) || this;
        _this.viewContainerRef = viewContainerRef;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        return _this;
    }
    TemplateWormhole.prototype.attach = function (templateRef, index) {
        return this.viewContainerRef.createEmbeddedView(templateRef, null, typeof index === 'number' ? index : this.viewContainerRef.length);
    };
    TemplateWormhole.prototype.detach = function () {
        if (this.isConnected && this.currentIndex >= 0) {
            this.viewContainerRef.remove(this.currentIndex);
        }
    };
    Object.defineProperty(TemplateWormhole.prototype, "currentIndex", {
        get: function () {
            return this.viewRef ? this.viewContainerRef.indexOf(this.viewRef) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return TemplateWormhole;
}(TemplateWormholeBase));
var ComponentWormhole = (function (_super) {
    __extends$3(ComponentWormhole, _super);
    function ComponentWormhole(componentClass, viewContainerRef, injector) {
        var _this = _super.call(this, componentClass) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        return _this;
    }
    ComponentWormhole.prototype.attach = function (componentClass, index) {
        var injector = this.injector || this.viewContainerRef.parentInjector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(componentClass);
        }
        return this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index : this.viewContainerRef.length, injector);
    };
    ComponentWormhole.prototype.detach = function () {
        if (this.compRef) {
            this.compRef.destroy();
        }
    };
    Object.defineProperty(ComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? this.viewContainerRef.indexOf(this.compRef.hostView) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return ComponentWormhole;
}(ComponentWormholeBase));

var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getViewRootNode(embeddedViewRef) {
    var rootNodes = embeddedViewRef.rootNodes;
    return (rootNodes && rootNodes.length && rootNodes[0]) || undefined;
}
function getComponentRootNode(componentRef) {
    return getViewRootNode(componentRef.hostView);
}
var DomComponentWormhole = (function (_super) {
    __extends$4(DomComponentWormhole, _super);
    function DomComponentWormhole(componentClass, appRef, node, injector) {
        var _this = _super.call(this, componentClass) || this;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(DomComponentWormhole.prototype, "rootComponentRef", {
        get: function () {
            var rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
            if (!rootComponent) {
                throw 'Application root component not found';
            }
            return rootComponent;
        },
        enumerable: true,
        configurable: true
    });
    DomComponentWormhole.prototype.attach = function (componentClass, index) {
        var injector = this.injector || this.rootComponentRef.injector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(componentClass);
        }
        var compRef = this.compFactory.create(injector);
        this.appRef.attachView(compRef.hostView);
        var compRefRootNode = getComponentRootNode(compRef);
        var node = this.node || getComponentRootNode(this.rootComponentRef);
        if (!compRefRootNode) {
            throw 'component root node not found';
        }
        if (!node) {
            throw 'root node not found';
        }
        node.appendChild(compRefRootNode);
        return compRef;
    };
    DomComponentWormhole.prototype.detach = function () {
        if (this.compRef) {
            this.compRef.destroy();
        }
    };
    Object.defineProperty(DomComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    return DomComponentWormhole;
}(ComponentWormholeBase));
var DomTemplateWormhole = (function (_super) {
    __extends$4(DomTemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function DomTemplateWormhole(templateRef, appRef, node, injector) {
        var _this = _super.call(this, templateRef) || this;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(DomTemplateWormhole.prototype, "rootComponentRef", {
        get: function () {
            var rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
            if (!rootComponent) {
                throw 'Application root component not found';
            }
            return rootComponent;
        },
        enumerable: true,
        configurable: true
    });
    DomTemplateWormhole.prototype.attach = function (templateRef, index) {
        var injector = this.injector || this.rootComponentRef.injector;
        var embeddedView = templateRef.createEmbeddedView(undefined);
        this.appRef.attachView(embeddedView);
        var compRefRootNode = getViewRootNode(embeddedView);
        var node = this.node || getComponentRootNode(this.rootComponentRef);
        if (!compRefRootNode) {
            throw 'component root node not found';
        }
        if (!node) {
            throw 'root node not found';
        }
        node.appendChild(compRefRootNode);
        return embeddedView;
    };
    DomTemplateWormhole.prototype.detach = function () {
        if (this.viewRef && this.currentIndex >= 0) {
            this.viewRef.destroy();
        }
    };
    Object.defineProperty(DomTemplateWormhole.prototype, "currentIndex", {
        get: function () {
            return this.viewRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    return DomTemplateWormhole;
}(TemplateWormholeBase));

var __extends$6 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WormholeHostBase = (function () {
    function WormholeHostBase() {
        this._wormholes = [];
    }
    Object.defineProperty(WormholeHostBase.prototype, "wormholes", {
        get: function () {
            return this._wormholes.filter(function (w) { return w.isConnected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WormholeHostBase.prototype, "connectedWormholes", {
        get: function () {
            return this._wormholes.filter(function (w) { return w.isConnected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    WormholeHostBase.prototype.getWormhole = function (index) {
        return this._wormholes[index];
    };
    WormholeHostBase.prototype.connectWormhole = function (target, attrs, events) {
        var wormhole = this.createWormhole(target);
        wormhole.connect(attrs, events);
        return wormhole;
    };
    WormholeHostBase.prototype.disconnectWormhole = function (index) {
        var w = this.getWormhole(index);
        if (w) {
            w.disconnect();
        }
    };
    WormholeHostBase.prototype.disconnectWormholes = function () {
        this._wormholes.forEach(function (w) { return w.disconnect(); });
    };
    WormholeHostBase.prototype.clearWormholes = function () {
        this.disconnectWormholes();
        this._wormholes = [];
    };
    WormholeHostBase.prototype.removeWormhole = function (wormhole) {
        var w = typeof wormhole === 'number' ? this.getWormhole(wormhole) : wormhole;
        if (w) {
            w.disconnect();
            this._wormholes = this._wormholes.filter(function (cw) { return cw !== w; });
        }
    };
    return WormholeHostBase;
}());
var WormholeHost = (function (_super) {
    __extends$6(WormholeHost, _super);
    function WormholeHost(_host, _injector) {
        var _this = _super.call(this) || this;
        _this._host = _host;
        _this._injector = _injector;
        if (!_host) {
            throw 'missing host ViewContainerRef';
        }
        return _this;
    }
    WormholeHost.prototype.createWormhole = function (arg2) {
        var wormhole;
        if (typeof arg2 === 'function' && this._host) {
            wormhole = new ComponentWormhole(arg2, this._host, this._injector);
        }
        else if (arg2 instanceof TemplateRef && this._host) {
            wormhole = new TemplateWormhole(arg2, this._host);
        }
        else {
            throw 'Parameter must be component class or templateRef';
        }
        this._wormholes.push(wormhole);
        return wormhole;
    };
    return WormholeHost;
}(WormholeHostBase));
var DomWormholeHost = (function (_super) {
    __extends$6(DomWormholeHost, _super);
    function DomWormholeHost(_host, _node, _injector) {
        var _this = _super.call(this) || this;
        _this._host = _host;
        _this._node = _node;
        _this._injector = _injector;
        if (!_host) {
            throw 'missing host ApplicationRef';
        }
        return _this;
    }
    DomWormholeHost.prototype.createWormhole = function (arg2) {
        var wormhole;
        if (typeof arg2 === 'function' && this._host instanceof ApplicationRef) {
            wormhole = new DomComponentWormhole(arg2, this._host, this._node, this._injector);
        }
        else if (arg2 instanceof TemplateRef && this._host) {
            wormhole = new DomTemplateWormhole(arg2, this._host, this._node, this._injector);
        }
        else {
            throw 'Parameter must be component class or templateRef';
        }
        this._wormholes.push(wormhole);
        return wormhole;
    };
    return DomWormholeHost;
}(WormholeHostBase));

var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WormholeDirective = (function (_super) {
    __extends$5(WormholeDirective, _super);
    function WormholeDirective(viewContainerRef) {
        return _super.call(this, viewContainerRef) || this;
    }
    Object.defineProperty(WormholeDirective.prototype, "isConnected", {
        get: function () {
            return !!this.wormhole && this.wormhole.isConnected;
        },
        enumerable: true,
        configurable: true
    });
    WormholeDirective.prototype.ngOnChanges = function (changes) {
        var attrs = ('attrs' in changes && changes['attrs'].currentValue) || undefined;
        if ('target' in changes) {
            this.clearWormholes();
            var target = changes['target'].currentValue;
            if (target) {
                this.wormhole = this.connectWormhole(target, attrs);
            }
        }
        else if (attrs && this.wormhole) {
            this.wormhole.setAttributes(attrs);
        }
    };
    WormholeDirective.prototype.ngOnDestroy = function () {
        if (this.wormhole) {
            this.wormhole.disconnect();
        }
    };
    return WormholeDirective;
}(WormholeHost));
__decorate$15([
    Input('connect'),
    __metadata$7("design:type", Object)
], WormholeDirective.prototype, "target", void 0);
__decorate$15([
    Input('attrs'),
    __metadata$7("design:type", Object)
], WormholeDirective.prototype, "attrs", void 0);
WormholeDirective = __decorate$15([
    Directive({
        selector: 'wormhole'
    }),
    __metadata$7("design:paramtypes", [ViewContainerRef])
], WormholeDirective);

var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLWormholeModule = (function () {
    function VCLWormholeModule() {
    }
    return VCLWormholeModule;
}());
VCLWormholeModule = __decorate$14([
    NgModule({
        exports: [WormholeDirective],
        declarations: [WormholeDirective],
        providers: []
    })
], VCLWormholeModule);

var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MetalistItem = (function () {
    function MetalistItem() {
        this.disabled = false;
        this.marked = false;
        this.selected = false;
    }
    return MetalistItem;
}());
__decorate$16([
    ViewChild(TemplateRef),
    __metadata$8("design:type", TemplateRef)
], MetalistItem.prototype, "_content", void 0);
__decorate$16([
    Input(),
    __metadata$8("design:type", Object)
], MetalistItem.prototype, "value", void 0);
__decorate$16([
    Input(),
    __metadata$8("design:type", Object)
], MetalistItem.prototype, "metadata", void 0);
__decorate$16([
    Input(),
    __metadata$8("design:type", Boolean)
], MetalistItem.prototype, "disabled", void 0);
__decorate$16([
    Input(),
    __metadata$8("design:type", Boolean)
], MetalistItem.prototype, "marked", void 0);
__decorate$16([
    Input(),
    __metadata$8("design:type", Boolean)
], MetalistItem.prototype, "selected", void 0);
MetalistItem = __decorate$16([
    Component({
        selector: 'vcl-metalist-item',
        template: '<ng-template><ng-content></ng-content></ng-template>'
    })
], MetalistItem);

var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Multiple"] = 0] = "Multiple";
    SelectionMode[SelectionMode["Single"] = 1] = "Single";
})(SelectionMode || (SelectionMode = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$2 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MetalistComponent; }),
    multi: true
};
var MetalistComponent = (function () {
    function MetalistComponent(cdRef) {
        this.cdRef = cdRef;
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.selectionMode = SelectionMode.Single;
        this.maxSelectableItems = Infinity;
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
                var overflow = this.selectionMode === SelectionMode.Multiple && !item.selected && selectedItems.length >= this.maxSelectableItems;
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
    return MetalistComponent;
}());
__decorate$17([
    Input(),
    __metadata$9("design:type", Number)
], MetalistComponent.prototype, "selectionMode", void 0);
__decorate$17([
    Input(),
    __metadata$9("design:type", String),
    __metadata$9("design:paramtypes", [String])
], MetalistComponent.prototype, "mode", null);
__decorate$17([
    Input(),
    __metadata$9("design:type", Number)
], MetalistComponent.prototype, "maxSelectableItems", void 0);
__decorate$17([
    Output(),
    __metadata$9("design:type", Object)
], MetalistComponent.prototype, "change", void 0);
__decorate$17([
    ContentChildren(MetalistItem),
    __metadata$9("design:type", QueryList)
], MetalistComponent.prototype, "items", void 0);
MetalistComponent = __decorate$17([
    Component({
        selector: 'vcl-metalist, [vcl-metalist]',
        template: "<wormhole *ngFor=\"let item of items\" [connect]=\"item._content\"></wormhole>",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$2],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata$9("design:paramtypes", [ChangeDetectorRef])
], MetalistComponent);

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLMetalistModule = (function () {
    function VCLMetalistModule() {
    }
    return VCLMetalistModule;
}());
VCLMetalistModule = __decorate$8([
    NgModule({
        imports: [CommonModule, L10nModule, VCLWormholeModule],
        exports: [MetalistComponent, MetalistItem],
        declarations: [MetalistComponent, MetalistItem],
        providers: [],
    })
], VCLMetalistModule);

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLFlipSwitchModule = (function () {
    function VCLFlipSwitchModule() {
    }
    return VCLFlipSwitchModule;
}());
VCLFlipSwitchModule = __decorate$6([
    NgModule({
        imports: [CommonModule, L10nModule, VCLMetalistModule],
        exports: [FlipSwitchComponent],
        declarations: [FlipSwitchComponent],
        providers: [],
    })
], VCLFlipSwitchModule);

var __decorate$20 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IconService = (function () {
    function IconService() {
    }
    // A default name resolver following the CSS class name conventions of
    // the well-known Font Awesome icon font. Bascially it translates
    // `fa:user` into `fa fa-user`
    IconService.prototype.defaultNameResolver = function (icon) {
        var iconParts = icon.split(':');
        if (iconParts.length > 1) {
            var setName = iconParts[0];
            iconParts.shift();
            var iconClasses = iconParts.join(" " + setName + "-");
            return setName + " " + setName + "-" + iconClasses;
        }
        else {
            return icon;
        }
    };
    IconService.prototype.lookup = function (icon) {
        if (typeof icon === 'string' && icon) {
            var iconName = icon;
            var providerName = void 0;
            // Split on first : occurrence
            var iconParts = iconName.split(/:(.+)?/);
            if (iconParts.length === 0) {
                return icon;
            }
            else {
                providerName = iconParts[0];
                // TODO: for now, just hardcode to default resolver, later we need
                // a mapping between the provider and the resolver or each font
                // brings its own resolver.
                providerName = 'defaultNameResolver';
                return this[providerName](iconName);
            }
        }
        return icon;
    };
    return IconService;
}());
IconService = __decorate$20([
    Injectable()
], IconService);

var __decorate$19 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var IconComponent = (function () {
    function IconComponent(_iconService) {
        this._iconService = _iconService;
    }
    Object.defineProperty(IconComponent.prototype, "mergedIconClass", {
        get: function () {
            var fontIconClass = this.icon ? this._iconService.lookup(this.icon) : '';
            return "vclIcon " + fontIconClass + " " + (this.iconClass || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "isAriaHidden", {
        // Do not hide from aria when a label is provided
        get: function () {
            return !this.label;
        },
        enumerable: true,
        configurable: true
    });
    return IconComponent;
}());
__decorate$19([
    Input(),
    __metadata$10("design:type", String)
], IconComponent.prototype, "src", void 0);
__decorate$19([
    Input(),
    __metadata$10("design:type", String)
], IconComponent.prototype, "svguse", void 0);
__decorate$19([
    Input(),
    __metadata$10("design:type", String)
], IconComponent.prototype, "iconClass", void 0);
__decorate$19([
    Input(),
    __metadata$10("design:type", String)
], IconComponent.prototype, "icon", void 0);
__decorate$19([
    HostBinding('attr.aria-label'),
    Input(),
    __metadata$10("design:type", String)
], IconComponent.prototype, "label", void 0);
__decorate$19([
    HostBinding('attr.role'),
    Input(),
    __metadata$10("design:type", String)
], IconComponent.prototype, "ariaRole", void 0);
__decorate$19([
    HostBinding('class'),
    __metadata$10("design:type", String),
    __metadata$10("design:paramtypes", [])
], IconComponent.prototype, "mergedIconClass", null);
__decorate$19([
    HostBinding('attr.aria-hidden'),
    __metadata$10("design:type", Object),
    __metadata$10("design:paramtypes", [])
], IconComponent.prototype, "isAriaHidden", null);
IconComponent = __decorate$19([
    Component({
        selector: 'vcl-icon, [vcl-icon]',
        template: "<img *ngIf=\"src\" [attr.src]=\"src\"> <svg *ngIf=\"svguse\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"> <use [attr.xmlns:xlink]=\"'http://www.w3.org/1999/xlink'\"></use> </svg> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.vclIcon]': 'true',
        },
    }),
    __metadata$10("design:paramtypes", [IconService])
], IconComponent);

var __decorate$18 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLIconModule = VCLIconModule_1 = (function () {
    function VCLIconModule() {
    }
    VCLIconModule.forRoot = function (config) {
        return {
            ngModule: VCLIconModule_1,
            providers: [
                {
                    provide: IconService,
                    useClass: config.service || IconService
                }
            ]
        };
    };
    return VCLIconModule;
}());
VCLIconModule = VCLIconModule_1 = __decorate$18([
    NgModule({
        imports: [CommonModule, L10nModule],
        exports: [IconComponent],
        declarations: [IconComponent],
        providers: [IconService],
    })
], VCLIconModule);
var VCLIconModule_1;

var __decorate$23 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DropdownOption = (function () {
    function DropdownOption() {
        this.disabled = false;
        this.selected = false;
    }
    return DropdownOption;
}());
__decorate$23([
    ViewChild(TemplateRef),
    __metadata$12("design:type", TemplateRef)
], DropdownOption.prototype, "content", void 0);
__decorate$23([
    Input(),
    __metadata$12("design:type", Object)
], DropdownOption.prototype, "value", void 0);
__decorate$23([
    Input(),
    __metadata$12("design:type", Object)
], DropdownOption.prototype, "metadata", void 0);
__decorate$23([
    Input(),
    __metadata$12("design:type", String)
], DropdownOption.prototype, "label", void 0);
__decorate$23([
    Input(),
    __metadata$12("design:type", String)
], DropdownOption.prototype, "sublabel", void 0);
__decorate$23([
    Input(),
    __metadata$12("design:type", Boolean)
], DropdownOption.prototype, "disabled", void 0);
__decorate$23([
    Input(),
    __metadata$12("design:type", Boolean)
], DropdownOption.prototype, "selected", void 0);
DropdownOption = __decorate$23([
    Component({
        selector: 'vcl-dropdown-option',
        template: '<ng-template><ng-content></ng-content></ng-template>'
    })
], DropdownOption);

var __decorate$22 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
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
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$3 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DropdownComponent; }),
    multi: true
};
var DropdownComponent = (function () {
    function DropdownComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.tabindex = 0;
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.selectionMode = SelectionMode.Single;
        this.listenKeys = true;
        this.change = new EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
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
    };
    DropdownComponent.prototype.onMetalistBlur = function () {
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
    return DropdownComponent;
}());
__decorate$22([
    ViewChild('metalist'),
    __metadata$11("design:type", MetalistComponent)
], DropdownComponent.prototype, "metalist", void 0);
__decorate$22([
    ViewChild('metalist', { read: ElementRef }),
    __metadata$11("design:type", ElementRef)
], DropdownComponent.prototype, "listbox", void 0);
__decorate$22([
    ContentChildren(DropdownOption),
    __metadata$11("design:type", QueryList)
], DropdownComponent.prototype, "items", void 0);
__decorate$22([
    Input(),
    __metadata$11("design:type", Number)
], DropdownComponent.prototype, "tabindex", void 0);
__decorate$22([
    Input(),
    __metadata$11("design:type", Number)
], DropdownComponent.prototype, "selectionMode", void 0);
__decorate$22([
    Input(),
    __metadata$11("design:type", String),
    __metadata$11("design:paramtypes", [String])
], DropdownComponent.prototype, "mode", null);
__decorate$22([
    Input(),
    __metadata$11("design:type", Number)
], DropdownComponent.prototype, "maxSelectableItems", void 0);
__decorate$22([
    Input(),
    __metadata$11("design:type", Boolean)
], DropdownComponent.prototype, "listenKeys", void 0);
__decorate$22([
    Output('change'),
    __metadata$11("design:type", Object)
], DropdownComponent.prototype, "change", void 0);
DropdownComponent = __decorate$22([
    Component({
        selector: 'vcl-dropdown',
        template: "<ul vcl-metalist [selectionMode]=\"selectionMode\" [maxSelectableItems]=\"maxSelectableItems\" #metalist class=\"vclDropdown vclOpen\" role=\"listbox\" [attr.tabindex]=\"tabindex\" [attr.aria-multiselectable]=\"mode === 'multiple'\" [style.position]=\"'static'\" (change)=\"onMetalistChange($event)\" (blur)=\"onMetalistBlur()\" (keydown)=\"onMetalistKeydown($event)\" > <!--  (mousedown) is used because tap will break scrolling on mobiles --> <vcl-metalist-item #metaItem *ngFor=\"let item of items\"  [metadata]=\"item\" [selected]=\"item.selected\" [disabled]=\"item.disabled\" [marked]=\"item.marked\" [value]=\"item.value\"> <li role=\"option\" class=\"vclDropdownItem\" [class.vclSelected]=\"metaItem.selected\" [class.vclDisabled]=\"metaItem.disabled\" [class.vclHighlighted]=\"metaItem.marked\" [attr.aria-selected]=\"metaItem.selected\" (tap)=\"onMetalistItemTap(metaItem)\"> <div *ngIf=\"item.label\" class=\"vclDropdownItemLabel\"> {{item.label}} </div> <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\"> {{item.sublabel}} </div> <wormhole *ngIf=\"item.content\" [connect]=\"item.content\"></wormhole> </li> </vcl-metalist-item> </ul> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$3],
        host: {
            '[attr.tabindex]': '-1',
        }
    }),
    __metadata$11("design:paramtypes", [ElementRef, ChangeDetectorRef])
], DropdownComponent);

var __decorate$21 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLDropdownModule = (function () {
    function VCLDropdownModule() {
    }
    return VCLDropdownModule;
}());
VCLDropdownModule = __decorate$21([
    NgModule({
        imports: [CommonModule, L10nModule, VCLMetalistModule, VCLWormholeModule],
        exports: [DropdownComponent, DropdownOption],
        declarations: [DropdownComponent, DropdownOption],
        providers: [],
    })
], VCLDropdownModule);

var __extends$7 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$26 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ButtonStateContentDirective = (function (_super) {
    __extends$7(ButtonStateContentDirective, _super);
    function ButtonStateContentDirective(viewContainerRef, tempRef) {
        var _this = _super.call(this, viewContainerRef) || this;
        _this.tempRef = tempRef;
        _this.states = ['enabled'];
        _this.wormhole = _this.createWormhole(_this.tempRef);
        return _this;
    }
    Object.defineProperty(ButtonStateContentDirective.prototype, "state", {
        set: function (value) {
            this.states = (typeof value === 'string' ? [value] : value) || [];
        },
        enumerable: true,
        configurable: true
    });
    ButtonStateContentDirective.prototype.updateState = function (state$$1) {
        if (this.states.includes(state$$1)) {
            this.wormhole.connect();
        }
        else {
            this.wormhole.disconnect();
        }
    };
    return ButtonStateContentDirective;
}(WormholeHost));
__decorate$26([
    Input('vclButtonStateContent'),
    __metadata$13("design:type", Object),
    __metadata$13("design:paramtypes", [Object])
], ButtonStateContentDirective.prototype, "state", null);
ButtonStateContentDirective = __decorate$26([
    Directive({
        selector: '[vclButtonStateContent]'
    }),
    __metadata$13("design:paramtypes", [ViewContainerRef, TemplateRef])
], ButtonStateContentDirective);

var __decorate$28 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var IcogramComponent = (function () {
    function IcogramComponent(elRef) {
        this.elRef = elRef;
    }
    return IcogramComponent;
}());
__decorate$28([
    Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "label", void 0);
__decorate$28([
    Input(),
    __metadata$14("design:type", Boolean)
], IcogramComponent.prototype, "flexLabel", void 0);
__decorate$28([
    Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "prepIcon", void 0);
__decorate$28([
    Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "appIcon", void 0);
__decorate$28([
    Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "prepIconSrc", void 0);
__decorate$28([
    Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "appIconSrc", void 0);
IcogramComponent = __decorate$28([
    Component({
        selector: 'vcl-icogram, [vcl-icogram]',
        host: {
            '[class.vclIcogram]': 'true',
            '[attr.role]': 'img'
        },
        template: "<div vcl-icon *ngIf=\"prepIcon || prepIconSrc\" [icon]=\"prepIcon\" [src]=\"prepIconSrc\"></div> <ng-content></ng-content> <span *ngIf=\"!!label\" [class.vclLayoutFlex]=\"!!flexLabel\" class=\"vclText\"> {{label | loc}} </span> <div vcl-icon *ngIf=\"appIcon || appIconSrc\" [icon]=\"appIcon\" [src]=\"appIconSrc\"></div> ",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata$14("design:paramtypes", [ElementRef])
], IcogramComponent);

var __decorate$27 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLIcogramModule = (function () {
    function VCLIcogramModule() {
    }
    return VCLIcogramModule;
}());
VCLIcogramModule = __decorate$27([
    NgModule({
        imports: [CommonModule, VCLIconModule, L10nModule],
        exports: [IcogramComponent],
        declarations: [IcogramComponent],
        providers: [],
    })
], VCLIcogramModule);

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
function dispatchTap(el) {
    dispatch(el, 'pointerdown');
    setTimeout(function () {
        dispatch(el, 'pointerup');
    }, 100);
}

var __extends$8 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$29 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var InteractionType;
(function (InteractionType) {
    InteractionType[InteractionType["Click"] = 0] = "Click";
    InteractionType[InteractionType["Tap"] = 1] = "Tap";
})(InteractionType || (InteractionType = {}));
var ButtonComponent = (function (_super) {
    __extends$8(ButtonComponent, _super);
    function ButtonComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.latestInteractionTime = 0;
        _this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        _this.selected = false;
        _this.disabled = false;
        _this.disableA11yClick = false;
        _this.busy = false;
        _this.flexLabel = false;
        _this.pressEvent = new EventEmitter();
        _this.stateChange = Observable.merge(_this.observeChange('disabled'), _this.observeChange('busy'))
            .map(function () { return _this.state; })
            .distinctUntilChanged()
            .publishBehavior(_this.state)
            .refCount();
        _this.stateSub = _this.stateChange.subscribe(function (state$$1) {
            if (_this.buttonContent) {
                _this.buttonContent.forEach(function (bc) { return bc.updateState(state$$1); });
            }
        });
        return _this;
    }
    Object.defineProperty(ButtonComponent.prototype, "isDisabled", {
        get: function () {
            return this.disabled || this.busy ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "press", {
        get: function () {
            return this.pressEvent.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "state", {
        get: function () {
            return this.busy ? 'busy' : (this.disabled ? 'disabled' : 'enabled');
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.onKeypress = function (ev) {
        // Trigger a11yClick
        if (!this.disableA11yClick &&
            this.elementRef.nativeElement &&
            (ev.code === 'Space' ||
                ev.code === 'NumpadEnter' ||
                ev.code === 'Enter')) {
            ev.preventDefault();
            dispatchTap(this.elementRef.nativeElement);
        }
    };
    ButtonComponent.prototype.onMouseEnter = function (e) { this.hovered = true; };
    ButtonComponent.prototype.onMouseLeave = function (e) { this.hovered = false; };
    ButtonComponent.prototype.onTap = function (e) {
        this.handleGhostClick(InteractionType.Tap, e);
    };
    ButtonComponent.prototype.onClick = function (e) {
        this.handleGhostClick(InteractionType.Click, e);
    };
    ButtonComponent.prototype.handleGhostClick = function (type, e) {
        var ANTI_GHOST_DELAY = 2000;
        var now = Date.now();
        if (type !== this.latestInteractionType) {
            if ((now - this.latestInteractionTime) > ANTI_GHOST_DELAY) {
                this.latestInteractionType = type;
                this.pressEvent.emit(e);
            }
        }
        else {
            this.latestInteractionType = type;
            this.pressEvent.emit(e);
        }
        this.latestInteractionTime = now;
    };
    ButtonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.buttonContent.forEach(function (bc) { return bc.updateState(_this.state); });
    };
    ButtonComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return ButtonComponent;
}(ObservableComponent));
__decorate$29([
    HostBinding('class.vclHovered'),
    __metadata$15("design:type", Boolean)
], ButtonComponent.prototype, "hovered", void 0);
__decorate$29([
    HostBinding('attr.disabled'),
    __metadata$15("design:type", Boolean),
    __metadata$15("design:paramtypes", [])
], ButtonComponent.prototype, "isDisabled", null);
__decorate$29([
    Input(),
    HostBinding('class.vclSelected'),
    __metadata$15("design:type", Boolean)
], ButtonComponent.prototype, "selected", void 0);
__decorate$29([
    HostBinding('attr.aria-label'),
    Input(),
    __metadata$15("design:type", String)
], ButtonComponent.prototype, "title", void 0);
__decorate$29([
    Input(),
    __metadata$15("design:type", Boolean)
], ButtonComponent.prototype, "disabled", void 0);
__decorate$29([
    Input(),
    __metadata$15("design:type", Boolean)
], ButtonComponent.prototype, "disableA11yClick", void 0);
__decorate$29([
    Input(),
    __metadata$15("design:type", Boolean)
], ButtonComponent.prototype, "busy", void 0);
__decorate$29([
    Input(),
    __metadata$15("design:type", Boolean)
], ButtonComponent.prototype, "flexLabel", void 0);
__decorate$29([
    Input(),
    __metadata$15("design:type", String)
], ButtonComponent.prototype, "label", void 0);
__decorate$29([
    Input(),
    __metadata$15("design:type", String)
], ButtonComponent.prototype, "prepIcon", void 0);
__decorate$29([
    Input(),
    __metadata$15("design:type", String)
], ButtonComponent.prototype, "appIcon", void 0);
__decorate$29([
    Input(),
    __metadata$15("design:type", String)
], ButtonComponent.prototype, "appIconSrc", void 0);
__decorate$29([
    Input(),
    __metadata$15("design:type", String)
], ButtonComponent.prototype, "prepIconSrc", void 0);
__decorate$29([
    Output(),
    __metadata$15("design:type", Observable),
    __metadata$15("design:paramtypes", [])
], ButtonComponent.prototype, "press", null);
__decorate$29([
    Output(),
    __metadata$15("design:type", Object)
], ButtonComponent.prototype, "stateChange", void 0);
__decorate$29([
    ContentChildren(ButtonStateContentDirective),
    __metadata$15("design:type", QueryList)
], ButtonComponent.prototype, "buttonContent", void 0);
__decorate$29([
    HostListener('keypress', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [KeyboardEvent]),
    __metadata$15("design:returntype", void 0)
], ButtonComponent.prototype, "onKeypress", null);
__decorate$29([
    HostListener('mouseenter', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Object]),
    __metadata$15("design:returntype", void 0)
], ButtonComponent.prototype, "onMouseEnter", null);
__decorate$29([
    HostListener('mouseleave', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Object]),
    __metadata$15("design:returntype", void 0)
], ButtonComponent.prototype, "onMouseLeave", null);
__decorate$29([
    HostListener('tap', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Event]),
    __metadata$15("design:returntype", void 0)
], ButtonComponent.prototype, "onTap", null);
__decorate$29([
    HostListener('click', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Event]),
    __metadata$15("design:returntype", void 0)
], ButtonComponent.prototype, "onClick", null);
ButtonComponent = __decorate$29([
    Component({
        selector: 'button[vcl-button]',
        host: {
            '[class.vclButton]': 'true',
        },
        template: "<vcl-icogram [label]=\"label\" [flexLabel]=\"flexLabel\" [prepIcon]=\"prepIcon\" [appIcon]=\"appIcon\" [appIconSrc]=\"appIconSrc\" [prepIconSrc]=\"prepIconSrc\"> <ng-content></ng-content> </vcl-icogram> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __metadata$15("design:paramtypes", [ElementRef])
], ButtonComponent);

var __decorate$25 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLButtonModule = (function () {
    function VCLButtonModule() {
    }
    return VCLButtonModule;
}());
VCLButtonModule = __decorate$25([
    NgModule({
        imports: [CommonModule, VCLIcogramModule, L10nModule],
        exports: [ButtonComponent, ButtonStateContentDirective],
        declarations: [ButtonComponent, ButtonStateContentDirective],
        providers: [],
    })
], VCLButtonModule);

var __decorate$31 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OffClickDirective = (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClick = new EventEmitter();
    }
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            // Add a small delay, so any click that causes this directive to render does not trigger an off-click
            var delay$ = Observable.timer(10).first();
            this.sub = Observable.fromEvent(document, 'click')
                .skipUntil(delay$)
                .subscribe(function (ev) {
                var me = _this.elem.nativeElement;
                // Check that the target is not the off-clicks target element or any sub element
                if (ev.target && me !== ev.target && !me.contains(ev.target)) {
                    _this.offClick.emit();
                }
            });
        }
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        this.sub && this.sub.unsubscribe();
    };
    return OffClickDirective;
}());
__decorate$31([
    Output('offClick'),
    __metadata$16("design:type", Object)
], OffClickDirective.prototype, "offClick", void 0);
OffClickDirective = __decorate$31([
    Directive({
        selector: '[offClick]',
    }),
    __metadata$16("design:paramtypes", [ElementRef])
], OffClickDirective);

var __decorate$30 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLOffClickModule = (function () {
    function VCLOffClickModule() {
    }
    return VCLOffClickModule;
}());
VCLOffClickModule = __decorate$30([
    NgModule({
        declarations: [OffClickDirective],
        exports: [OffClickDirective]
    })
], VCLOffClickModule);

var __extends$9 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$33 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$17 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AttachmentX = {
    Left: 'left',
    Center: 'center',
    Right: 'right',
};
var AttachmentY = {
    Top: 'top',
    Center: 'center',
    Bottom: 'bottom',
};
var Dimension = {
    Width: 'width',
    Height: 'height',
};
var PopoverState;
(function (PopoverState) {
    PopoverState[PopoverState["visible"] = 0] = "visible";
    PopoverState[PopoverState["hidden"] = 1] = "hidden";
    PopoverState[PopoverState["opening"] = 2] = "opening";
    PopoverState[PopoverState["closing"] = 3] = "closing";
})(PopoverState || (PopoverState = {}));
var POPOVER_ANIMATIONS = new OpaqueToken('@ng-vcl/ng-vcl#popover_animations');
var PopoverComponent = PopoverComponent_1 = (function (_super) {
    __extends$9(PopoverComponent, _super);
    function PopoverComponent(me, builder, animations) {
        var _this = _super.call(this) || this;
        _this.me = me;
        _this.builder = builder;
        _this.animations = animations;
        _this.targetX = AttachmentX.Left;
        _this.targetY = AttachmentY.Bottom;
        _this.attachmentX = AttachmentX.Left;
        _this.attachmentY = AttachmentY.Top;
        _this.willClose = new EventEmitter();
        _this.willOpen = new EventEmitter();
        _this.state = PopoverState.hidden;
        _this.translateX = 1;
        _this.translateY = 0;
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
            return (this.state === PopoverState.opening || this.state === PopoverState.visible);
        },
        set: function (value) {
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "classHidden", {
        get: function () {
            return this.state === PopoverState.hidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "styleVisibility", {
        get: function () {
            return this.state === PopoverState.opening ? 'hidden' : 'visible';
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
    PopoverComponent.prototype.ngOnInit = function () {
        var tag = this.tag + ".ngOnInit()";
        if (this.debug)
            console.log(tag, 'this:', this);
        this.setTag();
    };
    PopoverComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.reposition(); });
        if (this.animations) {
            if (this.animations.enter) {
                this.enterAnimationFactory = this.builder.build(this.animations.enter);
            }
            if (this.animations.leave) {
                this.leaveAnimationFactory = this.builder.build(this.animations.leave);
            }
        }
    };
    PopoverComponent.prototype.open = function () {
        var _this = this;
        if (this.state === PopoverState.visible || this.state === PopoverState.opening) {
            return;
        }
        this.state = PopoverState.opening;
        this.willOpen.emit();
        // We have to wait one runloop before calling reposition(), so the element is rendered and the right bounds can be determined.
        // Also when opening the popover is hidden via the visibility-style. This avoids flashing up on the wrong position.
        setTimeout(function () {
            _this.reposition();
            if (_this.enterAnimationFactory && _this.me) {
                var player_1 = _this.enterAnimationFactory.create(_this.me.nativeElement);
                player_1.onDone(function () {
                    player_1.destroy();
                });
                player_1.play();
            }
            _this.state = PopoverState.visible;
        }, 0);
    };
    PopoverComponent.prototype.close = function () {
        var _this = this;
        if (this.state === PopoverState.hidden || this.state === PopoverState.closing) {
            return;
        }
        this.state = PopoverState.closing;
        this.willClose.emit();
        if (this.leaveAnimationFactory && this.me) {
            var player_2 = this.leaveAnimationFactory.create(this.me.nativeElement);
            player_2.onDone(function () {
                player_2.destroy();
                _this.state = PopoverState.hidden;
            });
            player_2.play();
        }
        else {
            this.state = PopoverState.hidden;
        }
    };
    PopoverComponent.prototype.toggle = function () {
        if (this.visible) {
            this.close();
        }
        else {
            this.open();
        }
    };
    PopoverComponent.prototype.setTag = function () {
        this.tag = PopoverComponent_1.Tag + "." + this.target;
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
__decorate$33([
    Input(),
    __metadata$17("design:type", Boolean)
], PopoverComponent.prototype, "debug", void 0);
__decorate$33([
    Input(),
    __metadata$17("design:type", Object)
], PopoverComponent.prototype, "target", void 0);
__decorate$33([
    Input(),
    __metadata$17("design:type", String)
], PopoverComponent.prototype, "targetX", void 0);
__decorate$33([
    Input(),
    __metadata$17("design:type", String)
], PopoverComponent.prototype, "targetY", void 0);
__decorate$33([
    Input(),
    __metadata$17("design:type", String)
], PopoverComponent.prototype, "attachmentX", void 0);
__decorate$33([
    Input(),
    __metadata$17("design:type", String)
], PopoverComponent.prototype, "attachmentY", void 0);
__decorate$33([
    Input(),
    __metadata$17("design:type", Object),
    __metadata$17("design:paramtypes", [Object])
], PopoverComponent.prototype, "visible", null);
__decorate$33([
    Output(),
    __metadata$17("design:type", Object)
], PopoverComponent.prototype, "willClose", void 0);
__decorate$33([
    Output(),
    __metadata$17("design:type", Object)
], PopoverComponent.prototype, "willOpen", void 0);
__decorate$33([
    HostBinding('class.vclLayoutHidden'),
    __metadata$17("design:type", Object),
    __metadata$17("design:paramtypes", [])
], PopoverComponent.prototype, "classHidden", null);
__decorate$33([
    HostBinding('style.visibility'),
    __metadata$17("design:type", Object),
    __metadata$17("design:paramtypes", [])
], PopoverComponent.prototype, "styleVisibility", null);
__decorate$33([
    HostBinding('style.transform'),
    __metadata$17("design:type", Object),
    __metadata$17("design:paramtypes", [])
], PopoverComponent.prototype, "transform", null);
__decorate$33([
    HostListener('window:resize', ['$event']),
    __metadata$17("design:type", Function),
    __metadata$17("design:paramtypes", [Object]),
    __metadata$17("design:returntype", void 0)
], PopoverComponent.prototype, "onWindowResize", null);
PopoverComponent = PopoverComponent_1 = __decorate$33([
    Component({
        selector: 'vcl-popover',
        template: '<ng-content></ng-content>',
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [trigger('popoverState', [])],
        host: {
            '[class.vclPopOver]': 'true',
            '[style.position]': '"absolute"'
        }
    }),
    __param$3(2, Optional()), __param$3(2, Inject(POPOVER_ANIMATIONS)),
    __metadata$17("design:paramtypes", [ElementRef, AnimationBuilder, Object])
], PopoverComponent);
var PopoverComponent_1;

var __decorate$32 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLPopoverModule = (function () {
    function VCLPopoverModule() {
    }
    return VCLPopoverModule;
}());
VCLPopoverModule = __decorate$32([
    NgModule({
        imports: [
            CommonModule,
            VCLOffClickModule
        ],
        providers: [],
        exports: [PopoverComponent],
        declarations: [PopoverComponent]
    })
], VCLPopoverModule);

var __decorate$35 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$18 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TokenComponent = (function () {
    function TokenComponent() {
        this.selected = false;
        this.removable = false;
        this.icon = 'fa:remove';
        this.remove = new EventEmitter();
        this.select = new EventEmitter();
    }
    TokenComponent.prototype.onTap = function (e) {
        this.select.emit(e);
    };
    TokenComponent.prototype.onRemoveClick = function (event) {
        event.stopPropagation();
        this.remove.emit(event);
    };
    return TokenComponent;
}());
__decorate$35([
    Input(),
    __metadata$18("design:type", String)
], TokenComponent.prototype, "label", void 0);
__decorate$35([
    HostListener('tap', ['$event']),
    __metadata$18("design:type", Function),
    __metadata$18("design:paramtypes", [Event]),
    __metadata$18("design:returntype", void 0)
], TokenComponent.prototype, "onTap", null);
__decorate$35([
    HostBinding('class.vclSelected'),
    Input(),
    __metadata$18("design:type", Boolean)
], TokenComponent.prototype, "selected", void 0);
__decorate$35([
    Input(),
    __metadata$18("design:type", Boolean)
], TokenComponent.prototype, "removable", void 0);
__decorate$35([
    Input(),
    __metadata$18("design:type", String)
], TokenComponent.prototype, "icon", void 0);
__decorate$35([
    Output(),
    __metadata$18("design:type", Object)
], TokenComponent.prototype, "remove", void 0);
__decorate$35([
    Output(),
    __metadata$18("design:type", Object)
], TokenComponent.prototype, "select", void 0);
TokenComponent = __decorate$35([
    Component({
        selector: 'vcl-token',
        template: "<span class=\"vclTokenLabel\">{{label}}</span> <button vcl-button *ngIf=\"removable\"  class=\"vclTransparent\" type=\"button\"  title=\"Remove\" [appIcon]=\"icon\" (click)=\"onRemoveClick($event)\"> </button> ",
        animations: [trigger('checkState', [])],
        host: {
            '[class.vclToken]': 'true',
            '[@checkState]': 'selected'
        }
    })
], TokenComponent);

var __decorate$36 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$19 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$4 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TokenListComponent; }),
    multi: true
};
var TokenListComponent = (function () {
    function TokenListComponent(cdRef) {
        this.cdRef = cdRef;
        this.selectable = false;
        this.change = new EventEmitter();
    }
    TokenListComponent.prototype.syncTokens = function () {
        var labels = this.labels;
        if (Array.isArray(labels)) {
            (this.tokens || []).forEach(function (token) {
                token.selected = labels.includes(token.label);
            });
        }
    };
    TokenListComponent.prototype.syncSelectedValues = function () {
        this.labels = (this.tokens || []).filter(function (t) { return t.selected; }).map(function (t) { return t.label; });
    };
    TokenListComponent.prototype.triggerChange = function () {
        this.change.emit(this.labels);
        !!this.onChangeCallback && this.onChangeCallback(this.labels);
    };
    TokenListComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Update the selectedIndex to match the selected buttons when not using ngModel
        if (!this.onChangeCallback) {
            this.syncSelectedValues();
            this.triggerChange();
        }
        // Subscribes to buttons press event
        var listenButtonPress = function () {
            _this.dispose();
            var select$ = Observable.merge.apply(Observable, (_this.tokens.map(function (token) { return token.select.map(function () { return token; }); })));
            _this.tokenSubscription = select$.subscribe(function (token) {
                if (_this.selectable) {
                    token.selected = !token.selected;
                }
                _this.syncSelectedValues();
                _this.triggerChange();
            });
        };
        listenButtonPress();
        this.tokens.changes.subscribe(function () {
            listenButtonPress();
            setTimeout(function () { return _this.syncSelectedValues(); });
        });
    };
    TokenListComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    TokenListComponent.prototype.dispose = function () {
        this.tokenSubscription && this.tokenSubscription.unsubscribe();
    };
    TokenListComponent.prototype.writeValue = function (value) {
        this.labels = value;
        this.syncTokens();
        this.cdRef.markForCheck();
    };
    TokenListComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TokenListComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return TokenListComponent;
}());
__decorate$36([
    ContentChildren(TokenComponent),
    __metadata$19("design:type", QueryList)
], TokenListComponent.prototype, "tokens", void 0);
__decorate$36([
    Input(),
    __metadata$19("design:type", Boolean)
], TokenListComponent.prototype, "selectable", void 0);
__decorate$36([
    Output(),
    __metadata$19("design:type", Object)
], TokenListComponent.prototype, "change", void 0);
TokenListComponent = __decorate$36([
    Component({
        selector: 'vcl-token-list',
        template: '<ng-content></ng-content>',
        host: {
            '[class.vclTokenList]': 'true',
            '[class.vclTokenContainer]': 'true'
        },
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$4]
    }),
    __metadata$19("design:paramtypes", [ChangeDetectorRef])
], TokenListComponent);

var __decorate$37 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$20 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter$1 = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (this && this.__generator) || function (thisArg, body) {
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
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$5 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TokenInputComponent; }),
    multi: true
};
var TokenInputLabelPre = (function () {
    function TokenInputLabelPre() {
    }
    return TokenInputLabelPre;
}());
TokenInputLabelPre = __decorate$37([
    Directive({ selector: '[vcl-token-input-pre]' })
], TokenInputLabelPre);
var TokenInputLabelPost = (function () {
    function TokenInputLabelPost() {
    }
    return TokenInputLabelPost;
}());
TokenInputLabelPost = __decorate$37([
    Directive({ selector: '[vcl-token-input-post]' })
], TokenInputLabelPost);
var TokenInputComponent = (function () {
    function TokenInputComponent(cdRef) {
        this.cdRef = cdRef;
        this.tokens = [];
        this.selectable = true;
        this.selectedAfterAdd = false;
        this.placeholder = 'Type to add tokens';
        this.icon = 'fa:remove';
        this.tabindex = 0;
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
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
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
    return TokenInputComponent;
}());
__decorate$37([
    ViewChild('input'),
    __metadata$20("design:type", ElementRef)
], TokenInputComponent.prototype, "input", void 0);
__decorate$37([
    Input(),
    __metadata$20("design:type", Boolean)
], TokenInputComponent.prototype, "selectable", void 0);
__decorate$37([
    Input(),
    __metadata$20("design:type", Boolean)
], TokenInputComponent.prototype, "selectedAfterAdd", void 0);
__decorate$37([
    Input(),
    __metadata$20("design:type", String)
], TokenInputComponent.prototype, "placeholder", void 0);
__decorate$37([
    Input(),
    __metadata$20("design:type", String)
], TokenInputComponent.prototype, "inputClass", void 0);
__decorate$37([
    Input(),
    __metadata$20("design:type", String)
], TokenInputComponent.prototype, "icon", void 0);
__decorate$37([
    Input(),
    __metadata$20("design:type", Number)
], TokenInputComponent.prototype, "tabindex", void 0);
__decorate$37([
    Input(),
    __metadata$20("design:type", String)
], TokenInputComponent.prototype, "tokenClass", void 0);
__decorate$37([
    Output(),
    __metadata$20("design:type", Object)
], TokenInputComponent.prototype, "change", void 0);
__decorate$37([
    Output(),
    __metadata$20("design:type", Object)
], TokenInputComponent.prototype, "add", void 0);
__decorate$37([
    Output(),
    __metadata$20("design:type", Object)
], TokenInputComponent.prototype, "remove", void 0);
__decorate$37([
    Output(),
    __metadata$20("design:type", Object)
], TokenInputComponent.prototype, "confirm", void 0);
__decorate$37([
    ContentChild(TokenInputLabelPre, { read: TemplateRef }),
    __metadata$20("design:type", TokenInputLabelPre)
], TokenInputComponent.prototype, "labelPre", void 0);
__decorate$37([
    ContentChild(TokenInputLabelPost, { read: TemplateRef }),
    __metadata$20("design:type", TokenInputLabelPost)
], TokenInputComponent.prototype, "labelPost", void 0);
__decorate$37([
    HostListener('focus', ['$event']),
    __metadata$20("design:type", Function),
    __metadata$20("design:paramtypes", [Object]),
    __metadata$20("design:returntype", Promise)
], TokenInputComponent.prototype, "onFocus", null);
__decorate$37([
    HostBinding('class.vclFocused'),
    __metadata$20("design:type", Object)
], TokenInputComponent.prototype, "focused", void 0);
__decorate$37([
    HostListener('keydown', ['$event']),
    __metadata$20("design:type", Function),
    __metadata$20("design:paramtypes", [KeyboardEvent]),
    __metadata$20("design:returntype", void 0)
], TokenInputComponent.prototype, "onKeydown", null);
TokenInputComponent = __decorate$37([
    Component({
        selector: 'vcl-token-input',
        template: "<div class=\"vclTokenContainer\"> <wormhole *ngIf=\"labelPre\" [connect]=\"labelPre\"></wormhole> <vcl-token *ngFor=\"let token of tokens\" (remove)=\"removeToken(token)\" (tap)=\"select(token)\" [ngClass]=\"tokenClass\" [selected]=\"token.selected\" [removable]=\"true\" [icon]=\"icon\" [attr.tabindex]=\"-1\" [label]=\"token.label\"> </vcl-token> <wormhole *ngIf=\"labelPost\" [connect]=\"labelPost\"></wormhole> </div> <ng-content></ng-content> <input  vcl-input #input [placeholder]=\"placeholder\"  [ngClass]=\"inputClass\" autocomplete=\"off\"  [tabindex]=\"tabindex\" (keyup.enter)=\"addToken(input.value)\" (focus)=\"onInputFocus()\" (blur)=\"onInputBlur()\" flex /> ",
        host: {
            '[class.vclInput]': 'true',
            '[class.vclTokenInput]': 'true',
            '[class.vclLayoutHorizontal]': 'true',
            '[class.vclLayoutWrap]': 'true',
            '[attr.tabindex]': '-1',
        },
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$5],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata$20("design:paramtypes", [ChangeDetectorRef])
], TokenInputComponent);

var __decorate$34 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTokenModule = (function () {
    function VCLTokenModule() {
    }
    return VCLTokenModule;
}());
VCLTokenModule = __decorate$34([
    NgModule({
        imports: [CommonModule, L10nModule, VCLInputModule, VCLButtonModule, FormsModule, VCLIconModule, VCLWormholeModule],
        exports: [TokenComponent, TokenListComponent, TokenInputComponent, TokenInputLabelPost, TokenInputLabelPre],
        declarations: [TokenComponent, TokenListComponent, TokenInputComponent, TokenInputLabelPost, TokenInputLabelPre],
        providers: [],
    })
], VCLTokenModule);

var __decorate$38 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$21 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectOption = (function () {
    function SelectOption() {
        this.disabled = false;
        this.selected = false;
    }
    return SelectOption;
}());
__decorate$38([
    ViewChild(TemplateRef),
    __metadata$21("design:type", TemplateRef)
], SelectOption.prototype, "content", void 0);
__decorate$38([
    Input(),
    __metadata$21("design:type", Object)
], SelectOption.prototype, "value", void 0);
__decorate$38([
    Input(),
    __metadata$21("design:type", String)
], SelectOption.prototype, "sublabel", void 0);
__decorate$38([
    Input(),
    __metadata$21("design:type", String)
], SelectOption.prototype, "label", void 0);
__decorate$38([
    Input(),
    __metadata$21("design:type", Boolean)
], SelectOption.prototype, "disabled", void 0);
__decorate$38([
    Input(),
    __metadata$21("design:type", Boolean)
], SelectOption.prototype, "selected", void 0);
SelectOption = __decorate$38([
    Directive({
        selector: 'vcl-select-option'
    })
], SelectOption);

var __decorate$39 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$22 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter$2 = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$2 = (this && this.__generator) || function (thisArg, body) {
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
var DropDirection;
(function (DropDirection) {
    DropDirection[DropDirection["Top"] = 0] = "Top";
    DropDirection[DropDirection["Bottom"] = 1] = "Bottom";
})(DropDirection || (DropDirection = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$6 = {
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
        return __awaiter$2(this, void 0, void 0, function () {
            return __generator$2(this, function (_a) {
                this.focused = true;
                return [2 /*return*/];
            });
        });
    };
    SelectComponent.prototype.onBlur = function (event) {
        var _this = this;
        // When the element loses focus, the dropdown should close
        // Only close when the active element is not a child element of the select component
        setTimeout(function () {
            var target = typeof document !== undefined && document.activeElement;
            var nativeElement = _this.elementRef && _this.elementRef.nativeElement;
            if (target && nativeElement && !_this.elementRef.nativeElement.contains(target)) {
                _this.close();
                _this.cdRef.markForCheck();
            }
        }, 1);
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
        return __awaiter$2(this, void 0, void 0, function () {
            var position, screenHeight, spaceBottom, spaceTop, dropDirection;
            return __generator$2(this, function (_a) {
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
        this.items.changes.startWith(null).subscribe(function () {
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
    SelectComponent.prototype.setValue = function (value) {
        this.dropdown.setValue(value);
    };
    SelectComponent.prototype.writeValue = function (value) {
        this.setValue(value);
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return SelectComponent;
}());
__decorate$39([
    ViewChild('dropdown'),
    __metadata$22("design:type", DropdownComponent)
], SelectComponent.prototype, "dropdown", void 0);
__decorate$39([
    ContentChildren(SelectOption),
    __metadata$22("design:type", QueryList)
], SelectComponent.prototype, "items", void 0);
__decorate$39([
    ViewChild('select'),
    __metadata$22("design:type", ElementRef)
], SelectComponent.prototype, "select", void 0);
__decorate$39([
    Input(),
    __metadata$22("design:type", Number)
], SelectComponent.prototype, "selectionMode", void 0);
__decorate$39([
    Input(),
    __metadata$22("design:type", String),
    __metadata$22("design:paramtypes", [String])
], SelectComponent.prototype, "mode", null);
__decorate$39([
    HostBinding('attr.tabindex'),
    Input(),
    __metadata$22("design:type", Object)
], SelectComponent.prototype, "tabindex", void 0);
__decorate$39([
    Input(),
    __metadata$22("design:type", Boolean)
], SelectComponent.prototype, "expanded", void 0);
__decorate$39([
    Input(),
    __metadata$22("design:type", Boolean)
], SelectComponent.prototype, "listenKeys", void 0);
__decorate$39([
    Input(),
    __metadata$22("design:type", Number)
], SelectComponent.prototype, "maxSelectableItems", void 0);
__decorate$39([
    Input(),
    __metadata$22("design:type", String)
], SelectComponent.prototype, "expandedIcon", void 0);
__decorate$39([
    Input(),
    __metadata$22("design:type", String)
], SelectComponent.prototype, "collapsedIcon", void 0);
__decorate$39([
    Output('change'),
    __metadata$22("design:type", Object)
], SelectComponent.prototype, "change", void 0);
__decorate$39([
    HostListener('keydown', ['$event']),
    __metadata$22("design:type", Function),
    __metadata$22("design:paramtypes", [Object]),
    __metadata$22("design:returntype", void 0)
], SelectComponent.prototype, "keydown", null);
__decorate$39([
    HostListener('focus', ['$event']),
    __metadata$22("design:type", Function),
    __metadata$22("design:paramtypes", [Object]),
    __metadata$22("design:returntype", Promise)
], SelectComponent.prototype, "onFocus", null);
__decorate$39([
    HostListener('blur', ['$event']),
    __metadata$22("design:type", Function),
    __metadata$22("design:paramtypes", [Object]),
    __metadata$22("design:returntype", void 0)
], SelectComponent.prototype, "onBlur", null);
SelectComponent = __decorate$39([
    Component({
        selector: 'vcl-select',
        template: "<div (offClick)=\"close()\"> <div #select class=\"vclLayoutHorizontal vclSelect vclInputGroupEmb\" [style.marginBottom]=\"0\" > <div *ngIf=\"showDisplayValue\" class=\"vclInput\" readonly [class.vclSelected]=\"focused\" (tap)=\"toggle($event)\"> {{displayValue}} </div> <div *ngIf=\"!showDisplayValue\" class=\"vclInput vclTokenInput vclLayoutHorizontal vclLayoutWrap\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle($event)\"> <vcl-token-list> <vcl-token *ngFor=\"let item of selectedItems\" [label]=\"item.label\" [removable]=\"true\" (remove)=\"deselectItem(item, $event)\"></vcl-token> </vcl-token-list> </div> <button vcl-button type=\"button\" tabindex=\"-1\" class=\"vclTransparent vclSquare vclAppended\" [appIcon]=\"expanded ? expandedIcon : collapsedIcon\" (tap)=\"toggle()\"> </button> </div> <vcl-dropdown  #dropdown [style.display]=\"expanded ? null : 'none'\" (change)=\"onDropdownChange($event)\" [selectionMode]=\"selectionMode\" [maxSelectableItems]=\"maxSelectableItems\" tabindex=\"-1\" [style.position]=\"'relative'\" [style.top.px]=\"dropdownTop\" [style.width]=\"'100%'\" [style.position]=\"'absolute'\" [style.zIndex]=\"999999\"> <vcl-dropdown-option  *ngFor=\"let item of items\"  [metadata]=\"item\"  [value]=\"item.value\"  [selected]=\"item.selected\"  [disabled]=\"item.disabled\"  [label]=\"item.label\"  [sublabel]=\"item.sublabel\"> </vcl-dropdown-option> </vcl-dropdown> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$6],
        host: {
            '[style.position]': '"relative"',
            '[style.display]': '"block"'
        }
    }),
    __metadata$22("design:paramtypes", [ElementRef,
        ChangeDetectorRef])
], SelectComponent);

var __decorate$24 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLSelectModule = (function () {
    function VCLSelectModule() {
    }
    return VCLSelectModule;
}());
VCLSelectModule = __decorate$24([
    NgModule({
        imports: [CommonModule, L10nModule, VCLDropdownModule, VCLButtonModule, VCLOffClickModule, VCLPopoverModule, VCLTokenModule],
        exports: [SelectComponent, SelectOption],
        declarations: [SelectComponent, SelectOption],
        providers: []
    })
], VCLSelectModule);

var __decorate$41 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$23 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectionMode$1;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(SelectionMode$1 || (SelectionMode$1 = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$7 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ButtonGroupComponent; }),
    multi: true
};
var ButtonGroupComponent = (function () {
    function ButtonGroupComponent() {
        // If `Single`, a single button from the group can be selected
        // If `Multiple` multiple buttons can be selected
        this.selectionMode = SelectionMode$1.Single;
        this.change = new EventEmitter();
        /**
       * things needed for ControlValueAccessor-Interface
       */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(ButtonGroupComponent.prototype, "mode", {
        // String alias for selectionMode
        set: function (value) {
            if (value === 'multiple') {
                this.selectionMode = SelectionMode$1.Multiple;
            }
            else {
                this.selectionMode = SelectionMode$1.Single;
            }
        },
        enumerable: true,
        configurable: true
    });
    ButtonGroupComponent.prototype.syncButtons = function () {
        var selectedIndex = this.selectedIndex;
        if (this.selectionMode === SelectionMode$1.Multiple && Array.isArray(selectedIndex)) {
            (this.buttons || []).forEach(function (btn, idx) {
                btn.selected = selectedIndex.includes(idx);
            });
        }
        else if (this.selectionMode === SelectionMode$1.Single && typeof selectedIndex === 'number') {
            (this.buttons || []).forEach(function (btn, idx) {
                btn.selected = selectedIndex === idx;
            });
        }
    };
    ButtonGroupComponent.prototype.syncSelectedIndex = function () {
        var items = this.buttons || [];
        var selectedIndex = items.map(function (btn, idx) { return ({ selected: btn.selected, idx: idx }); }).filter(function (v) { return v.selected; }).map(function (v) { return v.idx; });
        this.selectedIndex = this.selectionMode === SelectionMode$1.Multiple ? selectedIndex : selectedIndex[0];
    };
    ButtonGroupComponent.prototype.triggerChange = function () {
        this.change.emit(this.selectedIndex);
        this.onChange(this.selectedIndex);
    };
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Subscribes to buttons press event
        var listenButtonPress = function () {
            _this.dispose();
            var press$ = Observable.merge.apply(Observable, (_this.buttons.map(function (btn) { return btn.press.map(function () { return btn; }); })));
            _this.pressSubscription = press$.subscribe(function (btn) {
                _this.buttons.forEach(function (cbtn, idx) {
                    if (_this.selectionMode === SelectionMode$1.Single) {
                        // Mark one button on single mode
                        cbtn.selected = cbtn === btn;
                    }
                    else if (_this.selectionMode === SelectionMode$1.Multiple && btn === cbtn) {
                        // Toggle pressed button on multiple mode
                        cbtn.selected = !cbtn.selected;
                    }
                });
                _this.syncSelectedIndex();
                _this.triggerChange();
                _this.onTouched();
            });
        };
        listenButtonPress();
        this.buttons.changes.subscribe(function () {
            listenButtonPress();
            setTimeout(function () { return _this.syncButtons(); });
        });
    };
    ButtonGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    ButtonGroupComponent.prototype.dispose = function () {
        this.pressSubscription && this.pressSubscription.unsubscribe();
    };
    ButtonGroupComponent.prototype.writeValue = function (value) {
        this.selectedIndex = value;
        this.syncButtons();
    };
    ButtonGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonGroupComponent;
}());
__decorate$41([
    ContentChildren(ButtonComponent),
    __metadata$23("design:type", QueryList)
], ButtonGroupComponent.prototype, "buttons", void 0);
__decorate$41([
    Input(),
    __metadata$23("design:type", Number)
], ButtonGroupComponent.prototype, "selectionMode", void 0);
__decorate$41([
    Input(),
    __metadata$23("design:type", String),
    __metadata$23("design:paramtypes", [String])
], ButtonGroupComponent.prototype, "mode", null);
__decorate$41([
    Output(),
    __metadata$23("design:type", Object)
], ButtonGroupComponent.prototype, "change", void 0);
ButtonGroupComponent = __decorate$41([
    Component({
        selector: 'vcl-button-group',
        host: {
            '[class.vclButtonGroup]': 'true',
        },
        template: "<ng-content></ng-content>",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$7],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], ButtonGroupComponent);

var __decorate$40 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLButtonGroupModule = (function () {
    function VCLButtonGroupModule() {
    }
    return VCLButtonGroupModule;
}());
VCLButtonGroupModule = __decorate$40([
    NgModule({
        imports: [CommonModule, VCLButtonModule, L10nModule],
        exports: [ButtonGroupComponent],
        declarations: [ButtonGroupComponent],
        providers: [],
    })
], VCLButtonGroupModule);

var __extends$10 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LayerResult = (function (_super) {
    __extends$10(LayerResult, _super);
    function LayerResult(source, layerRef) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.layerRef = layerRef;
        return _this;
    }
    LayerResult.prototype.close = function (data) {
        this.layerRef.close();
    };
    LayerResult.prototype.closeWithError = function (data) {
        this.layerRef.closeWithError();
    };
    return LayerResult;
}(Observable));
var LayerRef = (function () {
    function LayerRef() {
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
        return new LayerResult(this.results, this);
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
    return LayerRef;
}());
var DynamicLayerRef = (function (_super) {
    __extends$10(DynamicLayerRef, _super);
    function DynamicLayerRef(_register, _unregister) {
        var _this = _super.call(this) || this;
        _this._register = _register;
        _this._unregister = _unregister;
        return _this;
    }
    DynamicLayerRef.prototype.open = function (attrs) {
        this._register();
        return _super.prototype.open.call(this, attrs);
    };
    DynamicLayerRef.prototype.close = function (data) {
        _super.prototype.close.call(this, data);
        this._unregister();
    };
    DynamicLayerRef.prototype.closeWithError = function (data) {
        _super.prototype.closeWithError.call(this, data);
        this._unregister();
    };
    return DynamicLayerRef;
}(LayerRef));

var __decorate$44 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$26 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$5 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';
var LAYER_ANIMATIONS = new OpaqueToken('@ng-vcl/ng-vcl#layer_animations');
var LayerContainerComponent = (function () {
    function LayerContainerComponent(cdRef, builder, elementRef, animations) {
        this.cdRef = cdRef;
        this.zIndex = 1000;
        if (animations && animations.boxEnter) {
            this.boxEnterAnimationFactory = builder.build(animations.boxEnter);
        }
        if (animations && animations.boxLeave) {
            this.boxLeaveAnimationFactory = builder.build(animations.boxLeave);
        }
        if (animations && animations.coverEnter) {
            this.coverEnterAnimationFactory = builder.build(animations.coverEnter);
        }
        if (animations && animations.coverLeave) {
            this.coverLeaveAnimationFactory = builder.build(animations.coverLeave);
        }
    }
    Object.defineProperty(LayerContainerComponent.prototype, "layerAttrs", {
        set: function (layerAttrs) {
            this._layerAttrs = layerAttrs;
            if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
                this.wormhole.setAttributes(this.mergedLayerAttrs);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerContainerComponent.prototype, "mergedLayerAttrs", {
        get: function () {
            return this.layerOpts.attrs ? Object.assign({}, this.layerOpts.attrs, this._layerAttrs) : this._layerAttrs;
        },
        enumerable: true,
        configurable: true
    });
    LayerContainerComponent.prototype.ngAfterViewInit = function () {
        var layer = this.layerRef;
        if (layer && this.layerContentContainer) {
            // Creates a wormhole out of the LayerRef
            if (this.layerTarget instanceof TemplateRef) {
                this.wormhole = new TemplateWormhole(this.layerTarget, this.layerContentContainer);
            }
            else {
                // The created injector injects this instance as LayerRef
                // It is used in the component instance created within the wormhole
                var layerInjector = ReflectiveInjector.resolveAndCreate([{
                        provide: LayerRef,
                        useValue: this.layerRef
                    }], this.layerInjector);
                this.wormhole = new ComponentWormhole(this.layerTarget, this.layerContentContainer, layerInjector);
            }
            if (!this.wormhole) {
                throw 'invalid layer';
            }
            this.wormhole.connect(this.mergedLayerAttrs);
            if (this.boxEnterAnimationFactory && this.box) {
                this.boxEnterAnimationFactory.create(this.box.nativeElement).play();
            }
            if (this.coverEnterAnimationFactory && this.cover) {
                var player_1 = this.coverEnterAnimationFactory.create(this.cover.nativeElement);
                player_1.onDone(function () { return player_1.destroy(); });
                player_1.play();
            }
        }
    };
    LayerContainerComponent.prototype.animateLeave = function () {
        var _this = this;
        return Promise.all([
            new Promise(function (resolve) {
                if (_this.boxLeaveAnimationFactory && _this.box) {
                    var player = _this.boxLeaveAnimationFactory.create(_this.box.nativeElement);
                    player.onDone(resolve);
                    player.play();
                }
                else {
                    resolve();
                }
            }),
            new Promise(function (resolve) {
                if (_this.coverLeaveAnimationFactory && _this.cover) {
                    var player_2 = _this.coverLeaveAnimationFactory.create(_this.cover.nativeElement);
                    player_2.onDone(function () {
                        player_2.destroy();
                        resolve();
                    });
                    player_2.play();
                }
                else {
                    resolve();
                }
            }),
        ]);
    };
    LayerContainerComponent.prototype.ngOnDestroy = function () {
        if (this.wormhole) {
            this.wormhole.disconnect();
        }
    };
    LayerContainerComponent.prototype.triggerOffClick = function (event) {
        if (event.target === this.container.nativeElement) {
            if (this.layerOpts.offClick) {
                this.layerOpts.offClick(this.layerRef);
            }
            else {
                if (!this.layerOpts.modal) {
                    this.layerRef.close();
                }
            }
        }
    };
    return LayerContainerComponent;
}());
__decorate$44([
    ViewChild('container'),
    __metadata$26("design:type", ElementRef)
], LayerContainerComponent.prototype, "container", void 0);
__decorate$44([
    ViewChild('cover'),
    __metadata$26("design:type", ElementRef)
], LayerContainerComponent.prototype, "cover", void 0);
__decorate$44([
    ViewChild('box'),
    __metadata$26("design:type", ElementRef)
], LayerContainerComponent.prototype, "box", void 0);
__decorate$44([
    Input(),
    __metadata$26("design:type", LayerRef)
], LayerContainerComponent.prototype, "layerRef", void 0);
__decorate$44([
    Input(),
    __metadata$26("design:type", Object)
], LayerContainerComponent.prototype, "layerOpts", void 0);
__decorate$44([
    Input(),
    __metadata$26("design:type", Object)
], LayerContainerComponent.prototype, "layerTarget", void 0);
__decorate$44([
    Input(),
    __metadata$26("design:type", Object)
], LayerContainerComponent.prototype, "layerInjector", void 0);
__decorate$44([
    Input(),
    __metadata$26("design:type", Object),
    __metadata$26("design:paramtypes", [Object])
], LayerContainerComponent.prototype, "layerAttrs", null);
__decorate$44([
    Input(),
    __metadata$26("design:type", Object)
], LayerContainerComponent.prototype, "zIndex", void 0);
__decorate$44([
    ViewChild('layerContent', { read: ViewContainerRef }),
    __metadata$26("design:type", ViewContainerRef)
], LayerContainerComponent.prototype, "layerContentContainer", void 0);
LayerContainerComponent = __decorate$44([
    Component({
        template: "<div  #container  class=\"vclLayer\" [ngClass]=\"layerOpts.customClass\" [class.vclTransparent]=\"layerOpts.transparent\" [class.vclLayerFill]=\"layerOpts.fill\" [class.vclLayerStickToBottom]=\"layerOpts.stickToBottom\" [style.z-index]=\"zIndex + 1\" [style.pointer-events]=\"'all'\"  role=\"dialog\"  (tap)='triggerOffClick($event)' > <div #box class=\"vclLayerBox\" [class.vclLayerGutterPadding]=\"layerOpts.gutterPadding\" [style.pointer-events]=\"'all'\" [style.z-index]=\"zIndex + 2\"> <div #layerContent></div> </div> </div> <div #cover *ngIf=\"layerOpts.modal\" class=\"vclLayerCover\" [style.z-index]=\"zIndex\"></div> ",
    }),
    __param$5(3, Optional()), __param$5(3, Inject(LAYER_ANIMATIONS)),
    __metadata$26("design:paramtypes", [ChangeDetectorRef,
        AnimationBuilder,
        ElementRef, Object])
], LayerContainerComponent);

var __decorate$43 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$25 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayerManagerService = (function () {
    function LayerManagerService(appRef, injector) {
        this.injector = injector;
        this.layerMetaMap = new Map();
        this.baseZIndex = 1000;
        this.visibleLayers = [];
        this.host = new DomWormholeHost(appRef, undefined, injector);
    }
    Object.defineProperty(LayerManagerService.prototype, "currentZIndex", {
        get: function () {
            return this.baseZIndex + (this.visibleLayers.length * 10);
        },
        enumerable: true,
        configurable: true
    });
    LayerManagerService.prototype.addVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.concat([layer]);
    };
    LayerManagerService.prototype.removeVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.filter(function (l) { return l !== layer; });
    };
    LayerManagerService.prototype._register = function (layerRef, target, injector, opts) {
        var _this = this;
        var containerWormholeRef = this.host.createWormhole(LayerContainerComponent);
        var layerSub = layerRef.state$.subscribe(function (state$$1) {
            if (state$$1.visible && !containerWormholeRef.isConnected) {
                containerWormholeRef.connect({
                    layerRef: layerRef,
                    layerAttrs: state$$1.attrs,
                    layerOpts: opts || {},
                    layerTarget: target,
                    layerInjector: injector,
                    zIndex: _this.currentZIndex,
                });
                _this.addVisibleLayer(layerRef);
            }
            else if (state$$1.visible) {
                containerWormholeRef.setAttributes({
                    layerAttrs: state$$1.attrs
                });
            }
            else {
                if (containerWormholeRef.compInstance) {
                    containerWormholeRef.compInstance.animateLeave().then(function () {
                        containerWormholeRef.disconnect();
                        _this.removeVisibleLayer(layerRef);
                    });
                }
            }
        });
        this.layerMetaMap.set(layerRef, { wormhole: containerWormholeRef, subscription: layerSub });
    };
    LayerManagerService.prototype._unregister = function (layer) {
        var meta = this.layerMetaMap.get(layer);
        if (meta) {
            meta.wormhole.disconnect();
            meta.subscription.unsubscribe();
        }
    };
    LayerManagerService.prototype.ngOnDestroy = function () {
        var _this = this;
        this.layerMetaMap.forEach(function (meta, layer) { return _this._unregister(layer); });
        this.host.clearWormholes();
    };
    return LayerManagerService;
}());
LayerManagerService = __decorate$43([
    Injectable(),
    __metadata$25("design:paramtypes", [ApplicationRef, Injector])
], LayerManagerService);

var __decorate$45 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$27 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayerService = (function () {
    function LayerService(layerManager, injector) {
        this.layerManager = layerManager;
        this.injector = injector;
    }
    LayerService.prototype.hasVisibleLayers = function () {
        return this.layerManager.visibleLayers.length > 0;
    };
    LayerService.prototype.getVisibleLayers = function () {
        return this.layerManager.visibleLayers.slice();
    };
    LayerService.prototype.getTopLayer = function () {
        return this.layerManager.visibleLayers.slice().pop();
    };
    LayerService.prototype.closeAll = function () {
        this.layerManager.visibleLayers.forEach(function (layer) { return layer.close(); });
    };
    LayerService.prototype.closeTop = function () {
        var topLayer = this.getTopLayer();
        if (topLayer) {
            topLayer.close();
        }
    };
    LayerService.prototype.create = function (component, opts) {
        var _this = this;
        var layerRef = new DynamicLayerRef(function () {
            _this.layerManager._register(layerRef, component, _this.injector, opts);
        }, function () {
            _this.layerManager._unregister(layerRef);
        });
        return layerRef;
    };
    LayerService.prototype.open = function (component, attrs, opts) {
        var layerRef = this.create(component, opts);
        layerRef.open(attrs);
        return layerRef;
    };
    return LayerService;
}());
LayerService = __decorate$45([
    Injectable(),
    __metadata$27("design:paramtypes", [LayerManagerService, Injector])
], LayerService);

var __extends$11 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$46 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$28 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayerRefDirective = (function (_super) {
    __extends$11(LayerRefDirective, _super);
    function LayerRefDirective(templateRef, layerManager, injector) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        _this.layerManager = layerManager;
        _this.injector = injector;
        return _this;
    }
    LayerRefDirective.prototype.ngOnInit = function () {
        this.layerManager._register(this, this.templateRef, this.injector, this);
    };
    LayerRefDirective.prototype.ngOnDestroy = function () {
        this.layerManager._unregister(this);
    };
    return LayerRefDirective;
}(LayerRef));
__decorate$46([
    Input(),
    __metadata$28("design:type", Boolean)
], LayerRefDirective.prototype, "modal", void 0);
__decorate$46([
    Input(),
    __metadata$28("design:type", Boolean)
], LayerRefDirective.prototype, "transparent", void 0);
__decorate$46([
    Input(),
    __metadata$28("design:type", Boolean)
], LayerRefDirective.prototype, "fill", void 0);
__decorate$46([
    Input(),
    __metadata$28("design:type", Boolean)
], LayerRefDirective.prototype, "stickToBottom", void 0);
__decorate$46([
    Input(),
    __metadata$28("design:type", Boolean)
], LayerRefDirective.prototype, "gutterPadding", void 0);
__decorate$46([
    Input(),
    __metadata$28("design:type", String)
], LayerRefDirective.prototype, "customClass", void 0);
LayerRefDirective = __decorate$46([
    Directive({
        selector: '[vcl-layer]',
        exportAs: 'layer',
    }),
    __metadata$28("design:paramtypes", [TemplateRef, LayerManagerService, Injector])
], LayerRefDirective);

var __decorate$42 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$24 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$4 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LAYERS = new OpaqueToken('@ng-vcl/ng-vcl#layers');
// The @Layer annotation
function Layer(component, opts) {
    return function (target) {
        Injectable()(target);
        defineMetadata(COMPONENT_LAYER_ANNOTATION_ID, { component: component, opts: opts }, target);
    };
}
var VCLLayerModule = VCLLayerModule_1 = (function () {
    function VCLLayerModule(layers, layerManager, injector) {
        this.layers = layers;
        this.layerManager = layerManager;
        this.injector = injector;
        if (layers) {
            (layers || []).forEach(function (layerCls) {
                var layerMeta = getMetadata(COMPONENT_LAYER_ANNOTATION_ID, layerCls);
                var layerRef = injector.get(layerCls);
                layerManager._register(layerRef, layerMeta.component, injector, layerMeta.opts);
            });
        }
    }
    VCLLayerModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return { ngModule: VCLLayerModule_1, providers: [
                LayerService,
                LayerManagerService
            ].concat((config.layers || []), [
                {
                    provide: LayerRef,
                    useValue: null
                },
                {
                    provide: LAYERS,
                    useValue: config.layers
                }
            ]) };
    };
    VCLLayerModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: VCLLayerModule_1,
            providers: [
                LayerService
            ].concat((config.layers || []), [
                {
                    provide: LAYERS,
                    useValue: config.layers
                }
            ])
        };
    };
    return VCLLayerModule;
}());
VCLLayerModule = VCLLayerModule_1 = __decorate$42([
    NgModule({
        imports: [
            CommonModule,
            VCLWormholeModule
        ],
        exports: [LayerRefDirective, LayerContainerComponent],
        declarations: [LayerRefDirective, LayerContainerComponent],
        entryComponents: [LayerContainerComponent],
        providers: []
    }),
    __param$4(0, Inject(LAYERS)),
    __metadata$24("design:paramtypes", [Array, LayerManagerService,
        Injector])
], VCLLayerModule);
var VCLLayerModule_1;

var __decorate$49 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$30 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TabLabelDirective = (function () {
    function TabLabelDirective() {
    }
    return TabLabelDirective;
}());
TabLabelDirective = __decorate$49([
    Directive({ selector: '[vcl-tab-label]' })
], TabLabelDirective);
var TabComponent = (function () {
    function TabComponent() {
        this.disabled = false;
        this.tabClass = '';
    }
    return TabComponent;
}());
__decorate$49([
    ContentChild(TabLabelDirective, { read: TemplateRef }),
    __metadata$30("design:type", TabLabelDirective)
], TabComponent.prototype, "label", void 0);
__decorate$49([
    ViewChild(TemplateRef),
    __metadata$30("design:type", TemplateRef)
], TabComponent.prototype, "content", void 0);
__decorate$49([
    Input(),
    __metadata$30("design:type", Object)
], TabComponent.prototype, "disabled", void 0);
__decorate$49([
    Input(),
    __metadata$30("design:type", String)
], TabComponent.prototype, "tabClass", void 0);
TabComponent = __decorate$49([
    Component({
        selector: 'vcl-tab',
        template: '<ng-template><ng-content></ng-content></ng-template>'
    })
], TabComponent);

var __decorate$48 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$29 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TabNavComponent = (function () {
    function TabNavComponent() {
        this.layout = '';
        this.tabbableClass = '';
        this.tabsClass = '';
        this.tabContentClass = '';
        // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
        this.borders = false;
        this.selectedTabIndex = 0;
        this.selectedTabIndexChange$ = new EventEmitter();
    }
    Object.defineProperty(TabNavComponent.prototype, "tabContent", {
        set: function (tabContent) {
            this.wormholeHost = new WormholeHost(tabContent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabNavComponent.prototype, "selectedTabIndexChange", {
        get: function () {
            return this.selectedTabIndexChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Sets a valid selectedTabIndex
    TabNavComponent.prototype.selectTab = function (tab) {
        var tabs = this.tabs.toArray();
        var tabIdx;
        var tabComp;
        if (tab instanceof TabComponent) {
            tabIdx = tabs.indexOf(tab);
            tabComp = tab;
        }
        else if (typeof tab === 'number' && tabs[tab]) {
            tabIdx = tab;
            tabComp = tabs[tabIdx];
        }
        else {
            tabIdx = -1;
            tabComp = null;
        }
        if (tabIdx >= 0 && tabComp instanceof TabComponent && !tabComp.disabled) {
            this.wormholeHost.clearWormholes();
            this.selectedTabIndex = tabIdx;
            this.selectedTabIndexChange$.emit(tabIdx);
            this.wormholeHost.connectWormhole(tabComp.content);
        }
    };
    TabNavComponent.prototype.ngAfterContentInit = function () {
        this.selectTab(this.selectedTabIndex);
    };
    TabNavComponent.prototype.ngOnDestroy = function () {
        this.wormholeHost.clearWormholes();
    };
    return TabNavComponent;
}());
__decorate$48([
    ViewChild('tabContent', { read: ViewContainerRef }),
    __metadata$29("design:type", ViewContainerRef),
    __metadata$29("design:paramtypes", [ViewContainerRef])
], TabNavComponent.prototype, "tabContent", null);
__decorate$48([
    ContentChildren(TabComponent),
    __metadata$29("design:type", QueryList)
], TabNavComponent.prototype, "tabs", void 0);
__decorate$48([
    Input(),
    __metadata$29("design:type", String)
], TabNavComponent.prototype, "layout", void 0);
__decorate$48([
    Input(),
    __metadata$29("design:type", String)
], TabNavComponent.prototype, "tabbableClass", void 0);
__decorate$48([
    Input(),
    __metadata$29("design:type", String)
], TabNavComponent.prototype, "tabsClass", void 0);
__decorate$48([
    Input(),
    __metadata$29("design:type", String)
], TabNavComponent.prototype, "tabContentClass", void 0);
__decorate$48([
    Input(),
    __metadata$29("design:type", Boolean)
], TabNavComponent.prototype, "borders", void 0);
__decorate$48([
    Input(),
    __metadata$29("design:type", Number)
], TabNavComponent.prototype, "selectedTabIndex", void 0);
__decorate$48([
    Output(),
    __metadata$29("design:type", Observable),
    __metadata$29("design:paramtypes", [])
], TabNavComponent.prototype, "selectedTabIndexChange", null);
TabNavComponent = __decorate$48([
    Component({
        selector: 'vcl-tab-nav',
        template: "<div class=\"vclTabbable {{tabbableClass}}\" [class.vclTabsLeft]=\"layout==='left'\" [class.vclTabsRight]=\"layout==='right'\"> <div class=\"vclTabs {{tabsClass}}\" [class.vclTabStyleUni]=\"!!borders\" role=\"tablist\"> <div *ngFor=\"let tab of tabs; let i = index\" class=\"vclTab {{tab.tabClass}}\" role=\"tab\" [class.vclDisabled]=\"tab.disabled\" [class.vclSelected]=\"selectedTabIndex===i\" [class.aria-selected]=\"selectedTabIndex===i\" (tap)=\"selectTab(tab)\"> <span class=\"vclTabLabel\">  <wormhole [connect]=\"tab.label\"></wormhole> </span> </div> </div> <div class=\"vclTabContent {{tabContentClass}}\" [class.vclNoBorder]=\"!borders\"> <div role=\"tabpanel\" class=\"vclTabPanel\"> <div #tabContent></div> </div> <div role=\"tabpanel\" class=\"vclTabPanel\"> <ng-content></ng-content> </div> </div> </div> "
    })
], TabNavComponent);

var __decorate$47 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTabNavModule = (function () {
    function VCLTabNavModule() {
    }
    return VCLTabNavModule;
}());
VCLTabNavModule = __decorate$47([
    NgModule({
        imports: [CommonModule, L10nModule, VCLWormholeModule],
        exports: [TabComponent, TabLabelDirective, TabNavComponent],
        declarations: [TabComponent, TabLabelDirective, TabNavComponent],
        providers: [],
    })
], VCLTabNavModule);

var __extends$12 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$52 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$31 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$6 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LinkComponent = (function (_super) {
    __extends$12(LinkComponent, _super);
    function LinkComponent(l10n) {
        var _this = _super.call(this) || this;
        _this.l10n = l10n;
        _this.locLabel$ = _this.observeChangeValue('label').switchMap(function (label) { return _this.l10n ? _this.l10n.localize(label) : Observable.of(label); });
        _this.locTitle$ = _this.observeChangeValue('title').switchMap(function (title) { return _this.l10n ? _this.l10n.localize(title) : Observable.of(title); });
        _this.locTitleSub = _this.locTitle$.subscribe(function (title) { return _this.locTitle = title; });
        return _this;
    }
    Object.defineProperty(LinkComponent.prototype, "styleCursor", {
        get: function () {
            return this.disabled ? 'not-allowed' : 'pointer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkComponent.prototype, "attrHref", {
        get: function () {
            var href = this.scheme && this.href ? this.scheme + ":" + this.href : this.href;
            return this.disabled ? null : href || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkComponent.prototype, "useIcogram", {
        get: function () {
            return (this.appIcon || this.prepIcon);
        },
        enumerable: true,
        configurable: true
    });
    LinkComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.locTitleSub && this.locTitleSub.unsubscribe();
    };
    return LinkComponent;
}(ObservableComponent));
__decorate$52([
    Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "href", void 0);
__decorate$52([
    Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "label", void 0);
__decorate$52([
    Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "title", void 0);
__decorate$52([
    Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "prepIcon", void 0);
__decorate$52([
    Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "appIcon", void 0);
__decorate$52([
    Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "scheme", void 0);
__decorate$52([
    HostBinding('class.vclDisabled'),
    Input(),
    __metadata$31("design:type", Boolean)
], LinkComponent.prototype, "disabled", void 0);
__decorate$52([
    HostBinding('attr.title'),
    HostBinding('attr.aria-label'),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "locTitle", void 0);
__decorate$52([
    HostBinding('style.cursor'),
    __metadata$31("design:type", Object),
    __metadata$31("design:paramtypes", [])
], LinkComponent.prototype, "styleCursor", null);
__decorate$52([
    HostBinding('attr.href'),
    __metadata$31("design:type", String),
    __metadata$31("design:paramtypes", [])
], LinkComponent.prototype, "attrHref", null);
__decorate$52([
    HostBinding('class.vclContentLink'),
    __metadata$31("design:type", Object),
    __metadata$31("design:paramtypes", [])
], LinkComponent.prototype, "useIcogram", null);
LinkComponent = __decorate$52([
    Component({
        selector: '[vcl-link]',
        template: "<vcl-icogram *ngIf=\"useIcogram\" [label]=\"(locLabel$ | async) || href\" [prepIcon]=\"prepIcon\" [appIcon]=\"appIcon\"> <ng-content></ng-content> </vcl-icogram> <ng-container *ngIf=\"!useIcogram\"> {{(locLabel$ | async) || href}} <ng-content></ng-content> </ng-container> "
    }),
    __param$6(0, Optional()),
    __metadata$31("design:paramtypes", [L10nService])
], LinkComponent);

var __decorate$51 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLLinkModule = (function () {
    function VCLLinkModule() {
    }
    return VCLLinkModule;
}());
VCLLinkModule = __decorate$51([
    NgModule({
        imports: [CommonModule, L10nModule, VCLIcogramModule],
        exports: [LinkComponent],
        declarations: [LinkComponent],
        providers: [],
    })
], VCLLinkModule);

var __decorate$54 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$33 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$7 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NavigationItemDirective = NavigationItemDirective_1 = (function () {
    function NavigationItemDirective(router, nav, parent) {
        var _this = this;
        this.router = router;
        this.nav = nav;
        this.parent = parent;
        // @Input()
        this.selected = false;
        this.opened = false;
        this.heading = false;
        if (nav.useRouter) {
            this._subscription = router.events.subscribe(function (s) {
                if (s instanceof NavigationEnd) {
                    _this.updateSelectedState();
                }
            });
        }
    }
    Object.defineProperty(NavigationItemDirective.prototype, "items", {
        get: function () {
            var _this = this;
            return (this.contentItems && this.contentItems.filter(function (item) { return item !== _this; })) || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "route", {
        get: function () {
            return this._route;
        },
        set: function (route) {
            this._route = Array.isArray(route) ? route : [route];
            this._urlTree = this.router.createUrlTree(this._route);
        },
        enumerable: true,
        configurable: true
    });
    NavigationItemDirective.prototype.updateSelectedState = function () {
        this.selected = !!this._urlTree && this.router.isActive(this._urlTree, true);
        if (this.selected) {
            this.openParents();
        }
    };
    NavigationItemDirective.prototype.openParents = function () {
        var openParents = function (item) {
            if (item.parent) {
                item.parent.opened = true;
                openParents(item.parent);
            }
        };
        openParents(this);
    };
    NavigationItemDirective.prototype.ngOnDestroy = function () {
        this._subscription && this._subscription.unsubscribe();
    };
    Object.defineProperty(NavigationItemDirective.prototype, "calcPrepIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'left' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "calcAppIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'right' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.appIcon;
        },
        enumerable: true,
        configurable: true
    });
    return NavigationItemDirective;
}());
__decorate$54([
    Input(),
    __metadata$33("design:type", String)
], NavigationItemDirective.prototype, "label", void 0);
__decorate$54([
    Input(),
    __metadata$33("design:type", Boolean)
], NavigationItemDirective.prototype, "opened", void 0);
__decorate$54([
    Input(),
    __metadata$33("design:type", Object)
], NavigationItemDirective.prototype, "heading", void 0);
__decorate$54([
    Input(),
    __metadata$33("design:type", String)
], NavigationItemDirective.prototype, "prepIcon", void 0);
__decorate$54([
    Input(),
    __metadata$33("design:type", String)
], NavigationItemDirective.prototype, "appIcon", void 0);
__decorate$54([
    Input(),
    __metadata$33("design:type", String)
], NavigationItemDirective.prototype, "class", void 0);
__decorate$54([
    Input(),
    __metadata$33("design:type", String)
], NavigationItemDirective.prototype, "href", void 0);
__decorate$54([
    Input(),
    __metadata$33("design:type", Array),
    __metadata$33("design:paramtypes", [Array])
], NavigationItemDirective.prototype, "route", null);
__decorate$54([
    ContentChildren(NavigationItemDirective_1),
    __metadata$33("design:type", QueryList)
], NavigationItemDirective.prototype, "contentItems", void 0);
NavigationItemDirective = NavigationItemDirective_1 = __decorate$54([
    Directive({
        selector: 'vcl-navitem'
    }),
    __param$7(1, Inject(forwardRef(function () { return NavigationComponent; }))),
    __param$7(2, Optional()), __param$7(2, SkipSelf()), __param$7(2, Inject(NavigationItemDirective_1)),
    __metadata$33("design:paramtypes", [Router,
        NavigationComponent,
        NavigationItemDirective])
], NavigationItemDirective);
var NavigationItemDirective_1;

var __decorate$53 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$32 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { containsTree } from "@angular/router/url_tree";
var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
        this.type = 'horizontal';
        this.useRouter = false;
        this.subLevelHintIconClosed = 'fa:chevron-right';
        this.subLevelHintIconOpened = 'fa:chevron-down';
        this.subLevelHintIconSide = 'right';
        this.select = new EventEmitter();
        this.navigate = new EventEmitter();
    }
    Object.defineProperty(NavigationComponent.prototype, "navigationItems", {
        get: function () {
            return this.inputItems || this.contentItems || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isVertical", {
        get: function () {
            return this.type === 'vertical';
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.runItems = function (cb) {
        var runItems = function (items) {
            items.forEach(function (item) {
                cb(item);
                if (item.items) {
                    runItems(item.items);
                }
            });
        };
        runItems(this.navigationItems);
    };
    NavigationComponent.prototype.selectRoute = function (route, openParents) {
        var _this = this;
        if (openParents === void 0) { openParents = true; }
        this.runItems(function (item) {
            if (item.route) {
                // TODO should use containsTree from @angular/router for comparison
                // currently not exposed as public api
                item.selected = item.route.length === route.length && item.route.every(function (v, i) { return v === route[i]; });
                if (item.selected) {
                    _this.selectedItem = item;
                    if (openParents) {
                        item.openParents();
                    }
                }
            }
        });
    };
    NavigationComponent.prototype.selectItem = function (item) {
        if (item.items && item.items.length > 0) {
            item.opened = !item.opened;
            return;
        }
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        item.selected = true;
        this.selectedItem = item;
        if (item.href) {
            window.location.href = item.href;
        }
        else if (item.route) {
            if (this.useRouter) {
                this.router.navigate(item.route);
            }
            else {
                this.navigate.emit(item.route);
            }
        }
        this.select.emit(item);
    };
    NavigationComponent.prototype.onSubItemSelect = function (item) {
        this.selectItem(item);
    };
    return NavigationComponent;
}());
__decorate$53([
    Input(),
    __metadata$32("design:type", String)
], NavigationComponent.prototype, "ident", void 0);
__decorate$53([
    Input(),
    __metadata$32("design:type", String)
], NavigationComponent.prototype, "ariaRole", void 0);
__decorate$53([
    Input(),
    __metadata$32("design:type", Number)
], NavigationComponent.prototype, "tabindex", void 0);
__decorate$53([
    Input(),
    __metadata$32("design:type", String)
], NavigationComponent.prototype, "type", void 0);
__decorate$53([
    Input(),
    __metadata$32("design:type", Object)
], NavigationComponent.prototype, "useRouter", void 0);
__decorate$53([
    Input(),
    __metadata$32("design:type", String)
], NavigationComponent.prototype, "subLevelHintIconClosed", void 0);
__decorate$53([
    Input(),
    __metadata$32("design:type", String)
], NavigationComponent.prototype, "subLevelHintIconOpened", void 0);
__decorate$53([
    Input(),
    __metadata$32("design:type", String)
], NavigationComponent.prototype, "subLevelHintIconSide", void 0);
__decorate$53([
    Input(),
    __metadata$32("design:type", QueryList)
], NavigationComponent.prototype, "inputItems", void 0);
__decorate$53([
    Output(),
    __metadata$32("design:type", Object)
], NavigationComponent.prototype, "select", void 0);
__decorate$53([
    Output(),
    __metadata$32("design:type", Object)
], NavigationComponent.prototype, "navigate", void 0);
__decorate$53([
    ContentChildren(NavigationItemDirective),
    __metadata$32("design:type", QueryList)
], NavigationComponent.prototype, "contentItems", void 0);
__decorate$53([
    HostBinding('class.vclVertical'),
    __metadata$32("design:type", Object),
    __metadata$32("design:paramtypes", [])
], NavigationComponent.prototype, "isVertical", null);
NavigationComponent = __decorate$53([
    Component({
        selector: 'vcl-navigation',
        host: {
            '[class.vclNavigation]': 'true'
        },
        template: "  <ul> <li *ngFor=\"let item of navigationItems\" [class.vclSelected]=\"item.selected\" [class.vclOpen]=\"item.opened\" [class.vclClose]=\"!item.opened\" [class.vclNavigationHeading]=\"item.heading\" [class.vclNavigationItem]=\"!item.heading\" [attr.aria-selected]=\"item.selected\" [attr.role]=\"item.heading && 'sectionhead' || ariaRole\" [attr.tabindex]=\"tabindex\" [ngClass]=\"item.class\" > <span *ngIf=\"item.heading\"> {{item.label | loc}} </span> <a vcl-link class=\"vclNavigationItemLabel\" *ngIf=\"!item.heading\" [label]=\"item.label | loc\" [prepIcon]=\"item.calcPrepIcon\" [appIcon]=\"item.calcAppIcon\" (tap)=\"selectItem(item)\"> </a> <vcl-navigation *ngIf=\"item.items && item.items.length > 0\" [inputItems]=\"item.items\" [type]=\"type\" [useRouter]=\"useRouter\" [subLevelHintIconOpened]=\"subLevelHintIconOpened\" [subLevelHintIconClosed]=\"subLevelHintIconClosed\" [subLevelHintIconSide]=\"subLevelHintIconSide\" (select)=\"onSubItemSelect($event)\"> </vcl-navigation> </li> </ul> ",
    }),
    __metadata$32("design:paramtypes", [Router])
], NavigationComponent);

var __decorate$50 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLNavigationModule = (function () {
    function VCLNavigationModule() {
    }
    return VCLNavigationModule;
}());
VCLNavigationModule = __decorate$50([
    NgModule({
        imports: [CommonModule, L10nModule, VCLLinkModule],
        exports: [NavigationComponent, NavigationItemDirective],
        declarations: [NavigationComponent, NavigationItemDirective],
        providers: [],
    })
], VCLNavigationModule);

var __decorate$56 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$34 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.ariaLevel = 1;
    }
    return ToolbarComponent;
}());
__decorate$56([
    Input(),
    __metadata$34("design:type", Number)
], ToolbarComponent.prototype, "ariaLevel", void 0);
ToolbarComponent = __decorate$56([
    Component({
        selector: 'vcl-toolbar',
        template: '<ng-content></ng-content>',
        host: {
            '[class.vclToolbar]': 'true',
            '[class.vclLayoutHorizontal]': 'true',
            '[class.vclLayoutJustified]': 'true',
            '[class.vclSecondary]': 'ariaLevel == 2',
            '[attr.aria-level]': 'ariaLevel',
            '[attr.role]': '"menubar"',
        }
    }),
    __metadata$34("design:paramtypes", [])
], ToolbarComponent);

var __decorate$55 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLToolbarModule = (function () {
    function VCLToolbarModule() {
    }
    return VCLToolbarModule;
}());
VCLToolbarModule = __decorate$55([
    NgModule({
        imports: [CommonModule, L10nModule],
        exports: [ToolbarComponent],
        declarations: [ToolbarComponent],
        providers: [],
    })
], VCLToolbarModule);

var __decorate$58 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$35 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.minValue = 0;
        this.maxValue = 100;
        this.indeterminate = false;
    }
    Object.defineProperty(ProgressBarComponent.prototype, "showIndeterminate", {
        get: function () {
            return this.indeterminate && !this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showValue", {
        get: function () {
            return !this.indeterminate || this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showSecondaryValue", {
        get: function () {
            return this.validateValue(this.secondaryValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformValue", {
        get: function () {
            var value = this.validateValue(this.value) ? this.scaleValue(this.value) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformSecondaryValue", {
        get: function () {
            var value = this.validateValue(this.secondaryValue) ? this.scaleValue(this.secondaryValue) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "range", {
        get: function () {
            return this.maxValue - this.minValue;
        },
        enumerable: true,
        configurable: true
    });
    ProgressBarComponent.prototype.scaleValue = function (value) {
        return (value - this.minValue) / this.range;
    };
    ProgressBarComponent.prototype.validateValue = function (value) {
        return typeof value === 'number' &&
            value !== NaN &&
            value >= this.minValue &&
            value <= this.maxValue;
    };
    return ProgressBarComponent;
}());
__decorate$58([
    Input(),
    __metadata$35("design:type", Number)
], ProgressBarComponent.prototype, "value", void 0);
__decorate$58([
    Input(),
    __metadata$35("design:type", Number)
], ProgressBarComponent.prototype, "secondaryValue", void 0);
__decorate$58([
    Input(),
    __metadata$35("design:type", Number)
], ProgressBarComponent.prototype, "minValue", void 0);
__decorate$58([
    Input(),
    __metadata$35("design:type", Number)
], ProgressBarComponent.prototype, "maxValue", void 0);
__decorate$58([
    Input(),
    __metadata$35("design:type", Boolean)
], ProgressBarComponent.prototype, "indeterminate", void 0);
__decorate$58([
    Input(),
    __metadata$35("design:type", String)
], ProgressBarComponent.prototype, "label", void 0);
ProgressBarComponent = __decorate$58([
    Component({
        selector: 'vcl-progress-bar',
        template: "<div class=\"vclProgressBar\" [attr.aria-valuenow]=\"value\"  [attr.aria-valuemin]=\"minValue\"  [attr.aria-valuemax]=\"maxValue\"  [attr.aria-valuetext]=\"label\" [class.vclIndeterminate]=\"showIndeterminate\" > <div *ngIf=\"showValue\" class=\"vclProgress vclPrimary vclLayoutFit\" [style.transform]=\"transformValue\"></div> <div *ngIf=\"showSecondaryValue\" class=\"vclProgress vclSecondary vclLayoutFit\" [style.transform]=\"transformSecondaryValue\"></div> <div *ngIf=\"showIndeterminate\" class=\"vclProgress vclPrimary vclLayoutFit\"></div> </div> ",
        host: {
            '[attr.role]': '"progressbar"',
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], ProgressBarComponent);

var __decorate$57 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLProgressBarModule = (function () {
    function VCLProgressBarModule() {
    }
    return VCLProgressBarModule;
}());
VCLProgressBarModule = __decorate$57([
    NgModule({
        imports: [CommonModule],
        exports: [ProgressBarComponent],
        declarations: [ProgressBarComponent]
    })
], VCLProgressBarModule);

var __decorate$60 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$36 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$8 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioButtonComponent; }),
    multi: true
};
var RadioButtonComponent = (function () {
    function RadioButtonComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.checkedIcon = 'fa:dot-circle-o';
        this.uncheckedIcon = 'fa:circle-o';
        this.disabled = false;
        this.labelPosition = 'right';
        this.tabindex = 0;
        this.checked = false;
        this.checkedChange = new EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    RadioButtonComponent.prototype.onKeydown = function (e) {
        switch (e.code) {
            case 'Space':
                this.triggerChangeAction(e);
                break;
        }
    };
    RadioButtonComponent.prototype.onTap = function (e) {
        return this.triggerChangeAction(e);
    };
    RadioButtonComponent.prototype.triggerChangeAction = function (e) {
        e.preventDefault();
        if (this.disabled)
            return;
        if (this.checked == true)
            return; // radio-buttons cannot be 'unchecked' by definition
        this.checked = true;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
    };
    RadioButtonComponent.prototype.setChecked = function (value) {
        this.checked = value;
        this.cdRef.markForCheck();
    };
    RadioButtonComponent.prototype.writeValue = function (value) {
        if (value !== this.checked) {
            this.checked = value;
        }
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return RadioButtonComponent;
}());
__decorate$60([
    Input(),
    __metadata$36("design:type", Object)
], RadioButtonComponent.prototype, "checkedIcon", void 0);
__decorate$60([
    Input(),
    __metadata$36("design:type", Object)
], RadioButtonComponent.prototype, "uncheckedIcon", void 0);
__decorate$60([
    HostBinding('attr.aria-disabled'),
    HostBinding('class.vclDisabled'),
    Input(),
    __metadata$36("design:type", Object)
], RadioButtonComponent.prototype, "disabled", void 0);
__decorate$60([
    Input('value'),
    __metadata$36("design:type", Object)
], RadioButtonComponent.prototype, "value", void 0);
__decorate$60([
    Input(),
    __metadata$36("design:type", String)
], RadioButtonComponent.prototype, "labelPosition", void 0);
__decorate$60([
    Input(),
    __metadata$36("design:type", String)
], RadioButtonComponent.prototype, "label", void 0);
__decorate$60([
    HostBinding(),
    __metadata$36("design:type", Object)
], RadioButtonComponent.prototype, "tabindex", void 0);
__decorate$60([
    HostBinding('attr.checked'),
    Input(),
    __metadata$36("design:type", Boolean)
], RadioButtonComponent.prototype, "checked", void 0);
__decorate$60([
    Output(),
    __metadata$36("design:type", Object)
], RadioButtonComponent.prototype, "checkedChange", void 0);
__decorate$60([
    HostListener('keydown', ['$event']),
    __metadata$36("design:type", Function),
    __metadata$36("design:paramtypes", [KeyboardEvent]),
    __metadata$36("design:returntype", void 0)
], RadioButtonComponent.prototype, "onKeydown", null);
__decorate$60([
    HostListener('tap', ['$event']),
    __metadata$36("design:type", Function),
    __metadata$36("design:paramtypes", [Event]),
    __metadata$36("design:returntype", void 0)
], RadioButtonComponent.prototype, "onTap", null);
RadioButtonComponent = __decorate$60([
    Component({
        selector: 'vcl-radio-button',
        template: "<vcl-icon [icon]=\"checked ? checkedIcon : uncheckedIcon\" *ngIf=\"labelPosition=='right'\"></vcl-icon> <label vcl-form-control-label *ngIf=\"label\" [label]=\"label\"></label> <ng-content></ng-content> <vcl-icon [icon]=\"checked ? checkedIcon : uncheckedIcon\" *ngIf=\"labelPosition=='left'\"></vcl-icon> ",
        host: {
            '[attr.role]': '"radio"',
            '[class.vclRadioButton]': 'true',
            '[style.userSelect]': '"none"'
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$8]
    }),
    __metadata$36("design:paramtypes", [ElementRef, ChangeDetectorRef])
], RadioButtonComponent);

var __decorate$61 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$37 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectionMode$2;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(SelectionMode$2 || (SelectionMode$2 = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$9 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioGroupComponent; }),
    multi: true
};
var RadioGroupComponent = (function () {
    function RadioGroupComponent(cdRef) {
        this.cdRef = cdRef;
        this.change = new EventEmitter();
        /**
        * things needed for ControlValueAccessor-Interface
        */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    RadioGroupComponent.prototype.syncValue = function () {
        var value = undefined;
        this.radioButtons.toArray().every(function (rbtn, idx) {
            if (rbtn.checked) {
                value = rbtn.value === undefined ? idx : rbtn.value;
                return false;
            }
            return !rbtn.checked;
        });
        this.value = value;
    };
    RadioGroupComponent.prototype.syncRadioButtons = function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (rbtn, idx) {
                var value = rbtn.value === undefined ? idx : rbtn.value;
                rbtn.setChecked(_this.value === value);
            });
            this.cdRef.markForCheck();
        }
    };
    RadioGroupComponent.prototype.triggerChange = function () {
        this.change.emit(this.value);
        this.onChange(this.value);
    };
    RadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Subscribes to radio button change event
        var listenChange = function () {
            _this.dispose();
            var checked$ = Observable.merge.apply(Observable, (_this.radioButtons.map(function (rbtn, idx) { return rbtn.checkedChange.map(function () { return ({ rbtn: rbtn, idx: idx }); }); })));
            _this.checkedSubscription = checked$.subscribe(function (source) {
                _this.radioButtons.forEach(function (crbtn) {
                    crbtn.setChecked(crbtn === source.rbtn);
                });
                _this.syncValue();
                _this.triggerChange();
            });
        };
        listenChange();
        this.radioButtons.changes.subscribe(function (x) {
            listenChange();
        });
    };
    RadioGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    RadioGroupComponent.prototype.dispose = function () {
        this.checkedSubscription && this.checkedSubscription.unsubscribe();
    };
    RadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.syncRadioButtons();
    };
    RadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return RadioGroupComponent;
}());
__decorate$61([
    Output(),
    __metadata$37("design:type", Object)
], RadioGroupComponent.prototype, "change", void 0);
__decorate$61([
    ContentChildren(RadioButtonComponent),
    __metadata$37("design:type", QueryList)
], RadioGroupComponent.prototype, "radioButtons", void 0);
RadioGroupComponent = __decorate$61([
    Component({
        selector: 'vcl-radio-group',
        template: "<ng-content></ng-content>",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$9],
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __metadata$37("design:paramtypes", [ChangeDetectorRef])
], RadioGroupComponent);

var __decorate$63 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$38 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FormControlLabelComponent = (function () {
    function FormControlLabelComponent() {
        this.disabled = false;
        this.requiredIndicatorCharacter = '•';
        // Whether the label wraps the control
        this.wrapping = false;
        // TODO enable when it is possible to determine if there is ng-content
        // without having to wrap ng-content in another span element
        // get hasContent() {
        //   return this.content.nativeElement.childNodes.length > 0;
        // }
        // Whether an indicator that an input in to the labelled control is required
        this.required = false;
    }
    return FormControlLabelComponent;
}());
__decorate$63([
    ViewChild('content'),
    __metadata$38("design:type", ElementRef)
], FormControlLabelComponent.prototype, "content", void 0);
__decorate$63([
    Input(),
    HostBinding('class.vclDisabled'),
    __metadata$38("design:type", Object)
], FormControlLabelComponent.prototype, "disabled", void 0);
__decorate$63([
    Input(),
    __metadata$38("design:type", String)
], FormControlLabelComponent.prototype, "requiredIndicatorCharacter", void 0);
__decorate$63([
    Input(),
    __metadata$38("design:type", String)
], FormControlLabelComponent.prototype, "label", void 0);
__decorate$63([
    Input(),
    __metadata$38("design:type", String)
], FormControlLabelComponent.prototype, "subLabel", void 0);
__decorate$63([
    HostBinding('class.vclFormControlLabelWrapping'),
    Input(),
    __metadata$38("design:type", Object)
], FormControlLabelComponent.prototype, "wrapping", void 0);
__decorate$63([
    Input(),
    __metadata$38("design:type", Boolean)
], FormControlLabelComponent.prototype, "required", void 0);
__decorate$63([
    Input(),
    __metadata$38("design:type", String)
], FormControlLabelComponent.prototype, "requiredIndLabel", void 0);
FormControlLabelComponent = __decorate$63([
    Component({
        selector: 'label[vcl-form-control-label]',
        template: "{{label | loc}} <em *ngIf=\"required\" class=\"vclRequiredIndicator\" aria-hidden=\"true\" [attr.aria-label]=\"requiredIndLabel | loc\"> {{requiredIndicatorCharacter}} </em> <span *ngIf=\"subLabel\" class=\"vclFormControlSubLabel\">{{subLabel | loc}}</span> <!--<span #content><ng-content></ng-content></span> --> <ng-content></ng-content> ",
        host: {
            '[class.vclFormControlLabel]': 'true',
        },
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormControlLabelComponent);

var __decorate$62 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLFormControlLabelModule = (function () {
    function VCLFormControlLabelModule() {
    }
    return VCLFormControlLabelModule;
}());
VCLFormControlLabelModule = __decorate$62([
    NgModule({
        imports: [CommonModule, VCLIconModule, L10nModule],
        exports: [FormControlLabelComponent],
        declarations: [FormControlLabelComponent]
    })
], VCLFormControlLabelModule);

var __decorate$59 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLRadioButtonModule = (function () {
    function VCLRadioButtonModule() {
    }
    return VCLRadioButtonModule;
}());
VCLRadioButtonModule = __decorate$59([
    NgModule({
        imports: [CommonModule, VCLIconModule, VCLFormControlLabelModule],
        exports: [RadioButtonComponent, RadioGroupComponent],
        declarations: [RadioButtonComponent, RadioGroupComponent]
    })
], VCLRadioButtonModule);

var __decorate$65 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$39 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$10 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = (function () {
    function CheckboxComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.checkedIcon = 'fa:check-square-o';
        this.uncheckedIcon = 'fa:square-o';
        this.disabled = false;
        this.labelPosition = 'right';
        /**
        Reflects the checked state, `true` is checked and `false` is unchecked
        @public
        */
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        */
        this.checkedChange = new EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    CheckboxComponent.prototype.onKeyup = function (e) {
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                this.updateValue();
                break;
        }
    };
    CheckboxComponent.prototype.onTap = function (e) {
        e.preventDefault();
        return this.updateValue();
    };
    CheckboxComponent.prototype.updateValue = function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        this.onTouched();
        this.onChange(this.checked);
    };
    Object.defineProperty(CheckboxComponent.prototype, "icon", {
        get: function () {
            return this.checked ? this.checkedIcon : this.uncheckedIcon;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.onBlur = function (e) {
        this.onTouched();
    };
    CheckboxComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
        this.cdRef.markForCheck();
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return CheckboxComponent;
}());
__decorate$65([
    HostBinding(),
    __metadata$39("design:type", Object)
], CheckboxComponent.prototype, "tabindex", void 0);
__decorate$65([
    Input(),
    __metadata$39("design:type", String)
], CheckboxComponent.prototype, "checkedIcon", void 0);
__decorate$65([
    Input(),
    __metadata$39("design:type", String)
], CheckboxComponent.prototype, "uncheckedIcon", void 0);
__decorate$65([
    HostBinding('attr.aria-disabled'),
    HostBinding('class.vclDisabled'),
    Input(),
    __metadata$39("design:type", Boolean)
], CheckboxComponent.prototype, "disabled", void 0);
__decorate$65([
    Input(),
    __metadata$39("design:type", String)
], CheckboxComponent.prototype, "labelPosition", void 0);
__decorate$65([
    HostBinding('attr.checked'),
    Input(),
    __metadata$39("design:type", Boolean)
], CheckboxComponent.prototype, "checked", void 0);
__decorate$65([
    Output(),
    __metadata$39("design:type", Object)
], CheckboxComponent.prototype, "checkedChange", void 0);
__decorate$65([
    HostListener('keydown', ['$event']),
    __metadata$39("design:type", Function),
    __metadata$39("design:paramtypes", [Object]),
    __metadata$39("design:returntype", void 0)
], CheckboxComponent.prototype, "onKeyup", null);
__decorate$65([
    HostListener('tap', ['$event']),
    __metadata$39("design:type", Function),
    __metadata$39("design:paramtypes", [Object]),
    __metadata$39("design:returntype", void 0)
], CheckboxComponent.prototype, "onTap", null);
__decorate$65([
    HostListener('blur'),
    __metadata$39("design:type", Function),
    __metadata$39("design:paramtypes", [Object]),
    __metadata$39("design:returntype", void 0)
], CheckboxComponent.prototype, "onBlur", null);
CheckboxComponent = __decorate$65([
    Component({
        selector: 'vcl-checkbox',
        template: "  <vcl-icon [icon]=\"icon\" *ngIf=\"labelPosition=='right'\" [@checkState]=\"checked\"></vcl-icon> <ng-content></ng-content> <vcl-icon [icon]=\"icon\" *ngIf=\"labelPosition=='left'\"></vcl-icon> ",
        animations: [trigger$1('checkState', [])],
        host: {
            '[attr.role]': '"checkbox"',
            '[class.vclCheckbox]': 'true',
            '[style.userSelect]': '"none"'
        },
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$10],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata$39("design:paramtypes", [ElementRef, ChangeDetectorRef])
], CheckboxComponent);

var __decorate$64 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLCheckboxModule = (function () {
    function VCLCheckboxModule() {
    }
    return VCLCheckboxModule;
}());
VCLCheckboxModule = __decorate$64([
    NgModule({
        imports: [CommonModule, VCLIconModule],
        exports: [CheckboxComponent],
        declarations: [CheckboxComponent]
    })
], VCLCheckboxModule);

/**
 * this is a helper-class so that the Date-logic
 * is not mashed with the components logic
 */
var MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
var WEEK_DAYS = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su'
];
var CalendarDate = (function () {
    function CalendarDate(date) {
        if (!(date instanceof Date)) {
            date = new Date;
        }
        this.date = date;
    }
    CalendarDate.prototype.getWeekDays = function () {
        return WEEK_DAYS;
    };
    CalendarDate.prototype.getMonthString = function () {
        var monthNr = this.date.getMonth();
        return MONTH_NAMES[monthNr];
    };
    CalendarDate.prototype.getYearString = function () {
        return this.date.getFullYear().toString();
    };
    /**
     * gets the first day of the month for the given date's month.
     */
    CalendarDate.prototype.getFirstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1, 12, date.getMinutes(), date.getSeconds());
    };
    CalendarDate.prototype.moveToYear = function (year) {
        var newDate = new Date(year, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new CalendarDate(newDate);
    };
    CalendarDate.prototype.addYears = function (amount) {
        if (amount === void 0) { amount = 1; }
        var newDate = new Date(this.date.getFullYear() + amount, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new CalendarDate(newDate);
    };
    CalendarDate.prototype.addDays = function (date, amount) {
        if (amount === void 0) { amount = 1; }
        return new Date(date.getTime() + 24 * 60 * 60 * 1000 * amount);
    };
    CalendarDate.prototype.moveDays = function (amount) {
        this.date = this.addDays(this.date, amount);
    };
    /**
     * returns true if this is greater than that
     */
    CalendarDate.prototype.gt = function (date) {
        return this.date > date;
    };
    /**
     * returns true if this is lower than that
     */
    CalendarDate.prototype.lt = function (date) {
        return this.date < date;
    };
    /**
     * Gets a new date incremented by the given number of months. Number of months can be negative.
     * If the date of the given month does not match the target month, the date will be set to the
     * last day of the month.
     */
    CalendarDate.prototype.incrementMonths = function (numberOfMonths) {
        var dateInTargetMonth = new Date(this.date.getFullYear(), this.date.getMonth() + numberOfMonths, 1);
        var numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
        if (numberOfDaysInMonth < this.date.getDate()) {
            dateInTargetMonth.setDate(numberOfDaysInMonth);
        }
        else {
            dateInTargetMonth.setDate(this.date.getDate());
        }
        return new CalendarDate(dateInTargetMonth);
    };
    /**
      * Gets the number of days in the month for the given date's month
      */
    CalendarDate.prototype.getNumberOfDaysInMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    CalendarDate.prototype.getLastDateOfMonth = function (date) {
        var dayNr = this.getNumberOfDaysInMonth(date);
        return new Date(date.getFullYear(), date.getMonth(), dayNr, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    /**
      * Gets whether two dates have the same month and year
      */
    CalendarDate.prototype.isSameMonthAndYear = function (date) {
        if (date === void 0) { date = new CalendarDate(); }
        return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
    };
    /**
     * Gets whether two dates are the same day (not not necesarily the same time)
     */
    CalendarDate.prototype.isSameDay = function (date) {
        return this.date.getDate() == date.date.getDate() && this.isSameMonthAndYear(date);
    };
    CalendarDate.prototype.isToday = function () {
        return this.isSameDay(new CalendarDate());
    };
    CalendarDate.prototype.isInYear = function (year) {
        return this.date.getFullYear() === year;
    };
    /**
     * returns a set of days which are in the given month or
     * are in the same weekNumber as a day in the given month
     */
    CalendarDate.prototype.getMonthBlock = function () {
        var dates = [];
        var firstDayOfMonth = this.getFirstDateOfMonth(this.date);
        var lastDayOfMonth = this.getLastDateOfMonth(this.date);
        var daysOfMonth = this.getNumberOfDaysInMonth(this.date);
        // all days of this month
        for (var i = 0; i < daysOfMonth; i++) {
            dates.push(this.addDays(firstDayOfMonth, i));
        }
        // days of prev month but in same week
        var weekDay = firstDayOfMonth.getDay();
        var minus = 0;
        while (weekDay > 1) {
            minus--;
            dates.unshift(this.addDays(firstDayOfMonth, minus));
            weekDay--;
        }
        // days of next month but in same week
        var addDays = 7 - lastDayOfMonth.getDay();
        var plus = 0;
        while (addDays > 0 && lastDayOfMonth.getDay() !== 0) {
            plus++;
            dates.push(this.addDays(lastDayOfMonth, plus));
            addDays--;
        }
        var ret = dates.map(function (date) { return new CalendarDate(date); });
        var blocks = [];
        // split in weeks
        var chunk = 7;
        for (var i = 0, j = ret.length; i < j; i += chunk) {
            var temparray = ret.slice(i, i + chunk);
            if (temparray.length == 7)
                blocks.push(temparray);
        }
        return blocks;
    };
    CalendarDate.prototype.getYearsBlock = function () {
        var years = [];
        var currentYear = this.date.getFullYear() - 12;
        while (years.length < 25) {
            years.push(currentYear);
            currentYear++;
        }
        // split rows
        var ret = [];
        var chunk = 5;
        for (var i = 0, j = years.length; i < j; i += chunk) {
            var temparray = years.slice(i, i + chunk);
            if (temparray.length == 5)
                ret.push(temparray);
        }
        return ret;
    };
    CalendarDate.prototype.getWeekNumber = function () {
        // Copy date so don't modify original
        var d = new Date(+this.date);
        d.setHours(0, 0, 0);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        // Get first day of year
        var yearStart = new Date(d.getFullYear(), 0, 1);
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    };
    /**
     * returns true if this is between the given dates
     */
    CalendarDate.prototype.inRange = function (from, to) {
        if (!(from instanceof CalendarDate) || !(to instanceof CalendarDate)) {
            return false;
        }
        return (this.date >= from.date && this.date <= to.date)
            || this.isSameDay(from) || this.isSameDay(to);
    };
    CalendarDate.prototype.daysInRange = function (to) {
        var oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((this.date.getTime() - to.date.getTime()) / (oneDay))) + 1;
    };
    return CalendarDate;
}());

var __decorate$67 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$40 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$11 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function () {
    function DatePickerComponent(cdRef) {
        this.cdRef = cdRef;
        // behavior
        this.closeOnSelect = false;
        // styling
        this.highlightToday = true;
        this.highlightSelected = true;
        this.displayWeekNumbers = true;
        this.displayWeekdays = true;
        this.prevYearBtnIcon = "fa:chevron-left";
        this.nextYearBtnIcon = "fa:chevron-right";
        this.displayJumpToday = true;
        this.displayJumpSelected = true;
        // values
        this.selectedDate = new Date();
        this.selectRange = false;
        this.maxRangeLength = Infinity;
        this.today = new CalendarDate();
        this.showYearPick = false;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        this.currentDate = new CalendarDate(this.selectedDate);
        this.viewDate = new CalendarDate();
        if (this.selectedRangeEnd) {
            this.selectRange = true;
            this.select(new CalendarDate(this.selectedRangeEnd));
        }
    };
    /**
     * activate the given date
     */
    DatePickerComponent.prototype.select = function (date) {
        if (this.isDisabled(date)) {
            return;
        }
        if (!this.selectRange) {
            this.currentDate = date;
            if (!date.isSameMonthAndYear(this.viewDate)) {
                this.gotoSelected();
            }
            !!this.onChangeCallback && this.onChangeCallback(this.currentDate.date);
            return;
        }
        if (this.currentDate && this.currentRangeEnd) {
            // reset all
            this.currentDate = null;
            this.currentRangeEnd = null;
        }
        else if (this.currentDate && !this.currentRangeEnd) {
            this.currentRangeEnd = date;
        }
        else if (!this.currentDate) {
            this.currentDate = date;
        }
        // swap values if currentDate > currentRangeEnd
        if (this.currentRangeEnd &&
            this.currentDate &&
            this.currentRangeEnd.date < this.currentDate.date) {
            this.currentRangeEnd.date = [this.currentDate.date, this.currentDate.date = this.currentRangeEnd.date][0]; // swap values
        }
        // if more days selected than maxRangeLength, strip days
        if (this.selectRange &&
            this.currentRangeEnd &&
            this.currentDate &&
            this.currentDate.daysInRange(this.currentRangeEnd) > this.maxRangeLength) {
            var diffDays = this.currentDate.daysInRange(this.currentRangeEnd) - this.maxRangeLength;
            this.currentRangeEnd.moveDays(diffDays * (-1));
        }
        if (this.currentDate) {
            !!this.onChangeCallback && this.onChangeCallback(this.currentDate.date);
        }
    };
    /**
     * ui-markers
     */
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.currentDate && this.currentDate.isSameDay(date))
            return true;
        return !!this.currentDate && !!this.currentRangeEnd && date.inRange(this.currentDate, this.currentRangeEnd);
    };
    DatePickerComponent.prototype.isDisabled = function (day) {
        var minDate = this.minDate || new Date(0, 0, 1);
        var maxDate = this.maxDate || new Date(10000, 0, 1);
        return day.gt(maxDate) || day.lt(minDate);
    };
    /**
     * functions to move viewDate
     */
    DatePickerComponent.prototype.nextMonth = function () {
        if (this.showYearPick) {
            this.viewDate = this.viewDate.addYears(1);
        }
        else {
            this.viewDate = this.viewDate.incrementMonths(1);
        }
    };
    DatePickerComponent.prototype.prevMonth = function () {
        if (this.showYearPick) {
            this.viewDate = this.viewDate.addYears(-1);
        }
        else {
            this.viewDate = this.viewDate.incrementMonths(-1);
        }
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = new CalendarDate();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.currentDate || new CalendarDate();
    };
    DatePickerComponent.prototype.yearPickSelect = function (year) {
        this.viewDate = this.viewDate.moveToYear(year);
        this.showYearPick = false;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.currentDate = new CalendarDate(value);
        this.cdRef.markForCheck();
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return DatePickerComponent;
}());
__decorate$67([
    Input(),
    __metadata$40("design:type", Boolean)
], DatePickerComponent.prototype, "closeOnSelect", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Boolean)
], DatePickerComponent.prototype, "highlightToday", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Boolean)
], DatePickerComponent.prototype, "highlightSelected", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekdays", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", String)
], DatePickerComponent.prototype, "prevYearBtnIcon", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", String)
], DatePickerComponent.prototype, "nextYearBtnIcon", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpToday", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpSelected", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Date)
], DatePickerComponent.prototype, "selectedDate", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Boolean)
], DatePickerComponent.prototype, "selectRange", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Date)
], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Number)
], DatePickerComponent.prototype, "maxRangeLength", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Date)
], DatePickerComponent.prototype, "minDate", void 0);
__decorate$67([
    Input(),
    __metadata$40("design:type", Date)
], DatePickerComponent.prototype, "maxDate", void 0);
DatePickerComponent = __decorate$67([
    Component({
        selector: 'vcl-date-picker',
        template: "<div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\"> <div class=\"vclDGRow\"> <div class=\"vclDGCell vclToolbar\"> <div class=\" vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\"> <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"prevMonth()\"> <div class=\"vclIcogram\"> <div class=\"vclIcon fa fa-angle-left\" aria-hidden=\"false\" aria-label=\"previous\" role=\"img\"></div> </div> </button> <span class=\"vclCalHeaderLabel\" (tap)=\"showYearPick=true\" [class.date-picker-pointer]=\"!showYearPick\"> {{viewDate.getMonthString() | loc}}&nbsp;&nbsp;{{viewDate.getYearString()}} </span> <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"nextMonth()\"> <div class=\"vclIcogram\"> <div class=\"vclIcon fa fa-angle-right\" aria-hidden=\"false\" aria-label=\"next\" role=\"img\"></div> </div> </button> </div> </div> </div> <ng-container *ngIf=\"!showYearPick\"> <div *ngIf=\"displayWeekNumbers || displayWeekdays\" class=\"vclDGRow\"> <div *ngIf=\"displayWeekNumbers\" class=\"vclDGCell vclCalItem vclOtherMonth\"> {{'week' | loc}} </div> <div *ngFor=\"let day of viewDate.getWeekDays()\" class=\"vclDGCell vclWeekdayLabel\"> <ng-container *ngIf=\"displayWeekdays\"> {{day | loc}} </ng-container> </div> </div> <div class=\"vclDGRow\" *ngFor=\"let week of viewDate.getMonthBlock()\"> <div *ngIf=\"displayWeekNumbers && week.length==7\" class=\"vclDGCell\"> {{week[5].getWeekNumber()}} </div> <div *ngFor=\"let day of week\" class=\"vclDGCell vclCalItem\" [class.vclDisabled]=\"isDisabled(day)\" [class.vclOtherMonth]=\"!day.isSameMonthAndYear(viewDate)\" [class.vclSelected]=\"isMarked(day)\" (tap)=\"select(day)\" [class.vclToday]=\"highlightSelected && day.isToday()\"> {{day.date.getDate()}} </div> </div> <div *ngIf=\"displayJumpSelected || displayJumpToday\" class=\"vclDGRow\"> <div class=\"vclDGCell\"> <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified\" role=\"menubar\" aria-level=\"2\"> <button *ngIf=\"displayJumpToday\" type=\"button\" title=\"go to today\" class=\"vclButton vclTransparent vclLayoutFlex\" (tap)=\"gotoToday()\"> <div class=\" vclIcogram\"> <span class=\"vclText \">go to today</span> </div> </button> <button *ngIf=\"displayJumpSelected\" type=\"button\" title=\"go to selected\" class=\"vclButton vclTransparent vclLayoutFlex\" (tap)=\"gotoSelected()\"> <div class=\" vclIcogram\"> <span class=\"vclText \">go to selected</span> </div> </button> </div> </div> </div> </ng-container> <ng-container *ngIf=\"showYearPick\"> <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let row of viewDate.getYearsBlock()\"> <div *ngFor=\"let year of row\" class=\"vclDGCell vclCalItem\" role=\"gridcell\" [class.vclSelected]=\"viewDate.date.getFullYear()==year\" (click)=\"yearPickSelect(year)\" [class.vclToday]=\"highlightSelected && today.isInYear(year)\"> {{year}} </div> </div> </ng-container> </div> ",
        styles: [
            ".hidden{display:none;}\n     .date-picker-pointer{cursor: pointer;}\n    "
        ],
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$11],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.vclDatePicker]': 'true',
            '[attr.role]': '"listbox"',
            '[attr.aria-multiselectable]': 'false',
            '[style.height]': '"284px"' // TODO this fixes for IE11
        }
    }),
    __metadata$40("design:paramtypes", [ChangeDetectorRef])
], DatePickerComponent);

var __decorate$66 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLDatePickerModule = (function () {
    function VCLDatePickerModule() {
    }
    return VCLDatePickerModule;
}());
VCLDatePickerModule = __decorate$66([
    NgModule({
        imports: [CommonModule, VCLButtonModule, L10nModule],
        exports: [DatePickerComponent],
        declarations: [DatePickerComponent],
        providers: [],
    })
], VCLDatePickerModule);

var __decorate$69 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$41 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MonthPickerComponent = MonthPickerComponent_1 = (function () {
    //
    function MonthPickerComponent(ref) {
        this.ref = ref;
        this.tag = MonthPickerComponent_1.Tag;
        this.now = new Date();
        this.yearMeta = {};
        this.debug = false;
        this.expanded = true;
        this.expandedChange = new EventEmitter();
        this.currentYear = this.now.getFullYear();
        this.currentYearChange = new EventEmitter();
        this.prevYearBtnTap = new EventEmitter();
        this.nextYearBtnTap = new EventEmitter();
        this.select = new EventEmitter();
        this.deselect = new EventEmitter();
        // Customization
        this.tabindex = 0;
        this.monthsPerRow = 3;
        this.locales = 'en-US';
        this.dateOptions = { month: 'short' };
        this.expandable = false;
        this.prevYearAvailable = false;
        this.nextYearAvailable = false;
        this.useAvailableMonths = false;
        this.closeBtnIcon = 'fa:times';
        this.prevYearBtnIcon = 'fa:chevron-left';
        this.nextYearBtnIcon = 'fa:chevron-right';
        this.minSelectableMonths = 0;
        this.minYear = Number.MIN_SAFE_INTEGER;
        this.maxYear = Number.MAX_SAFE_INTEGER;
    }
    MonthPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Create month labels.
        var date = new Date(this.now.getFullYear(), 0);
        this.months = Array(MonthPickerComponent_1.MonthCount).fill(0).map(function (_) {
            var month = date.toLocaleString(_this.locales, _this.dateOptions);
            date.setMonth(date.getMonth() + 1);
            return month;
        });
        if (!this.maxSelectableMonths) {
            this.maxSelectableMonths = this.colors && this.colors.length || 1;
        }
        this.availableColors = this.colors ? this.colors.map(function (color) { return true; }) : [];
        this.setYearMeta(this.currentYear);
    };
    MonthPickerComponent.prototype.ngOnChanges = function (changes) {
        var tag = this.tag + ".ngOnChanges()";
        if (this.debug)
            console.log(tag, 'changes:', changes);
        if (changes.currentYear && !changes.currentYear.isFirstChange())
            this.setYearMeta(changes.currentYear.currentValue);
    };
    MonthPickerComponent.prototype.setYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        this.currentMeta = this.yearMeta[year];
    };
    MonthPickerComponent.prototype.createYearMeta = function (year) {
        return this.months.map(function (_) { return ({}); });
    };
    MonthPickerComponent.prototype.selectMonth = function (year, month) {
        if (!this.isMonthAvailable(year, month) || this.isMonthPreselected(year, month)) {
            return;
        }
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            if (this.getSelectedDates().length <= this.minSelectableMonths) {
                return;
            }
            return this.deselectMonth(year, month);
        }
        if (this.maxSelectableMonths === 1) {
            this.iterateMonthMetas(function (year, month, mMeta) {
                mMeta.selected = mMeta === monthMeta;
            });
        }
        if (this.getSelectedDates().length < this.maxSelectableMonths) {
            monthMeta.selected = true;
        }
        if (monthMeta.selected) {
            this.setMonthBackgroundColor(year, month);
            this.notifySelect(year + "." + month);
            if (this.maxSelectableMonths === 1 && this.expandable) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.preselectMonth = function (year, month, color) {
        var tag = this.tag + ".preselectMonth()";
        if (this.debug)
            console.log(tag, year + "." + month);
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            this.deselectMonth(year, month);
        }
        monthMeta.preselected = true;
        monthMeta.color = color;
        if (this.debug)
            console.log(tag, 'monthMeta:', monthMeta);
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.dePreselectMonth = function (year, month) {
        var tag = this.tag + ".dePreselectMonth()";
        if (this.debug)
            console.log(tag, year + "." + month);
        if (!this.isMonthPreselected(year, month))
            return;
        var monthMeta = this.getYearMeta(year)[month];
        monthMeta.preselected = false;
        delete monthMeta.color;
        if (this.debug)
            console.log(tag, 'monthMeta:', monthMeta);
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.isMonthAvailable = function (year, month) {
        return this.isDateInBounds(year, month) && (!this.useAvailableMonths ||
            this.yearMeta[year] && this.yearMeta[year][month].available);
    };
    MonthPickerComponent.prototype.isDateInBounds = function (year, month) {
        return this.isMonthInBounds(month) && this.isYearInBounds(year);
    };
    MonthPickerComponent.prototype.isMonthInBounds = function (month) {
        return month > -1 && month < MonthPickerComponent_1.MonthCount;
    };
    MonthPickerComponent.prototype.isYearInBounds = function (year) {
        return year > this.minYear && year < this.maxYear;
    };
    MonthPickerComponent.prototype.isMonthPreselected = function (year, month) {
        var tag = this.tag + ".isMonthPreselected()";
        if (this.debug)
            console.log(tag, year + "." + month);
        var isMonthPreselected = !!(this.isDateInBounds(year, month) &&
            this.yearMeta[year] && this.yearMeta[year][month].preselected);
        if (this.debug)
            console.log(tag, 'isMonthPreselected:', isMonthPreselected);
        return isMonthPreselected;
    };
    MonthPickerComponent.prototype.getYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        return this.yearMeta[year];
    };
    MonthPickerComponent.prototype.iterateMonthMetas = function (cb) {
        var _this = this;
        Object.keys(this.yearMeta).forEach(function (year) {
            _this.yearMeta[year].forEach(function (monthMeta, month) {
                cb(Number(year), month, monthMeta);
            });
        });
    };
    MonthPickerComponent.prototype.getSelectedDates = function () {
        var selectedDates = [];
        this.iterateMonthMetas(function (year, month, monthMeta) {
            if (monthMeta.selected) {
                selectedDates.push(year + "." + month);
            }
        });
        return selectedDates;
    };
    MonthPickerComponent.prototype.setMonthBackgroundColor = function (year, month) {
        var color = this.getMonthBackgroundColor();
        if (color) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.color = color;
        }
    };
    MonthPickerComponent.prototype.getMonthBackgroundColor = function () {
        var index = this.availableColors.findIndex(function (available) { return available; });
        if (index !== -1) {
            this.availableColors[index] = false;
            return this.colors[index];
        }
    };
    MonthPickerComponent.prototype.deselectMonth = function (year, month) {
        if (this.isMonthSelected(year, month)) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.selected = false;
            this.clearMonthBackgroundColor(year, month);
            this.notifyDeselect(year + "." + month);
        }
    };
    MonthPickerComponent.prototype.isMonthSelected = function (year, month) {
        return this.isDateInBounds(year, month) &&
            this.yearMeta[year] && this.yearMeta[year][month].selected;
    };
    MonthPickerComponent.prototype.clearMonthBackgroundColor = function (year, month) {
        if (this.availableColors) {
            var monthMeta = this.getYearMeta(year)[month];
            if (monthMeta.color) {
                var index = this.colors.indexOf(monthMeta.color);
                this.availableColors[index] = true;
                delete monthMeta.color;
            }
        }
    };
    MonthPickerComponent.prototype.deselectAllMonths = function () {
        this.iterateMonthMetas(this.deselectMonth);
    };
    MonthPickerComponent.prototype.addAvailableMonth = function (year, month) {
        if (this.isDateInBounds(year, month)) {
            this.getYearMeta(year)[month].available = true;
        }
    };
    MonthPickerComponent.prototype.removeAvailableMonth = function (year, month) {
        if (this.isDateInBounds(year, month) && this.yearMeta[year]) {
            this.yearMeta[year][month].available = false;
        }
    };
    MonthPickerComponent.prototype.removeAllAvailableMonths = function () {
        var _this = this;
        this.iterateMonthMetas(function (year, month) {
            _this.dePreselectMonth(year, month);
            _this.deselectMonth(year, month);
            _this.removeAvailableMonth(year, month);
        });
    };
    MonthPickerComponent.prototype.onPrevYearTap = function () {
        if (this.prevYearAvailable) {
            this.currentYear--;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.prevYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onNextYearTap = function () {
        if (this.nextYearAvailable) {
            this.currentYear++;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.nextYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onCloseBtnTap = function () {
        if (this.expandable) {
            if (this.expanded) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.notifySelect = function (date) {
        this.select.emit(date);
    };
    MonthPickerComponent.prototype.notifyDeselect = function (date) {
        this.deselect.emit(date);
    };
    MonthPickerComponent.prototype.isCurrentMonth = function (year, month) {
        return this.now.getFullYear() == year && this.now.getMonth() === month;
    };
    MonthPickerComponent.prototype.getMonth = function (year, month) {
        if (this.isDateInBounds(year, month)) {
            return Object.assign({
                date: year + "." + month,
                label: this.months[month]
            }, this.getYearMeta(year)[month]);
        }
    };
    return MonthPickerComponent;
}());
MonthPickerComponent.Tag = 'MonthPickerComponent';
MonthPickerComponent.MonthCount = 12;
__decorate$69([
    Input(),
    __metadata$41("design:type", Boolean)
], MonthPickerComponent.prototype, "debug", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Boolean)
], MonthPickerComponent.prototype, "expanded", void 0);
__decorate$69([
    Output(),
    __metadata$41("design:type", EventEmitter)
], MonthPickerComponent.prototype, "expandedChange", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Number)
], MonthPickerComponent.prototype, "currentYear", void 0);
__decorate$69([
    Output(),
    __metadata$41("design:type", EventEmitter)
], MonthPickerComponent.prototype, "currentYearChange", void 0);
__decorate$69([
    Output(),
    __metadata$41("design:type", Object)
], MonthPickerComponent.prototype, "prevYearBtnTap", void 0);
__decorate$69([
    Output(),
    __metadata$41("design:type", Object)
], MonthPickerComponent.prototype, "nextYearBtnTap", void 0);
__decorate$69([
    Output(),
    __metadata$41("design:type", Object)
], MonthPickerComponent.prototype, "select", void 0);
__decorate$69([
    Output(),
    __metadata$41("design:type", Object)
], MonthPickerComponent.prototype, "deselect", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Number)
], MonthPickerComponent.prototype, "tabindex", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Number)
], MonthPickerComponent.prototype, "monthsPerRow", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Array)
], MonthPickerComponent.prototype, "colors", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Object)
], MonthPickerComponent.prototype, "locales", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Object)
], MonthPickerComponent.prototype, "dateOptions", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Boolean)
], MonthPickerComponent.prototype, "expandable", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Boolean)
], MonthPickerComponent.prototype, "prevYearAvailable", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Boolean)
], MonthPickerComponent.prototype, "nextYearAvailable", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Boolean)
], MonthPickerComponent.prototype, "useAvailableMonths", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", String)
], MonthPickerComponent.prototype, "closeBtnIcon", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", String)
], MonthPickerComponent.prototype, "prevYearBtnIcon", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", String)
], MonthPickerComponent.prototype, "nextYearBtnIcon", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Number)
], MonthPickerComponent.prototype, "maxSelectableMonths", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Number)
], MonthPickerComponent.prototype, "minSelectableMonths", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Number)
], MonthPickerComponent.prototype, "minYear", void 0);
__decorate$69([
    Input(),
    __metadata$41("design:type", Number)
], MonthPickerComponent.prototype, "maxYear", void 0);
MonthPickerComponent = MonthPickerComponent_1 = __decorate$69([
    Component({
        selector: 'vcl-month-picker',
        template: "<div class=\"vclDatePicker\" [class.vclLayoutHidden]=\"!expanded\"> <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\" [attr.role]=\"'grid'\" [attr.tabindex]=\"tabindex\" [attr.aria-multiselectable]=\"maxSelectableMonths > 1\" [attr.aria-expanded]=\"expanded\"> <div class=\"vclLayoutFlex vclDGRow vclLayoutAuto\"> <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\"> <button vcl-button class=\"vclButton vclTransparent vclSquare\" type=\"button\" [class.vclDisabled]=\"!prevYearAvailable\" [appIcon]=\"prevYearBtnIcon\" (click)=\"onPrevYearTap()\"> </button> <span class=\"vclCalHeaderLabel\">{{ currentYear }}</span> <button vcl-button type=\"button\" class=\"vclButton vclTransparent vclSquare\" [class.vclDisabled]=\"!nextYearAvailable\" [appIcon]=\"nextYearBtnIcon\" (click)=\"onNextYearTap()\"> </button> <button vcl-button *ngIf=\"expandable\" type=\"button\" class=\"vclButton vclTransparent vclSquare\" [appIcon]=\"closeBtnIcon\" (click)=\"onCloseBtnTap()\"> </button> </div> </div> <div class=\"vclSeparator\"></div> <ng-template ngFor let-iM [ngForOf]=\"months\" let-i=\"index\"> <div *ngIf=\"i % monthsPerRow === 0\" class=\"vclLayoutFlex vclDGRow vclLayoutAuto\" role=\"row\"> <div *ngFor=\"let jM of months.slice(i, (i + monthsPerRow > months.length ? months.length : i + monthsPerRow)); let j = index;\" (click)=\"selectMonth(currentYear, i+j)\" class=\"vclDGCell vclCalItem\" [class.vclAvailable]=\"!useAvailableMonths || currentMeta[i+j].available\" [class.vclUnavailable]=\"useAvailableMonths && !currentMeta[i+j].available\" [class.vclToday]=\"isCurrentMonth(i+j)\" [class.vclOtherMonth]=\"!isCurrentMonth(i+j)\" [class.vclDisabled]=\"useAvailableMonths && !currentMeta[i+j].available\" [class.vclSelected]=\"currentMeta[i+j].selected || currentMeta[i+j].preselected\" [style.background-color]=\"currentMeta[i+j].color\" [style.order]=\"i+j\" [attr.aria-selected]=\"currentMeta[i+j].selected || currentMeta[i+j].preselected\" role=\"gridcell\" tabindex=\"0\"> <div class=\"vclLayoutHorizontal vclLayoutCenterJustified vclMonthPickerListItemLabel\"> {{months[i + j]}} </div> </div> </div> </ng-template> </div> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata$41("design:paramtypes", [ChangeDetectorRef])
], MonthPickerComponent);
var MonthPickerComponent_1;

var __decorate$68 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLMonthPickerModule = (function () {
    function VCLMonthPickerModule() {
    }
    return VCLMonthPickerModule;
}());
VCLMonthPickerModule = __decorate$68([
    NgModule({
        imports: [CommonModule, VCLButtonModule, L10nModule],
        exports: [MonthPickerComponent],
        declarations: [MonthPickerComponent],
        providers: [],
    })
], VCLMonthPickerModule);

var __decorate$71 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$42 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LabelComponent = (function () {
    function LabelComponent() {
    }
    Object.defineProperty(LabelComponent.prototype, "vclPrimary", {
        /**
         * TODO(issue) this overwrites the users classes
         * @link https://github.com/angular/angular/issues/7289
         */
        // @HostBinding('class')
        // get labelClass() {
        //   return this.type ? 'vcl' + this.type.charAt(0).toUpperCase() + this.type.slice(1) : undefined;
        // }
        get: function () {
            return this.type === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclSuccess", {
        get: function () {
            return this.type === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclInfo", {
        get: function () {
            return this.type === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclWarning", {
        get: function () {
            return this.type === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclError", {
        get: function () {
            return this.type === 'error';
        },
        enumerable: true,
        configurable: true
    });
    return LabelComponent;
}());
__decorate$71([
    Input('label'),
    __metadata$42("design:type", String)
], LabelComponent.prototype, "label", void 0);
__decorate$71([
    Input('type'),
    __metadata$42("design:type", String)
], LabelComponent.prototype, "type", void 0);
__decorate$71([
    HostBinding('class.vclPrimary'),
    __metadata$42("design:type", Object),
    __metadata$42("design:paramtypes", [])
], LabelComponent.prototype, "vclPrimary", null);
__decorate$71([
    HostBinding('class.vclSuccess'),
    __metadata$42("design:type", Object),
    __metadata$42("design:paramtypes", [])
], LabelComponent.prototype, "vclSuccess", null);
__decorate$71([
    HostBinding('class.vclInfo'),
    __metadata$42("design:type", Object),
    __metadata$42("design:paramtypes", [])
], LabelComponent.prototype, "vclInfo", null);
__decorate$71([
    HostBinding('class.vclWarning'),
    __metadata$42("design:type", Object),
    __metadata$42("design:paramtypes", [])
], LabelComponent.prototype, "vclWarning", null);
__decorate$71([
    HostBinding('class.vclError'),
    __metadata$42("design:type", Object),
    __metadata$42("design:paramtypes", [])
], LabelComponent.prototype, "vclError", null);
LabelComponent = __decorate$71([
    Component({
        selector: '[vcl-label], vcl-label',
        template: "{{ label | loc }} <ng-content></ng-content>",
        host: {
            '[class.vclLabel]': 'true'
        }
    })
], LabelComponent);

var __decorate$70 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLLabelModule = (function () {
    function VCLLabelModule() {
    }
    return VCLLabelModule;
}());
VCLLabelModule = __decorate$70([
    NgModule({
        imports: [CommonModule, L10nModule, VCLMetalistModule],
        exports: [LabelComponent],
        declarations: [LabelComponent],
        providers: [],
    })
], VCLLabelModule);

var __decorate$73 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$43 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MoveDirection;
(function (MoveDirection) {
    MoveDirection[MoveDirection["Left"] = 0] = "Left";
    MoveDirection[MoveDirection["Right"] = 1] = "Right";
})(MoveDirection || (MoveDirection = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$12 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SliderComponent; }),
    multi: true
};
var SliderComponent = (function () {
    function SliderComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.disabled = false;
        this.min = 0;
        this.max = 10;
        this.wheel = false;
        this.lock = false;
        this.focused = false;
        this.percentLeftKnob = 0;
        this.scalePoints = [];
        this.firstPan = true;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    SliderComponent.prototype.ngAfterContentInit = function () {
        this.percentLeftKnob = this.calculatePercentLeftKnob(this.value);
    };
    Object.defineProperty(SliderComponent.prototype, "valueValid", {
        get: function () {
            return this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.validateValue = function (value) {
        return typeof this.value === 'number' && this.value >= this.min && this.value <= this.max;
    };
    Object.defineProperty(SliderComponent.prototype, "showScale", {
        get: function () {
            return Array.isArray(this.scale) || (typeof this.scale === 'boolean' && this.scale);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnChanges = function (changes) {
        if ('min' in changes || 'max' in changes || 'scale' in changes) {
            this.updateScalePoints();
        }
    };
    SliderComponent.prototype.setValue = function (value, updateKnob) {
        this.value = value;
        if (updateKnob) {
            this.percentLeftKnob = this.calculatePercentLeftKnob(value);
        }
        this.valueChange.emit(this.value);
        this.onChange(this.value);
    };
    SliderComponent.prototype.calculatePercentLeftKnob = function (value) {
        if (!this.validateValue(value)) {
            return 0;
        }
        var rangeLength = this.max - this.min;
        var valueLeft = value - this.min;
        var delta = rangeLength / valueLeft;
        return 100 / delta;
    };
    SliderComponent.prototype.percentToValue = function (per) {
        var rangeLength = this.max - this.min;
        var newVal = (rangeLength / 100) * per;
        return Math.round(newVal);
    };
    SliderComponent.prototype.updateScalePoints = function () {
        var _this = this;
        if (Array.isArray(this.scale)) {
            var steps_1 = this.scale.length;
            this.scalePoints = this.scale.map(function (label, idx) {
                return {
                    label: label,
                    percent: (100 / (steps_1 - 1)) * idx
                };
            });
        }
        else {
            var steps_2 = (typeof this.scale === 'number' ? this.scale : this.max - this.min) + 1;
            this.scalePoints = Array.from(Array(steps_2).keys()).map(function (i) {
                var percent = (100 / (steps_2 - 1)) * i;
                return {
                    label: _this.percentToValue(percent).toString(),
                    percent: percent
                };
            });
        }
    };
    SliderComponent.prototype.closestScalePoint = function (percentValue) {
        var closest = this.scalePoints[0];
        var dist = 100;
        this.scalePoints.forEach(function (sP) {
            var pDist = Math.abs(sP.percent - percentValue);
            if (pDist < dist) {
                closest = sP;
                dist = pDist;
            }
        });
        return closest.percent;
    };
    SliderComponent.prototype.deltaPxToPercent = function (deltaPx) {
        var fullPx = this.scaleElement.nativeElement.offsetWidth;
        var deltaPer = 100 / (fullPx / deltaPx);
        return Math.round(deltaPer * 100) / 100; // round 2 decs
    };
    SliderComponent.prototype.onFocus = function () {
        this.focused = true;
    };
    SliderComponent.prototype.onBlur = function () {
        this.focused = false;
        this.onTouched();
    };
    /**
     * clicking the rail should also reposition the bar
     */
    SliderComponent.prototype.onTap = function (event) {
        if (this.disabled || event.target.className == 'vclSliderKnob') {
            return;
        }
        var railX = event.changedPointers[0].offsetX;
        if (railX <= 0) {
            return;
        }
        var percentLeftKnob = this.deltaPxToPercent(railX);
        this.percentLeftKnob = this.lock ? this.closestScalePoint(percentLeftKnob) : percentLeftKnob;
        var value = this.percentToValue(this.percentLeftKnob);
        this.setValue(value, false);
    };
    SliderComponent.prototype.selectPoint = function (p) {
        var value = this.percentToValue(p.percent);
        this.setValue(value, true);
    };
    SliderComponent.prototype.move = function (direction) {
        if (this.lock) {
            this.moveToPoint(direction);
        }
        else {
            this.moveValue(direction);
        }
    };
    SliderComponent.prototype.moveToPoint = function (direction) {
        var currentPointValue = this.closestScalePoint(this.calculatePercentLeftKnob(this.value));
        var currentPoint = this.scalePoints.find(function (p) { return p.percent == currentPointValue; });
        var i = currentPoint ? this.scalePoints.indexOf(currentPoint) : 0;
        var nextPoint;
        if (direction == MoveDirection.Right) {
            i++;
            if (i >= this.scalePoints.length) {
                i = this.scalePoints.length - 1;
            }
            nextPoint = this.scalePoints[i];
        }
        else {
            i--;
            if (i < 0) {
                i = 0;
            }
            nextPoint = this.scalePoints[i];
        }
        var value = this.percentToValue(nextPoint.percent);
        this.setValue(value, true);
    };
    SliderComponent.prototype.moveValue = function (direction) {
        var value = this.valueValid ? this.value : this.min;
        if (direction === MoveDirection.Right) {
            value++;
            if (value > this.max)
                value = this.max;
        }
        else {
            value--;
            if (value < this.min)
                value = this.min;
        }
        this.setValue(value, true);
    };
    SliderComponent.prototype.onWheel = function (ev) {
        if (this.disabled || !this.wheel) {
            return;
        }
        if (ev.deltaY < 0) {
            this.move(MoveDirection.Right);
            ev.preventDefault();
        }
        else if (ev.deltaY > 0) {
            this.move(MoveDirection.Left);
            ev.preventDefault();
        }
    };
    SliderComponent.prototype.keydown = function (ev) {
        if (this.disabled) {
            return;
        }
        switch (ev.code) {
            case 'ArrowLeft':
                this.move(MoveDirection.Left);
                ev.preventDefault();
                break;
            case 'ArrowRight':
                this.move(MoveDirection.Right);
                ev.preventDefault();
                break;
            case 'Space':
                this.moveToPoint(MoveDirection.Right);
                ev.preventDefault();
                break;
        }
    };
    SliderComponent.prototype.onPan = function (ev) {
        if (this.disabled) {
            return;
        }
        if (this.firstPan) {
            this.firstPan = false;
            this.lastPercentLeftKnob = this.percentLeftKnob;
        }
        var deltaPx = ev.deltaX;
        var percentLeftKnob = this.lastPercentLeftKnob + this.deltaPxToPercent(deltaPx);
        if (percentLeftKnob < 0) {
            percentLeftKnob = 0;
        }
        else if (percentLeftKnob > 100) {
            percentLeftKnob = 100;
        }
        if (this.lock) {
            this.percentLeftKnob = this.closestScalePoint(percentLeftKnob);
        }
        else {
            var newValue = this.percentToValue(percentLeftKnob);
            this.percentLeftKnob = this.calculatePercentLeftKnob(newValue);
        }
        if (ev.isFinal) {
            this.firstPan = true;
            var value = this.percentToValue(this.percentLeftKnob);
            this.setValue(value, false);
        }
    };
    SliderComponent.prototype.writeValue = function (value) {
        this.setValue(value, true);
        this.cdRef.markForCheck();
    };
    SliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return SliderComponent;
}());
__decorate$73([
    HostBinding(),
    __metadata$43("design:type", Object)
], SliderComponent.prototype, "tabindex", void 0);
__decorate$73([
    Input(),
    __metadata$43("design:type", Number)
], SliderComponent.prototype, "value", void 0);
__decorate$73([
    Output(),
    __metadata$43("design:type", Object)
], SliderComponent.prototype, "valueChange", void 0);
__decorate$73([
    HostBinding('class.vclDisabled'),
    Input(),
    __metadata$43("design:type", Boolean)
], SliderComponent.prototype, "disabled", void 0);
__decorate$73([
    Input(),
    __metadata$43("design:type", Number)
], SliderComponent.prototype, "min", void 0);
__decorate$73([
    Input(),
    __metadata$43("design:type", Number)
], SliderComponent.prototype, "max", void 0);
__decorate$73([
    Input('mousewheel'),
    __metadata$43("design:type", Boolean)
], SliderComponent.prototype, "wheel", void 0);
__decorate$73([
    Input(),
    __metadata$43("design:type", Boolean)
], SliderComponent.prototype, "lock", void 0);
__decorate$73([
    Input(),
    __metadata$43("design:type", Object)
], SliderComponent.prototype, "scale", void 0);
__decorate$73([
    HostBinding('class.vclFocused'),
    __metadata$43("design:type", Boolean)
], SliderComponent.prototype, "focused", void 0);
__decorate$73([
    ViewChild('scale'),
    __metadata$43("design:type", ElementRef)
], SliderComponent.prototype, "scaleElement", void 0);
__decorate$73([
    HostListener('focus'),
    __metadata$43("design:type", Function),
    __metadata$43("design:paramtypes", []),
    __metadata$43("design:returntype", void 0)
], SliderComponent.prototype, "onFocus", null);
__decorate$73([
    HostListener('blur'),
    __metadata$43("design:type", Function),
    __metadata$43("design:paramtypes", []),
    __metadata$43("design:returntype", void 0)
], SliderComponent.prototype, "onBlur", null);
__decorate$73([
    HostListener('tap', ['$event']),
    __metadata$43("design:type", Function),
    __metadata$43("design:paramtypes", [Object]),
    __metadata$43("design:returntype", void 0)
], SliderComponent.prototype, "onTap", null);
__decorate$73([
    HostListener('wheel', ['$event']),
    __metadata$43("design:type", Function),
    __metadata$43("design:paramtypes", [Object]),
    __metadata$43("design:returntype", void 0)
], SliderComponent.prototype, "onWheel", null);
__decorate$73([
    HostListener('keydown', ['$event']),
    __metadata$43("design:type", Function),
    __metadata$43("design:paramtypes", [Object]),
    __metadata$43("design:returntype", void 0)
], SliderComponent.prototype, "keydown", null);
SliderComponent = __decorate$73([
    Component({
        selector: 'vcl-slider',
        template: "<div class=\"vclSliderRail\"> <div class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\" #scale> <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointMark\"></div> </div> <div *ngIf=\"valueValid\" class=\"vclSliderKnobContainer\" [style.left]=\"percentLeftKnob + '%'\" (pan)=\"onPan($event)\"> <div  class=\"vclSliderKnob\"></div> </div> </div> <div *ngIf=\"showScale\" class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\"> <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointLabel\" (tap)=\"selectPoint(point)\">{{point.label}}</div> </div> ",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$12],
        host: {
            '[class.vclSlider]': 'true'
        },
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata$43("design:paramtypes", [ChangeDetectorRef])
], SliderComponent);

var __decorate$72 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLSliderModule = (function () {
    function VCLSliderModule() {
    }
    return VCLSliderModule;
}());
VCLSliderModule = __decorate$72([
    NgModule({
        imports: [CommonModule, L10nModule],
        exports: [SliderComponent],
        declarations: [SliderComponent],
        providers: [],
    })
], VCLSliderModule);

var __decorate$75 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$44 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var InputControlGroup = (function () {
    function InputControlGroup(elRef) {
        this.elRef = elRef;
        this.elRef = elRef;
    }
    InputControlGroup.prototype.ucfirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return InputControlGroup;
}());
__decorate$75([
    Input('type'),
    __metadata$44("design:type", String)
], InputControlGroup.prototype, "type", void 0);
__decorate$75([
    Input('label'),
    __metadata$44("design:type", String)
], InputControlGroup.prototype, "label", void 0);
InputControlGroup = __decorate$75([
    Component({
        selector: 'vcl-input-control-group',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.vclInputControlGroup]': 'true',
        },
        template: "<ng-content></ng-content> <div *ngIf=\"type!==null && label!==null && label!==''\" class=\"vclFormControlHint\" [class.vclError]=\"type=='error'\" [class.vclWarning]=\"type=='warning'\" [class.vclSuccess]=\"type=='success'\"> {{label}} </div> "
    }),
    __metadata$44("design:paramtypes", [ElementRef])
], InputControlGroup);

var __decorate$74 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLInputControlGroupModule = (function () {
    function VCLInputControlGroupModule() {
    }
    return VCLInputControlGroupModule;
}());
VCLInputControlGroupModule = __decorate$74([
    NgModule({
        imports: [CommonModule],
        exports: [InputControlGroup],
        declarations: [InputControlGroup],
        providers: [],
    })
], VCLInputControlGroupModule);

var __extends$13 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AlertType;
(function (AlertType) {
    AlertType[AlertType["None"] = 0] = "None";
    AlertType[AlertType["Question"] = 1] = "Question";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Success"] = 3] = "Success";
    AlertType[AlertType["Warning"] = 4] = "Warning";
    AlertType[AlertType["Error"] = 5] = "Error";
})(AlertType || (AlertType = {}));
var AlertAlignment;
(function (AlertAlignment) {
    AlertAlignment[AlertAlignment["Left"] = 0] = "Left";
    AlertAlignment[AlertAlignment["Center"] = 1] = "Center";
    AlertAlignment[AlertAlignment["Right"] = 2] = "Right";
})(AlertAlignment || (AlertAlignment = {}));
var AlertInput;
(function (AlertInput) {
    AlertInput[AlertInput["None"] = 0] = "None";
    AlertInput[AlertInput["Text"] = 1] = "Text";
})(AlertInput || (AlertInput = {}));
var ALERT_DEFAULTS = {
    type: AlertType.None,
    html: false,
    showConfirmButton: true,
    showCancelButton: false,
    showCloseButton: false,
    offClickClose: true,
    escClose: true,
    cancelButtonLabel: 'Cancel',
    cancelButtonClass: 'vclDanger',
    confirmButtonLabel: 'OK',
    confirmButtonClass: 'vclEmphasized',
    loader: false,
    loaderOnConfirm: false,
    input: AlertInput.None,
    contentAlignment: AlertAlignment.Left,
    titleAlignment: AlertAlignment.Left,
    iconAlignment: AlertAlignment.Left,
    buttonAlignment: AlertAlignment.Right,
};
var TYPE_CLASS_MAP = (_a = {},
    _a[AlertType.None] = {
        alertClass: '',
        iconClass: ''
    },
    _a[AlertType.Question] = {
        alertClass: '',
        iconClass: 'fa fa-question-circle'
    },
    _a[AlertType.Info] = {
        alertClass: 'vclInfo',
        iconClass: 'fa fa-info-circle'
    },
    _a[AlertType.Success] = {
        alertClass: 'vclSuccess',
        iconClass: 'fa fa-check-circle'
    },
    _a[AlertType.Warning] = {
        alertClass: 'vclWarning',
        iconClass: 'fa fa-warning'
    },
    _a[AlertType.Error] = {
        alertClass: 'vclError',
        iconClass: 'fa fa-exclamation-circle'
    },
    _a);
var TEXT_ALIGNMENT_CLASS_MAP = (_b = {},
    _b[AlertAlignment.Left] = 'vclAlignLeft',
    _b[AlertAlignment.Center] = 'vclAlignCentered',
    _b[AlertAlignment.Right] = 'vclAlignRight',
    _b);
var BUTTON_ALIGNMENT_CLASS_MAP = (_c = {},
    _c[AlertAlignment.Left] = 'vclLayoutStartJustified',
    _c[AlertAlignment.Center] = 'vclLayoutCenterJustified',
    _c[AlertAlignment.Right] = 'vclLayoutEndJustified',
    _c);
var AlertError = (function (_super) {
    __extends$13(AlertError, _super);
    function AlertError(reason, message) {
        var _this = _super.call(this, message) || this;
        _this.reason = reason;
        return _this;
    }
    return AlertError;
}(Error));
var _a;
var _b;
var _c;

var __decorate$77 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$45 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function dismiss(layer, err) {
    if (err instanceof Error) {
        layer.closeWithError(err);
    }
    else {
        layer.closeWithError(new AlertError(err));
    }
}
var AlertComponent = (function () {
    function AlertComponent(elementRef, alertLayer, layerService, cdRef) {
        this.elementRef = elementRef;
        this.alertLayer = alertLayer;
        this.layerService = layerService;
        this.cdRef = cdRef;
        this.alert = {};
        this.alertLayer = alertLayer;
    }
    AlertComponent.prototype.onKeyUp = function (ev) {
        // Check if the top layer is the alert layer
        if (this.layerService.getTopLayer() === this.alertLayer) {
            if (ev.key === 'Escape' && this.alert.escClose) {
                dismiss(this.alertLayer, 'esc');
            }
            else if (ev.key === 'Enter') {
                this.confirm();
            }
        }
    };
    Object.defineProperty(AlertComponent.prototype, "alertClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || AlertType.None].alertClass + ' ' + (this.alert.customClass || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || AlertType.None].iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "titleAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.titleAlignment || AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.iconAlignment || AlertAlignment.Center];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "contentAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.contentAlignment || AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "buttonAlignmentClass", {
        get: function () {
            return BUTTON_ALIGNMENT_CLASS_MAP[this.alert.buttonAlignment || AlertAlignment.Right];
        },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.focus();
    };
    AlertComponent.prototype.confirm = function () {
        var _this = this;
        if (this.alert.loader)
            return;
        var result = {};
        if (this.alert.input) {
            if (this.alert.inputValidator) {
                var validationError = 'Invalid value';
                try {
                    var valid = this.alert.inputValidator(this.value);
                    if (!valid) {
                        this.validationError = 'Invalid value';
                        return;
                    }
                    result.value = this.value;
                }
                catch (ex) {
                    this.validationError = String(ex);
                    return;
                }
            }
        }
        if (this.alert.confirmAction) {
            this.alert.loader = true;
            this.cdRef.markForCheck();
            var $ = Observable.from(typeof this.alert.confirmAction === 'function' ? this.alert.confirmAction(result) : this.alert.confirmAction);
            $.subscribe(function (value) {
                var asyncResult = {};
                asyncResult.value = value;
                _this.alertLayer.send(asyncResult);
            }, function (err) {
                dismiss(_this.alertLayer, err);
            }, function () {
                _this.alertLayer.close();
            });
        }
        else {
            if (this.alert.loaderOnConfirm) {
                this.alert.loader = true;
                this.cdRef.markForCheck();
                result.close = function () { return _this.alertLayer.close(); };
                this.alertLayer.send(result);
            }
            else {
                this.alertLayer.close(result);
            }
        }
    };
    AlertComponent.prototype.cancel = function (reason) {
        dismiss(this.alertLayer, 'cancel');
    };
    AlertComponent.prototype.close = function (reason) {
        dismiss(this.alertLayer, 'close');
    };
    AlertComponent.prototype.valueChange = function (value) {
        this.value = value;
    };
    return AlertComponent;
}());
__decorate$77([
    Input(),
    __metadata$45("design:type", Object)
], AlertComponent.prototype, "alert", void 0);
__decorate$77([
    HostListener('keyup', ['$event']),
    __metadata$45("design:type", Function),
    __metadata$45("design:paramtypes", [KeyboardEvent]),
    __metadata$45("design:returntype", void 0)
], AlertComponent.prototype, "onKeyUp", null);
AlertComponent = __decorate$77([
    Component({
        template: "<div class=\"vclNotification\" [ngClass]=\"alertClass\"> <div class=\"vclNotificationHeader vclLayoutHorizontal vclLayoutCenter\" [ngClass]=\"titleAlignmentClass\" *ngIf=\"alert.title\"> <div class=\"vclLayoutFlex\">{{alert.title}}</div> <button *ngIf=\"alert.showCloseButton\" type=\"button\" class=\"vclButton vclTransparent vclSquare\" (tap)=\"close()\"><i class=\"fa fa-times\"></i></button> </div> <div class=\"vclNotificationContent vclLayoutVertical vclLayoutCenterJustified \"> <div style=\"padding-bottom: 1em\" *ngIf=\"iconClass\" [ngClass]=\"iconAlignmentClass\"> <span class=\"vclIcon vclNotificationIcon\" [ngClass]=\"iconClass\"></span> </div> <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" *ngIf=\"alert.text && !alert.html\">{{alert.text}}</div> <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" [innerHtml]=\"alert.text\" *ngIf=\"alert.text && alert.html\"></div> <div style=\"padding-bottom: 0.5em\" *ngIf=\"alert.input\"><alert-input [alert]=\"alert\" (valueChange)=\"valueChange($event)\"></alert-input></div> <div *ngIf=\"validationError\" class=\"vclNotification vclError\"> <div class=\"vclNotificationContent\"> <vcl-icogram label=\"{{validationError}}\" prepIcon=\"fa:exclamation-circle\"></vcl-icogram> </div> </div> <div class=\"vclLayoutHorizontal vclLooseButtonGroup\" [ngClass]=\"buttonAlignmentClass\"> <button vcl-button *ngIf=\"!!alert.showConfirmButton\" (tap)=\"confirm()\" [style.background-color]=\"alert.confirmButtonColor\" [ngClass]=\"alert.confirmButtonClass\" [busy]=\"!!alert.loader\" type=\"button\" > <vcl-icogram *vclButtonStateContent=\"['enabled','disabled']\" [appIcon]=\"alert.confirmButtonAppIcon\" [prepIcon]=\"alert.confirmButtonPrepIcon\" [label]=\"alert.confirmButtonLabel\"> </vcl-icogram> <vcl-icogram *vclButtonStateContent=\"'busy'\" prepIcon=\"fa:refresh fa-spin\" [label]=\"alert.confirmButtonLabel\"> </vcl-icogram> </button> <button vcl-button *ngIf=\"!!alert.showCancelButton\" [style.background-color]=\"!!alert.cancelButtonColor\" [ngClass]=\"alert.cancelButtonClass\" [busy]=\"!alert.showConfirmButton && !!alert.loader\" [disabled]=\"!!alert.showConfirmButton && !!alert.loader\" type=\"button\" (tap)=\"cancel()\" > <vcl-icogram *vclButtonStateContent=\"['enabled','disabled']\" [appIcon]=\"alert.cancelButtonAppIcon\" [prepIcon]=\"alert.cancelButtonPrepIcon\" [label]=\"alert.cancelButtonLabel\"> </vcl-icogram> <vcl-icogram *vclButtonStateContent=\"'busy'\" prepIcon=\"fa:refresh fa-spin\" [label]=\"alert.cancelButtonLabel\"> </vcl-icogram> </button> </div> <div *ngIf=\"!alert.showCancelButton && !alert.showConfirmButton && !!alert.loader\"> <div class=\"vclBusyIndicator\" role=\"status\"> <i class=\"vclBusy-busyIndCircular\"></i> </div> </div> </div> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[tabindex]': '0',
            '[style.outline]': '"none"'
        }
    }),
    __metadata$45("design:paramtypes", [ElementRef, LayerRef, LayerService, ChangeDetectorRef])
], AlertComponent);

var __decorate$78 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$46 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO: support text, password, textarea, select, radio, checkbox file.
var AlertInputComponent = (function () {
    function AlertInputComponent() {
        this.alert = {};
        this.valueChange = new EventEmitter();
        this.inputValue = '';
    }
    AlertInputComponent.prototype.ngOnInit = function () {
        if (this.control === 'input' && typeof this.alert.inputValue === 'string') {
            this.inputValue = this.alert.inputValue;
        }
    };
    AlertInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.input && this.input.nativeElement && this.input.nativeElement.focus) {
            setTimeout(function () { return _this.input.nativeElement.focus(); }, 1);
        }
    };
    Object.defineProperty(AlertInputComponent.prototype, "control", {
        get: function () {
            switch (this.alert.input) {
                case AlertInput.Text: return 'input';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertInputComponent.prototype, "placeholder", {
        get: function () {
            return this.alert.inputPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    AlertInputComponent.prototype.inputValueChange = function (value) {
        this.valueChange.emit(value);
    };
    return AlertInputComponent;
}());
__decorate$78([
    ViewChild('input'),
    __metadata$46("design:type", ElementRef)
], AlertInputComponent.prototype, "input", void 0);
__decorate$78([
    Input(),
    __metadata$46("design:type", Object)
], AlertInputComponent.prototype, "alert", void 0);
__decorate$78([
    Output(),
    __metadata$46("design:type", Object)
], AlertInputComponent.prototype, "valueChange", void 0);
AlertInputComponent = __decorate$78([
    Component({
        template: "<input #input *ngIf=\"control==='input'\" class=\"vclInput\" [placeholder]=\"placeholder\" [ngModel]=\"inputValue\" (ngModelChange)=\"inputValueChange($event)\" autofocus> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'alert-input'
    })
], AlertInputComponent);

var __decorate$79 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$47 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlertService = (function () {
    function AlertService(ls) {
        this.ls = ls;
        this.noop = function () { };
    }
    AlertService.prototype.alert = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text }, opts);
    };
    AlertService.prototype.info = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Info }, opts);
    };
    AlertService.prototype.success = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Success }, opts);
    };
    AlertService.prototype.warning = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Warning }, opts);
    };
    AlertService.prototype.error = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Error }, opts);
    };
    AlertService.prototype.question = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Question, showCancelButton: true }, opts);
    };
    AlertService.prototype.open = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        return this.create.apply(this, opts).open();
    };
    AlertService.prototype.create = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var alert = Object.assign.apply(Object, [{}, ALERT_DEFAULTS].concat(opts));
        return this.ls.create(AlertComponent, {
            offClick: function (layer) {
                dismiss(layer, 'offClick');
            },
            modal: true,
            transparent: true,
            attrs: { alert: alert }
        });
    };
    return AlertService;
}());
AlertService = __decorate$79([
    Injectable(),
    __metadata$47("design:paramtypes", [LayerService])
], AlertService);

var __decorate$76 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLAlertModule = (function () {
    function VCLAlertModule() {
    }
    return VCLAlertModule;
}());
VCLAlertModule = __decorate$76([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            VCLButtonModule,
            VCLInputModule,
            VCLIcogramModule,
            VCLLayerModule.forChild({ layers: [] })
        ],
        exports: [],
        declarations: [AlertComponent, AlertInputComponent],
        entryComponents: [AlertComponent],
        providers: [AlertService],
    })
], VCLAlertModule);

var __decorate$81 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$48 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BusyIndicatorComponent = (function () {
    function BusyIndicatorComponent() {
        this.type = 'circular';
    }
    Object.defineProperty(BusyIndicatorComponent.prototype, "indicatorClass", {
        get: function () {
            return this.type === 'straight' ? 'vclBusy-busyIndStraight' : 'vclBusy-busyIndCircular';
        },
        enumerable: true,
        configurable: true
    });
    return BusyIndicatorComponent;
}());
__decorate$81([
    Input(),
    __metadata$48("design:type", String)
], BusyIndicatorComponent.prototype, "type", void 0);
BusyIndicatorComponent = __decorate$81([
    Component({
        selector: 'vcl-busy-indicator',
        template: "<div class=\"vclLayoutVertical vclLayoutCenterJustified\"> <div class=\"vclBusyIndicator\" role=\"status\"> <i [ngClass]=\"indicatorClass\"></i> <ng-content></ng-content> </div> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BusyIndicatorComponent);

var __decorate$82 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$49 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BusyComponent = (function () {
    function BusyComponent() {
        this.busy = false;
    }
    return BusyComponent;
}());
__decorate$82([
    Input('vclBusy'),
    HostBinding('class.vclLoadingLayerContainer'),
    __metadata$49("design:type", Object)
], BusyComponent.prototype, "busy", void 0);
__decorate$82([
    Input(),
    __metadata$49("design:type", String)
], BusyComponent.prototype, "busyIndicatorType", void 0);
__decorate$82([
    Input(),
    __metadata$49("design:type", String)
], BusyComponent.prototype, "busyLabel", void 0);
BusyComponent = __decorate$82([
    Component({
        selector: '[vclBusy]',
        template: "<ng-content></ng-content> <div *ngIf=\"busy\" tabindex=\"-1\" class=\"vclLoadingLayer\"> <div class=\"vclLoadingLayerContent\"> <vcl-busy-indicator [type]=\"busyIndicatorType\"> <span *ngIf=\"busyLabel\">{{busyLabel}}</span> </vcl-busy-indicator> </div> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BusyComponent);

var __decorate$80 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLBusyIndicatorModule = (function () {
    function VCLBusyIndicatorModule() {
    }
    return VCLBusyIndicatorModule;
}());
VCLBusyIndicatorModule = __decorate$80([
    NgModule({
        imports: [CommonModule],
        exports: [BusyComponent, BusyIndicatorComponent],
        declarations: [BusyComponent, BusyIndicatorComponent]
    })
], VCLBusyIndicatorModule);

var __decorate$84 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$50 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationComponent = (function () {
    function NotificationComponent() {
        this.notifications = [];
    }
    return NotificationComponent;
}());
__decorate$84([
    Input(),
    __metadata$50("design:type", Object)
], NotificationComponent.prototype, "notifications", void 0);
NotificationComponent = __decorate$84([
    Component({
        template: "<div *ngFor=\"let notification of notifications\"  (mouseenter)=\"notification.mouseEnter()\"  (mouseleave)=\"notification.mouseLeave()\"  class=\"vclNotification vclLayoutHorizontal vclLayoutCenter\"  [ngClass]=\"notification.layerClass\"  [style.color]=\"notification.textColor\" [style.background-color]=\"notification.backgroundColor\" [@notificationState]=\"notification.state\"  > <div class=\"vclNotificationIconContainer\"> <span *ngIf=\"notification.iconClass\" class=\"vclIcon vclNotificationIcon\" [ngClass]=\"notification.iconClass\"></span> </div> <div class=\"vclNotificationContent vclLayoutFlex\"> <div *ngIf=\"notification.text && !notification.html\">{{notification.text}}</div> <div *ngIf=\"notification.text && notification.html\" [innerHtml]=\"notification.text\"></div> </div> <button vcl-button *ngIf=\"notification.showCloseButton\" (tap)=\"notification.close()\" class=\"vclSquare vclTransparent vclLayoutSelfStart\" prepIcon=\"fa:times\" title=\"Close\"></button> </div> ",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        styles: [
            "\n     .vclLayerNotificationTopRight { left: auto; bottom: auto; top: 1em; right: 1em; }\n     .vclLayerNotificationTop { left: 0; bottom: auto; top: 1em; right: 0; }\n     .vclLayerNotificationTopLeft { left: 1em; bottom: auto; top: 1em; right: auto; }\n     .vclLayerNotificationBottomRight { left: auto; bottom: 1em; top: auto; right: 1em; }\n     .vclLayerNotificationBottom { left: 0; bottom: 1em; top: auto; right: 0; }\n     .vclLayerNotificationBottomLeft { left: 1em; bottom: 1em; top: auto; right: auto; }\n    "
        ],
        animations: [
            trigger('notificationState', [
                state('visible', style({ opacity: 0.91 })),
                state('hovered', style({ opacity: 1.0 })),
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate('200ms ease-in')
                ]),
                transition(':leave', [
                    animate('200ms ease-out', style({ opacity: 0 }))
                ]),
                transition('visible <=> hovered', animate('300ms'))
            ]),
        ],
        host: {
            '[@notificationState]': 'true'
        },
    })
], NotificationComponent);

var __extends$14 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$85 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NotificationLayer = (function (_super) {
    __extends$14(NotificationLayer, _super);
    function NotificationLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.notifications = [];
        return _this;
    }
    NotificationLayer.prototype.add = function (notification) {
        var _this = this;
        notification.subscribe(function () {
            _this.remove(notification);
        });
        this.notifications = this.reverse ? [notification].concat(this.notifications) : this.notifications.concat([notification]);
        this.open({ notifications: this.notifications });
        return notification;
    };
    NotificationLayer.prototype.remove = function (notification) {
        this.notifications = this.notifications.filter(function (g) { return g !== notification; });
        if (this.notifications.length === 0) {
            this.close();
        }
        else {
            this.open({ notifications: this.notifications });
        }
    };
    return NotificationLayer;
}(LayerRef));
function noop() { }
var NotificationLayerTopRight = (function (_super) {
    __extends$14(NotificationLayerTopRight, _super);
    function NotificationLayerTopRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerTopRight;
}(NotificationLayer));
NotificationLayerTopRight = __decorate$85([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationTopRight', offClick: noop })
], NotificationLayerTopRight);
var NotificationLayerTop = (function (_super) {
    __extends$14(NotificationLayerTop, _super);
    function NotificationLayerTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerTop;
}(NotificationLayer));
NotificationLayerTop = __decorate$85([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationTop', offClick: noop })
], NotificationLayerTop);
var NotificationLayerTopLeft = (function (_super) {
    __extends$14(NotificationLayerTopLeft, _super);
    function NotificationLayerTopLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerTopLeft;
}(NotificationLayer));
NotificationLayerTopLeft = __decorate$85([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationTopLeft', offClick: noop })
], NotificationLayerTopLeft);
var NotificationLayerBottomRight = (function (_super) {
    __extends$14(NotificationLayerBottomRight, _super);
    function NotificationLayerBottomRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerBottomRight;
}(NotificationLayer));
NotificationLayerBottomRight = __decorate$85([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationBottomRight', offClick: noop })
], NotificationLayerBottomRight);
var NotificationLayerBottom = (function (_super) {
    __extends$14(NotificationLayerBottom, _super);
    function NotificationLayerBottom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerBottom;
}(NotificationLayer));
NotificationLayerBottom = __decorate$85([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationBottom', offClick: noop })
], NotificationLayerBottom);
var NotificationLayerBottomLeft = (function (_super) {
    __extends$14(NotificationLayerBottomLeft, _super);
    function NotificationLayerBottomLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotificationLayerBottomLeft;
}(NotificationLayer));
NotificationLayerBottomLeft = __decorate$85([
    Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationBottomLeft', offClick: noop })
], NotificationLayerBottomLeft);

var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["None"] = 0] = "None";
    NotificationType[NotificationType["Info"] = 1] = "Info";
    NotificationType[NotificationType["Success"] = 2] = "Success";
    NotificationType[NotificationType["Warning"] = 3] = "Warning";
    NotificationType[NotificationType["Error"] = 4] = "Error";
})(NotificationType || (NotificationType = {}));
var NotificationPosition;
(function (NotificationPosition) {
    NotificationPosition[NotificationPosition["TopRight"] = 0] = "TopRight";
    NotificationPosition[NotificationPosition["Top"] = 1] = "Top";
    NotificationPosition[NotificationPosition["TopLeft"] = 2] = "TopLeft";
    NotificationPosition[NotificationPosition["BottomRight"] = 3] = "BottomRight";
    NotificationPosition[NotificationPosition["Bottom"] = 4] = "Bottom";
    NotificationPosition[NotificationPosition["BottomLeft"] = 5] = "BottomLeft";
})(NotificationPosition || (NotificationPosition = {}));
var NOTIFICATION_DEFAULTS = {
    html: false,
    type: NotificationType.None,
    position: NotificationPosition.TopRight,
    showCloseButton: true
};

var TYPE_CLASS_MAP$1 = (_b$1 = {},
    _b$1[NotificationType.None] = {
        notificationClass: '',
        iconClass: ''
    },
    _b$1[NotificationType.Info] = {
        notificationClass: 'vclInfo',
        iconClass: 'fa fa-info-circle'
    },
    _b$1[NotificationType.Success] = {
        notificationClass: 'vclSuccess',
        iconClass: 'fa fa-check-circle'
    },
    _b$1[NotificationType.Warning] = {
        notificationClass: 'vclWarning',
        iconClass: 'fa fa-warning'
    },
    _b$1[NotificationType.Error] = {
        notificationClass: 'vclError',
        iconClass: 'fa fa-exclamation-circle'
    },
    _b$1);
var _b$1;

var __extends$15 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Notification = (function (_super) {
    __extends$15(Notification, _super);
    function Notification(opts) {
        var _this = _super.call(this) || this;
        _this.opts = opts;
        _this.closeSubject = new Subject();
        _this.state = 'visible';
        var timeout = _this.calculatedTimeout;
        var timeout$ = typeof timeout === 'number' ?
            Observable.interval(timeout).skipWhile(function () { return _this.state === 'hovered'; }) :
            Observable.never();
        _this.source = Observable.merge(_this.closeSubject, timeout$).first();
        return _this;
    }
    Notification.prototype.close = function () {
        this.closeSubject.next();
    };
    Notification.prototype.mouseEnter = function () {
        this.state = 'hovered';
    };
    Notification.prototype.mouseLeave = function () {
        this.state = 'active';
    };
    Object.defineProperty(Notification.prototype, "text", {
        get: function () {
            return this.opts.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "html", {
        get: function () {
            return this.opts.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "showCloseButton", {
        get: function () {
            return this.opts.showCloseButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "backgroundColor", {
        get: function () {
            return this.opts.backgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "textColor", {
        get: function () {
            return this.opts.textColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "layerClass", {
        get: function () {
            return TYPE_CLASS_MAP$1[this.opts.type || NotificationType.None].notificationClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "iconClass", {
        get: function () {
            return TYPE_CLASS_MAP$1[this.opts.type || NotificationType.None].iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "calculatedTimeout", {
        get: function () {
            if (typeof this.opts.timeout === 'number') {
                return this.opts.timeout;
            }
            else if (typeof this.opts.timeout === 'boolean' && !this.opts.timeout) {
                return null;
            }
            else if (!this.opts.html && typeof this.opts.text === 'string') {
                // avg reading speed per min (WPM): 19
                // min 4 secs
                var wordCnt = this.opts.text.split(/\s+/).length;
                return Math.min((wordCnt / 19) * 60 * 1000, 4000);
            }
            else if (this.opts.html) {
                return 5000;
            }
            else {
                return 4000;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Notification;
}(Observable));

var __decorate$86 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$51 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationService = (function () {
    function NotificationService(notificationLayerTopRightRef, notificationLayerBottomRightRef, notificationLayerBottomRef, notificationLayerBottomLeftRef, notificationLayerTopLeftRef, notificationLayerTopRef) {
        this.notificationLayerTopRightRef = notificationLayerTopRightRef;
        this.notificationLayerBottomRightRef = notificationLayerBottomRightRef;
        this.notificationLayerBottomRef = notificationLayerBottomRef;
        this.notificationLayerBottomLeftRef = notificationLayerBottomLeftRef;
        this.notificationLayerTopLeftRef = notificationLayerTopLeftRef;
        this.notificationLayerTopRef = notificationLayerTopRef;
    }
    NotificationService.prototype.show = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text }, opts);
    };
    NotificationService.prototype.info = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: NotificationType.Info }, opts);
    };
    NotificationService.prototype.success = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: NotificationType.Success }, opts);
    };
    NotificationService.prototype.warning = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: NotificationType.Warning }, opts);
    };
    NotificationService.prototype.error = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: NotificationType.Error }, opts);
    };
    NotificationService.prototype.queue = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var notificationOpts = Object.assign.apply(Object, [{}, NOTIFICATION_DEFAULTS].concat(opts));
        var notification = new Notification(notificationOpts);
        if (notificationOpts.position === NotificationPosition.TopRight) {
            this.notificationLayerTopRightRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.BottomRight) {
            this.notificationLayerBottomRightRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.Bottom) {
            this.notificationLayerBottomRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.BottomLeft) {
            this.notificationLayerBottomLeftRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.TopLeft) {
            this.notificationLayerTopLeftRef.add(notification);
        }
        else if (notificationOpts.position === NotificationPosition.Top) {
            this.notificationLayerTopRef.add(notification);
        }
        else {
            this.notificationLayerTopRightRef.add(notification);
        }
        return notification;
    };
    return NotificationService;
}());
NotificationService = __decorate$86([
    Injectable(),
    __metadata$51("design:paramtypes", [NotificationLayerTopRight,
        NotificationLayerBottomRight,
        NotificationLayerBottom,
        NotificationLayerBottomLeft,
        NotificationLayerTopLeft,
        NotificationLayerTop])
], NotificationService);

var __decorate$83 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLNotificationModule = (function () {
    function VCLNotificationModule() {
    }
    return VCLNotificationModule;
}());
VCLNotificationModule = __decorate$83([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            VCLButtonModule,
            VCLLayerModule.forChild({ layers: [
                    NotificationLayerTopRight,
                    NotificationLayerBottomRight,
                    NotificationLayerBottom,
                    NotificationLayerBottomLeft,
                    NotificationLayerTopLeft,
                    NotificationLayerTop
                ] })
        ],
        exports: [],
        declarations: [NotificationComponent],
        entryComponents: [NotificationComponent],
        providers: [
            NotificationService,
        ],
    })
], VCLNotificationModule);

var __decorate$89 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TooltipService = (function () {
    function TooltipService() {
        // padding between tooltip and target obj.
        this.offsetCorrection = 10;
    }
    TooltipService.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var tooltipAlignment = positionStr;
        // set tooltip at middle of host element for now
        var alignmentCorrection = 'center';
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (tooltipAlignment) {
            case "right":
                targetElPos = {
                    Top: shiftHeight[alignmentCorrection](),
                    Left: shiftWidth[tooltipAlignment]() + this.offsetCorrection
                };
                break;
            case "left":
                targetElPos = {
                    Top: shiftHeight[alignmentCorrection](),
                    Left: hostElPos.left - targetElWidth - this.offsetCorrection
                };
                break;
            case "bottom":
                targetElPos = {
                    Top: shiftHeight[tooltipAlignment]() + this.offsetCorrection,
                    Left: shiftWidth[alignmentCorrection]()
                };
                break;
            default:
                targetElPos = {
                    Top: hostElPos.top - targetElHeight - this.offsetCorrection,
                    Left: shiftWidth[alignmentCorrection]()
                };
                break;
        }
        return targetElPos;
    };
    TooltipService.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    TooltipService.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    TooltipService.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle)
            return nativeEl.currentStyle[cssProp];
        if (window.getComputedStyle)
            return window.getComputedStyle(nativeEl)[cssProp];
        return nativeEl.style[cssProp];
    };
    TooltipService.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, "position") || "static") === "static";
    };
    TooltipService.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    return TooltipService;
}());
TooltipService = __decorate$89([
    Injectable()
], TooltipService);

var __decorate$88 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$52 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$8 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TooltipComponent = (function () {
    function TooltipComponent(element, document, renderer, tooltipService) {
        this.element = element;
        this.document = document;
        this.renderer = renderer;
        this.tooltipService = tooltipService;
        this.placement = "top";
        this.animationState = 'none';
        // Initial position should out of screen
        this.tooltipPlacement = { Top: -1000, Left: -1000 };
        this.tooltipPosition = 'vclTooltip vclArrowPointerTop';
        // true if initialized by directive
        this.showOnInit = false;
    }
    TooltipComponent.prototype.ngOnChanges = function (changes) {
        if (changes.placement || changes.content) {
            this.ShowTooltip()();
        }
    };
    TooltipComponent.prototype.ngAfterViewInit = function () {
        var context = this;
        // behavior being handled by directive
        if (context.showOnInit) {
            setTimeout(function () {
                context.ShowTooltip()();
            });
        }
        else {
            context.animationState = 'none';
            context.renderer.listen(context.hostElement, 'mouseenter', context.ShowTooltip(context));
            context.renderer.listen(context.hostElement, 'focusin', context.ShowTooltip(context));
            context.renderer.listen(context.hostElement, 'focusout', function () { context.animationState = 'hidden'; });
            context.renderer.listen(context.hostElement, 'mouseleave', function () { context.animationState = 'hidden'; });
        }
    };
    TooltipComponent.prototype.ShowTooltip = function (context) {
        if (context === void 0) { context = this; }
        return function () {
            if (context.hostElement) {
                var tooltipOffset = context.tooltipService.positionElements(context.hostElement, context.element.nativeElement.children[0].children[0], context.placement);
                context.tooltipPlacement = {
                    Top: tooltipOffset.Top,
                    Left: tooltipOffset.Left
                };
                context.animationState = 'shown';
                context.tooltipPosition = context.TooltipPosition();
                context.document.querySelector('body').appendChild(context.element.nativeElement);
                return true;
            }
            else {
                console.error('Host element not specified');
                return false;
            }
        };
    };
    TooltipComponent.prototype.TooltipPosition = function () {
        switch (this.placement) {
            case 'right':
                {
                    return 'vclTooltip vclArrowPointerLeft';
                }
            case 'left':
                {
                    return 'vclTooltip vclArrowPointerRight';
                }
            case 'bottom':
                {
                    return 'vclTooltip vclArrowPointerTop';
                }
            default:
                {
                    return 'vclTooltip vclArrowPointerBottom';
                }
        }
    };
    TooltipComponent.prototype.ngOnDestroy = function () {
        if (!this.showOnInit) {
            this.element.nativeElement.parentNode.removeChild(this.element.nativeElement);
        }
    };
    return TooltipComponent;
}());
__decorate$88([
    Input(),
    __metadata$52("design:type", String)
], TooltipComponent.prototype, "content", void 0);
__decorate$88([
    Input(),
    __metadata$52("design:type", String)
], TooltipComponent.prototype, "placement", void 0);
__decorate$88([
    Input(),
    __metadata$52("design:type", HTMLElement)
], TooltipComponent.prototype, "hostElement", void 0);
TooltipComponent = __decorate$88([
    Component({
        selector: 'vcl-tooltip',
        template: "<div [@enterAnimation]=\"animationState\" [style.left]=\"tooltipPlacement.Left + 'px'\" [style.top]=\"tooltipPlacement.Top + 'px'\" style=\"white-space:nowrap;\" role=\"tooltip\" [class]=\"tooltipPosition\"> <div class=\"vclTooltipContent\"> {{content}} <ng-content></ng-content> </div> <div class=\"vclArrowPointer\"></div> </div> ",
        host: {
            '[class.vclTooltip]': 'true',
        },
        styles: [":host{ top: 0; left: 0 }"],
        animations: [
            trigger('enterAnimation', [
                state('shown', style({ opacity: 1, 'z-index': 'initial' })),
                state('hidden', style({ opacity: 0, 'z-index': '-1' })),
                state('none', style({ opacity: 0 })),
                transition('hidden => shown', animate('0.2s')),
            ])
        ]
    }),
    __param$8(1, Inject(DOCUMENT)),
    __metadata$52("design:paramtypes", [ElementRef, Object, Renderer,
        TooltipService])
], TooltipComponent);

var __decorate$90 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$53 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$9 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TooltipDirective = (function () {
    function TooltipDirective(element, resolver, viewContainerRef, document) {
        this.element = element;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.content = '';
        this.position = "top";
    }
    TooltipDirective.prototype.ngOnChanges = function (changes) {
        if (this.tooltip) {
            if (changes.content) {
                this.tooltip.instance.content = this.content;
            }
            else if (changes.position) {
                this.tooltip.instance.placement = this.position;
            }
        }
    };
    TooltipDirective.prototype.onMouseEnter = function () {
        var factory = this.resolver.resolveComponentFactory(TooltipComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.content = this.content;
        this.tooltip.instance.placement = this.position;
        this.tooltip.instance.hostElement = this.element.nativeElement;
        this.tooltip.instance.showOnInit = true;
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (this.tooltip) {
            this.tooltip.destroy();
        }
    };
    return TooltipDirective;
}());
__decorate$90([
    Input(),
    __metadata$53("design:type", String)
], TooltipDirective.prototype, "content", void 0);
__decorate$90([
    Input(),
    __metadata$53("design:type", String)
], TooltipDirective.prototype, "position", void 0);
__decorate$90([
    HostListener('mouseenter'),
    HostListener('focusin'),
    __metadata$53("design:type", Function),
    __metadata$53("design:paramtypes", []),
    __metadata$53("design:returntype", void 0)
], TooltipDirective.prototype, "onMouseEnter", null);
__decorate$90([
    HostListener('focusout'),
    HostListener('mouseleave'),
    __metadata$53("design:type", Function),
    __metadata$53("design:paramtypes", []),
    __metadata$53("design:returntype", void 0)
], TooltipDirective.prototype, "ngOnDestroy", null);
TooltipDirective = __decorate$90([
    Directive({ selector: '[vcl-tooltip]' }),
    __param$9(3, Inject(DOCUMENT)),
    __metadata$53("design:paramtypes", [ElementRef,
        ComponentFactoryResolver,
        ViewContainerRef, Object])
], TooltipDirective);

var __decorate$87 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTooltipModule = (function () {
    function VCLTooltipModule() {
    }
    return VCLTooltipModule;
}());
VCLTooltipModule = __decorate$87([
    NgModule({
        imports: [CommonModule, L10nModule],
        exports: [TooltipComponent, TooltipDirective],
        declarations: [TooltipComponent, TooltipDirective],
        providers: [TooltipService],
        entryComponents: [TooltipComponent]
    })
], VCLTooltipModule);

var __decorate$93 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$55 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TableService = (function () {
    function TableService(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    TableService.prototype.ClassToggle = function (className, add, targetEl) {
        if (this.el.nativeElement.localName == targetEl || !targetEl) {
            if (add === '' || add) {
                // For table tag vclTable class is required to enable vcl table behavior
                if (targetEl == 'table' && className != 'vclTable') {
                    this.addClass('vclTable');
                }
                return this.addClass(className);
            }
            else {
                return this.removeClass(className);
            }
        }
        else {
            console.error(className + " can only be used on " + targetEl + " tag!");
            return false;
        }
    };
    TableService.prototype.addClass = function (className) {
        this.renderer.addClass(this.el.nativeElement, className);
        return true;
    };
    TableService.prototype.removeClass = function (className) {
        this.renderer.removeClass(this.el.nativeElement, className);
        return false;
    };
    return TableService;
}());
TableService = __decorate$93([
    Injectable(),
    __metadata$55("design:paramtypes", [Renderer2, ElementRef])
], TableService);

/*
Enables VCL table behavior
*/
var __decorate$92 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$54 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var VclTableDirective = (function () {
    function VclTableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    VclTableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.selectable = this.tableService.ClassToggle('vclTable', this.selectable, 'table');
        }
    };
    return VclTableDirective;
}());
__decorate$92([
    Input('selectable'),
    __metadata$54("design:type", Object)
], VclTableDirective.prototype, "selectable", void 0);
VclTableDirective = __decorate$92([
    Directive({
        selector: '[vcl-table]',
    }),
    __metadata$54("design:paramtypes", [Renderer2, ElementRef])
], VclTableDirective);

/*
Column width

The column width can be defined in the table header using one of
the layout spans vclSpan-5p - vclSpan-100p from the corresponding module.
*/
var __decorate$94 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$56 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SpanDirective = (function () {
    function SpanDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    SpanDirective.prototype.ngOnChanges = function (changes) {
        if (changes.width) {
            this.ngAfterContentInit();
        }
    };
    SpanDirective.prototype.ngAfterContentInit = function () {
        // Apply class only on header
        if (this.el.nativeElement.localName == "th") {
            var vclSpan = "vclSpan-" + this.width + "p";
            this.renderer.addClass(this.el.nativeElement, vclSpan);
        }
        else {
            console.error('Column width can be set only for header tag!');
        }
    };
    return SpanDirective;
}());
__decorate$94([
    Input('span'),
    __metadata$56("design:type", Number)
], SpanDirective.prototype, "width", void 0);
SpanDirective = __decorate$94([
    Directive({
        selector: '[span]',
    }),
    __metadata$56("design:paramtypes", [Renderer2, ElementRef])
], SpanDirective);

/*
Cell and column highlighting

Single cells and columns can be highlighted by using the
vclCellHighlight class on each tdin the respective column or on single cells only.
*/
var __decorate$95 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$57 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HighlightDirective = (function () {
    function HighlightDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    HighlightDirective.prototype.ngOnChanges = function (changes) {
        if (changes.hightlight) {
            this.hightlight = this.tableService.ClassToggle('vclCellHighlight', this.hightlight, 'td');
        }
    };
    return HighlightDirective;
}());
__decorate$95([
    Input('hightlight'),
    __metadata$57("design:type", Object)
], HighlightDirective.prototype, "hightlight", void 0);
HighlightDirective = __decorate$95([
    Directive({
        selector: '[hightlight]',
    }),
    __metadata$57("design:paramtypes", [Renderer2, ElementRef])
], HighlightDirective);

var __decorate$97 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$59 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$10 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SortIconComponent = (function () {
    function SortIconComponent(document, element) {
        this.document = document;
        this.element = element;
        this.faIcon = 'fa-sort';
    }
    SortIconComponent.prototype.ChangeSortOrder = function (order) {
        switch (order) {
            case 1: {
                this.faIcon = 'fa-sort-up';
                break;
            }
            case -1: {
                this.faIcon = 'fa-sort-down';
                break;
            }
            default: {
                this.faIcon = 'fa-sort';
                break;
            }
        }
    };
    return SortIconComponent;
}());
__decorate$97([
    Input(),
    __metadata$59("design:type", Object)
], SortIconComponent.prototype, "sort", void 0);
SortIconComponent = __decorate$97([
    Component({
        selector: 'sort-icon',
        template: "<div class=\"vclFloatRight vclIcon fa {{faIcon}}\"></div>"
    }),
    __param$10(0, Inject(DOCUMENT)),
    __metadata$59("design:paramtypes", [Object, ElementRef])
], SortIconComponent);

/*
Column sortability

Sortable columns are defined with the vclSortableCol class on the respective ths.
This class gives the whole header a pointer cursor on hover to indicate an action.
The application must register an appropriate event handler to change the sort order
for the whole th accordingly. Also an icon which indicates sortability should be
used as shown in the second column. The currently active sort order is indicated
by a respective icon and the classes vclSortAsc or vclSortDesc on the th element.
*/
var __decorate$96 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$58 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SortDirective = (function () {
    function SortDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.change = new EventEmitter();
        this.isHeader = false;
        this.tableService = new TableService(renderer, el);
        this.isHeader =
            this.tableService.ClassToggle('vclSortableCol', true, 'th') &&
                this.tableService.ClassToggle('vclClearFix', true, 'th');
    }
    SortDirective.prototype.OnChangeOrder = function () {
        if (this.isHeader) {
            this.order = this.order == 1 ? -1 : 1;
            this.change.emit(this.order);
            switch (this.order) {
                case 1: {
                    this.renderer.removeClass(this.el.nativeElement, 'vclClearFix');
                    this.renderer.removeClass(this.el.nativeElement, 'vclSortDesc');
                    this.renderer.addClass(this.el.nativeElement, 'vclSortAsc');
                    if (this.sortIconComponent) {
                        this.sortIconComponent.ChangeSortOrder(1);
                    }
                    break;
                }
                case -1: {
                    this.renderer.removeClass(this.el.nativeElement, 'vclSortAsc');
                    this.renderer.addClass(this.el.nativeElement, 'vclSortDesc');
                    if (this.sortIconComponent) {
                        this.sortIconComponent.ChangeSortOrder(-1);
                    }
                    break;
                }
            }
        }
    };
    return SortDirective;
}());
__decorate$96([
    ContentChild(SortIconComponent),
    __metadata$58("design:type", SortIconComponent)
], SortDirective.prototype, "sortIconComponent", void 0);
__decorate$96([
    Output(),
    __metadata$58("design:type", EventEmitter)
], SortDirective.prototype, "change", void 0);
__decorate$96([
    HostListener('click'),
    __metadata$58("design:type", Function),
    __metadata$58("design:paramtypes", []),
    __metadata$58("design:returntype", void 0)
], SortDirective.prototype, "OnChangeOrder", null);
SortDirective = __decorate$96([
    Directive({
        selector: '[sort]',
        exportAs: 'sort-directive'
    }),
    __metadata$58("design:paramtypes", [Renderer2,
        ElementRef])
], SortDirective);

/*
Row and cell selection

Individual cells and thus rows can be visually selected using the vclSelected class.
*/
var __decorate$98 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$60 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectDirective = (function () {
    function SelectDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    SelectDirective.prototype.ngOnChanges = function (changes) {
        if (changes.selected) {
            this.selected = this.tableService.ClassToggle('vclSelected', this.selected, 'tr');
        }
    };
    return SelectDirective;
}());
__decorate$98([
    Input('selected'),
    __metadata$60("design:type", Object)
], SelectDirective.prototype, "selected", void 0);
SelectDirective = __decorate$98([
    Directive({
        selector: '[selected]'
    }),
    __metadata$60("design:paramtypes", [Renderer2, ElementRef])
], SelectDirective);

/*
Row and cell selectability

Rows can be styled to suggest their selectability (single or multiple) using the vclRowSelectability modifier which makes rows show a pointer cursor on hover.
*/
var __decorate$99 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$61 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectableDirective = (function () {
    function SelectableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    SelectableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.selectable = this.tableService.ClassToggle('vclRowSelectability', this.selectable, 'tr');
        }
    };
    return SelectableDirective;
}());
__decorate$99([
    Input('selectable'),
    __metadata$61("design:type", Object)
], SelectableDirective.prototype, "selectable", void 0);
SelectableDirective = __decorate$99([
    Directive({
        selector: '[selectable]',
    }),
    __metadata$61("design:paramtypes", [Renderer2, ElementRef])
], SelectableDirective);

/*
Row hover highlighting

If a table row should be highlighted on hover, the vclRowHoverHighlight
modifier class can be used. This hovering's intention is just for the
sake of readability and should not indicate an action.
*/
var __decorate$100 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$62 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HoverDirective = (function () {
    function HoverDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        if (this.el.nativeElement.localName == "table") {
            renderer.addClass(el.nativeElement, 'vclRowHoverHighlight');
        }
        else {
            console.error('[hover] should be used for table tag only!');
        }
    }
    return HoverDirective;
}());
HoverDirective = __decorate$100([
    Directive({
        selector: '[hover]',
    }),
    __metadata$62("design:paramtypes", [Renderer2, ElementRef])
], HoverDirective);

/*
Disabled rows

Rows can be visually disabled with the vclDisabled modifier.
*/
var __decorate$101 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$63 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DisableDirective = (function () {
    function DisableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    DisableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.disabled) {
            this.disabled = this.tableService.ClassToggle('vclDisabled', this.disabled, 'tr');
        }
    };
    return DisableDirective;
}());
__decorate$101([
    Input('disabled'),
    __metadata$63("design:type", Object)
], DisableDirective.prototype, "disabled", void 0);
DisableDirective = __decorate$101([
    Directive({
        selector: '[disabled]'
    }),
    __metadata$63("design:paramtypes", [Renderer2, ElementRef])
], DisableDirective);

/*
Alternating row color

Optionally an alternating row color can be defined by using the modifier vclAltRowColor.
*/
var __decorate$102 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$64 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AltRowColorDirective = (function () {
    function AltRowColorDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AltRowColorDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.alt = this.tableService.ClassToggle('vclAltRowColor', this.alt, 'table');
        }
    };
    return AltRowColorDirective;
}());
__decorate$102([
    Input('altrow'),
    __metadata$64("design:type", Object)
], AltRowColorDirective.prototype, "alt", void 0);
AltRowColorDirective = __decorate$102([
    Directive({
        selector: '[altrow]',
    }),
    __metadata$64("design:paramtypes", [Renderer2, ElementRef])
], AltRowColorDirective);

/*
Border configuration

The cell borders are removed with vclNoBorder. The border style can be changed from solid to dotted by using the vclDottedBorder modifier.
*/
var __decorate$103 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$65 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NoBorderDirective = (function () {
    function NoBorderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    NoBorderDirective.prototype.ngOnChanges = function (changes) {
        if (changes.noborder) {
            this.noborder = this.tableService.ClassToggle('vclNoBorder', this.noborder, 'table');
        }
    };
    return NoBorderDirective;
}());
__decorate$103([
    Input('noborder'),
    __metadata$65("design:type", Object)
], NoBorderDirective.prototype, "noborder", void 0);
NoBorderDirective = __decorate$103([
    Directive({
        selector: '[noborder]',
    }),
    __metadata$65("design:paramtypes", [Renderer2, ElementRef])
], NoBorderDirective);

/*
Border configuration

The cell borders are removed with vclNoBorder. The border style can be changed from solid to dotted by using the vclDottedBorder modifier.
*/
var __decorate$104 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$66 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DottedBorderDirective = (function () {
    function DottedBorderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    DottedBorderDirective.prototype.ngOnChanges = function (changes) {
        if (changes.dottedborder) {
            this.dottedborder = this.tableService.ClassToggle('vclDottedBorder', this.dottedborder, 'table');
        }
    };
    return DottedBorderDirective;
}());
__decorate$104([
    Input('dottedborder'),
    __metadata$66("design:type", Object)
], DottedBorderDirective.prototype, "dottedborder", void 0);
DottedBorderDirective = __decorate$104([
    Directive({
        selector: '[dottedborder]',
    }),
    __metadata$66("design:paramtypes", [Renderer2, ElementRef])
], DottedBorderDirective);

/*
Padding style

If the default cell padding is too extensive, vclCondensed makes it more compact.
*/
var __decorate$105 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$67 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CondensedDirective = (function () {
    function CondensedDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    CondensedDirective.prototype.ngOnChanges = function (changes) {
        if (changes.condensed) {
            this.condensed = this.tableService.ClassToggle('vclCondensed', this.condensed, 'table');
        }
    };
    return CondensedDirective;
}());
__decorate$105([
    Input('condensed'),
    __metadata$67("design:type", Object)
], CondensedDirective.prototype, "condensed", void 0);
CondensedDirective = __decorate$105([
    Directive({
        selector: '[condensed]',
    }),
    __metadata$67("design:paramtypes", [Renderer2, ElementRef])
], CondensedDirective);

/*
Borders style

By default, only horizontal borders are shown. For vertical borders, use the vclVerticalBorder modifier.
*/
var __decorate$106 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$68 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var VerticalBorderDirective = (function () {
    function VerticalBorderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    VerticalBorderDirective.prototype.ngOnChanges = function (changes) {
        if (changes.border) {
            this.border = this.tableService.ClassToggle('vclVerticalBorder', this.border, 'table');
        }
    };
    return VerticalBorderDirective;
}());
__decorate$106([
    Input('vertical-border'),
    __metadata$68("design:type", Object)
], VerticalBorderDirective.prototype, "border", void 0);
VerticalBorderDirective = __decorate$106([
    Directive({
        selector: '[vertical-border]',
    }),
    __metadata$68("design:paramtypes", [Renderer2, ElementRef])
], VerticalBorderDirective);

/*
Text alignment

Left alignment is default, for centered text use class vclAlignCentered and for right aligned text vclAlignRight on tds.
*/
var __decorate$107 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$69 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlignmentCenterDirective = (function () {
    function AlignmentCenterDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentCenterDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclAlignCentered', this.align, 'td');
        }
    };
    return AlignmentCenterDirective;
}());
__decorate$107([
    Input('align-center'),
    __metadata$69("design:type", Object)
], AlignmentCenterDirective.prototype, "align", void 0);
AlignmentCenterDirective = __decorate$107([
    Directive({
        selector: '[align-center]',
    }),
    __metadata$69("design:paramtypes", [Renderer2, ElementRef])
], AlignmentCenterDirective);

/*
Text alignment

Left alignment is default, for centered text use class vclAlignCentered and for right aligned text vclAlignRight on tds.
*/
var __decorate$108 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$70 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlignmentRightDirective = (function () {
    function AlignmentRightDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentRightDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclAlignRight', this.align, 'td');
        }
    };
    return AlignmentRightDirective;
}());
__decorate$108([
    Input('align-right'),
    __metadata$70("design:type", Object)
], AlignmentRightDirective.prototype, "align", void 0);
AlignmentRightDirective = __decorate$108([
    Directive({
        selector: '[align-right]',
    }),
    __metadata$70("design:paramtypes", [Renderer2, ElementRef])
], AlignmentRightDirective);

/*
Vertical alignment

Top alignment is default, for vertically centered content use class
vclVAlignMiddle and for bottom aligned content vclVAlignBottom on a table or tds.
*/
var __decorate$109 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$71 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlignmentbottomDirective = (function () {
    function AlignmentbottomDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentbottomDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclVAlignBottom', this.align, '');
        }
    };
    return AlignmentbottomDirective;
}());
__decorate$109([
    Input('align-bottom'),
    __metadata$71("design:type", Object)
], AlignmentbottomDirective.prototype, "align", void 0);
AlignmentbottomDirective = __decorate$109([
    Directive({
        selector: '[align-bottom]',
    }),
    __metadata$71("design:paramtypes", [Renderer2, ElementRef])
], AlignmentbottomDirective);

/*
Vertical alignment

Top alignment is default, for vertically centered content use class
vclVAlignMiddle and for bottom aligned content vclVAlignBottom on a table or tds.
*/
var __decorate$110 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$72 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlignmentMiddleDirective = (function () {
    function AlignmentMiddleDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentMiddleDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclVAlignMiddle', this.align, '');
        }
    };
    return AlignmentMiddleDirective;
}());
__decorate$110([
    Input('align-middle'),
    __metadata$72("design:type", Object)
], AlignmentMiddleDirective.prototype, "align", void 0);
AlignmentMiddleDirective = __decorate$110([
    Directive({
        selector: '[align-middle]',
    }),
    __metadata$72("design:paramtypes", [Renderer2, ElementRef])
], AlignmentMiddleDirective);

/*
Layout

The auto layout mode is used by default. For tables with toolbars however, the vclFixed class must be used to enable the fixed table layout mode.
*/
var __decorate$111 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$73 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayoutDirective = (function () {
    function LayoutDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    LayoutDirective.prototype.ngOnChanges = function (changes) {
        if (changes.fixed) {
            this.fixed = this.tableService.ClassToggle('vclFixed', this.fixed, 'table');
        }
    };
    return LayoutDirective;
}());
__decorate$111([
    Input('fixed'),
    __metadata$73("design:type", Object)
], LayoutDirective.prototype, "fixed", void 0);
LayoutDirective = __decorate$111([
    Directive({
        selector: '[fixed]',
    }),
    __metadata$73("design:paramtypes", [Renderer2, ElementRef])
], LayoutDirective);

/*
Truncation

In conjunction with the fixed layout mode, the modifier vclNoWrap can be used to truncate all cell content which would
span more than one line and show an ellipsis to indicate truncated content instead.
Individual cells can also be truncated using the general vclNoWrap and vclOverflowEllipsis modifiers from the utils module.
*/
var __decorate$112 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$74 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NoWrapDirective = (function () {
    function NoWrapDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    NoWrapDirective.prototype.ngOnChanges = function (changes) {
        if (changes.nowrap) {
            this.nowrap = this.tableService.ClassToggle('vclNoWrap', this.nowrap, 'td');
        }
    };
    return NoWrapDirective;
}());
__decorate$112([
    Input('nowrap'),
    __metadata$74("design:type", Object)
], NoWrapDirective.prototype, "nowrap", void 0);
NoWrapDirective = __decorate$112([
    Directive({
        selector: '[nowrap]'
    }),
    __metadata$74("design:paramtypes", [Renderer2, ElementRef])
], NoWrapDirective);

/*
Truncation

In conjunction with the fixed layout mode, the modifier vclNoWrap can be used to truncate all cell content which would
span more than one line and show an ellipsis to indicate truncated content instead.
Individual cells can also be truncated using the general vclNoWrap and vclOverflowEllipsis modifiers from the utils module.
*/
var __decorate$113 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$75 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OverflowEllipsisDirective = (function () {
    function OverflowEllipsisDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    OverflowEllipsisDirective.prototype.ngOnChanges = function (changes) {
        if (changes.ellipsis) {
            this.ellipsis = this.tableService.ClassToggle('vclOverflowEllipsis', this.ellipsis, 'td');
        }
    };
    return OverflowEllipsisDirective;
}());
__decorate$113([
    Input('overflow-ellipsis'),
    __metadata$75("design:type", Object)
], OverflowEllipsisDirective.prototype, "ellipsis", void 0);
OverflowEllipsisDirective = __decorate$113([
    Directive({
        selector: '[overflow-ellipsis]'
    }),
    __metadata$75("design:paramtypes", [Renderer2, ElementRef])
], OverflowEllipsisDirective);

/*
Wrapping behavior

To allow breaking words of textual cell content apart, use the modifier vclBreakWords. This works best in combination with the fixed layout mode.
*/
var __decorate$114 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$76 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BreakingWordsDirective = (function () {
    function BreakingWordsDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    BreakingWordsDirective.prototype.ngOnChanges = function (changes) {
        if (changes.breakWords) {
            this.breakWords = this.tableService.ClassToggle('vclBreakWords', this.breakWords, '');
        }
    };
    return BreakingWordsDirective;
}());
__decorate$114([
    Input('break-words'),
    __metadata$76("design:type", Object)
], BreakingWordsDirective.prototype, "breakWords", void 0);
BreakingWordsDirective = __decorate$114([
    Directive({
        selector: '[break-words]',
    }),
    __metadata$76("design:paramtypes", [Renderer2, ElementRef])
], BreakingWordsDirective);

var directives = [
    VclTableDirective,
    SpanDirective,
    HighlightDirective,
    SortDirective,
    SelectDirective,
    SelectableDirective,
    HoverDirective,
    DisableDirective,
    AltRowColorDirective,
    NoBorderDirective,
    DottedBorderDirective,
    CondensedDirective,
    VerticalBorderDirective,
    AlignmentCenterDirective,
    AlignmentRightDirective,
    AlignmentbottomDirective,
    AlignmentMiddleDirective,
    LayoutDirective,
    NoWrapDirective,
    OverflowEllipsisDirective,
    BreakingWordsDirective
];

var __decorate$91 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTableModule = (function () {
    function VCLTableModule() {
    }
    return VCLTableModule;
}());
VCLTableModule = __decorate$91([
    NgModule({
        imports: [CommonModule, L10nModule],
        exports: [SortIconComponent].concat(directives),
        declarations: [SortIconComponent].concat(directives),
        entryComponents: [SortIconComponent],
        providers: [],
    })
], VCLTableModule);

export { ObservableComponent, defineMetadata, getMetadata, InputDirective, VCLInputModule, VCLFileInputModule, VCLTextareaModule, VCLFlipSwitchModule, IconComponent, IconService, VCLIconModule, MetalistItem, MetalistComponent, SelectionMode, VCLMetalistModule, DropdownOption, DropdownComponent, VCLDropdownModule, SelectComponent, SelectOption, VCLSelectModule, VCLIcogramModule, ButtonComponent, ButtonStateContentDirective, VCLButtonModule, VCLButtonGroupModule, LayerRefDirective, LayerRef, LayerService, LayerContainerComponent, DynamicLayerRef, LAYER_ANIMATIONS, LayerResult, LAYERS, Layer, VCLLayerModule, VCLTabNavModule, NavigationComponent, NavigationItemDirective, VCLNavigationModule, VCLToolbarModule, VCLLinkModule, PopoverComponent, AttachmentX, AttachmentY, POPOVER_ANIMATIONS, VCLPopoverModule, VCLProgressBarModule, RadioButtonComponent, RadioGroupComponent, VCLRadioButtonModule, CheckboxComponent, VCLCheckboxModule, VCLOffClickModule, DatePickerComponent, VCLDatePickerModule, VCLFormControlLabelModule, TemplateWormhole, ComponentWormhole, Wormhole, WormholeDirective, DomComponentWormhole, DomTemplateWormhole, WormholeHost, DomWormholeHost, VCLWormholeModule, MonthPickerComponent, VCLMonthPickerModule, VCLLabelModule, TokenComponent, TokenInputComponent, TokenListComponent, VCLTokenModule, SliderComponent, VCLSliderModule, VCLInputControlGroupModule, AlertService, AlertType, AlertInput, AlertError, AlertAlignment, VCLAlertModule, VCLBusyIndicatorModule, Notification, NotificationService, NotificationType, NotificationPosition, NotificationComponent, VCLNotificationModule, L10nNoopLoaderService, L10nStaticLoaderService, L10nAsyncLoaderService, L10nFormatParserService, L10nService, L10nModule, VCLTooltipModule, VCLTableModule };
