import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegesterRoutingModule } from './regester-routing.module';
import { RegesterComponent } from './regester/regester.component';


@NgModule({
  declarations: [RegesterComponent],
  imports: [
    CommonModule,
    RegesterRoutingModule,
  ],
})
export class RegesterModule { }
