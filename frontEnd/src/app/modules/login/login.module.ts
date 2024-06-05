import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [LoginComponent],
  providers: [CookieService],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
