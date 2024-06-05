import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListDashboardRoutingModule } from './to-do-list-dashboard-routing.module';
import { ToDoListDashboardComponent } from './to-do-list-dashboard/to-do-list-dashboard.component';


@NgModule({
  declarations: [ToDoListDashboardComponent],
  imports: [
    CommonModule,
    ToDoListDashboardRoutingModule
  ]
})
export class ToDoListDashboardModule { }
