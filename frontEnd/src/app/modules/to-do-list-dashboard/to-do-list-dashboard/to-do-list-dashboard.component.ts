import { Component, ViewChild } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { PopUpComponent } from '../../../components/pop-up/pop-up.component';

@Component({
  selector: 'app-to-do-list-dashboard',
  templateUrl: './to-do-list-dashboard.component.html',
  styleUrl: './to-do-list-dashboard.component.scss'
})
export class ToDoListDashboardComponent {

  constructor(private userHttp : ServicesService, private route : Router, private cookies : CookieService, private router: ActivatedRoute){}

  // Defining the required things for the dashboard
  @ViewChild(PopUpComponent)
  PopUp! : PopUpComponent
  lists : any = [];
  tasks : any = [];
  url : string = this.route.url
  urlSettings : string = "/dashboard?page=settings"
  condtionOfId : string = "url.startWith('/dashboard?id=')"
  listId : number = this.router.snapshot.queryParams['id']; 
  searchValue : string = ""


  ngOnInit(): void {
    // checking the cookies and the route
    if(this.cookies.get('name') !== "Login"){
      this.route.navigate(['/login'])
    }else{
      this.getUserLists()
      console.log(this.url);
    }


    //Get The Tasks of list
    this.getListTasks()

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
  getListTasks(){
    this.userHttp.listTasks(this.listId).subscribe(res => {
      this.tasks = res
      console.log(res)
    })
  }

  // Handle the pop up for list
  openPopUpList(){
    this.PopUp.listPopUp = true
    this.PopUp.visable = true
  }

  // Handle the pop up for task
  openPopUpTask(){
    this.PopUp.taskPopUP = true
    this.PopUp.visable = true
  }

  // send data of list to the backend
  ListData(data : any){
    this.userHttp.addList(data).subscribe(res => {
      this.getUserLists()
    })
  }
  // send data of task to the backend
  TaskData(data : any){
    this.userHttp.addTask(data).subscribe(res => {
      this.getListTasks()
    })
  }
}