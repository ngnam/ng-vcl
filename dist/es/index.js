var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { VCLIconModule } from './components/icon/icon.module';
import { VCLIcogramModule } from './components/icogram/icogram.module';
import { VCLButtonModule } from './components/button/button.module';
export * from './components/icon/icon.module';
export * from './components/icogram/icogram.module';
export * from './components/button/button.module';
import { IconService } from './services/icon.service';
export * from './services/icon.service';
export let VCLModule = class VCLModule {
};
VCLModule = __decorate([
    NgModule({
        imports: [
            VCLIconModule,
            VCLIcogramModule,
            VCLButtonModule,
        ],
        exports: [
            VCLIconModule,
            VCLIcogramModule,
            VCLButtonModule,
        ],
        providers: [IconService],
    }), 
    __metadata('design:paramtypes', [])
], VCLModule);
