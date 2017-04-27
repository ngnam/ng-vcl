(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('rxjs/add/operator/filter'), require('rxjs/add/operator/map'), require('rxjs/add/operator/publishReplay'), require('@angular/forms'), require('rxjs/add/observable/fromEvent'), require('rxjs/add/operator/share'), require('@angular/common'), require('rxjs/Observable'), require('rxjs/add/observable/from'), require('rxjs/add/observable/of'), require('rxjs/BehaviorSubject'), require('rxjs/add/observable/combineLatest'), require('rxjs/add/operator/combineLatest'), require('rxjs/add/operator/switchMap'), require('rxjs/add/observable/never'), require('rxjs/add/observable/merge'), require('rxjs/add/operator/publishBehavior'), require('rxjs/add/observable/timer'), require('rxjs/add/operator/skipUntil'), require('rxjs/add/operator/debounceTime'), require('rxjs/ReplaySubject'), require('rxjs/add/operator/distinctUntilChanged'), require('@angular/animations'), require('@angular/router'), require('rxjs/add/observable/interval'), require('rxjs/add/operator/first'), require('rxjs/add/operator/skipWhile')) :
	typeof define === 'function' && define.amd ? define('ng-vcl-compatibility', ['exports', '@angular/core', 'rxjs/Subject', 'rxjs/add/operator/filter', 'rxjs/add/operator/map', 'rxjs/add/operator/publishReplay', '@angular/forms', 'rxjs/add/observable/fromEvent', 'rxjs/add/operator/share', '@angular/common', 'rxjs/Observable', 'rxjs/add/observable/from', 'rxjs/add/observable/of', 'rxjs/BehaviorSubject', 'rxjs/add/observable/combineLatest', 'rxjs/add/operator/combineLatest', 'rxjs/add/operator/switchMap', 'rxjs/add/observable/never', 'rxjs/add/observable/merge', 'rxjs/add/operator/publishBehavior', 'rxjs/add/observable/timer', 'rxjs/add/operator/skipUntil', 'rxjs/add/operator/debounceTime', 'rxjs/ReplaySubject', 'rxjs/add/operator/distinctUntilChanged', '@angular/animations', '@angular/router', 'rxjs/add/observable/interval', 'rxjs/add/operator/first', 'rxjs/add/operator/skipWhile'], factory) :
	(factory((global['ng-vcl-compatibility'] = global['ng-vcl-compatibility'] || {}),global.ng.core,global.Rx,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.ng.forms,global.Rx.Observable,global.Rx.Observable.prototype,global.ng.common,global.Rx,global.Rx.Observable,global.Rx.Observable,global.Rx,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx,global.Rx.Observable.prototype,global.ng.animations,global.ng.router));
}(this, (function (exports,_angular_core,rxjs_Subject,rxjs_add_operator_filter,rxjs_add_operator_map,rxjs_add_operator_publishReplay,_angular_forms,rxjs_add_observable_fromEvent,rxjs_add_operator_share,_angular_common,rxjs_Observable,rxjs_add_observable_from,rxjs_add_observable_of,rxjs_BehaviorSubject,rxjs_add_observable_combineLatest,rxjs_add_operator_combineLatest,rxjs_add_operator_switchMap,rxjs_add_observable_never,rxjs_add_observable_merge,rxjs_add_operator_publishBehavior,rxjs_add_observable_timer,rxjs_add_operator_skipUntil,rxjs_add_operator_debounceTime,rxjs_ReplaySubject,rxjs_add_operator_distinctUntilChanged,_angular_animations,_angular_router) { 'use strict';

var ObservableComponent = (function () {
    function ObservableComponent() {
        this.changesSubject = new rxjs_Subject.Subject();
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
function setAnnotation(cls, key, value) {
    var annotation = getAnnotation(cls);
    // Change metadata
    annotation[key] = value;
    // Set metadata
    Reflect.defineMetadata('annotations', [new _angular_core.Component(annotation)], cls);
}
function getAnnotation(cls) {
    // Annotation is an array with 1 entry
    // TODO: Check if always one entry
    var clsAnnotations = Reflect.getMetadata('annotations', cls);
    if (!clsAnnotations && clsAnnotations.length < 1) {
        throw new Error('Invalid base class');
    }
    return clsAnnotations[0];
}
function setAnimations(cls, animations) {
    setAnnotation(cls, 'animations', animations);
}

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
exports.InputDirective = (function () {
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
__decorate$2([
    _angular_core.Input('type'),
    __metadata("design:type", String)
], exports.InputDirective.prototype, "type", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.InputDirective.prototype, "selectOnFocus", void 0);
__decorate$2([
    _angular_core.HostListener('focus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], exports.InputDirective.prototype, "onFocus", null);
exports.InputDirective = __decorate$2([
    _angular_core.Directive({
        selector: '[vcl-input]',
        host: {
            '[class.vclInput]': 'true',
        }
    }),
    __metadata("design:paramtypes", [_angular_core.ElementRef])
], exports.InputDirective);

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLInputModule = (function () {
    function VCLInputModule() {
    }
    return VCLInputModule;
}());
exports.VCLInputModule = __decorate$1([
    _angular_core.NgModule({
        imports: [],
        exports: [exports.InputDirective],
        declarations: [exports.InputDirective],
        providers: [],
    })
], exports.VCLInputModule);

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

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return FileInputComponent; }),
    multi: true
};
var FileInputComponent = (function () {
    function FileInputComponent() {
        this.accept = '*';
        this.multiple = false;
        this.files = new _angular_core.EventEmitter();
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
    };
    FileInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FileInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return FileInputComponent;
}());
__decorate$4([
    _angular_core.Input(),
    __metadata$1("design:type", String)
], FileInputComponent.prototype, "accept", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$1("design:type", Boolean)
], FileInputComponent.prototype, "multiple", void 0);
__decorate$4([
    _angular_core.Output(),
    __metadata$1("design:type", Object)
], FileInputComponent.prototype, "files", void 0);
__decorate$4([
    _angular_core.Input(),
    _angular_core.HostBinding('attr.tabindex'),
    __metadata$1("design:type", Number)
], FileInputComponent.prototype, "tabindex", void 0);
__decorate$4([
    _angular_core.Input(),
    _angular_core.HostBinding('class.vclDisabled'),
    __metadata$1("design:type", Boolean)
], FileInputComponent.prototype, "disabled", void 0);
__decorate$4([
    _angular_core.HostBinding('class.vclError'),
    __metadata$1("design:type", Object)
], FileInputComponent.prototype, "invalidFiles", void 0);
__decorate$4([
    _angular_core.HostBinding('class.vclDragndrop'),
    __metadata$1("design:type", Boolean)
], FileInputComponent.prototype, "isDragging", void 0);
__decorate$4([
    _angular_core.HostBinding('class.isFocused'),
    __metadata$1("design:type", Boolean)
], FileInputComponent.prototype, "isFocused", void 0);
__decorate$4([
    _angular_core.ViewChild('input'),
    __metadata$1("design:type", _angular_core.ElementRef)
], FileInputComponent.prototype, "input", void 0);
__decorate$4([
    _angular_core.HostListener('focus'),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onFocus", null);
__decorate$4([
    _angular_core.HostListener('blur'),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onBlur", null);
__decorate$4([
    _angular_core.HostListener('keydown', ['$event']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "keydown", null);
__decorate$4([
    _angular_core.HostListener('click', ['$event.target.value']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onClick", null);
__decorate$4([
    _angular_core.HostListener('dragover', ['$event']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onDragOver", null);
__decorate$4([
    _angular_core.HostListener('dragleave', ['$event']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onDragLeave", null);
__decorate$4([
    _angular_core.HostListener('drop', ['$event']),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", [Object]),
    __metadata$1("design:returntype", void 0)
], FileInputComponent.prototype, "onDrop", null);
FileInputComponent = __decorate$4([
    _angular_core.Component({
        selector: 'vcl-file-input',
        template: "<input #input type=\"file\" style=\"display: none;\" (change)=\"onInputChange()\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\" /> <div class=\"vclFileInputIcon vclIcon fa fa-upload\" aria-hidden=\"true\" aria-label=\"account\" role=\"img\"></div> <div class=\"vclFileInputPlaceholder\"> <ng-container *ngIf=\"filename\">{{filename}}</ng-container> <div *ngIf=\"!filename\"> <ng-content></ng-content> </div> </div> ",
        host: {
            '[class.vclFileInput]': 'true',
            role: 'button'
        },
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    })
], FileInputComponent);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLFileInputModule = (function () {
    function VCLFileInputModule() {
    }
    return VCLFileInputModule;
}());
exports.VCLFileInputModule = __decorate$3([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule],
        exports: [FileInputComponent],
        declarations: [FileInputComponent],
        providers: [],
    })
], exports.VCLFileInputModule);

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
__decorate$6([
    _angular_core.Input(),
    __metadata$2("design:type", Object)
], TextareaDirective.prototype, "selectAllOnFocus", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$2("design:type", Object)
], TextareaDirective.prototype, "autogrow", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$2("design:type", Number)
], TextareaDirective.prototype, "maxRows", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$2("design:type", Number)
], TextareaDirective.prototype, "minRows", void 0);
__decorate$6([
    _angular_core.HostBinding('attr.rows'),
    _angular_core.Input(),
    __metadata$2("design:type", Number)
], TextareaDirective.prototype, "rows", void 0);
__decorate$6([
    _angular_core.HostListener('ngModelChange', ['$event']),
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object]),
    __metadata$2("design:returntype", void 0)
], TextareaDirective.prototype, "onModelChange", null);
__decorate$6([
    _angular_core.HostListener('focus', ['$event.target.value']),
    __metadata$2("design:type", Function),
    __metadata$2("design:paramtypes", [Object]),
    __metadata$2("design:returntype", void 0)
], TextareaDirective.prototype, "onFocus", null);
TextareaDirective = __decorate$6([
    _angular_core.Directive({
        selector: '[vcl-textarea]',
        host: {
            '[class.vclInput]': 'true',
        }
    }),
    __metadata$2("design:paramtypes", [_angular_core.ElementRef])
], TextareaDirective);

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLTextareaModule = (function () {
    function VCLTextareaModule() {
    }
    return VCLTextareaModule;
}());
exports.VCLTextareaModule = __decorate$5([
    _angular_core.NgModule({
        imports: [_angular_forms.FormsModule],
        exports: [TextareaDirective],
        declarations: [TextareaDirective],
        providers: [],
    })
], exports.VCLTextareaModule);

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$1 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return FlipSwitchComponent; }),
    multi: true
};
var FlipSwitchComponent = (function () {
    function FlipSwitchComponent() {
        this.tabindex = 0;
        this.onLabel = 'On';
        this.offLabel = 'Off';
        this.value = false;
        this.valueChange = new _angular_core.EventEmitter();
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
    };
    FlipSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FlipSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return FlipSwitchComponent;
}());
__decorate$8([
    _angular_core.HostBinding(),
    __metadata$3("design:type", Object)
], FlipSwitchComponent.prototype, "tabindex", void 0);
__decorate$8([
    _angular_core.Input(),
    __metadata$3("design:type", String)
], FlipSwitchComponent.prototype, "onLabel", void 0);
__decorate$8([
    _angular_core.Input(),
    __metadata$3("design:type", String)
], FlipSwitchComponent.prototype, "offLabel", void 0);
__decorate$8([
    _angular_core.Input(),
    __metadata$3("design:type", Boolean)
], FlipSwitchComponent.prototype, "value", void 0);
__decorate$8([
    _angular_core.Output(),
    __metadata$3("design:type", Object)
], FlipSwitchComponent.prototype, "valueChange", void 0);
__decorate$8([
    _angular_core.HostListener('click', ['$event']),
    __metadata$3("design:type", Function),
    __metadata$3("design:paramtypes", []),
    __metadata$3("design:returntype", void 0)
], FlipSwitchComponent.prototype, "onTap", null);
__decorate$8([
    _angular_core.HostListener('keydown', ['$event']),
    __metadata$3("design:type", Function),
    __metadata$3("design:paramtypes", [Object]),
    __metadata$3("design:returntype", void 0)
], FlipSwitchComponent.prototype, "keydown", null);
FlipSwitchComponent = __decorate$8([
    _angular_core.Component({
        selector: 'vcl-flip-switch',
        template: "<label class=\"vclFlipSwitchLabel\"> <div class=\"vclFlipSwitchTrack\"> <div class=\"vclFlipSwitchActive\" [attr.aria-hidden]=\"!value\">{{onLabel}}</div> <div class=\"vclFlipSwitchInactive\" [attr.aria-hidden]=\"value\">{{offLabel}}</div> </div> <div class=\"vclFlipSwitchKnob\"></div> </label> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$1],
        host: {
            '[class.vclFlipSwitch]': 'true',
            '[class.vclFlipSwitchPressed]': 'value',
            '[attr.role]': '"button"',
            '[attr.aria-pressed]': 'value',
            '[attr.touch-action]': '"pan-y"'
        }
    })
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
var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
var L10N_LOADER_CONFIG = new _angular_core.OpaqueToken('l10n.loader.config');
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
exports.L10nStaticLoaderService = (function (_super) {
    __extends(L10nStaticLoaderService, _super);
    function L10nStaticLoaderService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        return _this;
    }
    L10nStaticLoaderService.prototype.getTranslationPackage = function (locale) {
        return rxjs_Observable.Observable.of(flatten(locale, this.config));
    };
    L10nStaticLoaderService.prototype.getSupportedLocales = function () {
        return rxjs_Observable.Observable.of(extractLocales(this.config));
    };
    return L10nStaticLoaderService;
}(L10nLoaderService));
exports.L10nStaticLoaderService = __decorate$11([
    _angular_core.Injectable(),
    __param(0, _angular_core.Inject(L10N_LOADER_CONFIG)),
    __metadata$4("design:paramtypes", [Object])
], exports.L10nStaticLoaderService);
exports.L10nAsyncLoaderService = (function (_super) {
    __extends(L10nAsyncLoaderService, _super);
    function L10nAsyncLoaderService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        var streamlike;
        if (typeof config === 'function') {
            streamlike = config();
        }
        else {
            streamlike = rxjs_Observable.Observable.from(config);
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
exports.L10nAsyncLoaderService = __decorate$11([
    _angular_core.Injectable(),
    __param(0, _angular_core.Inject(L10N_LOADER_CONFIG)),
    __metadata$4("design:paramtypes", [Object])
], exports.L10nAsyncLoaderService);
exports.L10nNoopLoaderService = (function (_super) {
    __extends(L10nNoopLoaderService, _super);
    function L10nNoopLoaderService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    L10nNoopLoaderService.prototype.getTranslationPackage = function (locale) {
        return rxjs_Observable.Observable.of({});
    };
    L10nNoopLoaderService.prototype.getSupportedLocales = function () {
        return rxjs_Observable.Observable.of([]);
    };
    return L10nNoopLoaderService;
}(L10nLoaderService));
exports.L10nNoopLoaderService = __decorate$11([
    _angular_core.Injectable()
], exports.L10nNoopLoaderService);

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
var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
exports.L10nFormatParserService = (function (_super) {
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
exports.L10nFormatParserService = __decorate$12([
    _angular_core.Injectable()
], exports.L10nFormatParserService);

var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
var L10N_CONFIG = new _angular_core.OpaqueToken('l10n.config');
exports.L10nService = (function () {
    function L10nService(config, // TODO: L10nConfig - problem with ngc
        loader, parser) {
        var _this = this;
        this.config = config;
        this.loader = loader;
        this.parser = parser;
        this.packages = {};
        this.locale = (config.locale || this.getNavigatorLang() || 'en-us').toLowerCase();
        this._locale$ = new rxjs_BehaviorSubject.BehaviorSubject(this.locale);
        // Initialize the streams
        var supportedLocales$ = this.getSupportedLocales();
        // Set up stream of valid locale
        var locale$ = rxjs_Observable.Observable.combineLatest(supportedLocales$, this.locale$, function (supportedLocales, locale) {
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
        var fbLocale$ = rxjs_Observable.Observable.combineLatest(supportedLocales$, locale$, function (supportedLocales, locale) {
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
            return fbLocale ? _this.getTranslationPackage(fbLocale) : rxjs_Observable.Observable.of({});
        });
        // The real fallback stream is a combination of the latest package and fallback package
        this.fbPackage$ = rxjs_Observable.Observable.combineLatest(this.package$, fbPackageTemp$, function (pkg, fbPkg) {
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
            return pkg[key] ? rxjs_Observable.Observable.of(pkg) : _this.fbPackage$;
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
exports.L10nService = __decorate$13([
    _angular_core.Injectable(),
    __param$1(0, _angular_core.Inject(L10N_CONFIG)),
    __metadata$5("design:paramtypes", [Object, L10nLoaderService,
        L10nParserService])
], exports.L10nService);

var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
L10nPipe = __decorate$14([
    _angular_core.Pipe({
        name: 'loc',
        pure: false
    }),
    __param$2(0, _angular_core.Inject(exports.L10nService)),
    __param$2(0, _angular_core.Optional()),
    __metadata$6("design:paramtypes", [Object])
], L10nPipe);

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.L10nModule = L10nModule_1 = (function () {
    function L10nModule() {
    }
    L10nModule.forRoot = function (config) {
        return {
            ngModule: L10nModule_1,
            providers: [
                exports.L10nService,
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
                    useClass: config.parser || exports.L10nFormatParserService
                }
            ]
        };
    };
    return L10nModule;
}());
exports.L10nModule = L10nModule_1 = __decorate$10([
    _angular_core.NgModule({
        imports: [],
        declarations: [L10nPipe],
        exports: [L10nPipe]
    })
], exports.L10nModule);
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
var TemplateWormhole = (function (_super) {
    __extends$2(TemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormhole(templateRef, viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        _this.viewContainerRef = viewContainerRef;
        _this.cachedAttrs = null;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        if (!(templateRef instanceof _angular_core.TemplateRef)) {
            throw 'invalid TemplateRef';
        }
        return _this;
    }
    Object.defineProperty(TemplateWormhole.prototype, "isConnected", {
        get: function () {
            return !!(this.viewRef);
        },
        enumerable: true,
        configurable: true
    });
    TemplateWormhole.prototype.connect = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (typeof opts.attrs === 'object' && opts.attrs) {
            this.cachedAttrs = opts.attrs;
        }
        var index = typeof opts.index === 'number' ? opts.index : null;
        this.disconnect();
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef, null, typeof index === 'number' ? index : this.viewContainerRef.length);
        this.viewRef.onDestroy(function () {
            _this.viewRef = null;
        });
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(this.viewRef.context, this.cachedAttrs);
        }
        this.viewRef.detectChanges();
        return rxjs_Observable.Observable.never();
    };
    TemplateWormhole.prototype.disconnect = function () {
        if (this.isConnected && this.currentIndex >= 0) {
            this.viewContainerRef.remove(this.currentIndex);
        }
    };
    TemplateWormhole.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.viewRef && attrs && typeof attrs === 'object') {
            Object.assign(this.viewRef.context, attrs);
            this.viewRef.markForCheck();
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
}(Wormhole));
var ComponentWormhole = (function (_super) {
    __extends$2(ComponentWormhole, _super);
    function ComponentWormhole(componentClass, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.componentClass = componentClass;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.cachedAttrs = null;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        if (!(typeof componentClass === 'function')) {
            throw 'invalid component class';
        }
        return _this;
    }
    Object.defineProperty(ComponentWormhole.prototype, "isConnected", {
        get: function () {
            return !!this.compRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentWormhole.prototype.connect = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (typeof opts.attrs === 'object' && opts.attrs) {
            this.cachedAttrs = opts.attrs;
        }
        var index = typeof opts.index === 'number' ? opts.index : null;
        var injector = this.injector || this.viewContainerRef.parentInjector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(_angular_core.ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(this.componentClass);
        }
        this.disconnect();
        this.compRef = this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index : this.viewContainerRef.length, injector);
        var subs = [];
        this.compRef.onDestroy(function () {
            _this.compRef = null;
        });
        var instance = this.compRef.instance;
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(instance, this.cachedAttrs);
        }
        this.compRef.changeDetectorRef.detectChanges();
        var events = opts.events || [];
        var events$ = events.map(function (event) {
            if (!instance[event])
                throw 'Event not found: ' + event;
            return instance[event] && instance[event].map(function (value) { return ({ event: event, value: value }); });
        });
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, events$);
    };
    ComponentWormhole.prototype.disconnect = function () {
        if (this.compRef) {
            this.compRef.destroy();
            this.compRef = null;
        }
    };
    ComponentWormhole.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.compRef && attrs && typeof attrs === 'object') {
            Object.assign(this.compRef.instance, attrs);
            // TODO: Change detection is not triggering when changedetection is set to onPush
            // Workaround for ng 4
            // https://github.com/angular/angular/issues/12313
            var cdRef = this.compRef.changeDetectorRef;
            if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
                this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 1);
            }
            this.compRef.changeDetectorRef.markForCheck();
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
}(Wormhole));
var DomComponentWormhole = (function (_super) {
    __extends$2(DomComponentWormhole, _super);
    function DomComponentWormhole(componentClass, appRef, node, injector) {
        var _this = _super.call(this) || this;
        _this.componentClass = componentClass;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        _this.cachedAttrs = undefined;
        if (!(typeof componentClass === 'function')) {
            throw 'invalid component class';
        }
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
    Object.defineProperty(DomComponentWormhole.prototype, "componentNode", {
        get: function () {
            if (this.node) {
                return this.node;
            }
            var rootCompRef = this.rootComponentRef;
            var node = this.getComponentRootNode(rootCompRef);
            if (!node) {
                throw 'root node not found';
            }
            return node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomComponentWormhole.prototype, "isConnected", {
        get: function () {
            return !!this.compRef;
        },
        enumerable: true,
        configurable: true
    });
    DomComponentWormhole.prototype.connect = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (typeof opts.attrs === 'object' && opts.attrs) {
            this.cachedAttrs = opts.attrs;
        }
        var index = typeof opts.index === 'number' ? opts.index : null;
        var injector = this.injector || this.rootComponentRef.injector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(_angular_core.ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(this.componentClass);
        }
        this.compRef = this.compFactory.create(injector);
        this.appRef.attachView(this.compRef.hostView);
        var compRefRootNode = this.getComponentRootNode(this.compRef);
        var node = this.componentNode;
        if (!compRefRootNode) {
            throw 'component root node not found';
        }
        node.appendChild(compRefRootNode);
        this.compRef.onDestroy(function () {
            if (_this.compRef) {
                _this.appRef.detachView(_this.compRef.hostView);
            }
            if (compRefRootNode.parentNode != null) {
                compRefRootNode.parentNode.removeChild(compRefRootNode);
            }
            _this.compRef = null;
        });
        var instance = this.compRef.instance;
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(instance, this.cachedAttrs);
        }
        this.compRef.changeDetectorRef.detectChanges();
        var events = opts.events || [];
        var events$ = events.map(function (event) {
            if (!instance[event])
                throw 'Event not found: ' + event;
            return instance[event] && instance[event].map(function (value) { return ({ event: event, value: value }); });
        });
        return rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, events$);
    };
    DomComponentWormhole.prototype.disconnect = function () {
        if (this.compRef) {
            this.compRef.destroy();
            this.compRef = null;
        }
    };
    DomComponentWormhole.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.compRef && attrs && typeof attrs === 'object') {
            Object.assign(this.compRef.instance, attrs);
            // TODO: Change detection is not triggering when changedetection is set to onPush
            // Workaround for ng 4
            // https://github.com/angular/angular/issues/12313
            var cdRef = this.compRef.changeDetectorRef;
            if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
                this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 1);
            }
            this.compRef.changeDetectorRef.markForCheck();
        }
    };
    Object.defineProperty(DomComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    DomComponentWormhole.prototype.getComponentRootNode = function (componentRef) {
        var rootNodes = componentRef.hostView.rootNodes;
        return (rootNodes && rootNodes.length && rootNodes[0]) || undefined;
    };
    return DomComponentWormhole;
}(Wormhole));

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
    WormholeHostBase.prototype.connectWormhole = function (target, opts) {
        var wormhole = this.createWormhole(target);
        wormhole.connect(opts);
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
    __extends$4(WormholeHost, _super);
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
        else if (arg2 instanceof _angular_core.TemplateRef && this._host) {
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
    __extends$4(DomWormholeHost, _super);
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
        if (typeof arg2 === 'function' && this._host instanceof _angular_core.ApplicationRef) {
            wormhole = new DomComponentWormhole(arg2, this._host, this._node, this._injector);
        }
        else if (arg2 instanceof _angular_core.TemplateRef && this._host) {
            throw 'templateRef not supported in DomWormholeHost';
        }
        else {
            throw 'Parameter must be component class or templateRef';
        }
        this._wormholes.push(wormhole);
        return wormhole;
    };
    return DomWormholeHost;
}(WormholeHostBase));

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
var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.WormholeDirective = (function (_super) {
    __extends$3(WormholeDirective, _super);
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
                this.wormhole = this.connectWormhole(target, {
                    attrs: attrs
                });
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
__decorate$16([
    _angular_core.Input('connect'),
    __metadata$7("design:type", Object)
], exports.WormholeDirective.prototype, "target", void 0);
__decorate$16([
    _angular_core.Input('attrs'),
    __metadata$7("design:type", Object)
], exports.WormholeDirective.prototype, "attrs", void 0);
exports.WormholeDirective = __decorate$16([
    _angular_core.Directive({
        selector: 'wormhole'
    }),
    __metadata$7("design:paramtypes", [_angular_core.ViewContainerRef])
], exports.WormholeDirective);

var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLWormholeModule = (function () {
    function VCLWormholeModule() {
    }
    return VCLWormholeModule;
}());
exports.VCLWormholeModule = __decorate$15([
    _angular_core.NgModule({
        exports: [exports.WormholeDirective],
        declarations: [exports.WormholeDirective],
        providers: []
    })
], exports.VCLWormholeModule);

var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MetalistItem = (function () {
    function MetalistItem() {
        this.disabled = false;
        this.marked = false;
        this.selected = false;
    }
    return MetalistItem;
}());
__decorate$17([
    _angular_core.ViewChild(_angular_core.TemplateRef),
    __metadata$8("design:type", _angular_core.TemplateRef)
], exports.MetalistItem.prototype, "_content", void 0);
__decorate$17([
    _angular_core.Input(),
    __metadata$8("design:type", Object)
], exports.MetalistItem.prototype, "value", void 0);
__decorate$17([
    _angular_core.Input(),
    __metadata$8("design:type", Object)
], exports.MetalistItem.prototype, "metadata", void 0);
__decorate$17([
    _angular_core.Input(),
    __metadata$8("design:type", Boolean)
], exports.MetalistItem.prototype, "disabled", void 0);
__decorate$17([
    _angular_core.Input(),
    __metadata$8("design:type", Boolean)
], exports.MetalistItem.prototype, "marked", void 0);
__decorate$17([
    _angular_core.Input(),
    __metadata$8("design:type", Boolean)
], exports.MetalistItem.prototype, "selected", void 0);
exports.MetalistItem = __decorate$17([
    _angular_core.Component({
        selector: 'vcl-metalist-item',
        template: '<ng-template><ng-content></ng-content></ng-template>'
    })
], exports.MetalistItem);

var __decorate$18 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

(function (SelectionMode) {
    SelectionMode[SelectionMode["Multiple"] = 0] = "Multiple";
    SelectionMode[SelectionMode["Single"] = 1] = "Single";
})(exports.SelectionMode || (exports.SelectionMode = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$2 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.MetalistComponent; }),
    multi: true
};
exports.MetalistComponent = (function () {
    function MetalistComponent(cdRef) {
        this.cdRef = cdRef;
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.selectionMode = exports.SelectionMode.Single;
        this.maxSelectableItems = Infinity;
        this.change = new _angular_core.EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(MetalistComponent.prototype, "mode", {
        get: function () {
            return this.selectionMode === exports.SelectionMode.Multiple ? 'multiple' : 'single';
        },
        // String alias for selectionMode
        set: function (value) {
            this.selectionMode = value === 'multiple' ? exports.SelectionMode.Multiple : exports.SelectionMode.Single;
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
        if (this.selectionMode === exports.SelectionMode.Multiple && Array.isArray(value)) {
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
        this.value = this.selectionMode === exports.SelectionMode.Single ? values[0] : values;
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
        if (item instanceof exports.MetalistItem) {
            if (item.disabled) {
                return;
            }
            if (this.selectionMode === exports.SelectionMode.Multiple) {
                var selectedItems = (this.items || []).filter(function (i) { return i.selected; });
                // prevent overflow
                var overflow = this.selectionMode === exports.SelectionMode.Multiple && !item.selected && selectedItems.length >= this.maxSelectableItems;
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
        if (item instanceof exports.MetalistItem) {
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
__decorate$18([
    _angular_core.Input(),
    __metadata$9("design:type", Number)
], exports.MetalistComponent.prototype, "selectionMode", void 0);
__decorate$18([
    _angular_core.Input(),
    __metadata$9("design:type", String),
    __metadata$9("design:paramtypes", [String])
], exports.MetalistComponent.prototype, "mode", null);
__decorate$18([
    _angular_core.Input(),
    __metadata$9("design:type", Number)
], exports.MetalistComponent.prototype, "maxSelectableItems", void 0);
__decorate$18([
    _angular_core.Output(),
    __metadata$9("design:type", Object)
], exports.MetalistComponent.prototype, "change", void 0);
__decorate$18([
    _angular_core.ContentChildren(exports.MetalistItem),
    __metadata$9("design:type", _angular_core.QueryList)
], exports.MetalistComponent.prototype, "items", void 0);
exports.MetalistComponent = __decorate$18([
    _angular_core.Component({
        selector: 'vcl-metalist, [vcl-metalist]',
        template: "<wormhole *ngFor=\"let item of items\" [connect]=\"item._content\"></wormhole>",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$2],
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    }),
    __metadata$9("design:paramtypes", [_angular_core.ChangeDetectorRef])
], exports.MetalistComponent);

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLMetalistModule = (function () {
    function VCLMetalistModule() {
    }
    return VCLMetalistModule;
}());
exports.VCLMetalistModule = __decorate$9([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule, exports.VCLWormholeModule],
        exports: [exports.MetalistComponent, exports.MetalistItem],
        declarations: [exports.MetalistComponent, exports.MetalistItem],
        providers: [],
    })
], exports.VCLMetalistModule);

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLFlipSwitchModule = (function () {
    function VCLFlipSwitchModule() {
    }
    return VCLFlipSwitchModule;
}());
exports.VCLFlipSwitchModule = __decorate$7([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule, exports.VCLMetalistModule],
        exports: [FlipSwitchComponent],
        declarations: [FlipSwitchComponent],
        providers: [],
    })
], exports.VCLFlipSwitchModule);

var __decorate$21 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.IconService = (function () {
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
exports.IconService = __decorate$21([
    _angular_core.Injectable()
], exports.IconService);

var __decorate$20 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.IconComponent = (function () {
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
__decorate$20([
    _angular_core.Input(),
    __metadata$10("design:type", String)
], exports.IconComponent.prototype, "src", void 0);
__decorate$20([
    _angular_core.Input(),
    __metadata$10("design:type", String)
], exports.IconComponent.prototype, "svguse", void 0);
__decorate$20([
    _angular_core.Input(),
    __metadata$10("design:type", String)
], exports.IconComponent.prototype, "iconClass", void 0);
__decorate$20([
    _angular_core.Input(),
    __metadata$10("design:type", String)
], exports.IconComponent.prototype, "icon", void 0);
__decorate$20([
    _angular_core.HostBinding('attr.aria-label'),
    _angular_core.Input(),
    __metadata$10("design:type", String)
], exports.IconComponent.prototype, "label", void 0);
__decorate$20([
    _angular_core.HostBinding('attr.role'),
    _angular_core.Input(),
    __metadata$10("design:type", String)
], exports.IconComponent.prototype, "ariaRole", void 0);
__decorate$20([
    _angular_core.HostBinding('class'),
    __metadata$10("design:type", String),
    __metadata$10("design:paramtypes", [])
], exports.IconComponent.prototype, "mergedIconClass", null);
__decorate$20([
    _angular_core.HostBinding('attr.aria-hidden'),
    __metadata$10("design:type", Object),
    __metadata$10("design:paramtypes", [])
], exports.IconComponent.prototype, "isAriaHidden", null);
exports.IconComponent = __decorate$20([
    _angular_core.Component({
        selector: 'vcl-icon, [vcl-icon]',
        template: "<img *ngIf=\"src\" [attr.src]=\"src\"> <svg *ngIf=\"svguse\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"> <use [attr.xmlns:xlink]=\"'http://www.w3.org/1999/xlink'\"></use> </svg> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        host: {
            '[class.vclIcon]': 'true',
        },
    }),
    __metadata$10("design:paramtypes", [exports.IconService])
], exports.IconComponent);

var __decorate$19 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLIconModule = VCLIconModule_1 = (function () {
    function VCLIconModule() {
    }
    VCLIconModule.forRoot = function (config) {
        return {
            ngModule: VCLIconModule_1,
            providers: [
                {
                    provide: exports.IconService,
                    useClass: config.service || exports.IconService
                }
            ]
        };
    };
    return VCLIconModule;
}());
exports.VCLIconModule = VCLIconModule_1 = __decorate$19([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule],
        exports: [exports.IconComponent],
        declarations: [exports.IconComponent],
        providers: [exports.IconService],
    })
], exports.VCLIconModule);
var VCLIconModule_1;

var __decorate$24 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.DropdownOption = (function () {
    function DropdownOption() {
        this.disabled = false;
        this.selected = false;
    }
    return DropdownOption;
}());
__decorate$24([
    _angular_core.ViewChild(_angular_core.TemplateRef),
    __metadata$12("design:type", _angular_core.TemplateRef)
], exports.DropdownOption.prototype, "content", void 0);
__decorate$24([
    _angular_core.Input(),
    __metadata$12("design:type", Object)
], exports.DropdownOption.prototype, "value", void 0);
__decorate$24([
    _angular_core.Input(),
    __metadata$12("design:type", Object)
], exports.DropdownOption.prototype, "metadata", void 0);
__decorate$24([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], exports.DropdownOption.prototype, "label", void 0);
__decorate$24([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], exports.DropdownOption.prototype, "sublabel", void 0);
__decorate$24([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean)
], exports.DropdownOption.prototype, "disabled", void 0);
__decorate$24([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean)
], exports.DropdownOption.prototype, "selected", void 0);
exports.DropdownOption = __decorate$24([
    _angular_core.Component({
        selector: 'vcl-dropdown-option',
        template: '<ng-template><ng-content></ng-content></ng-template>'
    })
], exports.DropdownOption);

var __decorate$23 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$3 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.DropdownComponent; }),
    multi: true
};
exports.DropdownComponent = (function () {
    function DropdownComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.tabindex = 0;
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.selectionMode = exports.SelectionMode.Single;
        this.listenKeys = true;
        this.change = new _angular_core.EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(DropdownComponent.prototype, "mode", {
        get: function () {
            return this.selectionMode === exports.SelectionMode.Multiple ? 'multiple' : 'single';
        },
        // String alias for selectionMode
        set: function (value) {
            this.selectionMode = value === 'multiple' ? exports.SelectionMode.Multiple : exports.SelectionMode.Single;
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
    DropdownComponent.prototype.writeValue = function (value) {
        this.metalist.setValue(value);
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return DropdownComponent;
}());
__decorate$23([
    _angular_core.ViewChild('metalist'),
    __metadata$11("design:type", exports.MetalistComponent)
], exports.DropdownComponent.prototype, "metalist", void 0);
__decorate$23([
    _angular_core.ViewChild('metalist', { read: _angular_core.ElementRef }),
    __metadata$11("design:type", _angular_core.ElementRef)
], exports.DropdownComponent.prototype, "listbox", void 0);
__decorate$23([
    _angular_core.ContentChildren(exports.DropdownOption),
    __metadata$11("design:type", _angular_core.QueryList)
], exports.DropdownComponent.prototype, "items", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", Number)
], exports.DropdownComponent.prototype, "tabindex", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", Number)
], exports.DropdownComponent.prototype, "selectionMode", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", String),
    __metadata$11("design:paramtypes", [String])
], exports.DropdownComponent.prototype, "mode", null);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", Number)
], exports.DropdownComponent.prototype, "maxSelectableItems", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$11("design:type", Boolean)
], exports.DropdownComponent.prototype, "listenKeys", void 0);
__decorate$23([
    _angular_core.Output('change'),
    __metadata$11("design:type", Object)
], exports.DropdownComponent.prototype, "change", void 0);
exports.DropdownComponent = __decorate$23([
    _angular_core.Component({
        selector: 'vcl-dropdown',
        template: "<ul vcl-metalist [selectionMode]=\"selectionMode\" [maxSelectableItems]=\"maxSelectableItems\" #metalist class=\"vclDropdown vclOpen\" role=\"listbox\" [attr.tabindex]=\"tabindex\" [attr.aria-multiselectable]=\"mode === 'multiple'\" [style.position]=\"'static'\" (change)=\"onMetalistChange($event)\" (blur)=\"onMetalistBlur()\" (keydown)=\"onMetalistKeydown($event)\" > <!--  (mousedown) is used because tap will break scrolling on mobiles --> <vcl-metalist-item #metaItem *ngFor=\"let item of items\"  [metadata]=\"item\" [selected]=\"item.selected\" [disabled]=\"item.disabled\" [marked]=\"item.marked\" [value]=\"item.value\"> <li role=\"option\" class=\"vclDropdownItem\" [class.vclSelected]=\"metaItem.selected\" [class.vclDisabled]=\"metaItem.disabled\" [class.vclHighlighted]=\"metaItem.marked\" [attr.aria-selected]=\"metaItem.selected\" (click)=\"onMetalistItemTap(metaItem)\"> <div *ngIf=\"item.label\" class=\"vclDropdownItemLabel\"> {{item.label}} </div> <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\"> {{item.sublabel}} </div> <wormhole *ngIf=\"item.content\" [connect]=\"item.content\"></wormhole> </li> </vcl-metalist-item> </ul> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$3],
        host: {
            '[attr.tabindex]': '-1',
        }
    }),
    __metadata$11("design:paramtypes", [_angular_core.ElementRef, _angular_core.ChangeDetectorRef])
], exports.DropdownComponent);

var __decorate$22 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLDropdownModule = (function () {
    function VCLDropdownModule() {
    }
    return VCLDropdownModule;
}());
exports.VCLDropdownModule = __decorate$22([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule, exports.VCLMetalistModule, exports.VCLWormholeModule],
        exports: [exports.DropdownComponent, exports.DropdownOption],
        declarations: [exports.DropdownComponent, exports.DropdownOption],
        providers: [],
    })
], exports.VCLDropdownModule);

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
var __decorate$27 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.ButtonStateContentDirective = (function (_super) {
    __extends$5(ButtonStateContentDirective, _super);
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
__decorate$27([
    _angular_core.Input('vclButtonStateContent'),
    __metadata$13("design:type", Object),
    __metadata$13("design:paramtypes", [Object])
], exports.ButtonStateContentDirective.prototype, "state", null);
exports.ButtonStateContentDirective = __decorate$27([
    _angular_core.Directive({
        selector: '[vclButtonStateContent]'
    }),
    __metadata$13("design:paramtypes", [_angular_core.ViewContainerRef, _angular_core.TemplateRef])
], exports.ButtonStateContentDirective);

var __decorate$29 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
__decorate$29([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "label", void 0);
__decorate$29([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean)
], IcogramComponent.prototype, "flexLabel", void 0);
__decorate$29([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "prepIcon", void 0);
__decorate$29([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "appIcon", void 0);
__decorate$29([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "prepIconSrc", void 0);
__decorate$29([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], IcogramComponent.prototype, "appIconSrc", void 0);
IcogramComponent = __decorate$29([
    _angular_core.Component({
        selector: 'vcl-icogram, [vcl-icogram]',
        host: {
            '[class.vclIcogram]': 'true',
            '[attr.role]': 'img'
        },
        template: "<div vcl-icon *ngIf=\"prepIcon || prepIconSrc\" [icon]=\"prepIcon\" [src]=\"prepIconSrc\"></div> <ng-content></ng-content> <span *ngIf=\"!!label\" [class.vclLayoutFlex]=\"!!flexLabel\" class=\"vclText\"> {{label | loc}} </span> <div vcl-icon *ngIf=\"appIcon || appIconSrc\" [icon]=\"appIcon\" [src]=\"appIconSrc\"></div> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    }),
    __metadata$14("design:paramtypes", [_angular_core.ElementRef])
], IcogramComponent);

var __decorate$28 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLIcogramModule = (function () {
    function VCLIcogramModule() {
    }
    return VCLIcogramModule;
}());
exports.VCLIcogramModule = __decorate$28([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.VCLIconModule, exports.L10nModule],
        exports: [IcogramComponent],
        declarations: [IcogramComponent],
        providers: [],
    })
], exports.VCLIcogramModule);

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
var __decorate$30 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.ButtonComponent = (function (_super) {
    __extends$6(ButtonComponent, _super);
    function ButtonComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.pressed = false; // `true` if a pointer device is conducting a `down` gesture on the button
        _this.focused = false; // `true` if the element is focused  (CSS' :focus)
        _this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        _this.selected = false;
        _this.disabled = false;
        _this.disableA11yClick = false;
        _this.busy = false;
        _this.flexLabel = false;
        _this.autoBlur = true;
        _this.pressEvent = new _angular_core.EventEmitter();
        _this.stateChange = rxjs_Observable.Observable.merge(_this.observeChange('disabled'), _this.observeChange('busy'))
            .map(function () { return _this.state; })
            .distinctUntilChanged()
            .publishBehavior(_this.state)
            .refCount();
        _this.pressSub = _this.press.subscribe(function () {
            if (_this.autoBlur) {
                if (_this.elementRef.nativeElement && _this.elementRef.nativeElement.blur) {
                    _this.elementRef.nativeElement.blur();
                }
            }
        });
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
            this.elementRef.nativeElement.click();
        }
    };
    ButtonComponent.prototype.onMouseEnter = function (e) { this.hovered = true; };
    ButtonComponent.prototype.onMouseLeave = function (e) { this.hovered = false; };
    ButtonComponent.prototype.onMouseUp = function (e) { this.pressed = false; };
    ButtonComponent.prototype.onMouseDown = function (e) { this.pressed = true; };
    ButtonComponent.prototype.onFocus = function (e) { this.focused = true; };
    ButtonComponent.prototype.onBlur = function (e) { this.focused = false; };
    ButtonComponent.prototype.onClick = function (e) {
        this.pressEvent.emit(e);
    };
    ButtonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.buttonContent.forEach(function (bc) { return bc.updateState(_this.state); });
    };
    ButtonComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.stateSub && this.stateSub.unsubscribe();
        this.pressSub && this.pressSub.unsubscribe();
    };
    return ButtonComponent;
}(ObservableComponent));
__decorate$30([
    _angular_core.HostBinding('class.vclHovered'),
    __metadata$15("design:type", Boolean)
], exports.ButtonComponent.prototype, "hovered", void 0);
__decorate$30([
    _angular_core.HostBinding('attr.disabled'),
    __metadata$15("design:type", Boolean),
    __metadata$15("design:paramtypes", [])
], exports.ButtonComponent.prototype, "isDisabled", null);
__decorate$30([
    _angular_core.Input(),
    _angular_core.HostBinding('class.vclSelected'),
    __metadata$15("design:type", Boolean)
], exports.ButtonComponent.prototype, "selected", void 0);
__decorate$30([
    _angular_core.HostBinding('attr.aria-label'),
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.ButtonComponent.prototype, "title", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean)
], exports.ButtonComponent.prototype, "disabled", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean)
], exports.ButtonComponent.prototype, "disableA11yClick", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean)
], exports.ButtonComponent.prototype, "busy", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean)
], exports.ButtonComponent.prototype, "flexLabel", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.ButtonComponent.prototype, "label", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.ButtonComponent.prototype, "prepIcon", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean)
], exports.ButtonComponent.prototype, "autoBlur", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.ButtonComponent.prototype, "appIcon", void 0);
__decorate$30([
    _angular_core.Output(),
    __metadata$15("design:type", rxjs_Observable.Observable),
    __metadata$15("design:paramtypes", [])
], exports.ButtonComponent.prototype, "press", null);
__decorate$30([
    _angular_core.Output(),
    __metadata$15("design:type", Object)
], exports.ButtonComponent.prototype, "stateChange", void 0);
__decorate$30([
    _angular_core.ContentChildren(exports.ButtonStateContentDirective),
    __metadata$15("design:type", _angular_core.QueryList)
], exports.ButtonComponent.prototype, "buttonContent", void 0);
__decorate$30([
    _angular_core.HostListener('keypress', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [KeyboardEvent]),
    __metadata$15("design:returntype", void 0)
], exports.ButtonComponent.prototype, "onKeypress", null);
__decorate$30([
    _angular_core.HostListener('mouseenter', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Object]),
    __metadata$15("design:returntype", void 0)
], exports.ButtonComponent.prototype, "onMouseEnter", null);
__decorate$30([
    _angular_core.HostListener('mouseleave', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Object]),
    __metadata$15("design:returntype", void 0)
], exports.ButtonComponent.prototype, "onMouseLeave", null);
__decorate$30([
    _angular_core.HostListener('mouseup', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Object]),
    __metadata$15("design:returntype", void 0)
], exports.ButtonComponent.prototype, "onMouseUp", null);
__decorate$30([
    _angular_core.HostListener('mousedown', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Object]),
    __metadata$15("design:returntype", void 0)
], exports.ButtonComponent.prototype, "onMouseDown", null);
__decorate$30([
    _angular_core.HostListener('onfocus', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Object]),
    __metadata$15("design:returntype", void 0)
], exports.ButtonComponent.prototype, "onFocus", null);
__decorate$30([
    _angular_core.HostListener('onblur', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Object]),
    __metadata$15("design:returntype", void 0)
], exports.ButtonComponent.prototype, "onBlur", null);
__decorate$30([
    _angular_core.HostListener('click', ['$event']),
    __metadata$15("design:type", Function),
    __metadata$15("design:paramtypes", [Object]),
    __metadata$15("design:returntype", void 0)
], exports.ButtonComponent.prototype, "onClick", null);
exports.ButtonComponent = __decorate$30([
    _angular_core.Component({
        selector: 'button[vcl-button]',
        host: {
            '[class.vclButton]': 'true',
        },
        template: "<vcl-icogram [label]=\"label\" [flexLabel]=\"flexLabel\" [prepIcon]=\"prepIcon\" [appIcon]=\"appIcon\"> <ng-content></ng-content> </vcl-icogram> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    }),
    __metadata$15("design:paramtypes", [_angular_core.ElementRef])
], exports.ButtonComponent);

var __decorate$26 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLButtonModule = (function () {
    function VCLButtonModule() {
    }
    return VCLButtonModule;
}());
exports.VCLButtonModule = __decorate$26([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.VCLIcogramModule, exports.L10nModule],
        exports: [exports.ButtonComponent, exports.ButtonStateContentDirective],
        declarations: [exports.ButtonComponent, exports.ButtonStateContentDirective],
        providers: [],
    })
], exports.VCLButtonModule);

var __decorate$32 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        this.offClick = new _angular_core.EventEmitter();
    }
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            // Add a small delay, so any click that causes this directive to render does not trigger an off-click
            var delay$ = rxjs_Observable.Observable.timer(10).first();
            this.sub = rxjs_Observable.Observable.fromEvent(document, 'click')
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
__decorate$32([
    _angular_core.Output('offClick'),
    __metadata$16("design:type", Object)
], OffClickDirective.prototype, "offClick", void 0);
OffClickDirective = __decorate$32([
    _angular_core.Directive({
        selector: '[offClick]',
    }),
    __metadata$16("design:paramtypes", [_angular_core.ElementRef])
], OffClickDirective);

var __decorate$31 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLOffClickModule = (function () {
    function VCLOffClickModule() {
    }
    return VCLOffClickModule;
}());
exports.VCLOffClickModule = __decorate$31([
    _angular_core.NgModule({
        declarations: [OffClickDirective],
        exports: [OffClickDirective]
    })
], exports.VCLOffClickModule);

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
var __decorate$34 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$17 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var PopoverState = {
    Visible: 'visible',
    Void: 'void',
};
exports.PopoverComponent = PopoverComponent_1 = (function (_super) {
    __extends$7(PopoverComponent, _super);
    function PopoverComponent(me) {
        var _this = _super.call(this) || this;
        _this.me = me;
        _this.targetX = AttachmentX.Left;
        _this.targetY = AttachmentY.Bottom;
        _this.attachmentX = AttachmentX.Left;
        _this.attachmentY = AttachmentY.Top;
        _this._visible = false;
        _this.visibleChange = new _angular_core.EventEmitter();
        _this.translateX = 1;
        _this.translateY = 0;
        _this.visibility = 'visible';
        _this.observeChangeValue('target')
            .subscribe(function (target) { return _this.tag = PopoverComponent_1.Tag + "." + target; });
        _this.observeChanges('target', 'targetX', 'targetY', 'attachmentX', 'attachmentY')
            .subscribe(function () { return _this.reposition(); });
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
    PopoverComponent.prototype.ngOnInit = function () {
        this.tag = PopoverComponent_1.Tag + "." + String(this.target);
        var tag = this.tag + ".ngOnInit()";
        if (this.debug)
            console.log(tag, 'this:', this);
    };
    PopoverComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.reposition(); }, 0);
    };
    PopoverComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    PopoverComponent.prototype.onWindowResize = function (ev) {
        this.reposition();
    };
    PopoverComponent.prototype.getTargetPosition = function () {
        var targetEl;
        if (typeof this.target === 'string') {
            targetEl = document.querySelector(this.target) || undefined;
        }
        else if (this.target instanceof HTMLElement) {
            targetEl = this.target;
        }
        else if (this.target instanceof _angular_core.ElementRef && this.target.nativeElement) {
            targetEl = this.target.nativeElement;
        }
        return targetEl instanceof HTMLElement ? targetEl.getBoundingClientRect() : undefined;
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
        var targetPos = this.getTargetPosition();
        if (!targetPos)
            return;
        var ownPos = this.getAttachmentPosition();
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
        if (this.debug) {
            console.log(this.tag + ".reposition()", {
                targetPos: targetPos,
                ownPos: ownPos,
                mustX: mustX,
                isX: isX,
                diffX: diffX,
                mustY: mustY,
                isY: isY,
                diffY: diffY
            });
        }
        this.translateY = this.translateY + diffY;
    };
    return PopoverComponent;
}(ObservableComponent));
exports.PopoverComponent.Tag = 'PopoverComponent';
__decorate$34([
    _angular_core.Input(),
    __metadata$17("design:type", Boolean)
], exports.PopoverComponent.prototype, "debug", void 0);
__decorate$34([
    _angular_core.Input(),
    __metadata$17("design:type", Object)
], exports.PopoverComponent.prototype, "target", void 0);
__decorate$34([
    _angular_core.Input(),
    __metadata$17("design:type", String)
], exports.PopoverComponent.prototype, "targetX", void 0);
__decorate$34([
    _angular_core.Input(),
    __metadata$17("design:type", String)
], exports.PopoverComponent.prototype, "targetY", void 0);
__decorate$34([
    _angular_core.Input(),
    __metadata$17("design:type", String)
], exports.PopoverComponent.prototype, "attachmentX", void 0);
__decorate$34([
    _angular_core.Input(),
    __metadata$17("design:type", String)
], exports.PopoverComponent.prototype, "attachmentY", void 0);
__decorate$34([
    _angular_core.Input(),
    __metadata$17("design:type", Boolean),
    __metadata$17("design:paramtypes", [Boolean])
], exports.PopoverComponent.prototype, "visible", null);
__decorate$34([
    _angular_core.Output(),
    __metadata$17("design:type", Object)
], exports.PopoverComponent.prototype, "visibleChange", void 0);
__decorate$34([
    _angular_core.HostBinding('class.vclLayoutHidden'),
    __metadata$17("design:type", Object),
    __metadata$17("design:paramtypes", [])
], exports.PopoverComponent.prototype, "hidden", null);
__decorate$34([
    _angular_core.HostBinding('style.visibility'),
    __metadata$17("design:type", String)
], exports.PopoverComponent.prototype, "visibility", void 0);
__decorate$34([
    _angular_core.HostBinding('style.transform'),
    __metadata$17("design:type", Object),
    __metadata$17("design:paramtypes", [])
], exports.PopoverComponent.prototype, "transform", null);
__decorate$34([
    _angular_core.HostListener('window:resize', ['$event']),
    __metadata$17("design:type", Function),
    __metadata$17("design:paramtypes", [Object]),
    __metadata$17("design:returntype", void 0)
], exports.PopoverComponent.prototype, "onWindowResize", null);
exports.PopoverComponent = PopoverComponent_1 = __decorate$34([
    _angular_core.Component({
        selector: 'vcl-popover',
        template: '<ng-content></ng-content>',
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        // The close/open animation is set in the application itself through:
        // setAnimations(PopoverComponent, [
        //   trigger('popoverState', [
        //     [..]
        //   ]);
        animations: [_angular_core.trigger('popoverState', [])],
        host: {
            '[@popoverState]': 'popoverState',
            '[class.vclPopOver]': 'true',
            '[style.position]': '"absolute"'
        }
    }),
    __metadata$17("design:paramtypes", [_angular_core.ElementRef])
], exports.PopoverComponent);
var PopoverComponent_1;

var __decorate$33 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLPopoverModule = (function () {
    function VCLPopoverModule() {
    }
    return VCLPopoverModule;
}());
exports.VCLPopoverModule = __decorate$33([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            exports.VCLOffClickModule
        ],
        providers: [],
        exports: [exports.PopoverComponent],
        declarations: [exports.PopoverComponent]
    })
], exports.VCLPopoverModule);

var __decorate$36 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$18 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TokenComponent = (function () {
    function TokenComponent() {
        this.selected = false;
        this.removable = false;
        this.remove = new _angular_core.EventEmitter();
        this.select = new _angular_core.EventEmitter();
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
__decorate$36([
    _angular_core.Input(),
    __metadata$18("design:type", String)
], exports.TokenComponent.prototype, "label", void 0);
__decorate$36([
    _angular_core.HostListener('click', ['$event']),
    __metadata$18("design:type", Function),
    __metadata$18("design:paramtypes", [Event]),
    __metadata$18("design:returntype", void 0)
], exports.TokenComponent.prototype, "onTap", null);
__decorate$36([
    _angular_core.Input(),
    __metadata$18("design:type", Boolean)
], exports.TokenComponent.prototype, "selected", void 0);
__decorate$36([
    _angular_core.Input(),
    __metadata$18("design:type", Boolean)
], exports.TokenComponent.prototype, "removable", void 0);
__decorate$36([
    _angular_core.Output(),
    __metadata$18("design:type", Object)
], exports.TokenComponent.prototype, "remove", void 0);
__decorate$36([
    _angular_core.Output(),
    __metadata$18("design:type", Object)
], exports.TokenComponent.prototype, "select", void 0);
exports.TokenComponent = __decorate$36([
    _angular_core.Component({
        selector: 'vcl-token',
        template: "<span class=\"vclTokenLabel\">{{label}}</span> <button vcl-button *ngIf=\"removable\"  class=\"vclTransparent\" type=\"button\"  title=\"Remove\" appIcon=\"fa:remove\" (click)=\"onRemoveClick($event)\"> </button> ",
        animations: [_angular_core.trigger('checkState', [])],
        host: {
            '[class.vclToken]': 'true',
            '[class.vclSelected]': 'selected',
            '[@checkState]': 'selected'
        }
    })
], exports.TokenComponent);

var __decorate$37 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$19 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$4 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TokenListComponent; }),
    multi: true
};
exports.TokenListComponent = (function () {
    function TokenListComponent() {
        this.selectable = false;
        this.change = new _angular_core.EventEmitter();
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
            var select$ = rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, (_this.tokens.map(function (token) { return token.select.map(function () { return token; }); })));
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
    };
    TokenListComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TokenListComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return TokenListComponent;
}());
__decorate$37([
    _angular_core.ContentChildren(exports.TokenComponent),
    __metadata$19("design:type", _angular_core.QueryList)
], exports.TokenListComponent.prototype, "tokens", void 0);
__decorate$37([
    _angular_core.Input(),
    __metadata$19("design:type", Boolean)
], exports.TokenListComponent.prototype, "selectable", void 0);
__decorate$37([
    _angular_core.Output(),
    __metadata$19("design:type", Object)
], exports.TokenListComponent.prototype, "change", void 0);
exports.TokenListComponent = __decorate$37([
    _angular_core.Component({
        selector: 'vcl-token-list',
        template: '<ng-content></ng-content>',
        host: {
            '[class.vclTokenList]': 'true',
            '[class.vclTokenContainer]': 'true'
        },
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$4]
    })
], exports.TokenListComponent);

var __decorate$38 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$5 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.TokenInputComponent; }),
    multi: true
};
exports.TokenInputComponent = (function () {
    function TokenInputComponent() {
        this.tokens = [];
        this.selectable = true;
        this.tabindex = 0;
        this.focused = false;
        /**
         * remove last token on double-backspace
         */
        this.lastKey = null;
        this.change = new _angular_core.EventEmitter();
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
        var code = ev && (ev.code || ev.key); // fallback for ie11
        if (code == 'Backspace' && this.lastKey == 'Backspace' && this.input.nativeElement.value === '') {
            // remove last token
            this.tokens.pop();
            this.triggerChange();
        }
        else if (code) {
            this.lastKey = code;
        }
    };
    TokenInputComponent.prototype.add = function (label) {
        if (label) {
            this.tokens.push({
                selected: false,
                label: label
            });
            this.input.nativeElement.value = '';
            this.triggerChange();
        }
    };
    TokenInputComponent.prototype.select = function (token) {
        if (this.selectable) {
            token.selected = !token.selected;
            this.triggerChange();
        }
    };
    TokenInputComponent.prototype.remove = function (token) {
        this.tokens = this.tokens.filter(function (t) { return t !== token; });
        this.triggerChange();
    };
    TokenInputComponent.prototype.triggerChange = function () {
        this.change.emit(this.tokens);
        this.onChange(this.tokens);
    };
    TokenInputComponent.prototype.writeValue = function (tokens) {
        if (Array.isArray(tokens)) {
            this.tokens = tokens.map(function (t) { return typeof t === 'string' ? { label: t, selected: false } : t; })
                .filter(function (t) { return typeof t === 'object' && t; });
        }
    };
    TokenInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TokenInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return TokenInputComponent;
}());
__decorate$38([
    _angular_core.ViewChild('input'),
    __metadata$20("design:type", _angular_core.ElementRef)
], exports.TokenInputComponent.prototype, "input", void 0);
__decorate$38([
    _angular_core.Input(),
    __metadata$20("design:type", Boolean)
], exports.TokenInputComponent.prototype, "selectable", void 0);
__decorate$38([
    _angular_core.Input(),
    __metadata$20("design:type", Number)
], exports.TokenInputComponent.prototype, "tabindex", void 0);
__decorate$38([
    _angular_core.HostListener('focus', ['$event']),
    __metadata$20("design:type", Function),
    __metadata$20("design:paramtypes", [Object]),
    __metadata$20("design:returntype", Promise)
], exports.TokenInputComponent.prototype, "onFocus", null);
__decorate$38([
    _angular_core.HostBinding('class.vclFocused'),
    __metadata$20("design:type", Object)
], exports.TokenInputComponent.prototype, "focused", void 0);
__decorate$38([
    _angular_core.HostListener('keydown', ['$event']),
    __metadata$20("design:type", Function),
    __metadata$20("design:paramtypes", [KeyboardEvent]),
    __metadata$20("design:returntype", void 0)
], exports.TokenInputComponent.prototype, "onKeydown", null);
__decorate$38([
    _angular_core.Output(),
    __metadata$20("design:type", Object)
], exports.TokenInputComponent.prototype, "change", void 0);
exports.TokenInputComponent = __decorate$38([
    _angular_core.Component({
        selector: 'vcl-token-input',
        template: "<div class=\"vclTokenContainer\"> <vcl-token *ngFor=\"let token of tokens\" (remove)=\"remove(token)\" (click)=\"select(token)\" [selected]=\"token.selected\" [removable]=\"true\" [attr.tabindex]=\"-1\" [label]=\"token.label\"> </vcl-token> </div> <input  vcl-input #input placeholder=\"Type to add tokens\"  autocomplete=\"off\"  [tabindex]=\"tabindex\" (keyup.enter)=\"add(input.value)\" (focus)=\"onInputFocus()\" (blur)=\"onInputBlur()\" flex /> ",
        host: {
            '[class.vclInput]': 'true',
            '[class.vclTokenInput]': 'true',
            '[class.vclLayoutHorizontal]': 'true',
            '[class.vclLayoutWrap]': 'true',
            '[attr.tabindex]': '-1',
        },
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$5],
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    })
], exports.TokenInputComponent);

var __decorate$35 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLTokenModule = (function () {
    function VCLTokenModule() {
    }
    return VCLTokenModule;
}());
exports.VCLTokenModule = __decorate$35([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule, exports.VCLInputModule, exports.VCLButtonModule, _angular_forms.FormsModule, exports.VCLIconModule],
        exports: [exports.TokenComponent, exports.TokenListComponent, exports.TokenInputComponent],
        declarations: [exports.TokenComponent, exports.TokenListComponent, exports.TokenInputComponent],
        providers: [],
    })
], exports.VCLTokenModule);

var __decorate$39 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$21 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.SelectOption = (function () {
    function SelectOption() {
        this.disabled = false;
        this.selected = false;
    }
    return SelectOption;
}());
__decorate$39([
    _angular_core.ViewChild(_angular_core.TemplateRef),
    __metadata$21("design:type", _angular_core.TemplateRef)
], exports.SelectOption.prototype, "content", void 0);
__decorate$39([
    _angular_core.Input(),
    __metadata$21("design:type", Object)
], exports.SelectOption.prototype, "value", void 0);
__decorate$39([
    _angular_core.Input(),
    __metadata$21("design:type", String)
], exports.SelectOption.prototype, "sublabel", void 0);
__decorate$39([
    _angular_core.Input(),
    __metadata$21("design:type", String)
], exports.SelectOption.prototype, "label", void 0);
__decorate$39([
    _angular_core.Input(),
    __metadata$21("design:type", Boolean)
], exports.SelectOption.prototype, "disabled", void 0);
__decorate$39([
    _angular_core.Input(),
    __metadata$21("design:type", Boolean)
], exports.SelectOption.prototype, "selected", void 0);
exports.SelectOption = __decorate$39([
    _angular_core.Directive({
        selector: 'vcl-select-option'
    })
], exports.SelectOption);

var __decorate$40 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
var DropDirection;
(function (DropDirection) {
    DropDirection[DropDirection["Top"] = 0] = "Top";
    DropDirection[DropDirection["Bottom"] = 1] = "Bottom";
})(DropDirection || (DropDirection = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$6 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.SelectComponent; }),
    multi: true
};
exports.SelectComponent = (function () {
    function SelectComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.selectionMode = exports.SelectionMode.Single;
        this.tabindex = 0;
        this.expanded = false;
        this.listenKeys = true;
        // multi-select
        this.maxSelectableItems = 1;
        // styling
        this.expandedIcon = 'fa:chevron-up';
        this.collapsedIcon = 'fa:chevron-down';
        this.change = new _angular_core.EventEmitter();
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
            return this.selectionMode === exports.SelectionMode.Multiple ? 'multiple' : 'single';
        },
        // String alias for selectionMode
        set: function (value) {
            this.selectionMode = value === 'multiple' ? exports.SelectionMode.Multiple : exports.SelectionMode.Single;
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
            return this.selectionMode === exports.SelectionMode.Single || this.selectedMetaItems.length === 0;
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
        if (this.selectionMode === exports.SelectionMode.Single) {
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
__decorate$40([
    _angular_core.ViewChild('dropdown'),
    __metadata$22("design:type", exports.DropdownComponent)
], exports.SelectComponent.prototype, "dropdown", void 0);
__decorate$40([
    _angular_core.ContentChildren(exports.SelectOption),
    __metadata$22("design:type", _angular_core.QueryList)
], exports.SelectComponent.prototype, "items", void 0);
__decorate$40([
    _angular_core.ViewChild('select'),
    __metadata$22("design:type", _angular_core.ElementRef)
], exports.SelectComponent.prototype, "select", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$22("design:type", Number)
], exports.SelectComponent.prototype, "selectionMode", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$22("design:type", String),
    __metadata$22("design:paramtypes", [String])
], exports.SelectComponent.prototype, "mode", null);
__decorate$40([
    _angular_core.HostBinding('attr.tabindex'),
    _angular_core.Input(),
    __metadata$22("design:type", Object)
], exports.SelectComponent.prototype, "tabindex", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$22("design:type", Boolean)
], exports.SelectComponent.prototype, "expanded", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$22("design:type", Boolean)
], exports.SelectComponent.prototype, "listenKeys", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$22("design:type", Number)
], exports.SelectComponent.prototype, "maxSelectableItems", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$22("design:type", String)
], exports.SelectComponent.prototype, "expandedIcon", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$22("design:type", String)
], exports.SelectComponent.prototype, "collapsedIcon", void 0);
__decorate$40([
    _angular_core.Output('change'),
    __metadata$22("design:type", Object)
], exports.SelectComponent.prototype, "change", void 0);
__decorate$40([
    _angular_core.HostListener('keydown', ['$event']),
    __metadata$22("design:type", Function),
    __metadata$22("design:paramtypes", [Object]),
    __metadata$22("design:returntype", void 0)
], exports.SelectComponent.prototype, "keydown", null);
__decorate$40([
    _angular_core.HostListener('focus', ['$event']),
    __metadata$22("design:type", Function),
    __metadata$22("design:paramtypes", [Object]),
    __metadata$22("design:returntype", Promise)
], exports.SelectComponent.prototype, "onFocus", null);
__decorate$40([
    _angular_core.HostListener('blur', ['$event']),
    __metadata$22("design:type", Function),
    __metadata$22("design:paramtypes", [Object]),
    __metadata$22("design:returntype", void 0)
], exports.SelectComponent.prototype, "onBlur", null);
exports.SelectComponent = __decorate$40([
    _angular_core.Component({
        selector: 'vcl-select',
        template: "<div (offClick)=\"close()\"> <div #select class=\"vclLayoutHorizontal vclSelect vclInputGroupEmb\" [style.marginBottom]=\"0\" > <div *ngIf=\"showDisplayValue\" class=\"vclInput\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle($event)\"> {{displayValue}} </div> <div *ngIf=\"!showDisplayValue\" class=\"vclInput vclTokenInput vclLayoutHorizontal vclLayoutWrap\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle($event)\"> <vcl-token-list> <vcl-token *ngFor=\"let item of selectedItems\" [label]=\"item.label\" [removable]=\"true\" (remove)=\"deselectItem(item, $event)\"></vcl-token> </vcl-token-list> </div> <button vcl-button type=\"button\" tabindex=\"-1\" class=\"vclTransparent vclSquare vclAppended\" [appIcon]=\"expanded ? expandedIcon : collapsedIcon\" (click)=\"toggle()\"> </button> </div> <vcl-dropdown  #dropdown [style.display]=\"expanded ? null : 'none'\" (change)=\"onDropdownChange($event)\" [selectionMode]=\"selectionMode\" [maxSelectableItems]=\"maxSelectableItems\" tabindex=\"-1\" [style.position]=\"'relative'\" [style.top.px]=\"dropdownTop\" [style.width]=\"'100%'\" [style.position]=\"'absolute'\" [style.zIndex]=\"999999\"> <vcl-dropdown-option  *ngFor=\"let item of items\"  [metadata]=\"item\"  [value]=\"item.value\"  [selected]=\"item.selected\"  [disabled]=\"item.disabled\"  [label]=\"item.label\"  [sublabel]=\"item.sublabel\"> </vcl-dropdown-option> </vcl-dropdown> </div> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$6],
        host: {
            '[style.position]': '"relative"',
            '[style.display]': '"block"'
        }
    }),
    __metadata$22("design:paramtypes", [_angular_core.ElementRef,
        _angular_core.ChangeDetectorRef])
], exports.SelectComponent);

var __decorate$25 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLSelectModule = (function () {
    function VCLSelectModule() {
    }
    return VCLSelectModule;
}());
exports.VCLSelectModule = __decorate$25([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule, exports.VCLDropdownModule, exports.VCLButtonModule, exports.VCLOffClickModule, exports.VCLPopoverModule, exports.VCLTokenModule],
        exports: [exports.SelectComponent, exports.SelectOption],
        declarations: [exports.SelectComponent, exports.SelectOption],
        providers: []
    })
], exports.VCLSelectModule);

var __decorate$42 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return ButtonGroupComponent; }),
    multi: true
};
var ButtonGroupComponent = (function () {
    function ButtonGroupComponent() {
        // If `Single`, a single button from the group can be selected
        // If `Multiple` multiple buttons can be selected
        this.selectionMode = SelectionMode$1.Single;
        this.change = new _angular_core.EventEmitter();
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
            var press$ = rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, (_this.buttons.map(function (btn) { return btn.press.map(function () { return btn; }); })));
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
__decorate$42([
    _angular_core.ContentChildren(exports.ButtonComponent),
    __metadata$23("design:type", _angular_core.QueryList)
], ButtonGroupComponent.prototype, "buttons", void 0);
__decorate$42([
    _angular_core.Input(),
    __metadata$23("design:type", Number)
], ButtonGroupComponent.prototype, "selectionMode", void 0);
__decorate$42([
    _angular_core.Input(),
    __metadata$23("design:type", String),
    __metadata$23("design:paramtypes", [String])
], ButtonGroupComponent.prototype, "mode", null);
__decorate$42([
    _angular_core.Output(),
    __metadata$23("design:type", Object)
], ButtonGroupComponent.prototype, "change", void 0);
ButtonGroupComponent = __decorate$42([
    _angular_core.Component({
        selector: 'vcl-button-group',
        host: {
            '[class.vclButtonGroup]': 'true',
        },
        template: "<ng-content></ng-content>",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$7],
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    })
], ButtonGroupComponent);

var __decorate$41 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLButtonGroupModule = (function () {
    function VCLButtonGroupModule() {
    }
    return VCLButtonGroupModule;
}());
exports.VCLButtonGroupModule = __decorate$41([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.VCLButtonModule, exports.L10nModule],
        exports: [ButtonGroupComponent],
        declarations: [ButtonGroupComponent],
        providers: [],
    })
], exports.VCLButtonGroupModule);

var LayerRef = (function () {
    function LayerRef() {
        this.base = 'default';
        this.modal = false;
        this.transparent = false;
        this.fill = false;
        this.stickToBottom = false;
        this.gutterPadding = false;
        this.stateChange = new rxjs_Subject.Subject();
        this.state$ = this.stateChange.asObservable();
    }
    LayerRef.prototype.open = function (attrs) {
        this.visible = true;
        this.attrs = attrs;
        this.stateChange.next({ attrs: attrs, visible: true });
        if (!this.results) {
            this.results = new rxjs_Subject.Subject();
        }
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

var __decorate$45 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.LayerService = (function () {
    function LayerService() {
        this.baseZIndex = 1000;
        this.visibleLayers = [];
        this.layerRegister = new rxjs_ReplaySubject.ReplaySubject();
    }
    Object.defineProperty(LayerService.prototype, "currentZIndex", {
        get: function () {
            return this.baseZIndex + (this.visibleLayers.length * 10);
        },
        enumerable: true,
        configurable: true
    });
    LayerService.prototype.getLayers$ = function (base) {
        if (base === void 0) { base = 'default'; }
        return this.layerRegister.asObservable().filter(function (lr) { return !!lr.ref && lr.ref.base === base; });
    };
    LayerService.prototype.hasVisibleLayers = function () {
        return this.visibleLayers.length > 0;
    };
    LayerService.prototype.getTopLayer = function () {
        return this.visibleLayers.slice().pop();
    };
    LayerService.prototype.closeAll = function (base) {
        this.visibleLayers.forEach(function (layer) { return layer.close(); });
    };
    LayerService.prototype.closeTop = function (base) {
        var layer = this.getTopLayer();
        if (layer) {
            layer.close();
        }
    };
    LayerService.prototype.addVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.concat([layer]);
    };
    LayerService.prototype.removeVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.filter(function (l) { return l !== layer; });
    };
    LayerService.prototype.register = function (layer, injector) {
        if (!(layer instanceof LayerRef)) {
            throw 'Invalid layer';
        }
        this.layerRegister.next({
            ref: layer,
            injector: injector,
            register: true
        });
    };
    LayerService.prototype.unregister = function (layer) {
        this.layerRegister.next({
            ref: layer,
            register: false
        });
    };
    return LayerService;
}());
exports.LayerService = __decorate$45([
    _angular_core.Injectable()
], exports.LayerService);

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
var __decorate$47 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$27 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.LayerRefDirective = (function (_super) {
    __extends$9(LayerRefDirective, _super);
    function LayerRefDirective(templateRef, layerService, injector) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        _this.layerService = layerService;
        _this.injector = injector;
        _this.base = 'default';
        return _this;
    }
    LayerRefDirective.prototype.ngOnInit = function () {
        this.layerService.register(this, this.injector);
    };
    LayerRefDirective.prototype.ngOnDestroy = function () {
        this.layerService.unregister(this);
    };
    return LayerRefDirective;
}(LayerRef));
__decorate$47([
    _angular_core.Input(),
    __metadata$27("design:type", String)
], exports.LayerRefDirective.prototype, "base", void 0);
__decorate$47([
    _angular_core.Input(),
    __metadata$27("design:type", Boolean)
], exports.LayerRefDirective.prototype, "modal", void 0);
__decorate$47([
    _angular_core.Input(),
    __metadata$27("design:type", Boolean)
], exports.LayerRefDirective.prototype, "transparent", void 0);
__decorate$47([
    _angular_core.Input(),
    __metadata$27("design:type", Boolean)
], exports.LayerRefDirective.prototype, "fill", void 0);
__decorate$47([
    _angular_core.Input(),
    __metadata$27("design:type", Boolean)
], exports.LayerRefDirective.prototype, "stickToBottom", void 0);
__decorate$47([
    _angular_core.Input(),
    __metadata$27("design:type", Boolean)
], exports.LayerRefDirective.prototype, "gutterPadding", void 0);
__decorate$47([
    _angular_core.Input(),
    __metadata$27("design:type", String)
], exports.LayerRefDirective.prototype, "customClass", void 0);
exports.LayerRefDirective = __decorate$47([
    _angular_core.Directive({
        selector: '[vcl-layer]',
        exportAs: 'layer',
    }),
    __metadata$27("design:paramtypes", [_angular_core.TemplateRef, exports.LayerService, _angular_core.Injector])
], exports.LayerRefDirective);

var __decorate$46 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$26 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';
exports.LayerContainerComponent = (function () {
    function LayerContainerComponent(cdRef) {
        this.cdRef = cdRef;
        this.zIndex = 1000;
        this.visible = false;
    }
    Object.defineProperty(LayerContainerComponent.prototype, "layerAttrs", {
        get: function () {
            return this._layerAttrs;
        },
        set: function (layerAttrs) {
            this._layerAttrs = layerAttrs;
            if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
                this.wormhole.setAttributes(layerAttrs);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerContainerComponent.prototype, "state", {
        get: function () {
            return this.visible ? 'visible' : 'hidden';
        },
        enumerable: true,
        configurable: true
    });
    LayerContainerComponent.prototype.disconnect = function () {
        if (this.wormhole) {
            this.wormhole.disconnect();
        }
    };
    LayerContainerComponent.prototype.connect = function () {
        if (this.wormhole) {
            this.wormhole.connect();
        }
    };
    LayerContainerComponent.prototype.ngAfterViewInit = function () {
        var layer = this.layer;
        if (layer && this.layerContentContainer) {
            // Creates a wormhole out of the LayerRef
            if (this.layer instanceof exports.LayerRefDirective) {
                this.wormhole = new TemplateWormhole(this.layer.templateRef, this.layerContentContainer);
            }
            else {
                var component = getMetadata(COMPONENT_LAYER_ANNOTATION_ID, this.layer.constructor);
                // The created injector injects this instance as LayerRef
                // It is used in the component instance created within the wormhole
                var layerInjector = _angular_core.ReflectiveInjector.resolveAndCreate([{
                        provide: LayerRef,
                        useValue: this.layer
                    }], this.injector);
                this.wormhole = component ? new ComponentWormhole(component, this.layerContentContainer, layerInjector) : undefined;
            }
            if (!this.wormhole) {
                throw 'invalid layer';
            }
            this.wormhole.connect({
                attrs: this._layerAttrs
            });
        }
    };
    LayerContainerComponent.prototype.ngOnDestroy = function () {
        if (this.wormhole) {
            this.wormhole.disconnect();
        }
    };
    LayerContainerComponent.prototype.triggerOffClick = function (event) {
        if (event.target === this.container.nativeElement) {
            this.layer.offClick();
        }
    };
    return LayerContainerComponent;
}());
__decorate$46([
    _angular_core.ViewChild('container'),
    __metadata$26("design:type", _angular_core.ElementRef)
], exports.LayerContainerComponent.prototype, "container", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$26("design:type", LayerRef)
], exports.LayerContainerComponent.prototype, "layer", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$26("design:type", Object),
    __metadata$26("design:paramtypes", [Object])
], exports.LayerContainerComponent.prototype, "layerAttrs", null);
__decorate$46([
    _angular_core.Input(),
    __metadata$26("design:type", Object)
], exports.LayerContainerComponent.prototype, "zIndex", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$26("design:type", Object)
], exports.LayerContainerComponent.prototype, "injector", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$26("design:type", Boolean)
], exports.LayerContainerComponent.prototype, "visible", void 0);
__decorate$46([
    _angular_core.ViewChild('layerContent', { read: _angular_core.ViewContainerRef }),
    __metadata$26("design:type", _angular_core.ViewContainerRef)
], exports.LayerContainerComponent.prototype, "layerContentContainer", void 0);
exports.LayerContainerComponent = __decorate$46([
    _angular_core.Component({
        template: "<div  #container  class=\"vclLayer\" [ngClass]=\"layer.customClass\" [class.vclTransparent]=\"layer.transparent\" [class.vclLayerFill]=\"layer.fill\" [class.vclLayerStickToBottom]=\"layer.stickToBottom\" [style.z-index]=\"zIndex + 1\" [style.pointer-events]=\"'all'\"  role=\"dialog\"  (click)='triggerOffClick($event)' > <div class=\"vclLayerBox\" [class.vclLayerGutterPadding]=\"layer.gutterPadding\" [style.pointer-events]=\"'all'\" [style.z-index]=\"zIndex + 2\"> <div #layerContent></div> </div> </div> <div *ngIf=\"layer.modal\" class=\"vclLayerCover\" [@layerState]=\"state\" [style.z-index]=\"zIndex\"></div> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        animations: [
            _angular_animations.trigger('boxState', []),
            _angular_animations.trigger('layerState', [])
        ],
        host: {
            '[@boxState]': 'true',
            '[@layerState]': 'true'
        }
    }),
    __metadata$26("design:paramtypes", [_angular_core.ChangeDetectorRef])
], exports.LayerContainerComponent);

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
var __decorate$44 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$25 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.LayerManagerService = (function (_super) {
    __extends$8(LayerManagerService, _super);
    function LayerManagerService(layerService, appRef, injector) {
        var _this = _super.call(this, appRef, undefined, injector) || this;
        _this.layerService = layerService;
        _this.injector = injector;
        _this.layerMap = new Map();
        _this.name = 'default';
        _this.sub = _this.layerService
            .getLayers$(_this.name)
            .subscribe(function (l) {
            if (l.register) {
                _this.registerLayer(l.ref, l.injector);
            }
            else {
                _this.unregisterLayer(l.ref);
            }
        });
        return _this;
    }
    LayerManagerService.prototype.registerLayer = function (layer, injector) {
        var _this = this;
        var containerWormholeRef = this.createWormhole(exports.LayerContainerComponent);
        var layerSub = layer.state$.subscribe(function (state$$1) {
            if (state$$1.visible && !containerWormholeRef.isConnected) {
                containerWormholeRef.connect({
                    attrs: {
                        layer: layer,
                        zIndex: _this.layerService.currentZIndex,
                        layerAttrs: state$$1.attrs,
                        injector: injector || _this.injector
                    }
                });
                _this.layerService.addVisibleLayer(layer);
            }
            else if (state$$1.visible) {
                containerWormholeRef.setAttributes({
                    layerAttrs: state$$1.attrs
                });
            }
            else {
                containerWormholeRef.disconnect();
                _this.layerService.removeVisibleLayer(layer);
            }
        });
        this.layerMap.set(layer, {
            subscription: layerSub,
            wormhole: containerWormholeRef
        });
    };
    LayerManagerService.prototype.unregisterLayer = function (layer) {
        layer.close();
        var meta = this.layerMap.get(layer);
        if (meta) {
            meta.subscription.unsubscribe();
            meta.wormhole.disconnect();
        }
        this.layerMap.delete(layer);
    };
    LayerManagerService.prototype.ngOnDestroy = function () {
        var _this = this;
        this.clearWormholes();
        this.layerMap.forEach(function (meta, layer) { return _this.unregisterLayer(layer); });
        this.sub && this.sub.unsubscribe();
    };
    return LayerManagerService;
}(DomWormholeHost));
exports.LayerManagerService = __decorate$44([
    _angular_core.Injectable(),
    __metadata$25("design:paramtypes", [exports.LayerService, _angular_core.ApplicationRef, _angular_core.Injector])
], exports.LayerManagerService);

var __decorate$43 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$24 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CHILD_LAYER_CONFIG = new _angular_core.OpaqueToken('@ng-vcl/ng-vcl#child_layer_config');
// The @Layer annotation
function Layer(component) {
    return function (target) {
        _angular_core.Injectable()(target);
        defineMetadata(COMPONENT_LAYER_ANNOTATION_ID, component, target);
    };
}
exports.VCLLayerModule = VCLLayerModule_1 = (function () {
    function VCLLayerModule(configs, layerService, layerManagerService, injector) {
        var _this = this;
        this.configs = configs;
        this.layerService = layerService;
        this.layerManagerService = layerManagerService;
        this.injector = injector;
        if (configs) {
            configs.forEach(function (config) {
                (config.layers || []).forEach(function (layerCls) {
                    var layerRef = _this.injector.get(layerCls);
                    _this.layerService.register(layerRef, injector);
                });
            });
        }
    }
    VCLLayerModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return { ngModule: VCLLayerModule_1, providers: [
                exports.LayerService,
                exports.LayerManagerService
            ].concat((config.layers || []), [
                {
                    provide: LayerRef,
                    useValue: null
                },
                {
                    provide: CHILD_LAYER_CONFIG,
                    multi: true,
                    useValue: config
                }
            ]) };
    };
    VCLLayerModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: VCLLayerModule_1,
            providers: (config.layers || []).concat([
                {
                    provide: CHILD_LAYER_CONFIG,
                    multi: true,
                    useValue: config
                }
            ])
        };
    };
    return VCLLayerModule;
}());
exports.VCLLayerModule = VCLLayerModule_1 = __decorate$43([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            exports.VCLWormholeModule
        ],
        exports: [exports.LayerRefDirective, exports.LayerContainerComponent],
        declarations: [exports.LayerRefDirective, exports.LayerContainerComponent],
        entryComponents: [exports.LayerContainerComponent],
        providers: []
    }),
    __param$3(0, _angular_core.Inject(CHILD_LAYER_CONFIG)),
    __metadata$24("design:paramtypes", [Array, exports.LayerService,
        exports.LayerManagerService,
        _angular_core.Injector])
], exports.VCLLayerModule);
var VCLLayerModule_1;

var __decorate$50 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$29 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TabLabelDirective = (function () {
    function TabLabelDirective() {
    }
    return TabLabelDirective;
}());
TabLabelDirective = __decorate$50([
    _angular_core.Directive({ selector: '[vcl-tab-label]' })
], TabLabelDirective);
var TabComponent = (function () {
    function TabComponent() {
        this.disabled = false;
        this.tabClass = '';
    }
    return TabComponent;
}());
__decorate$50([
    _angular_core.ContentChild(TabLabelDirective, { read: _angular_core.TemplateRef }),
    __metadata$29("design:type", TabLabelDirective)
], TabComponent.prototype, "label", void 0);
__decorate$50([
    _angular_core.ViewChild(_angular_core.TemplateRef),
    __metadata$29("design:type", _angular_core.TemplateRef)
], TabComponent.prototype, "content", void 0);
__decorate$50([
    _angular_core.Input(),
    __metadata$29("design:type", Object)
], TabComponent.prototype, "disabled", void 0);
__decorate$50([
    _angular_core.Input(),
    __metadata$29("design:type", String)
], TabComponent.prototype, "tabClass", void 0);
TabComponent = __decorate$50([
    _angular_core.Component({
        selector: 'vcl-tab',
        template: '<ng-template><ng-content></ng-content></ng-template>'
    })
], TabComponent);

var __decorate$49 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$28 = (this && this.__metadata) || function (k, v) {
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
        this.selectedTabIndexChange$ = new _angular_core.EventEmitter();
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
__decorate$49([
    _angular_core.ViewChild('tabContent', { read: _angular_core.ViewContainerRef }),
    __metadata$28("design:type", _angular_core.ViewContainerRef),
    __metadata$28("design:paramtypes", [_angular_core.ViewContainerRef])
], TabNavComponent.prototype, "tabContent", null);
__decorate$49([
    _angular_core.ContentChildren(TabComponent),
    __metadata$28("design:type", _angular_core.QueryList)
], TabNavComponent.prototype, "tabs", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$28("design:type", String)
], TabNavComponent.prototype, "layout", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$28("design:type", String)
], TabNavComponent.prototype, "tabbableClass", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$28("design:type", String)
], TabNavComponent.prototype, "tabsClass", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$28("design:type", String)
], TabNavComponent.prototype, "tabContentClass", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$28("design:type", Boolean)
], TabNavComponent.prototype, "borders", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$28("design:type", Number)
], TabNavComponent.prototype, "selectedTabIndex", void 0);
__decorate$49([
    _angular_core.Output(),
    __metadata$28("design:type", rxjs_Observable.Observable),
    __metadata$28("design:paramtypes", [])
], TabNavComponent.prototype, "selectedTabIndexChange", null);
TabNavComponent = __decorate$49([
    _angular_core.Component({
        selector: 'vcl-tab-nav',
        template: "<div class=\"vclTabbable {{tabbableClass}}\" [class.vclTabsLeft]=\"layout==='left'\" [class.vclTabsRight]=\"layout==='right'\"> <div class=\"vclTabs {{tabsClass}}\" [class.vclTabStyleUni]=\"!!borders\" role=\"tablist\"> <div *ngFor=\"let tab of tabs; let i = index\" class=\"vclTab {{tab.tabClass}}\" role=\"tab\" [class.vclDisabled]=\"tab.disabled\" [class.vclSelected]=\"selectedTabIndex===i\" [class.aria-selected]=\"selectedTabIndex===i\" (click)=\"selectTab(tab)\"> <span class=\"vclTabLabel\">  <wormhole [connect]=\"tab.label\"></wormhole> </span> </div> </div> <div class=\"vclTabContent {{tabContentClass}}\" [class.vclNoBorder]=\"!borders\"> <div role=\"tabpanel\" class=\"vclTabPanel\"> <div #tabContent></div> </div> <div role=\"tabpanel\" class=\"vclTabPanel\"> <ng-content></ng-content> </div> </div> </div> "
    })
], TabNavComponent);

var __decorate$48 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLTabNavModule = (function () {
    function VCLTabNavModule() {
    }
    return VCLTabNavModule;
}());
exports.VCLTabNavModule = __decorate$48([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule, exports.VCLWormholeModule],
        exports: [TabComponent, TabLabelDirective, TabNavComponent],
        declarations: [TabComponent, TabLabelDirective, TabNavComponent],
        providers: [],
    })
], exports.VCLTabNavModule);

var __decorate$52 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$30 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NavigationItemComponent = NavigationItemComponent_1 = (function () {
    function NavigationItemComponent() {
        this.active = true;
        this.selected = false;
        this.opened = false;
        this.heading = false;
        this.class = '';
    }
    /**
     * transforms this NavigationItemComponent insto an object,
     * so it can be handled the same way as an inputList
     */
    NavigationItemComponent.prototype.toObject = function () {
        var ret = {
            label: this.label,
            active: this.active,
            selected: this.selected,
            opened: this.opened,
            heading: this.heading,
            href: this.href,
            prepIcon: this.prepIcon,
            appIcon: this.appIcon,
            class: this.class
        };
        if (this.route) {
            ret['route'] = this.route;
            if (!Array.isArray(ret['route']))
                ret['route'] = [ret['route']]; // force array
        }
        // add nested items
        var ar = this.items.toArray();
        ar.shift(); // remove first because 'this' is contained
        var items = ar.map(function (navItemCom) { return navItemCom.toObject(); });
        if (items.length > 0)
            ret['items'] = items; // only add if length>0 to not show nested-icons
        return ret;
    };
    return NavigationItemComponent;
}());
__decorate$52([
    _angular_core.Input('label'),
    __metadata$30("design:type", String)
], NavigationItemComponent.prototype, "label", void 0);
__decorate$52([
    _angular_core.Input('route'),
    __metadata$30("design:type", Object)
], NavigationItemComponent.prototype, "route", void 0);
__decorate$52([
    _angular_core.ContentChildren(NavigationItemComponent_1),
    __metadata$30("design:type", _angular_core.QueryList)
], NavigationItemComponent.prototype, "items", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", Boolean)
], NavigationItemComponent.prototype, "active", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", Boolean)
], NavigationItemComponent.prototype, "selected", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", Boolean)
], NavigationItemComponent.prototype, "opened", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", Object)
], NavigationItemComponent.prototype, "heading", void 0);
__decorate$52([
    _angular_core.Input('href'),
    __metadata$30("design:type", String)
], NavigationItemComponent.prototype, "href", void 0);
__decorate$52([
    _angular_core.Input('prepIcon'),
    __metadata$30("design:type", String)
], NavigationItemComponent.prototype, "prepIcon", void 0);
__decorate$52([
    _angular_core.Input('appIcon'),
    __metadata$30("design:type", String)
], NavigationItemComponent.prototype, "appIcon", void 0);
__decorate$52([
    _angular_core.Input('class'),
    __metadata$30("design:type", String)
], NavigationItemComponent.prototype, "class", void 0);
NavigationItemComponent = NavigationItemComponent_1 = __decorate$52([
    _angular_core.Directive({
        selector: 'vcl-navitem'
    }),
    __metadata$30("design:paramtypes", [])
], NavigationItemComponent);
var NavigationComponent = (function () {
    //  isVert: boolean = true;
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
        this.type = 'horizontal';
        this.subLevelHintIconClosed = 'fa:chevron-right';
        this.subLevelHintIconOpened = 'fa:chevron-down';
        this.subLevelHintIconSide = 'right';
        this.navigationItems = [];
        this.select = new _angular_core.EventEmitter();
    }
    NavigationComponent.prototype.ngAfterContentInit = function () {
        var templateItemsAr = this.templateItems.toArray();
        if (templateItemsAr.length > 0) {
            var items = templateItemsAr.map(function (i) { return i.toObject(); });
            this.navigationItems = items;
        }
        var selectedItem = this._navigationItems.filter(function (item) { return item.selected; })[0];
        if (selectedItem) {
            this.selectItem(selectedItem);
        }
    };
    Object.defineProperty(NavigationComponent.prototype, "_navigationItems", {
        get: function () {
            return this.navigationItems.filter(function (item) { return item.active; });
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
    NavigationComponent.prototype.getPrepIcon = function (item) {
        return item.items && this.subLevelHintIconSide === 'left'
            ? item.opened
                ? this.subLevelHintIconOpened
                : this.subLevelHintIconClosed
            : item.prepIcon;
    };
    NavigationComponent.prototype.getAppIcon = function (item) {
        return item.items && this.subLevelHintIconSide === 'right'
            ? item.opened
                ? this.subLevelHintIconOpened
                : this.subLevelHintIconClosed
            : item.appIcon;
    };
    NavigationComponent.prototype.selectItem = function (item) {
        if (item == this.selectedItem || item.items) {
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
            this.router.navigate(item.route);
        }
        this.select.emit(item);
    };
    NavigationComponent.prototype.onSelect = function (item) {
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        this.selectedItem = item;
        this.select.emit(item);
    };
    NavigationComponent.prototype.toggleMenu = function (item) {
        item.opened = !item.opened;
    };
    return NavigationComponent;
}());
__decorate$52([
    _angular_core.Input('ident'),
    __metadata$30("design:type", String)
], NavigationComponent.prototype, "ident", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", Object)
], NavigationComponent.prototype, "selectedItem", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], NavigationComponent.prototype, "ariaRole", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", Number)
], NavigationComponent.prototype, "tabindex", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], NavigationComponent.prototype, "type", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], NavigationComponent.prototype, "subLevelHintIconClosed", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], NavigationComponent.prototype, "subLevelHintIconOpened", void 0);
__decorate$52([
    _angular_core.Input('subLevelHintIconSide'),
    __metadata$30("design:type", String)
], NavigationComponent.prototype, "subLevelHintIconSide", void 0);
__decorate$52([
    _angular_core.ContentChildren(NavigationItemComponent),
    __metadata$30("design:type", _angular_core.QueryList)
], NavigationComponent.prototype, "templateItems", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$30("design:type", Array)
], NavigationComponent.prototype, "navigationItems", void 0);
__decorate$52([
    _angular_core.Output(),
    __metadata$30("design:type", Object)
], NavigationComponent.prototype, "select", void 0);
__decorate$52([
    _angular_core.HostBinding('class.vclVertical'),
    __metadata$30("design:type", Object),
    __metadata$30("design:paramtypes", [])
], NavigationComponent.prototype, "isVertical", null);
NavigationComponent = __decorate$52([
    _angular_core.Component({
        selector: 'vcl-navigation',
        host: {
            '[class.vclNavigation]': 'true'
        },
        template: "  <ul> <li *ngFor=\"let item of navigationItems\" [class.vclSelected]=\"item.selected && !item.items\" [class.vclOpen]=\"item.opened\" [class.vclClose]=\"!item.opened\" [class.vclNavigationHeading]=\"item.heading\" [class.vclNavigationItem]=\"!item.heading\" [attr.touch-action]=\"touchAction\" [attr.aria-selected]=\"item.selected\" [attr.role]=\"item.heading && 'sectionhead' || ariaRole\" [attr.tabindex]=\"tabindex\" [ngClass]=\"item.class\" > <span *ngIf=\"item.heading\"> {{item.label | loc}} </span> <a vcl-link class=\"vclNavigationItemLabel\" *ngIf=\"!item.heading\" [label]=\"item.label | loc\" [href]=\"item.href\" [prepIcon]=\"getPrepIcon(item)\" [appIcon]=\"getAppIcon(item)\" (click)=\"item.items && toggleMenu(item)\" (click)=\"selectItem(item)\"> </a> <vcl-navigation *ngIf=\"item.items\" [navigationItems]=\"item.items\" [type]=\"type\" [subLevelHintIconOpened]=\"subLevelHintIconOpened\" [subLevelHintIconClosed]=\"subLevelHintIconClosed\" [subLevelHintIconSide]=\"subLevelHintIconSide\" [selectedItem]=\"selectedItem\" (select)=\"onSelect($event)\"> </vcl-navigation> </li> </ul> ",
    }),
    __metadata$30("design:paramtypes", [_angular_router.Router])
], NavigationComponent);
var NavigationItemComponent_1;

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
var __decorate$54 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$31 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$4 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LinkComponent = (function (_super) {
    __extends$10(LinkComponent, _super);
    function LinkComponent(l10n) {
        var _this = _super.call(this) || this;
        _this.l10n = l10n;
        _this.locLabel$ = _this.observeChangeValue('label').switchMap(function (label) { return _this.l10n ? _this.l10n.localize(label) : rxjs_Observable.Observable.of(label); });
        _this.locTitle$ = _this.observeChangeValue('title').switchMap(function (title) { return _this.l10n ? _this.l10n.localize(title) : rxjs_Observable.Observable.of(title); });
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
__decorate$54([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "href", void 0);
__decorate$54([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "label", void 0);
__decorate$54([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "title", void 0);
__decorate$54([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "prepIcon", void 0);
__decorate$54([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "appIcon", void 0);
__decorate$54([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "scheme", void 0);
__decorate$54([
    _angular_core.HostBinding('class.vclDisabled'),
    _angular_core.Input(),
    __metadata$31("design:type", Boolean)
], LinkComponent.prototype, "disabled", void 0);
__decorate$54([
    _angular_core.HostBinding('attr.title'),
    _angular_core.HostBinding('attr.aria-label'),
    __metadata$31("design:type", String)
], LinkComponent.prototype, "locTitle", void 0);
__decorate$54([
    _angular_core.HostBinding('style.cursor'),
    __metadata$31("design:type", Object),
    __metadata$31("design:paramtypes", [])
], LinkComponent.prototype, "styleCursor", null);
__decorate$54([
    _angular_core.HostBinding('attr.href'),
    __metadata$31("design:type", String),
    __metadata$31("design:paramtypes", [])
], LinkComponent.prototype, "attrHref", null);
__decorate$54([
    _angular_core.HostBinding('class.vclContentLink'),
    __metadata$31("design:type", Object),
    __metadata$31("design:paramtypes", [])
], LinkComponent.prototype, "useIcogram", null);
LinkComponent = __decorate$54([
    _angular_core.Component({
        selector: '[vcl-link]',
        template: "<vcl-icogram *ngIf=\"useIcogram\" [label]=\"(locLabel$ | async) || href\" [prepIcon]=\"prepIcon\" [appIcon]=\"appIcon\"> <ng-content></ng-content> </vcl-icogram> <ng-container *ngIf=\"!useIcogram\"> {{(locLabel$ | async) || href}} <ng-content></ng-content> </ng-container> "
    }),
    __param$4(0, _angular_core.Optional()),
    __metadata$31("design:paramtypes", [exports.L10nService])
], LinkComponent);

var __decorate$53 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLLinkModule = (function () {
    function VCLLinkModule() {
    }
    return VCLLinkModule;
}());
exports.VCLLinkModule = __decorate$53([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule, exports.VCLIcogramModule],
        exports: [LinkComponent],
        declarations: [LinkComponent],
        providers: [],
    })
], exports.VCLLinkModule);

var __decorate$51 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLNavigationModule = (function () {
    function VCLNavigationModule() {
    }
    return VCLNavigationModule;
}());
exports.VCLNavigationModule = __decorate$51([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule, exports.VCLLinkModule],
        exports: [NavigationComponent, NavigationItemComponent],
        declarations: [NavigationComponent, NavigationItemComponent],
        providers: [],
    })
], exports.VCLNavigationModule);

var __decorate$56 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$32 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.ariaLevel = 1;
    }
    return ToolbarComponent;
}());
__decorate$56([
    _angular_core.Input(),
    __metadata$32("design:type", Number)
], ToolbarComponent.prototype, "ariaLevel", void 0);
ToolbarComponent = __decorate$56([
    _angular_core.Component({
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
    __metadata$32("design:paramtypes", [])
], ToolbarComponent);

var __decorate$55 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLToolbarModule = (function () {
    function VCLToolbarModule() {
    }
    return VCLToolbarModule;
}());
exports.VCLToolbarModule = __decorate$55([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule],
        exports: [ToolbarComponent],
        declarations: [ToolbarComponent],
        providers: [],
    })
], exports.VCLToolbarModule);

var __decorate$58 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$33 = (this && this.__metadata) || function (k, v) {
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
    _angular_core.Input(),
    __metadata$33("design:type", Number)
], ProgressBarComponent.prototype, "value", void 0);
__decorate$58([
    _angular_core.Input(),
    __metadata$33("design:type", Number)
], ProgressBarComponent.prototype, "secondaryValue", void 0);
__decorate$58([
    _angular_core.Input(),
    __metadata$33("design:type", Number)
], ProgressBarComponent.prototype, "minValue", void 0);
__decorate$58([
    _angular_core.Input(),
    __metadata$33("design:type", Number)
], ProgressBarComponent.prototype, "maxValue", void 0);
__decorate$58([
    _angular_core.Input(),
    __metadata$33("design:type", Boolean)
], ProgressBarComponent.prototype, "indeterminate", void 0);
__decorate$58([
    _angular_core.Input(),
    __metadata$33("design:type", String)
], ProgressBarComponent.prototype, "label", void 0);
ProgressBarComponent = __decorate$58([
    _angular_core.Component({
        selector: 'vcl-progress-bar',
        template: "<div class=\"vclProgressBar\" [attr.aria-valuenow]=\"value\"  [attr.aria-valuemin]=\"minValue\"  [attr.aria-valuemax]=\"maxValue\"  [attr.aria-valuetext]=\"label\" [class.vclIndeterminate]=\"showIndeterminate\" > <div *ngIf=\"showValue\" class=\"vclProgress vclPrimary vclLayoutFit\" [style.transform]=\"transformValue\"></div> <div *ngIf=\"showSecondaryValue\" class=\"vclProgress vclSecondary vclLayoutFit\" [style.transform]=\"transformSecondaryValue\"></div> <div *ngIf=\"showIndeterminate\" class=\"vclProgress vclPrimary vclLayoutFit\"></div> </div> ",
        host: {
            '[attr.role]': '"progressbar"',
        },
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    })
], ProgressBarComponent);

var __decorate$57 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLProgressBarModule = (function () {
    function VCLProgressBarModule() {
    }
    return VCLProgressBarModule;
}());
exports.VCLProgressBarModule = __decorate$57([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule],
        exports: [ProgressBarComponent],
        declarations: [ProgressBarComponent]
    })
], exports.VCLProgressBarModule);

var __decorate$60 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$34 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$8 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.RadioButtonComponent; }),
    multi: true
};
exports.RadioButtonComponent = (function () {
    function RadioButtonComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.checkedIcon = 'fa:dot-circle-o';
        this.uncheckedIcon = 'fa:circle-o';
        this.disabled = false;
        this.labelPosition = 'right';
        this.tabindex = 0;
        this.checked = false;
        this.checkedChange = new _angular_core.EventEmitter();
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
    _angular_core.Input(),
    __metadata$34("design:type", Object)
], exports.RadioButtonComponent.prototype, "checkedIcon", void 0);
__decorate$60([
    _angular_core.Input(),
    __metadata$34("design:type", Object)
], exports.RadioButtonComponent.prototype, "uncheckedIcon", void 0);
__decorate$60([
    _angular_core.HostBinding('attr.aria-disabled'),
    _angular_core.HostBinding('class.vclDisabled'),
    _angular_core.Input(),
    __metadata$34("design:type", Object)
], exports.RadioButtonComponent.prototype, "disabled", void 0);
__decorate$60([
    _angular_core.Input('value'),
    __metadata$34("design:type", Object)
], exports.RadioButtonComponent.prototype, "value", void 0);
__decorate$60([
    _angular_core.Input(),
    __metadata$34("design:type", String)
], exports.RadioButtonComponent.prototype, "labelPosition", void 0);
__decorate$60([
    _angular_core.Input(),
    __metadata$34("design:type", String)
], exports.RadioButtonComponent.prototype, "label", void 0);
__decorate$60([
    _angular_core.HostBinding(),
    __metadata$34("design:type", Object)
], exports.RadioButtonComponent.prototype, "tabindex", void 0);
__decorate$60([
    _angular_core.HostBinding('attr.checked'),
    _angular_core.Input(),
    __metadata$34("design:type", Boolean)
], exports.RadioButtonComponent.prototype, "checked", void 0);
__decorate$60([
    _angular_core.Output(),
    __metadata$34("design:type", Object)
], exports.RadioButtonComponent.prototype, "checkedChange", void 0);
__decorate$60([
    _angular_core.HostListener('keydown', ['$event']),
    __metadata$34("design:type", Function),
    __metadata$34("design:paramtypes", [KeyboardEvent]),
    __metadata$34("design:returntype", void 0)
], exports.RadioButtonComponent.prototype, "onKeydown", null);
__decorate$60([
    _angular_core.HostListener('click', ['$event']),
    __metadata$34("design:type", Function),
    __metadata$34("design:paramtypes", [Event]),
    __metadata$34("design:returntype", void 0)
], exports.RadioButtonComponent.prototype, "onTap", null);
exports.RadioButtonComponent = __decorate$60([
    _angular_core.Component({
        selector: 'vcl-radio-button',
        template: "<vcl-icon [icon]=\"checked ? checkedIcon : uncheckedIcon\" *ngIf=\"labelPosition=='right'\"></vcl-icon> <label vcl-form-control-label *ngIf=\"label\" [label]=\"label\"></label> <ng-content></ng-content> <vcl-icon [icon]=\"checked ? checkedIcon : uncheckedIcon\" *ngIf=\"labelPosition=='left'\"></vcl-icon> ",
        host: {
            '[attr.role]': '"radio"',
            '[class.vclRadioButton]': 'true',
            '[style.userSelect]': '"none"'
        },
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$8]
    }),
    __metadata$34("design:paramtypes", [_angular_core.ElementRef, _angular_core.ChangeDetectorRef])
], exports.RadioButtonComponent);

var __decorate$61 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$35 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectionMode$2;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(SelectionMode$2 || (SelectionMode$2 = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$9 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.RadioGroupComponent; }),
    multi: true
};
exports.RadioGroupComponent = (function () {
    function RadioGroupComponent() {
        this.change = new _angular_core.EventEmitter();
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
            var checked$ = rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, (_this.radioButtons.map(function (rbtn, idx) { return rbtn.checkedChange.map(function () { return ({ rbtn: rbtn, idx: idx }); }); })));
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
    _angular_core.Output(),
    __metadata$35("design:type", Object)
], exports.RadioGroupComponent.prototype, "change", void 0);
__decorate$61([
    _angular_core.ContentChildren(exports.RadioButtonComponent),
    __metadata$35("design:type", _angular_core.QueryList)
], exports.RadioGroupComponent.prototype, "radioButtons", void 0);
exports.RadioGroupComponent = __decorate$61([
    _angular_core.Component({
        selector: 'vcl-radio-group',
        template: "<ng-content></ng-content>",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$9],
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    })
], exports.RadioGroupComponent);

var __decorate$63 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$36 = (this && this.__metadata) || function (k, v) {
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
    _angular_core.ViewChild('content'),
    __metadata$36("design:type", _angular_core.ElementRef)
], FormControlLabelComponent.prototype, "content", void 0);
__decorate$63([
    _angular_core.Input(),
    _angular_core.HostBinding('class.vclDisabled'),
    __metadata$36("design:type", Object)
], FormControlLabelComponent.prototype, "disabled", void 0);
__decorate$63([
    _angular_core.Input(),
    __metadata$36("design:type", String)
], FormControlLabelComponent.prototype, "requiredIndicatorCharacter", void 0);
__decorate$63([
    _angular_core.Input(),
    __metadata$36("design:type", String)
], FormControlLabelComponent.prototype, "label", void 0);
__decorate$63([
    _angular_core.Input(),
    __metadata$36("design:type", String)
], FormControlLabelComponent.prototype, "subLabel", void 0);
__decorate$63([
    _angular_core.HostBinding('class.vclFormControlLabelWrapping'),
    _angular_core.Input(),
    __metadata$36("design:type", Object)
], FormControlLabelComponent.prototype, "wrapping", void 0);
__decorate$63([
    _angular_core.Input(),
    __metadata$36("design:type", Boolean)
], FormControlLabelComponent.prototype, "required", void 0);
__decorate$63([
    _angular_core.Input(),
    __metadata$36("design:type", String)
], FormControlLabelComponent.prototype, "requiredIndLabel", void 0);
FormControlLabelComponent = __decorate$63([
    _angular_core.Component({
        selector: 'label[vcl-form-control-label]',
        template: "{{label | loc}} <em *ngIf=\"required\" class=\"vclRequiredIndicator\" aria-hidden=\"true\" [attr.aria-label]=\"requiredIndLabel | loc\"> {{requiredIndicatorCharacter}} </em> <span *ngIf=\"subLabel\" class=\"vclFormControlSubLabel\">{{subLabel | loc}}</span> <!--<span #content><ng-content></ng-content></span> --> <ng-content></ng-content> ",
        host: {
            '[class.vclFormControlLabel]': 'true',
        },
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    })
], FormControlLabelComponent);

var __decorate$62 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLFormControlLabelModule = (function () {
    function VCLFormControlLabelModule() {
    }
    return VCLFormControlLabelModule;
}());
exports.VCLFormControlLabelModule = __decorate$62([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.VCLIconModule, exports.L10nModule],
        exports: [FormControlLabelComponent],
        declarations: [FormControlLabelComponent]
    })
], exports.VCLFormControlLabelModule);

var __decorate$59 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLRadioButtonModule = (function () {
    function VCLRadioButtonModule() {
    }
    return VCLRadioButtonModule;
}());
exports.VCLRadioButtonModule = __decorate$59([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.VCLIconModule, exports.VCLFormControlLabelModule],
        exports: [exports.RadioButtonComponent, exports.RadioGroupComponent],
        declarations: [exports.RadioButtonComponent, exports.RadioGroupComponent]
    })
], exports.VCLRadioButtonModule);

var __decorate$65 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$37 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$10 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.CheckboxComponent; }),
    multi: true
};
exports.CheckboxComponent = (function () {
    function CheckboxComponent(elementRef) {
        this.elementRef = elementRef;
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
        this.checkedChange = new _angular_core.EventEmitter();
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
    _angular_core.HostBinding(),
    __metadata$37("design:type", Object)
], exports.CheckboxComponent.prototype, "tabindex", void 0);
__decorate$65([
    _angular_core.Input(),
    __metadata$37("design:type", String)
], exports.CheckboxComponent.prototype, "checkedIcon", void 0);
__decorate$65([
    _angular_core.Input(),
    __metadata$37("design:type", String)
], exports.CheckboxComponent.prototype, "uncheckedIcon", void 0);
__decorate$65([
    _angular_core.HostBinding('attr.aria-disabled'),
    _angular_core.HostBinding('class.vclDisabled'),
    _angular_core.Input(),
    __metadata$37("design:type", Boolean)
], exports.CheckboxComponent.prototype, "disabled", void 0);
__decorate$65([
    _angular_core.Input(),
    __metadata$37("design:type", String)
], exports.CheckboxComponent.prototype, "labelPosition", void 0);
__decorate$65([
    _angular_core.HostBinding('attr.checked'),
    _angular_core.Input(),
    __metadata$37("design:type", Boolean)
], exports.CheckboxComponent.prototype, "checked", void 0);
__decorate$65([
    _angular_core.Output(),
    __metadata$37("design:type", Object)
], exports.CheckboxComponent.prototype, "checkedChange", void 0);
__decorate$65([
    _angular_core.HostListener('keydown', ['$event']),
    __metadata$37("design:type", Function),
    __metadata$37("design:paramtypes", [Object]),
    __metadata$37("design:returntype", void 0)
], exports.CheckboxComponent.prototype, "onKeyup", null);
__decorate$65([
    _angular_core.HostListener('click', ['$event']),
    __metadata$37("design:type", Function),
    __metadata$37("design:paramtypes", [Object]),
    __metadata$37("design:returntype", void 0)
], exports.CheckboxComponent.prototype, "onTap", null);
__decorate$65([
    _angular_core.HostListener('blur'),
    __metadata$37("design:type", Function),
    __metadata$37("design:paramtypes", [Object]),
    __metadata$37("design:returntype", void 0)
], exports.CheckboxComponent.prototype, "onBlur", null);
exports.CheckboxComponent = __decorate$65([
    _angular_core.Component({
        selector: 'vcl-checkbox',
        template: "  <vcl-icon [icon]=\"icon\" *ngIf=\"labelPosition=='right'\" [@checkState]=\"checked\"></vcl-icon> <ng-content></ng-content> <vcl-icon [icon]=\"icon\" *ngIf=\"labelPosition=='left'\"></vcl-icon> ",
        animations: [_angular_animations.trigger('checkState', [])],
        host: {
            '[attr.role]': '"checkbox"',
            '[class.vclCheckbox]': 'true',
            '[style.userSelect]': '"none"'
        },
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$10],
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    }),
    __metadata$37("design:paramtypes", [_angular_core.ElementRef])
], exports.CheckboxComponent);

var __decorate$64 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLCheckboxModule = (function () {
    function VCLCheckboxModule() {
    }
    return VCLCheckboxModule;
}());
exports.VCLCheckboxModule = __decorate$64([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.VCLIconModule],
        exports: [exports.CheckboxComponent],
        declarations: [exports.CheckboxComponent]
    })
], exports.VCLCheckboxModule);

/**
 * this is a helper-class so that the Date-logic
 * is not mashed with the components logic
 */
var PickDate = (function () {
    function PickDate(date) {
        if (date === void 0) { date = new Date(); }
        this.date = date;
    }
    PickDate.prototype.getMonthString = function () {
        var monthNr = this.date.getMonth();
        return PickDate.monthNames[monthNr];
    };
    PickDate.prototype.getYearString = function () {
        return this.date.getFullYear().toString();
    };
    /**
     * gets the first day of the month for the given date's month.
     */
    PickDate.prototype.getFirstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1, 12, date.getMinutes(), date.getSeconds());
    };
    PickDate.prototype.moveToYear = function (year) {
        var newDate = new Date(year, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new PickDate(newDate);
    };
    PickDate.prototype.addYears = function (amount) {
        if (amount === void 0) { amount = 1; }
        var newDate = new Date(this.date.getFullYear() + amount, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new PickDate(newDate);
    };
    PickDate.prototype.addDays = function (date, amount) {
        if (amount === void 0) { amount = 1; }
        return new Date(date.getTime() + 24 * 60 * 60 * 1000 * amount);
    };
    PickDate.prototype.moveDays = function (amount) {
        this.date = this.addDays(this.date, amount);
    };
    /**
     * returns true if this is greater than that
     */
    PickDate.prototype.gt = function (date) {
        return this.date > date;
    };
    /**
     * returns true if this is lower than that
     */
    PickDate.prototype.lt = function (date) {
        return this.date < date;
    };
    /**
     * Gets a new date incremented by the given number of months. Number of months can be negative.
     * If the date of the given month does not match the target month, the date will be set to the
     * last day of the month.
     */
    PickDate.prototype.incrementMonths = function (numberOfMonths) {
        var dateInTargetMonth = new Date(this.date.getFullYear(), this.date.getMonth() + numberOfMonths, 1);
        var numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
        if (numberOfDaysInMonth < this.date.getDate()) {
            dateInTargetMonth.setDate(numberOfDaysInMonth);
        }
        else {
            dateInTargetMonth.setDate(this.date.getDate());
        }
        return new PickDate(dateInTargetMonth);
    };
    /**
      * Gets the number of days in the month for the given date's month
      */
    PickDate.prototype.getNumberOfDaysInMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    PickDate.prototype.getLastDateOfMonth = function (date) {
        var dayNr = this.getNumberOfDaysInMonth(date);
        return new Date(date.getFullYear(), date.getMonth(), dayNr, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    /**
      * Gets whether two dates have the same month and year
      */
    PickDate.prototype.isSameMonthAndYear = function (date) {
        if (date === void 0) { date = new PickDate(); }
        return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
    };
    /**
     * Gets whether two dates are the same day (not not necesarily the same time)
     */
    PickDate.prototype.isSameDay = function (date) {
        return this.date.getDate() == date.date.getDate() && this.isSameMonthAndYear(date);
    };
    PickDate.prototype.isToday = function () {
        return this.isSameDay(new PickDate());
    };
    PickDate.prototype.isInYear = function (year) {
        return this.date.getFullYear() === year;
    };
    /**
     * returns a set of days which are in the given month or
     * are in the same weekNumber as a day in the given month
     */
    PickDate.prototype.getMonthBlock = function () {
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
        var ret = dates.map(function (date) { return new PickDate(date); });
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
    PickDate.prototype.getYearsBlock = function () {
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
    PickDate.prototype.getWeekDays = function () {
        return PickDate.weekDays;
    };
    PickDate.prototype.getWeekNumber = function () {
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
    PickDate.prototype.inRange = function (from, to) {
        if (!(from instanceof PickDate) || !(to instanceof PickDate))
            return false;
        return (this.date >= from.date && this.date <= to.date)
            || this.isSameDay(from) || this.isSameDay(to);
    };
    PickDate.prototype.daysInRange = function (to) {
        var oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((this.date.getTime() - to.date.getTime()) / (oneDay))) + 1;
    };
    PickDate.prototype.dir = function () {
        console.dir(this.date);
        return '';
    };
    return PickDate;
}());
PickDate.monthNames = [
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
PickDate.weekDays = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su'
];
function PickDateCreate(date) {
    if (date === void 0) { date = new Date(); }
    return new PickDate(date);
}

var __decorate$67 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$38 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$11 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        // behaviour
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
        this.today = PickDateCreate();
        this.showYearPick = false;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        if (this.selectedRangeEnd)
            this.selectRange = true;
        this.pickedDate = PickDateCreate(this.selectedDate);
        this.viewDate = PickDateCreate();
        if (this.selectedRangeEnd) {
            this.selectRange = true;
            this.select(PickDateCreate(this.selectedRangeEnd));
        }
        if (!this.minDate)
            this.minDate = new Date(0, 0, 1);
        if (!this.maxDate)
            this.maxDate = new Date(10000, 0, 1);
    };
    /**
     * activate the given date
     */
    DatePickerComponent.prototype.select = function (date) {
        if (!this.selectRange) {
            this.pickedDate = date;
            !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
            return;
        }
        if (this.pickedDate && this.pickedRangeEnd) {
            // reset all
            this.pickedDate = null;
            this.pickedRangeEnd = null;
        }
        else if (this.pickedDate && !this.pickedRangeEnd) {
            this.pickedRangeEnd = date;
        }
        else if (!this.pickedDate) {
            this.pickedDate = date;
        }
        // swap values if pickedDate > pickedRangeEnd
        if (this.pickedRangeEnd &&
            this.pickedDate &&
            this.pickedRangeEnd.date < this.pickedDate.date) {
            this.pickedRangeEnd.date = [this.pickedDate.date, this.pickedDate.date = this.pickedRangeEnd.date][0]; // swap values
        }
        // if more days selected than maxRangeLength, strip days
        if (this.selectRange &&
            this.pickedRangeEnd &&
            this.pickedDate &&
            this.pickedDate.daysInRange(this.pickedRangeEnd) > this.maxRangeLength) {
            var diffDays = this.pickedDate.daysInRange(this.pickedRangeEnd) - this.maxRangeLength;
            this.pickedRangeEnd.moveDays(diffDays * (-1));
        }
        if (this.pickedDate) {
            !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
        }
    };
    /**
     * ui-markers
     */
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.pickedDate && this.pickedDate.isSameDay(date))
            return true;
        return !!this.pickedDate && !!this.pickedRangeEnd && date.inRange(this.pickedDate, this.pickedRangeEnd);
    };
    DatePickerComponent.prototype.isDisabled = function (day) {
        if (!this.viewDate.isSameMonthAndYear(day) ||
            day.gt(this.maxDate) ||
            day.lt(this.minDate)) {
            return true;
        }
        return false;
    };
    /**
     * functions to move viewDate
     */
    DatePickerComponent.prototype.nextMonth = function () {
        if (this.showYearPick)
            this.viewDate = this.viewDate.addYears(1);
        else
            this.viewDate = this.viewDate.incrementMonths(1);
    };
    DatePickerComponent.prototype.prevMonth = function () {
        if (this.showYearPick)
            this.viewDate = this.viewDate.addYears(-1);
        else
            this.viewDate = this.viewDate.incrementMonths(-1);
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = PickDateCreate();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.pickedDate || PickDateCreate();
    };
    DatePickerComponent.prototype.yearPickSelect = function (year) {
        this.viewDate = this.viewDate.moveToYear(year);
        this.showYearPick = false;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.pickedDate = PickDateCreate(value);
        if (!value)
            this.pickedDate = PickDateCreate();
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
    _angular_core.Input('closeOnSelect'),
    __metadata$38("design:type", Boolean)
], DatePickerComponent.prototype, "closeOnSelect", void 0);
__decorate$67([
    _angular_core.Input('highlightToday'),
    __metadata$38("design:type", Boolean)
], DatePickerComponent.prototype, "highlightToday", void 0);
__decorate$67([
    _angular_core.Input('highlightSelected'),
    __metadata$38("design:type", Boolean)
], DatePickerComponent.prototype, "highlightSelected", void 0);
__decorate$67([
    _angular_core.Input('displayWeekNumbers'),
    __metadata$38("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
__decorate$67([
    _angular_core.Input('displayWeekdays'),
    __metadata$38("design:type", Boolean)
], DatePickerComponent.prototype, "displayWeekdays", void 0);
__decorate$67([
    _angular_core.Input('prevYearBtnIcon'),
    __metadata$38("design:type", String)
], DatePickerComponent.prototype, "prevYearBtnIcon", void 0);
__decorate$67([
    _angular_core.Input('nextYearBtnIcon'),
    __metadata$38("design:type", String)
], DatePickerComponent.prototype, "nextYearBtnIcon", void 0);
__decorate$67([
    _angular_core.Input('displayJumpToday'),
    __metadata$38("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpToday", void 0);
__decorate$67([
    _angular_core.Input('displayJumpSelected'),
    __metadata$38("design:type", Boolean)
], DatePickerComponent.prototype, "displayJumpSelected", void 0);
__decorate$67([
    _angular_core.Input('selectedDate'),
    __metadata$38("design:type", Date)
], DatePickerComponent.prototype, "selectedDate", void 0);
__decorate$67([
    _angular_core.Input('selectRange'),
    __metadata$38("design:type", Boolean)
], DatePickerComponent.prototype, "selectRange", void 0);
__decorate$67([
    _angular_core.Input('selectedRangeEnd'),
    __metadata$38("design:type", Date)
], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
__decorate$67([
    _angular_core.Input('maxRangeLength'),
    __metadata$38("design:type", Number)
], DatePickerComponent.prototype, "maxRangeLength", void 0);
__decorate$67([
    _angular_core.Input('minDate'),
    __metadata$38("design:type", Date)
], DatePickerComponent.prototype, "minDate", void 0);
__decorate$67([
    _angular_core.Input('maxDate'),
    __metadata$38("design:type", Date)
], DatePickerComponent.prototype, "maxDate", void 0);
DatePickerComponent = __decorate$67([
    _angular_core.Component({
        selector: 'vcl-date-picker',
        template: "<div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\"> <div class=\"vclDGRow\"> <div class=\"vclDGCell vclToolbar\"> <div class=\" vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\"> <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"prevMonth()\"> <div class=\"vclIcogram\"> <div class=\"vclIcon fa fa-angle-left\" aria-hidden=\"false\" aria-label=\"previous\" role=\"img\"></div> </div> </button> <span class=\"vclCalHeaderLabel\" (click)=\"showYearPick=true\" [class.date-picker-pointer]=\"!showYearPick\"> {{viewDate.getMonthString() | loc}}&nbsp;&nbsp;{{viewDate.getYearString()}} </span> <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"nextMonth()\"> <div class=\"vclIcogram\"> <div class=\"vclIcon fa fa-angle-right\" aria-hidden=\"false\" aria-label=\"next\" role=\"img\"></div> </div> </button> </div> </div> </div> <ng-container *ngIf=\"!showYearPick\"> <div *ngIf=\"displayWeekNumbers || displayWeekdays\" class=\"vclDGRow\"> <div *ngIf=\"displayWeekNumbers\" class=\"vclDGCell vclCalItem vclOtherMonth\"> {{'week' | loc}} </div> <div *ngFor=\"let day of viewDate.getWeekDays()\" class=\"vclDGCell vclWeekdayLabel\"> <ng-container *ngIf=\"displayWeekdays\"> {{day | loc}} </ng-container> </div> </div> <div class=\"vclDGRow\" *ngFor=\"let week of viewDate.getMonthBlock()\"> <div *ngIf=\"displayWeekNumbers && week.length==7\" class=\"vclDGCell\"> {{week[5].getWeekNumber()}} </div> <div *ngFor=\"let day of week\" class=\"vclDGCell vclCalItem\" [class.vclDisabled]=\"isDisabled(day)\" [class.vclSelected]=\"isMarked(day)\" (click)=\"!isDisabled(day) && select(day)\" [class.vclToday]=\"highlightSelected && day.isToday()\" [class.vclOtherMonth]=\"!day.isSameMonthAndYear()\"> {{day.date.getDate()}} </div> </div> <div *ngIf=\"displayJumpSelected || displayJumpToday\" class=\"vclDGRow\"> <div class=\"vclDGCell\"> <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified\" role=\"menubar\" aria-level=\"2\"> <button *ngIf=\"displayJumpToday\" type=\"button\" title=\"go to today\" class=\"vclButton vclTransparent vclLayoutFlex\" (click)=\"gotoToday()\"> <div class=\" vclIcogram\"> <span class=\"vclText \">go to today</span> </div> </button> <button *ngIf=\"displayJumpSelected\" type=\"button\" title=\"go to selected\" class=\"vclButton vclTransparent vclLayoutFlex\" (click)=\"gotoSelected()\"> <div class=\" vclIcogram\"> <span class=\"vclText \">go to selected</span> </div> </button> </div> </div> </div> </ng-container> <ng-container *ngIf=\"showYearPick\"> <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let row of viewDate.getYearsBlock()\"> <div *ngFor=\"let year of row\" class=\"vclDGCell vclCalItem\" role=\"gridcell\" [class.vclSelected]=\"viewDate.date.getFullYear()==year\" (click)=\"yearPickSelect(year)\" [class.vclToday]=\"highlightSelected && today.isInYear(year)\"> {{year}} </div> </div> </ng-container> </div> ",
        styles: [
            ".hidden{display:none;}\n     .date-picker-pointer{cursor: pointer;}\n    "
        ],
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$11],
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        host: {
            '[class.vclDatePicker]': 'true',
            '[attr.role]': '"listbox"',
            '[attr.aria-multiselectable]': 'false',
            '[style.height]': '"284px"' // TODO this fixes for IE11
        }
    })
], DatePickerComponent);

var __decorate$66 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLDatePickerModule = (function () {
    function VCLDatePickerModule() {
    }
    return VCLDatePickerModule;
}());
exports.VCLDatePickerModule = __decorate$66([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.VCLButtonModule, exports.L10nModule],
        exports: [DatePickerComponent],
        declarations: [DatePickerComponent],
        providers: [],
    })
], exports.VCLDatePickerModule);

var __decorate$69 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$39 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MonthPickerComponent = MonthPickerComponent_1 = (function () {
    function MonthPickerComponent() {
        this.now = new Date();
        this.yearMeta = {};
        this.expanded = true;
        this.expandedChange = new _angular_core.EventEmitter();
        this.currentYear = this.now.getFullYear();
        this.currentYearChange = new _angular_core.EventEmitter();
        this.prevYearBtnTap = new _angular_core.EventEmitter();
        this.nextYearBtnTap = new _angular_core.EventEmitter();
        this.select = new _angular_core.EventEmitter();
        this.deselect = new _angular_core.EventEmitter();
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
        this.minSelectableItems = 1;
        this.minYear = Number.MIN_SAFE_INTEGER;
        this.maxYear = Number.MAX_SAFE_INTEGER;
    }
    //
    MonthPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var d = new Date(this.now.getFullYear(), 0);
        this.months = Array(MonthPickerComponent_1.MonthCount).fill(0).map(function (x) {
            var month = d.toLocaleString(_this.locales, _this.dateOptions);
            d.setMonth(d.getMonth() + 1);
            return month;
        });
        if (!this.maxSelectableItems) {
            this.maxSelectableItems = this.colors && this.colors.length || 1;
        }
        this.availableColors = this.colors ? this.colors.map(function (color) { return true; }) : [];
        this.setYearMeta(this.currentYear);
    };
    MonthPickerComponent.prototype.setYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        this.currentMeta = this.yearMeta[year];
    };
    MonthPickerComponent.prototype.createYearMeta = function (year) {
        return this.months.map(function (x) { return ({}); });
    };
    MonthPickerComponent.prototype.selectMonth = function (year, month) {
        if (!this.isMonthAvailable(year, month)) {
            return;
        }
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            return this.deselectMonth(year, month);
        }
        if (this.maxSelectableItems === 1) {
            this.iterateMonthMetas(function (year, month, mMeta) {
                mMeta.selected = mMeta === monthMeta;
            });
        }
        else if (this.getSelectedDates().length < this.maxSelectableItems) {
            monthMeta.selected = true;
        }
        if (monthMeta.selected) {
            this.setMonthBackgroundColor(year, month);
            this.notifySelect(year + "." + month);
            if (this.maxSelectableItems === 1 && this.expandable) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
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
        return null;
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
        var _this = this;
        this.iterateMonthMetas(function (year, month, monthMeta) {
            monthMeta.selected = false;
            _this.clearMonthBackgroundColor(year, month);
            _this.notifyDeselect(year + "." + month);
        });
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
        this.iterateMonthMetas(function (year, month, monthMeta) {
            monthMeta.available = false;
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
MonthPickerComponent.TAG = 'MonthPickerComponent';
MonthPickerComponent.MonthCount = 12;
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Boolean)
], MonthPickerComponent.prototype, "expanded", void 0);
__decorate$69([
    _angular_core.Output(),
    __metadata$39("design:type", _angular_core.EventEmitter)
], MonthPickerComponent.prototype, "expandedChange", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Number)
], MonthPickerComponent.prototype, "currentYear", void 0);
__decorate$69([
    _angular_core.Output(),
    __metadata$39("design:type", _angular_core.EventEmitter)
], MonthPickerComponent.prototype, "currentYearChange", void 0);
__decorate$69([
    _angular_core.Output(),
    __metadata$39("design:type", Object)
], MonthPickerComponent.prototype, "prevYearBtnTap", void 0);
__decorate$69([
    _angular_core.Output(),
    __metadata$39("design:type", Object)
], MonthPickerComponent.prototype, "nextYearBtnTap", void 0);
__decorate$69([
    _angular_core.Output(),
    __metadata$39("design:type", Object)
], MonthPickerComponent.prototype, "select", void 0);
__decorate$69([
    _angular_core.Output(),
    __metadata$39("design:type", Object)
], MonthPickerComponent.prototype, "deselect", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Number)
], MonthPickerComponent.prototype, "tabindex", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Number)
], MonthPickerComponent.prototype, "monthsPerRow", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Array)
], MonthPickerComponent.prototype, "colors", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Object)
], MonthPickerComponent.prototype, "locales", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Object)
], MonthPickerComponent.prototype, "dateOptions", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Boolean)
], MonthPickerComponent.prototype, "expandable", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Boolean)
], MonthPickerComponent.prototype, "prevYearAvailable", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Boolean)
], MonthPickerComponent.prototype, "nextYearAvailable", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Boolean)
], MonthPickerComponent.prototype, "useAvailableMonths", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", String)
], MonthPickerComponent.prototype, "closeBtnIcon", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", String)
], MonthPickerComponent.prototype, "prevYearBtnIcon", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", String)
], MonthPickerComponent.prototype, "nextYearBtnIcon", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Number)
], MonthPickerComponent.prototype, "maxSelectableItems", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Number)
], MonthPickerComponent.prototype, "minSelectableItems", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Number)
], MonthPickerComponent.prototype, "minYear", void 0);
__decorate$69([
    _angular_core.Input(),
    __metadata$39("design:type", Number)
], MonthPickerComponent.prototype, "maxYear", void 0);
MonthPickerComponent = MonthPickerComponent_1 = __decorate$69([
    _angular_core.Component({
        selector: 'vcl-month-picker',
        template: "<div class=\"vclDatePicker\" [class.vclLayoutHidden]=\"!expanded\"> <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\" [attr.role]=\"'grid'\" [attr.tabindex]=\"tabindex\" [attr.aria-multiselectable]=\"maxSelectableItems > 1\" [attr.aria-expanded]=\"expanded\"> <div class=\"vclLayoutFlex vclDGRow vclLayoutAuto\"> <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\"> <button vcl-button class=\"vclButton vclTransparent vclSquare\" type=\"button\" [class.vclDisabled]=\"!prevYearAvailable\" [appIcon]=\"prevYearBtnIcon\" (click)=\"onPrevYearTap()\"> </button> <span class=\"vclCalHeaderLabel\">{{ currentYear }}</span> <button vcl-button type=\"button\" class=\"vclButton vclTransparent vclSquare\" [class.vclDisabled]=\"!nextYearAvailable\" [appIcon]=\"nextYearBtnIcon\" (click)=\"onNextYearTap()\"> </button> <button vcl-button *ngIf=\"expandable\" type=\"button\" class=\"vclButton vclTransparent vclSquare\" [appIcon]=\"closeBtnIcon\" (click)=\"onCloseBtnTap()\"> </button> </div> </div> <div class=\"vclSeparator\"></div> <ng-template ngFor let-iM [ngForOf]=\"months\" let-i=\"index\"> <div *ngIf=\"i % monthsPerRow === 0\" class=\"vclLayoutFlex vclDGRow vclLayoutAuto\" role=\"row\"> <div *ngFor=\"let jM of months.slice(i, (i + monthsPerRow > months.length ? months.length : i + monthsPerRow)); let j = index;\" (click)=\"selectMonth(currentYear, i+j)\" class=\"vclDGCell vclCalItem\" [class.vclAvailable]=\"!useAvailableMonths || currentMeta[i+j].available\" [class.vclUnavailable]=\"useAvailableMonths && !currentMeta[i+j].available\" [class.vclToday]=\"isCurrentMonth(i+j)\" [class.vclOtherMonth]=\"!isCurrentMonth(i+j)\" [class.vclDisabled]=\"useAvailableMonths && !currentMeta[i+j].available\" [class.vclSelected]=\"currentMeta[i+j].selected\" [style.background-color]=\"currentMeta[i+j].color\" [style.order]=\"i+j\" [attr.aria-selected]=\"currentMeta[i+j].selected\" role=\"gridcell\" tabindex=\"0\"> <div class=\"vclLayoutHorizontal vclLayoutCenterJustified vclMonthPickerListItemLabel\"> {{months[i + j]}} </div> </div> </div> </ng-template> </div> </div> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    })
], MonthPickerComponent);
var MonthPickerComponent_1;

var __decorate$68 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLMonthPickerModule = (function () {
    function VCLMonthPickerModule() {
    }
    return VCLMonthPickerModule;
}());
exports.VCLMonthPickerModule = __decorate$68([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.VCLButtonModule, exports.L10nModule],
        exports: [MonthPickerComponent],
        declarations: [MonthPickerComponent],
        providers: [],
    })
], exports.VCLMonthPickerModule);

var __decorate$71 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$40 = (this && this.__metadata) || function (k, v) {
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
    _angular_core.Input('label'),
    __metadata$40("design:type", String)
], LabelComponent.prototype, "label", void 0);
__decorate$71([
    _angular_core.Input('type'),
    __metadata$40("design:type", String)
], LabelComponent.prototype, "type", void 0);
__decorate$71([
    _angular_core.HostBinding('class.vclPrimary'),
    __metadata$40("design:type", Object),
    __metadata$40("design:paramtypes", [])
], LabelComponent.prototype, "vclPrimary", null);
__decorate$71([
    _angular_core.HostBinding('class.vclSuccess'),
    __metadata$40("design:type", Object),
    __metadata$40("design:paramtypes", [])
], LabelComponent.prototype, "vclSuccess", null);
__decorate$71([
    _angular_core.HostBinding('class.vclInfo'),
    __metadata$40("design:type", Object),
    __metadata$40("design:paramtypes", [])
], LabelComponent.prototype, "vclInfo", null);
__decorate$71([
    _angular_core.HostBinding('class.vclWarning'),
    __metadata$40("design:type", Object),
    __metadata$40("design:paramtypes", [])
], LabelComponent.prototype, "vclWarning", null);
__decorate$71([
    _angular_core.HostBinding('class.vclError'),
    __metadata$40("design:type", Object),
    __metadata$40("design:paramtypes", [])
], LabelComponent.prototype, "vclError", null);
LabelComponent = __decorate$71([
    _angular_core.Component({
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
exports.VCLLabelModule = (function () {
    function VCLLabelModule() {
    }
    return VCLLabelModule;
}());
exports.VCLLabelModule = __decorate$70([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule, exports.VCLMetalistModule],
        exports: [LabelComponent],
        declarations: [LabelComponent],
        providers: [],
    })
], exports.VCLLabelModule);

var __decorate$73 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$41 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MoveDirection;
(function (MoveDirection) {
    MoveDirection[MoveDirection["Left"] = 0] = "Left";
    MoveDirection[MoveDirection["Right"] = 1] = "Right";
})(MoveDirection || (MoveDirection = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$12 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.SliderComponent; }),
    multi: true
};
exports.SliderComponent = (function () {
    function SliderComponent() {
        this.tabindex = 0;
        this.value = 0;
        this.valueChange = new _angular_core.EventEmitter();
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
    _angular_core.HostBinding(),
    __metadata$41("design:type", Object)
], exports.SliderComponent.prototype, "tabindex", void 0);
__decorate$73([
    _angular_core.Input(),
    __metadata$41("design:type", Number)
], exports.SliderComponent.prototype, "value", void 0);
__decorate$73([
    _angular_core.Output(),
    __metadata$41("design:type", Object)
], exports.SliderComponent.prototype, "valueChange", void 0);
__decorate$73([
    _angular_core.HostBinding('class.vclDisabled'),
    _angular_core.Input(),
    __metadata$41("design:type", Boolean)
], exports.SliderComponent.prototype, "disabled", void 0);
__decorate$73([
    _angular_core.Input(),
    __metadata$41("design:type", Number)
], exports.SliderComponent.prototype, "min", void 0);
__decorate$73([
    _angular_core.Input(),
    __metadata$41("design:type", Number)
], exports.SliderComponent.prototype, "max", void 0);
__decorate$73([
    _angular_core.Input('mousewheel'),
    __metadata$41("design:type", Boolean)
], exports.SliderComponent.prototype, "wheel", void 0);
__decorate$73([
    _angular_core.Input(),
    __metadata$41("design:type", Boolean)
], exports.SliderComponent.prototype, "lock", void 0);
__decorate$73([
    _angular_core.Input(),
    __metadata$41("design:type", Object)
], exports.SliderComponent.prototype, "scale", void 0);
__decorate$73([
    _angular_core.HostBinding('class.vclFocused'),
    __metadata$41("design:type", Boolean)
], exports.SliderComponent.prototype, "focused", void 0);
__decorate$73([
    _angular_core.ViewChild('scale'),
    __metadata$41("design:type", _angular_core.ElementRef)
], exports.SliderComponent.prototype, "scaleElement", void 0);
__decorate$73([
    _angular_core.HostListener('focus'),
    __metadata$41("design:type", Function),
    __metadata$41("design:paramtypes", []),
    __metadata$41("design:returntype", void 0)
], exports.SliderComponent.prototype, "onFocus", null);
__decorate$73([
    _angular_core.HostListener('blur'),
    __metadata$41("design:type", Function),
    __metadata$41("design:paramtypes", []),
    __metadata$41("design:returntype", void 0)
], exports.SliderComponent.prototype, "onBlur", null);
__decorate$73([
    _angular_core.HostListener('click', ['$event']),
    __metadata$41("design:type", Function),
    __metadata$41("design:paramtypes", [Object]),
    __metadata$41("design:returntype", void 0)
], exports.SliderComponent.prototype, "onTap", null);
__decorate$73([
    _angular_core.HostListener('wheel', ['$event']),
    __metadata$41("design:type", Function),
    __metadata$41("design:paramtypes", [Object]),
    __metadata$41("design:returntype", void 0)
], exports.SliderComponent.prototype, "onWheel", null);
__decorate$73([
    _angular_core.HostListener('keydown', ['$event']),
    __metadata$41("design:type", Function),
    __metadata$41("design:paramtypes", [Object]),
    __metadata$41("design:returntype", void 0)
], exports.SliderComponent.prototype, "keydown", null);
exports.SliderComponent = __decorate$73([
    _angular_core.Component({
        selector: 'vcl-slider',
        template: "<div class=\"vclSliderRail\"> <div class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\" #scale> <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointMark\"></div> </div> <div *ngIf=\"valueValid\" class=\"vclSliderKnobContainer\" [style.left]=\"percentLeftKnob + '%'\" (pan)=\"onPan($event)\"> <div  class=\"vclSliderKnob\"></div> </div> </div> <div *ngIf=\"showScale\" class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\"> <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointLabel\" (click)=\"selectPoint(point)\">{{point.label}}</div> </div> ",
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$12],
        host: {
            '[class.vclSlider]': 'true'
        },
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    })
], exports.SliderComponent);

var __decorate$72 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLSliderModule = (function () {
    function VCLSliderModule() {
    }
    return VCLSliderModule;
}());
exports.VCLSliderModule = __decorate$72([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule],
        exports: [exports.SliderComponent],
        declarations: [exports.SliderComponent],
        providers: [],
    })
], exports.VCLSliderModule);

var __decorate$75 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$42 = (this && this.__metadata) || function (k, v) {
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
    _angular_core.Input('type'),
    __metadata$42("design:type", String)
], InputControlGroup.prototype, "type", void 0);
__decorate$75([
    _angular_core.Input('label'),
    __metadata$42("design:type", String)
], InputControlGroup.prototype, "label", void 0);
InputControlGroup = __decorate$75([
    _angular_core.Component({
        selector: 'vcl-input-control-group',
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        host: {
            '[class.vclInputControlGroup]': 'true',
        },
        template: "<ng-content></ng-content> <div *ngIf=\"type!==null && label!==null && label!==''\" class=\"vclFormControlHint\" [class.vclError]=\"type=='error'\" [class.vclWarning]=\"type=='warning'\" [class.vclSuccess]=\"type=='success'\"> {{label}} </div> "
    }),
    __metadata$42("design:paramtypes", [_angular_core.ElementRef])
], InputControlGroup);

var __decorate$74 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLInputControlGroupModule = (function () {
    function VCLInputControlGroupModule() {
    }
    return VCLInputControlGroupModule;
}());
exports.VCLInputControlGroupModule = __decorate$74([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule],
        exports: [InputControlGroup],
        declarations: [InputControlGroup],
        providers: [],
    })
], exports.VCLInputControlGroupModule);

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

(function (AlertType) {
    AlertType[AlertType["None"] = 0] = "None";
    AlertType[AlertType["Question"] = 1] = "Question";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Success"] = 3] = "Success";
    AlertType[AlertType["Warning"] = 4] = "Warning";
    AlertType[AlertType["Error"] = 5] = "Error";
})(exports.AlertType || (exports.AlertType = {}));

(function (AlertAlignment) {
    AlertAlignment[AlertAlignment["Left"] = 0] = "Left";
    AlertAlignment[AlertAlignment["Center"] = 1] = "Center";
    AlertAlignment[AlertAlignment["Right"] = 2] = "Right";
})(exports.AlertAlignment || (exports.AlertAlignment = {}));

(function (AlertInput) {
    AlertInput[AlertInput["None"] = 0] = "None";
    AlertInput[AlertInput["Text"] = 1] = "Text";
})(exports.AlertInput || (exports.AlertInput = {}));
var ALERT_DEFAULTS = {
    type: exports.AlertType.None,
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
    input: exports.AlertInput.None,
    contentAlignment: exports.AlertAlignment.Left,
    titleAlignment: exports.AlertAlignment.Left,
    iconAlignment: exports.AlertAlignment.Left,
    buttonAlignment: exports.AlertAlignment.Right,
};
var TYPE_CLASS_MAP = (_a = {},
    _a[exports.AlertType.None] = {
        alertClass: '',
        iconClass: ''
    },
    _a[exports.AlertType.Question] = {
        alertClass: '',
        iconClass: 'fa fa-question-circle'
    },
    _a[exports.AlertType.Info] = {
        alertClass: 'vclInfo',
        iconClass: 'fa fa-info-circle'
    },
    _a[exports.AlertType.Success] = {
        alertClass: 'vclSuccess',
        iconClass: 'fa fa-check-circle'
    },
    _a[exports.AlertType.Warning] = {
        alertClass: 'vclWarning',
        iconClass: 'fa fa-warning'
    },
    _a[exports.AlertType.Error] = {
        alertClass: 'vclError',
        iconClass: 'fa fa-exclamation-circle'
    },
    _a);
var TEXT_ALIGNMENT_CLASS_MAP = (_b = {},
    _b[exports.AlertAlignment.Left] = 'vclAlignLeft',
    _b[exports.AlertAlignment.Center] = 'vclAlignCentered',
    _b[exports.AlertAlignment.Right] = 'vclAlignRight',
    _b);
var BUTTON_ALIGNMENT_CLASS_MAP = (_c = {},
    _c[exports.AlertAlignment.Left] = 'vclLayoutStartJustified',
    _c[exports.AlertAlignment.Center] = 'vclLayoutCenterJustified',
    _c[exports.AlertAlignment.Right] = 'vclLayoutEndJustified',
    _c);
var AlertError = (function (_super) {
    __extends$12(AlertError, _super);
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
var __decorate$77 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$43 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$5 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AlertComponent = (function () {
    function AlertComponent(alertLayer, layerService, cdRef) {
        this.layerService = layerService;
        this.cdRef = cdRef;
        this.alert = {};
        this.alertLayer = alertLayer;
    }
    AlertComponent.prototype.onKeyUp = function (ev) {
        // Check if the top layer is the alert layer
        if (this.layerService.getTopLayer() === this.alertLayer) {
            if (ev.key === 'Escape' && this.alert.escClose) {
                this.alertLayer.dismiss('esc');
            }
            else if (ev.key === 'Enter') {
                this.confirm();
            }
        }
    };
    Object.defineProperty(AlertComponent.prototype, "alertClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || exports.AlertType.None].alertClass + ' ' + this.alert.customClass || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || exports.AlertType.None].iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "titleAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.titleAlignment || exports.AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.iconAlignment || exports.AlertAlignment.Center];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "contentAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.contentAlignment || exports.AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "buttonAlignmentClass", {
        get: function () {
            return BUTTON_ALIGNMENT_CLASS_MAP[this.alert.buttonAlignment || exports.AlertAlignment.Right];
        },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.confirm = function () {
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
        if (this.alert.loaderOnConfirm) {
            this.alert.loader = true;
            this.cdRef.markForCheck();
            this.alertLayer.send(result);
        }
        else {
            this.alertLayer.close(result);
        }
    };
    AlertComponent.prototype.cancel = function (reason) {
        this.alertLayer.dismiss('cancel');
    };
    AlertComponent.prototype.offClick = function () {
    };
    AlertComponent.prototype.close = function (reason) {
        this.alertLayer.dismiss('close');
    };
    AlertComponent.prototype.valueChange = function (value) {
        this.value = value;
    };
    return AlertComponent;
}());
__decorate$77([
    _angular_core.Input(),
    __metadata$43("design:type", Object)
], AlertComponent.prototype, "alert", void 0);
__decorate$77([
    _angular_core.HostListener('document:keyup', ['$event']),
    __metadata$43("design:type", Function),
    __metadata$43("design:paramtypes", [KeyboardEvent]),
    __metadata$43("design:returntype", void 0)
], AlertComponent.prototype, "onKeyUp", null);
AlertComponent = __decorate$77([
    _angular_core.Component({
        template: "<div class=\"vclNotification\" [ngClass]=\"alertClass\"> <div class=\"vclNotificationHeader vclLayoutHorizontal vclLayoutCenter\" [ngClass]=\"titleAlignmentClass\" *ngIf=\"alert.title\"> <div class=\"vclLayoutFlex\">{{alert.title}}</div> <button *ngIf=\"alert.showCloseButton\" type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"close()\"><i class=\"fa fa-times\"></i></button> </div> <div class=\"vclNotificationContent vclLayoutVertical vclLayoutCenterJustified \"> <div style=\"padding-bottom: 1em\" *ngIf=\"iconClass\" [ngClass]=\"iconAlignmentClass\"> <span class=\"vclIcon vclNotificationIcon\" [ngClass]=\"iconClass\"></span> </div> <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" *ngIf=\"alert.text && !alert.html\">{{alert.text}}</div> <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" [innerHtml]=\"alert.text\" *ngIf=\"alert.text && alert.html\"></div> <div style=\"padding-bottom: 0.5em\" *ngIf=\"alert.input\"><alert-input [alert]=\"alert\" (valueChange)=\"valueChange($event)\"></alert-input></div> <div *ngIf=\"validationError\" class=\"vclNotification vclError\"> <div class=\"vclNotificationContent\"> <vcl-icogram label=\"{{validationError}}\" prepIcon=\"fa:exclamation-circle\"></vcl-icogram> </div> </div> <div class=\"vclLayoutHorizontal vclLooseButtonGroup\" [ngClass]=\"buttonAlignmentClass\"> <button vcl-button *ngIf=\"!!alert.showConfirmButton\" (click)=\"confirm()\" [style.background-color]=\"alert.confirmButtonColor\" [ngClass]=\"alert.confirmButtonClass\" [busy]=\"!!alert.loader\" type=\"button\" > <vcl-icogram *vclButtonStateContent=\"['enabled','disabled']\" [appIcon]=\"alert.confirmButtonAppIcon\" [prepIcon]=\"alert.confirmButtonPrepIcon\" [label]=\"alert.confirmButtonLabel\"> </vcl-icogram> <vcl-icogram *vclButtonStateContent=\"'busy'\" prepIcon=\"fa:refresh fa-spin\" [label]=\"!!alert.confirmButtonLabel\"> </vcl-icogram> </button> <button vcl-button *ngIf=\"!!alert.showCancelButton\" [style.background-color]=\"!!alert.cancelButtonColor\" [ngClass]=\"alert.cancelButtonClass\" [busy]=\"!alert.showConfirmButton && !!alert.loader\" [disabled]=\"!!alert.showConfirmButton && !!alert.loader\" type=\"button\" (click)=\"cancel()\" > <vcl-icogram *vclButtonStateContent=\"['enabled','disabled']\" [appIcon]=\"alert.cancelButtonAppIcon\" [prepIcon]=\"alert.cancelButtonPrepIcon\" [label]=\"alert.cancelButtonLabel\"> </vcl-icogram> <vcl-icogram *vclButtonStateContent=\"'busy'\" prepIcon=\"fa:refresh fa-spin\" [label]=\"alert.cancelButtonLabel\"> </vcl-icogram> </button> </div> <div *ngIf=\"!alert.showCancelButton && !alert.showConfirmButton && !!alert.loader\"> <div class=\"vclBusyIndicator\" role=\"status\"> <i class=\"vclBusy-busyIndCircular\"></i> </div> </div> </div> </div> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    }),
    __param$5(0, _angular_core.Inject(_angular_core.forwardRef(function () { return AlertLayer; }))),
    __metadata$43("design:paramtypes", [AlertLayer, exports.LayerService, _angular_core.ChangeDetectorRef])
], AlertComponent);
var AlertLayer = (function (_super) {
    __extends$11(AlertLayer, _super);
    function AlertLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modal = true;
        _this.transparent = true;
        return _this;
    }
    AlertLayer.prototype.dismiss = function (reason) {
        this.closeWithError(new AlertError(reason));
    };
    Object.defineProperty(AlertLayer.prototype, "alert", {
        get: function () {
            return (this.attrs && this.attrs['alert']) || {};
        },
        enumerable: true,
        configurable: true
    });
    AlertLayer.prototype.offClick = function () {
        if (this.alert.offClickClose) {
            this.dismiss('offClick');
        }
    };
    return AlertLayer;
}(LayerRef));
AlertLayer = __decorate$77([
    Layer(AlertComponent)
], AlertLayer);

var __decorate$78 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$44 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO: support text, password, textarea, select, radio, checkbox file.
var AlertInputComponent = (function () {
    function AlertInputComponent() {
        this.alert = {};
        this.valueChange = new _angular_core.EventEmitter();
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
                case exports.AlertInput.Text: return 'input';
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
    _angular_core.ViewChild('input'),
    __metadata$44("design:type", _angular_core.ElementRef)
], AlertInputComponent.prototype, "input", void 0);
__decorate$78([
    _angular_core.Input(),
    __metadata$44("design:type", Object)
], AlertInputComponent.prototype, "alert", void 0);
__decorate$78([
    _angular_core.Output(),
    __metadata$44("design:type", Object)
], AlertInputComponent.prototype, "valueChange", void 0);
AlertInputComponent = __decorate$78([
    _angular_core.Component({
        template: "<input #input *ngIf=\"control==='input'\" class=\"vclInput\" [placeholder]=\"placeholder\" [ngModel]=\"inputValue\" (ngModelChange)=\"inputValueChange($event)\" autofocus> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        selector: 'alert-input'
    })
], AlertInputComponent);

var __decorate$79 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$45 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.AlertService = (function () {
    function AlertService(alertLayerRef) {
        this.alertLayerRef = alertLayerRef;
        this.noop = function () { };
    }
    AlertService.prototype.alert = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text }, opts);
    };
    AlertService.prototype.info = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: exports.AlertType.Info }, opts);
    };
    AlertService.prototype.success = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: exports.AlertType.Success }, opts);
    };
    AlertService.prototype.warning = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: exports.AlertType.Warning }, opts);
    };
    AlertService.prototype.error = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: exports.AlertType.Error }, opts);
    };
    AlertService.prototype.question = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: exports.AlertType.Question, showCancelButton: true }, opts);
    };
    AlertService.prototype.open = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var alert = Object.assign.apply(Object, [{}, ALERT_DEFAULTS].concat(opts));
        return this.alertLayerRef.open({ alert: alert });
    };
    AlertService.prototype.close = function () {
        this.alertLayerRef.close();
    };
    return AlertService;
}());
exports.AlertService = __decorate$79([
    _angular_core.Injectable(),
    __metadata$45("design:paramtypes", [AlertLayer])
], exports.AlertService);

var __decorate$76 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLAlertModule = (function () {
    function VCLAlertModule() {
    }
    return VCLAlertModule;
}());
exports.VCLAlertModule = __decorate$76([
    _angular_core.NgModule({
        imports: [
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            exports.VCLButtonModule,
            exports.VCLInputModule,
            exports.VCLIcogramModule,
            exports.VCLLayerModule.forChild({ layers: [AlertLayer] })
        ],
        exports: [],
        declarations: [AlertComponent, AlertInputComponent],
        entryComponents: [AlertComponent],
        providers: [exports.AlertService],
    })
], exports.VCLAlertModule);

var __decorate$81 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$46 = (this && this.__metadata) || function (k, v) {
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
    _angular_core.Input(),
    __metadata$46("design:type", String)
], BusyIndicatorComponent.prototype, "type", void 0);
BusyIndicatorComponent = __decorate$81([
    _angular_core.Component({
        selector: 'vcl-busy-indicator',
        template: "<div class=\"vclLayoutVertical vclLayoutCenterJustified\"> <div class=\"vclBusyIndicator\" role=\"status\"> <i [ngClass]=\"indicatorClass\"></i> <ng-content></ng-content> </div> </div> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    })
], BusyIndicatorComponent);

var __decorate$82 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$47 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BusyComponent = (function () {
    function BusyComponent() {
        this.busy = false;
    }
    return BusyComponent;
}());
__decorate$82([
    _angular_core.Input('vclBusy'),
    _angular_core.HostBinding('class.vclLoadingLayerContainer'),
    __metadata$47("design:type", Object)
], BusyComponent.prototype, "busy", void 0);
__decorate$82([
    _angular_core.Input(),
    __metadata$47("design:type", String)
], BusyComponent.prototype, "busyIndicatorType", void 0);
__decorate$82([
    _angular_core.Input(),
    __metadata$47("design:type", String)
], BusyComponent.prototype, "busyLabel", void 0);
BusyComponent = __decorate$82([
    _angular_core.Component({
        selector: '[vclBusy]',
        template: "<ng-content></ng-content> <div *ngIf=\"busy\" tabindex=\"-1\" class=\"vclLoadingLayer\"> <div class=\"vclLoadingLayerContent\"> <vcl-busy-indicator [type]=\"busyIndicatorType\"> <span *ngIf=\"busyLabel\">{{busyLabel}}</span> </vcl-busy-indicator> </div> </div> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    })
], BusyComponent);

var __decorate$80 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLBusyIndicatorModule = (function () {
    function VCLBusyIndicatorModule() {
    }
    return VCLBusyIndicatorModule;
}());
exports.VCLBusyIndicatorModule = __decorate$80([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule],
        exports: [BusyComponent, BusyIndicatorComponent],
        declarations: [BusyComponent, BusyIndicatorComponent]
    })
], exports.VCLBusyIndicatorModule);

var __decorate$84 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$48 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NotificationComponent = (function () {
    function NotificationComponent() {
        this.notifications = [];
    }
    return NotificationComponent;
}());
__decorate$84([
    _angular_core.Input(),
    __metadata$48("design:type", Object)
], exports.NotificationComponent.prototype, "notifications", void 0);
exports.NotificationComponent = __decorate$84([
    _angular_core.Component({
        template: "<div *ngFor=\"let notification of notifications\"  (mouseenter)=\"notification.mouseEnter()\"  (mouseleave)=\"notification.mouseLeave()\"  class=\"vclNotification vclLayoutHorizontal vclLayoutCenter\"  [ngClass]=\"notification.layerClass\"  [style.color]=\"notification.textColor\" [style.background-color]=\"notification.backgroundColor\" [@notificationState]=\"notification.state\"  > <div class=\"vclNotificationIconContainer\"> <span *ngIf=\"notification.iconClass\" class=\"vclIcon vclNotificationIcon\" [ngClass]=\"notification.iconClass\"></span> </div> <div class=\"vclNotificationContent vclLayoutFlex\"> <div *ngIf=\"notification.text && !notification.html\">{{notification.text}}</div> <div *ngIf=\"notification.text && notification.html\" [innerHtml]=\"notification.text\"></div> </div> <button vcl-button *ngIf=\"notification.showCloseButton\" (click)=\"notification.close()\" class=\"vclSquare vclTransparent vclLayoutSelfStart\" prepIcon=\"fa:times\" title=\"Close\"></button> </div> ",
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core.ViewEncapsulation.None,
        styles: [
            "\n     .vclLayerNotificationTopRight { left: auto; bottom: auto; top: 1em; right: 1em; }\n     .vclLayerNotificationTop { left: 0; bottom: auto; top: 1em; right: 0; }\n     .vclLayerNotificationTopLeft { left: 1em; bottom: auto; top: 1em; right: auto; }\n     .vclLayerNotificationBottomRight { left: auto; bottom: 1em; top: auto; right: 1em; }\n     .vclLayerNotificationBottom { left: 0; bottom: 1em; top: auto; right: 0; }\n     .vclLayerNotificationBottomLeft { left: 1em; bottom: 1em; top: auto; right: auto; }\n    "
        ],
        animations: [
            _angular_core.trigger('notificationState', [
                _angular_core.state('visible', _angular_core.style({ opacity: 0.91 })),
                _angular_core.state('hovered', _angular_core.style({ opacity: 1.0 })),
                _angular_core.transition(':enter', [
                    _angular_core.style({ opacity: 0 }),
                    _angular_core.animate('200ms ease-in')
                ]),
                _angular_core.transition(':leave', [
                    _angular_core.animate('200ms ease-out', _angular_core.style({ opacity: 0 }))
                ]),
                _angular_core.transition('visible <=> hovered', _angular_core.animate('300ms'))
            ]),
        ],
        host: {
            '[@notificationState]': 'true'
        },
    })
], exports.NotificationComponent);

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
var __decorate$85 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NotificationLayer = (function (_super) {
    __extends$13(NotificationLayer, _super);
    function NotificationLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transparent = true;
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
            // this.open({ notifications: this.notifications });
        }
        else {
            this.open({ notifications: this.notifications });
        }
    };
    NotificationLayer.prototype.offClick = function () {
    };
    return NotificationLayer;
}(LayerRef));
var NotificationLayerTopRight = (function (_super) {
    __extends$13(NotificationLayerTopRight, _super);
    function NotificationLayerTopRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationTopRight';
        _this.reverse = true;
        return _this;
    }
    return NotificationLayerTopRight;
}(NotificationLayer));
NotificationLayerTopRight = __decorate$85([
    Layer(exports.NotificationComponent)
], NotificationLayerTopRight);
var NotificationLayerTop = (function (_super) {
    __extends$13(NotificationLayerTop, _super);
    function NotificationLayerTop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reverse = true;
        return _this;
    }
    return NotificationLayerTop;
}(NotificationLayer));
NotificationLayerTop = __decorate$85([
    Layer(exports.NotificationComponent)
], NotificationLayerTop);
var NotificationLayerTopLeft = (function (_super) {
    __extends$13(NotificationLayerTopLeft, _super);
    function NotificationLayerTopLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationTopLeft';
        _this.reverse = true;
        return _this;
    }
    return NotificationLayerTopLeft;
}(NotificationLayer));
NotificationLayerTopLeft = __decorate$85([
    Layer(exports.NotificationComponent)
], NotificationLayerTopLeft);
var NotificationLayerBottomRight = (function (_super) {
    __extends$13(NotificationLayerBottomRight, _super);
    function NotificationLayerBottomRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationBottomRight';
        _this.reverse = false;
        return _this;
    }
    return NotificationLayerBottomRight;
}(NotificationLayer));
NotificationLayerBottomRight = __decorate$85([
    Layer(exports.NotificationComponent)
], NotificationLayerBottomRight);
var NotificationLayerBottom = (function (_super) {
    __extends$13(NotificationLayerBottom, _super);
    function NotificationLayerBottom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationBottom';
        _this.reverse = false;
        return _this;
    }
    return NotificationLayerBottom;
}(NotificationLayer));
NotificationLayerBottom = __decorate$85([
    Layer(exports.NotificationComponent)
], NotificationLayerBottom);
var NotificationLayerBottomLeft = (function (_super) {
    __extends$13(NotificationLayerBottomLeft, _super);
    function NotificationLayerBottomLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customClass = 'vclLayerNotificationBottomLeft';
        _this.reverse = false;
        return _this;
    }
    return NotificationLayerBottomLeft;
}(NotificationLayer));
NotificationLayerBottomLeft = __decorate$85([
    Layer(exports.NotificationComponent)
], NotificationLayerBottomLeft);

(function (NotificationType) {
    NotificationType[NotificationType["None"] = 0] = "None";
    NotificationType[NotificationType["Info"] = 1] = "Info";
    NotificationType[NotificationType["Success"] = 2] = "Success";
    NotificationType[NotificationType["Warning"] = 3] = "Warning";
    NotificationType[NotificationType["Error"] = 4] = "Error";
})(exports.NotificationType || (exports.NotificationType = {}));

(function (NotificationPosition) {
    NotificationPosition[NotificationPosition["TopRight"] = 0] = "TopRight";
    NotificationPosition[NotificationPosition["Top"] = 1] = "Top";
    NotificationPosition[NotificationPosition["TopLeft"] = 2] = "TopLeft";
    NotificationPosition[NotificationPosition["BottomRight"] = 3] = "BottomRight";
    NotificationPosition[NotificationPosition["Bottom"] = 4] = "Bottom";
    NotificationPosition[NotificationPosition["BottomLeft"] = 5] = "BottomLeft";
})(exports.NotificationPosition || (exports.NotificationPosition = {}));
var NOTIFICATION_DEFAULTS = {
    html: false,
    type: exports.NotificationType.None,
    position: exports.NotificationPosition.TopRight,
    showCloseButton: true
};

var TYPE_CLASS_MAP$1 = (_b$1 = {},
    _b$1[exports.NotificationType.None] = {
        notificationClass: '',
        iconClass: ''
    },
    _b$1[exports.NotificationType.Info] = {
        notificationClass: 'vclInfo',
        iconClass: 'fa fa-info-circle'
    },
    _b$1[exports.NotificationType.Success] = {
        notificationClass: 'vclSuccess',
        iconClass: 'fa fa-check-circle'
    },
    _b$1[exports.NotificationType.Warning] = {
        notificationClass: 'vclWarning',
        iconClass: 'fa fa-warning'
    },
    _b$1[exports.NotificationType.Error] = {
        notificationClass: 'vclError',
        iconClass: 'fa fa-exclamation-circle'
    },
    _b$1);
var _b$1;

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
var Notification = (function (_super) {
    __extends$14(Notification, _super);
    function Notification(opts) {
        var _this = _super.call(this) || this;
        _this.opts = opts;
        _this.closeSubject = new rxjs_Subject.Subject();
        _this.state = 'visible';
        var timeout = _this.calculatedTimeout;
        var timeout$ = typeof timeout === 'number' ?
            rxjs_Observable.Observable.interval(timeout).skipWhile(function () { return _this.state === 'hovered'; }) :
            rxjs_Observable.Observable.never();
        _this.source = rxjs_Observable.Observable.merge(_this.closeSubject, timeout$).first();
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
            return TYPE_CLASS_MAP$1[this.opts.type || exports.NotificationType.None].notificationClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "iconClass", {
        get: function () {
            return TYPE_CLASS_MAP$1[this.opts.type || exports.NotificationType.None].iconClass;
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
}(rxjs_Observable.Observable));

var __decorate$86 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$49 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NotificationService = (function () {
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
        return this.queue({ text: text, type: exports.NotificationType.Info }, opts);
    };
    NotificationService.prototype.success = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: exports.NotificationType.Success }, opts);
    };
    NotificationService.prototype.warning = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: exports.NotificationType.Warning }, opts);
    };
    NotificationService.prototype.error = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ text: text, type: exports.NotificationType.Error }, opts);
    };
    NotificationService.prototype.queue = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var notificationOpts = Object.assign.apply(Object, [{}, NOTIFICATION_DEFAULTS].concat(opts));
        var notification = new Notification(notificationOpts);
        if (notificationOpts.position === exports.NotificationPosition.TopRight) {
            this.notificationLayerTopRightRef.add(notification);
        }
        else if (notificationOpts.position === exports.NotificationPosition.BottomRight) {
            this.notificationLayerBottomRightRef.add(notification);
        }
        else if (notificationOpts.position === exports.NotificationPosition.Bottom) {
            this.notificationLayerBottomRef.add(notification);
        }
        else if (notificationOpts.position === exports.NotificationPosition.BottomLeft) {
            this.notificationLayerBottomLeftRef.add(notification);
        }
        else if (notificationOpts.position === exports.NotificationPosition.TopLeft) {
            this.notificationLayerTopLeftRef.add(notification);
        }
        else if (notificationOpts.position === exports.NotificationPosition.Top) {
            this.notificationLayerTopRef.add(notification);
        }
        else {
            this.notificationLayerTopRightRef.add(notification);
        }
        return notification;
    };
    return NotificationService;
}());
exports.NotificationService = __decorate$86([
    _angular_core.Injectable(),
    __metadata$49("design:paramtypes", [NotificationLayerTopRight,
        NotificationLayerBottomRight,
        NotificationLayerBottom,
        NotificationLayerBottomLeft,
        NotificationLayerTopLeft,
        NotificationLayerTop])
], exports.NotificationService);

var __decorate$83 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLNotificationModule = (function () {
    function VCLNotificationModule() {
    }
    return VCLNotificationModule;
}());
exports.VCLNotificationModule = __decorate$83([
    _angular_core.NgModule({
        imports: [
            _angular_forms.FormsModule,
            _angular_common.CommonModule,
            exports.VCLButtonModule,
            exports.VCLLayerModule.forChild({ layers: [
                    NotificationLayerTopRight,
                    NotificationLayerBottomRight,
                    NotificationLayerBottom,
                    NotificationLayerBottomLeft,
                    NotificationLayerTopLeft,
                    NotificationLayerTop
                ] })
        ],
        exports: [],
        declarations: [exports.NotificationComponent],
        entryComponents: [exports.NotificationComponent],
        providers: [
            exports.NotificationService,
        ],
    })
], exports.VCLNotificationModule);

var __decorate$88 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$50 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TooltipComponent = (function () {
    // TODO: calculate proper tooltip position
    // TODO: calculate proper tooltip position
    // @Input() offsetTop: number = 30;
    // widthCorrection: number = 50;
    function TooltipComponent(element) {
        this.element = element;
    }
    Object.defineProperty(TooltipComponent.prototype, "tooltipPosiiton", {
        get: function () {
            switch (this.position) {
                case 'right':
                    return 'vclTooltip vclArrowPointerRight';
                case 'left':
                    return 'vclTooltip vclArrowPointerLeft';
                case 'bottom':
                    return 'vclTooltip vclArrowPointerBottom';
                default: return 'vclTooltip vclArrowPointerTop';
            }
        },
        enumerable: true,
        configurable: true
    });
    return TooltipComponent;
}());
__decorate$88([
    _angular_core.Input(),
    __metadata$50("design:type", String)
], TooltipComponent.prototype, "content", void 0);
__decorate$88([
    _angular_core.Input(),
    __metadata$50("design:type", String)
], TooltipComponent.prototype, "position", void 0);
__decorate$88([
    _angular_core.Input(),
    __metadata$50("design:type", Object)
], TooltipComponent.prototype, "ref", void 0);
TooltipComponent = __decorate$88([
    _angular_core.Component({
        selector: 'vcl-tooltip-container',
        template: "<div role=\"tooltip\" [class]=\"tooltipPosiiton\"> <div class=\"vclTooltipContent\">{{content}}</div> <div class=\"vclArrowPointer\"></div> </div>",
        host: {
            '[class.vclTooltip]': 'true',
        }
    }),
    __metadata$50("design:paramtypes", [_angular_core.ElementRef])
], TooltipComponent);

var __decorate$89 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$51 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TooltipDirective = (function () {
    function TooltipDirective(element, resolver, viewContainerRef) {
        this.element = element;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.content = '';
        this.position = 'top';
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        var factory = this.resolver.resolveComponentFactory(TooltipComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.content = this.content;
        this.tooltip.instance.position = this.position;
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        this.tooltip.destroy();
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (this.tooltip)
            this.tooltip.destroy();
    };
    return TooltipDirective;
}());
__decorate$89([
    _angular_core.Input(),
    __metadata$51("design:type", String)
], TooltipDirective.prototype, "content", void 0);
__decorate$89([
    _angular_core.Input(),
    __metadata$51("design:type", String)
], TooltipDirective.prototype, "position", void 0);
__decorate$89([
    _angular_core.HostListener('mouseenter'),
    __metadata$51("design:type", Function),
    __metadata$51("design:paramtypes", []),
    __metadata$51("design:returntype", void 0)
], TooltipDirective.prototype, "onMouseEnter", null);
__decorate$89([
    _angular_core.HostListener('mouseleave'),
    __metadata$51("design:type", Function),
    __metadata$51("design:paramtypes", []),
    __metadata$51("design:returntype", void 0)
], TooltipDirective.prototype, "onMouseLeave", null);
TooltipDirective = __decorate$89([
    _angular_core.Directive({ selector: '[vcl-tooltip]' }),
    __metadata$51("design:paramtypes", [_angular_core.ElementRef,
        _angular_core.ComponentFactoryResolver,
        _angular_core.ViewContainerRef])
], TooltipDirective);

var __decorate$87 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLTooltipModule = (function () {
    function VCLTooltipModule() {
    }
    return VCLTooltipModule;
}());
exports.VCLTooltipModule = __decorate$87([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.L10nModule],
        exports: [TooltipComponent, TooltipDirective],
        declarations: [TooltipComponent, TooltipDirective],
        providers: [],
        entryComponents: [TooltipComponent]
    })
], exports.VCLTooltipModule);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.VCLModule = (function () {
    function VCLModule() {
    }
    return VCLModule;
}());
exports.VCLModule = __decorate([
    _angular_core.NgModule({
        imports: [],
        exports: [
            exports.VCLWormholeModule,
            exports.VCLIconModule,
            exports.VCLIcogramModule,
            exports.VCLButtonModule,
            exports.VCLButtonGroupModule,
            exports.VCLLayerModule,
            exports.VCLLinkModule,
            exports.VCLInputModule,
            exports.VCLFileInputModule,
            exports.VCLTextareaModule,
            exports.VCLFlipSwitchModule,
            exports.VCLTabNavModule,
            exports.VCLNavigationModule,
            exports.VCLToolbarModule,
            exports.VCLPopoverModule,
            exports.VCLProgressBarModule,
            exports.VCLRadioButtonModule,
            exports.VCLCheckboxModule,
            exports.VCLFormControlLabelModule,
            exports.VCLMetalistModule,
            exports.VCLDropdownModule,
            exports.VCLSelectModule,
            exports.VCLOffClickModule,
            exports.VCLMonthPickerModule,
            exports.VCLDatePickerModule,
            exports.VCLLabelModule,
            exports.VCLTokenModule,
            exports.VCLSliderModule,
            exports.VCLInputControlGroupModule,
            exports.VCLAlertModule,
            exports.VCLBusyIndicatorModule,
            exports.VCLNotificationModule,
            exports.VCLTooltipModule
        ]
    })
], exports.VCLModule);

exports.ObservableComponent = ObservableComponent;
exports.defineMetadata = defineMetadata;
exports.getMetadata = getMetadata;
exports.setAnnotation = setAnnotation;
exports.getAnnotation = getAnnotation;
exports.setAnimations = setAnimations;
exports.LayerRef = LayerRef;
exports.CHILD_LAYER_CONFIG = CHILD_LAYER_CONFIG;
exports.Layer = Layer;
exports.AttachmentX = AttachmentX;
exports.AttachmentY = AttachmentY;
exports.TemplateWormhole = TemplateWormhole;
exports.ComponentWormhole = ComponentWormhole;
exports.Wormhole = Wormhole;
exports.DomComponentWormhole = DomComponentWormhole;
exports.WormholeHost = WormholeHost;
exports.DomWormholeHost = DomWormholeHost;
exports.AlertError = AlertError;
exports.Notification = Notification;

Object.defineProperty(exports, '__esModule', { value: true });

})));
