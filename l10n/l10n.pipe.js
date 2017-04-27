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
import { Optional, Inject, Pipe } from '@angular/core';
import { L10nService } from './l10n.service';
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
L10nPipe = __decorate([
    Pipe({
        name: 'loc',
        pure: false
    }),
    __param(0, Inject(L10nService)),
    __param(0, Optional()),
    __metadata("design:paramtypes", [Object])
], L10nPipe);
export { L10nPipe };
