import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListDashboardComponent } from './to-do-list-dashboard/to-do-list-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: ToDoListDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListDashboardRoutingModule { }
