import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/never';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VCLWormholeModule } from './../wormhole/index';
import { VCLPopoverModule } from '../popover/index';
import { VCLInputModule }   from '../input/index';
import { VCLTokenModule }   from '../token/index';
import { VCLOffClickModule }   from '../off-click/index';

import { Autocomplete, AutocompleteOption }   from './autocomplete.component';
import { InputAutocomplete } from './input.autocomplete.directive';
import { TokenInputAutocompleteDirective } from './token-input.autocomplete.directive';

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLWormholeModule, VCLPopoverModule, VCLTokenModule, VCLOffClickModule],
  exports: [InputAutocomplete, Autocomplete, AutocompleteOption, TokenInputAutocompleteDirective],
  declarations: [InputAutocomplete, Autocomplete, AutocompleteOption, TokenInputAutocompleteDirective],
  providers: [],
})
export class VCLInputAutocompleteModule { }
