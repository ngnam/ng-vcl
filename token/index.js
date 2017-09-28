var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { L10nModule } from '../l10n/index';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLWormholeModule } from '../wormhole/index';
import { TokenComponent } from './token.component';
import { TokenListComponent } from './token-list.component';
import { TokenInputComponent, TokenInputLabelPost, TokenInputLabelPre } from './token-input.component';
export { TokenComponent, TokenInputComponent, TokenListComponent };
var VCLTokenModule = /** @class */ (function () {
    function VCLTokenModule() {
    }
    VCLTokenModule = __decorate([
        NgModule({
            imports: [CommonModule, L10nModule, VCLInputModule, VCLButtonModule, FormsModule, VCLIconModule, VCLWormholeModule],
            exports: [TokenComponent, TokenListComponent, TokenInputComponent, TokenInputLabelPost, TokenInputLabelPre],
            declarations: [TokenComponent, TokenListComponent, TokenInputComponent, TokenInputLabelPost, TokenInputLabelPre],
            providers: [],
        })
    ], VCLTokenModule);
    return VCLTokenModule;
}());
export { VCLTokenModule };
