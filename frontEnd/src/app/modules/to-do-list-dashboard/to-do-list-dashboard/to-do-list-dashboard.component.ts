import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-to-do-list-dashboard',
  templateUrl: './to-do-list-dashboard.component.html',
  styleUrl: './to-do-list-dashboard.component.scss'
})
export class ToDoListDashboardComponent {
  constructor(private userHttp : ServicesService, private route : Router, private cookies : CookieService){}

  // Defining the required things for the dashboard
  lists : any = [];
  tasks : any = [];
  url : string = this.route.url
  urlSettings : string = "/dashboard?page=settings"


  ngOnInit(): void {
    // checking the cookies and the route
    if(this.cookies.get('name') !== "Login"){
      this.route.navigate(['/login'])
    }else{
      this.getUserLists()
      console.log(this.url);
      
    }

    // Decode the url for settings and id 
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlWithoutEncoding = decodeURIComponent(event.url);
        if (urlWithoutEncoding !== event.url) {
          this.route.navigateByUrl(urlWithoutEncoding);
        }
      }
    });
  }
  
  // Get user's lists
  getUserLists(){
    this.userHttp.userLists(this.cookies.get('userEmail')).subscribe(res => {
      this.lists = res
      console.log(res)
    })
  }

  // Get list's tasks
  getListTasks(listId : number){
    this.userHttp.listTasks(listId).subscribe(res => {
      this.lists = res
      console.log(res)
    })
  }
}