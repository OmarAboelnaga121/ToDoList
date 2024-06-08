import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "regester",
        loadChildren: () => 
            import('../app/modules/regester/regester.module').then(
                (m) => m.RegesterModule
            )
    },
    {
        path: "login",
        loadChildren: () => 
            import('../app/modules/login/login.module').then(
                (m) => m.LoginModule
            )
    },
    {
        path: "dashboard",
        loadChildren: () => 
            import('../app/modules/to-do-list-dashboard/to-do-list-dashboard.module').then(
                (m) => m.ToDoListDashboardModule
            )
    },
    { 
        path: '**',
        component:PageNotFoundComponent
    }
];
