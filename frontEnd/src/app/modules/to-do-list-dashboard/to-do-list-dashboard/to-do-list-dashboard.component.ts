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
  searchValue : string = ""

  listId : number = this.router.snapshot.queryParams['id']; 
  
  darkModeCheck : boolean = false
  logOutCheck : boolean = false

  ngOnInit(): void {
    // checking the cookies and the route
    if(this.cookies.get('name') !== "Login"){
      this.route.navigate(['/login'])
    }else{
      this.getUserLists()
      console.log(this.url);
    }

    if(this.cookies.get('darkMode') === "true"){
      this.darkModeCheck = true
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

  // Handle the pop up for list
  openPopUpList(){
    this.PopUp.listPopUp = true
    this.PopUp.visable = true
  }

  // Get user's lists
  getUserLists(){
    this.userHttp.userLists(this.cookies.get('userEmail')).subscribe(res => {
      this.lists = res
      console.log(res)
    })
  }

  // send data of list to the backend
  ListData(data : any){
    this.userHttp.addList(data).subscribe(res => {
      this.getUserLists()
    })
  }

  // Function to open the update pop up
  updateList(list : any){
    this.PopUp.visable = true
    this.PopUp.listPopUpUpdate = true
    this.PopUp.list = list
  }

  // function to update the list
  updateListData(data : any){
    this.userHttp.updateList(data).subscribe(res => {
      this.getUserLists()
    })
  }

  // Function to delete the list
  deleteList(listId : number){
    this.userHttp.deleteList(listId).subscribe(res => {
      this.getUserLists()
    })
  }

  //function to  the task while checkeing
  taskCheck(task : any){    
    this.userHttp.updateTask({
      itemId: task.itemId,
      listId: task.listId,
      itemName: task.itemName,
      time: task.time,
      checked: task.checked
    }).subscribe(response => {
      // Handle the response if needed
      console.log('Task updated successfully', response);
    }, error => {
      // Handle error if needed
      console.error('Error updating task', error);
    });
  }

  // Get list's tasks
  getListTasks(){
    this.userHttp.listTasks(this.listId).subscribe(res => {
      this.tasks = res
      console.log(res)
    })
  }

  // Handle the pop up for task
  openPopUpTask(){
    this.PopUp.taskPopUP = true
    this.PopUp.visable = true
  }

  // send data of task to the backend
  TaskData(data : any){
    this.userHttp.addTask(data).subscribe(res => {
      this.getListTasks()
    })
  }

  deleteTask(taskId : number){
    this.userHttp.deleteTask(taskId).subscribe(res => {
      this.getListTasks()
    })
  }

  // Function to the settings in dark mode to update the cookies
  darkMode(){
    this.cookies.set('darkMode', `${this.darkModeCheck}`)
    window.location.reload();
  }


  logOut(){
    this.cookies.deleteAll()
    this.route.navigate(['/'])
  }
}