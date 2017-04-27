var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, ElementRef, HostListener } from '@angular/core';
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
__decorate([
    Input('type'),
    __metadata("design:type", String)
], InputDirective.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], InputDirective.prototype, "selectOnFocus", void 0);
__decorate([
    HostListener('focus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InputDirective.prototype, "onFocus", null);
InputDirective = __decorate([
    Directive({
        selector: '[vcl-input]',
        host: {
            '[class.vclInput]': 'true',
        }
    }),
    __metadata("design:paramtypes", [ElementRef])
], InputDirective);
export { InputDirective };
