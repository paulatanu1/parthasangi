import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartSearchRoutingModule } from './smart-search-routing.module';
import { SmartSearchComponent } from './smart-search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SmartSearchComponent
  ],
  imports: [
    CommonModule,
    SmartSearchRoutingModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class SmartSearchModule { }
