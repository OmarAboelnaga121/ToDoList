import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface User{
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})


export class ServicesService {

  constructor(private httpclient : HttpClient) { }

  // the Requests for regester and login:
    // The post req for Regester
    regesterUser(userData : User){
      const url = "https://localhost:7226/register"
      return this.httpclient.post<User>(url, userData)
    }

    // The post req for login
    loginUser(userData : User){
      const url = "https://localhost:7226/login"

      return this.httpclient.post<User>(url, userData)
      
    }

    
  // The Requests for user's Lists and Tasks:
    // get req for user's Lists
    userLists(mail : string){
      const url = `https://localhost:7226/api/User/userMail/${decodeURIComponent(mail)}`

      return this.httpclient.get<any>(url)
    }

    //get req for list's Tasks
    listTasks(listId : number){
      const url = `https://localhost:7226/api/User/listId/${listId}`

      return this.httpclient.get<any>(url)
    }

  // The Requests for lists:
    // post req for lists
    addList(list : any){
      const url = `https://localhost:7226/api/Lists`

      return this.httpclient.post<any>(url, list)
    }

    // Put req for lists
    updateList(listId : number){
      const url = `https://localhost:7226/api/Lists`

      return this.httpclient.put<any>(url, listId)
    }

    // Delete req for lists
    deleteList(listId : number){
      const url = `https://localhost:7226/api/Lists/${listId}`

      return this.httpclient.delete<any>(url)
    }

  // The Requests for tasks:
    // post req for tasks
    addTask(task : any){
      const url = `https://localhost:7226/api/ToDoItems`

      return this.httpclient.post<any>(url, task)
    }

    // Put req for tasks
    updateTask(listId : number){
      const url = `https://localhost:7226/api/ToDoItems`

      return this.httpclient.put<any>(url, listId)
    }

    // Delete req for tasks
    deleteTask(taskId : number){
      const url = `https://localhost:7226/api/ToDoItems/${taskId}`

      return this.httpclient.delete<any>(url)
    }
}