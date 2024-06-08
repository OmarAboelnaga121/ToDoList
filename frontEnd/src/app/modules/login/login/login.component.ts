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

  // Defining the user
  user = {
    email: '',
    password: ''
  }

  // Checking about the cookies and the route
  ngOnInit(): void {
    if(this.cookies.get('name') ==  "Login"){
      this.route.navigate(['/dashboard'])
    }
  }
    
  // Login for user
  loginUser(){
    this.user = {
      email: (document.getElementById('mail') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value
    }

    this.userHttp.loginUser(this.user).subscribe(response => {
      if (response) {
  
        console.log(response);
        
        this.cookies.set('name', 'Login', {
          expires: 7,
          path: '/' 
        });

        this.cookies.set('userEmail', this.user.email, {
          expires: 7,
          path: '/' 
        });
    
    
        this.route.navigate(['/dashboard'])
      }
    })
  }
}
