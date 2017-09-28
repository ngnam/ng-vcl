var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { IconComponent } from './icon.component';
import { IconService } from './icon.service';
export { IconComponent, IconService };
var VCLIconModule = /** @class */ (function () {
    function VCLIconModule() {
    }
    VCLIconModule_1 = VCLIconModule;
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
    VCLIconModule = VCLIconModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, L10nModule],
            exports: [IconComponent],
            declarations: [IconComponent],
            providers: [IconService],
        })
    ], VCLIconModule);
    return VCLIconModule;
    var VCLIconModule_1;
}());
export { VCLIconModule };
