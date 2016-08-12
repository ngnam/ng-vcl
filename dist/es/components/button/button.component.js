var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
/**
The main control for triggering actions

## Usage

```html
{{vcl-button label="My Button" action=(action "closureAction")}}
```

@demo example

@property     {String}    label    textual label
@property     {String}    title    textual title
*/
export let ButtonComponent = class ButtonComponent {
    constructor() {
        this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        this.pressed = false; // `true` if a pointer device is conducting a `down` gesture on the button
        this.focused = false; // `true` if the element is focused  (CSS' :focus)
        this.busy = false; // State to indicate that the button is disabled as a operation is in progress
        this.selected = false;
        this.flexLabel = false;
    }
    domouseenter() {
        console.log('mouseenter');
    }
    domouseleave() {
        console.log('mouseleave');
    }
    ngOnInit() { }
    get calculatedLabel() {
        return (this.busy && this.busyLabel) ? this.busyLabel : this.label;
    }
    get calculatedPrepIcon() {
        return (this.busy && this.prepIconBusy) ? this.prepIconBusy : this.prepIcon;
    }
    get calculatedAppIcon() {
        return (this.busy && this.appIconBusy) ? this.appIconBusy : this.appIcon;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], ButtonComponent.prototype, "flexLabel", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ButtonComponent.prototype, "busyLabel", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ButtonComponent.prototype, "label", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ButtonComponent.prototype, "prepIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ButtonComponent.prototype, "prepIconBusy", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ButtonComponent.prototype, "appIcon", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ButtonComponent.prototype, "appIconBusy", void 0);
ButtonComponent = __decorate([
    Component({
        selector: '[vcl-button]',
        host: {
            '(mouseenter)': 'hovered=true',
            '(mouseleave)': 'hovered=false',
            // '(down)': 'pressed=true',
            // '(up)': 'pressed=false',
            '(onfocus)': 'focused=true;',
            '(onblur)': 'focused=false',
            '[class.vclButton]': 'true',
            '[class.vclHovered]': 'hovered',
            '[class.vclDisabled]': 'disabled',
            '[class.vclSelected]': 'selected',
        },
        templateUrl: 'button.component.html',
        // encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
    }), 
    __metadata('design:paramtypes', [])
], ButtonComponent);