import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegesterComponent } from './regester/regester.component';

const routes: Routes = [
  {
    path: "",
    component: RegesterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegesterRoutingModule { }
