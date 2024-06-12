import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { ToDoListDashboardRoutingModule } from './to-do-list-dashboard-routing.module';
import { ToDoListDashboardComponent } from './to-do-list-dashboard/to-do-list-dashboard.component';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { SearchPipePipe } from '../../pipes/search-pipe.pipe';


@NgModule({
  declarations: [ToDoListDashboardComponent],
  imports: [
    CommonModule,
    ToDoListDashboardRoutingModule,
    FormsModule,
    CheckboxModule,
    PopUpComponent,
    SearchPipePipe
  ]
})
export class ToDoListDashboardModule { }
