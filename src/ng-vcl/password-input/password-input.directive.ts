import { Directive, Input, Output, ElementRef, HostListener, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, OnChanges, SimpleChanges, OnInit, SkipSelf, HostBinding, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordInputComponent } from './password-input.component';
import { InputDirective } from '../input/index';

@Directive({
  selector: 'input[vcl-password-input]'
})
export class PasswordInputDirective {

  constructor(
    @Self() private input: InputDirective,
    @SkipSelf() private passwordInput: PasswordInputComponent
  ) { }

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  get isDisabled() {
    return (this.input.disabled || this.passwordInput.disabled) ? true : null;
  }

  @HostBinding('attr.type')
  get type() {
    return this.passwordInput.visible ? 'text' : 'password';
  }
}
