import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavComponent } from './tab-nav.component';
import { TabComponent, TabLabelDirective } from './tab.component';
import { VCLWormholeModule } from '../wormhole/index';

@NgModule({
  imports: [CommonModule, VCLWormholeModule],
  exports: [TabComponent, TabLabelDirective, TabNavComponent],
  declarations: [TabComponent, TabLabelDirective, TabNavComponent],
  providers: [],
})
export class VCLTabNavModule { }
