import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrl: './regester.component.scss'
})
export class RegesterComponent {

  constructor(private userHttp : ServicesService, private route : Router, private cookies : CookieService){}

  ngOnInit(): void {
    if(this.cookies.get('name') == "Login"){
      this.route.navigate(['/dashboard'])
    }
  }

  user : any = {
    email : "",
    password: "",
  } 

  regesterUser(){
    this.user = {
      email: (document.getElementById("mail") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value
    }


    this.userHttp.regesterUser(this.user).subscribe()

    this.route.navigate(["/login"])
  }

}
