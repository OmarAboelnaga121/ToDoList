import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private userHttp : ServicesService, private route : Router, private cookies : CookieService){}

  user = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
    if(this.cookies.get('name') == `${this.user.email}`){
      this.route.navigate(['/dashboard'])
    }
  }
    
  loginUser(){
    this.user = {
      email: (document.getElementById('mail') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value
    }

    this.userHttp.loginUser(this.user);
    
    // this.cookies.set(`${this.user.email}`, 'Login')

    this.cookies.set('name',`${this.user.email}`);

    this.route.navigate(['/dashboard'])
  }
}
