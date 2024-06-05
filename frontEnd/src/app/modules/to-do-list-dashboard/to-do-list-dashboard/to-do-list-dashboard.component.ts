import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-to-do-list-dashboard',
  templateUrl: './to-do-list-dashboard.component.html',
  styleUrl: './to-do-list-dashboard.component.scss'
})
export class ToDoListDashboardComponent {
  constructor(private userHttp : ServicesService, private route : Router, private cookies : CookieService){}

  ngOnInit(): void {
    if(this.cookies.get('name') !== "Login"){
      this.route.navigate(['/login'])
    }
  }
}
