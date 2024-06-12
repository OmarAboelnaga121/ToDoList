import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [DialogModule, FormsModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {
  // Constructor for cookies 
  constructor(private cookies : CookieService) { }

  // the Outputs and Inputs
  @Output() submitDataOfList = new EventEmitter<any>();
  @Output() submitDataOfTask = new EventEmitter<any>();
  @Input() listId : number = 0

  // The list and tasks handler for fetch
  list : any = {}
  task : any = {}

  // Error Message for validation
  errorMessage : string = ""

  // controll on the pop up
  errorMessageBoolean : boolean = false
  listPopUp : boolean = false
  taskPopUP : boolean = false
  visable : boolean = false

  // function ==> To Close or cancel the pop up
  cancelPopUp(){
    this.visable = false
    this.listPopUp = false
    this.taskPopUP = false
    this.errorMessageBoolean = false;
    this.errorMessage = ""

  }

  // Function ==> to take and send the data to to-do-list-dashboard
  sendDataOfList(){
    // Defining the list for a backend
    this.list = {
      listId: 0,
      userMail: this.cookies.get('userEmail'),
      listName: (document.getElementById('ListName') as HTMLInputElement).value,
      time: Date()
    }

    // Validation
    if(this.errorMessage == ""){
      this.errorMessageBoolean = true
    }else{
      this.errorMessageBoolean = false
    }

    if(this.list.listName == ""){
      this.errorMessage = "Please enter a list name"
      return false
    }
    console.log(this.list);
    
    // Emit the data to the to-do-list-dashboard 
    this.submitDataOfList.emit({
      listId: this.list.listId,
      userMail: this.list.userMail,
      listName: this.list.listName,
      time: this.list.time
    })

    // Closing the pop up and errors and clear the list
    this.errorMessageBoolean = false;
    this.visable = false;
    (document.getElementById('ListName') as HTMLInputElement).value = ""
    return true
  }

  // Function ==> to take and send the data of task to to-do-list-dashboard
  sendDataOfTask(){
    // Defining the list for a backend
    this.task = {
      itemId: 0,
      listId: this.listId,
      itemName: (document.getElementById('TaskName') as HTMLInputElement).value,
      time: Date(),
      checked: false
    }

    // Validation
    if(this.task.itemName == ""){
      this.errorMessage = "Please enter a task name"
      this.errorMessageBoolean = true;
      return false
    }
    console.log(this.task);
    
    // Emit the data to the to-do-list-dashboard 
    this.submitDataOfTask.emit({
      itemId: this.task.itemId,
      listId: this.task.listId,
      itemName: this.task.itemName,
      time: this.task.time,
      checked: this.task.checked
    })

    // Closing the pop up and errors and clear the list
    this.visable = false;
    this.errorMessageBoolean = false;
    this.errorMessage = "";
    (document.getElementById('TaskName') as HTMLInputElement).value = ""
    return true
  }
}
