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

  // The post req for Regester
  regesterUser(userData : User){
    const url = "https://localhost:7226/register"
    return this.httpclient.post<User>(url, userData)
  }

  // The post req for login
  loginUser(userData : User){
    const url = "https://localhost:7226/login?useCookies=true"

    return this.httpclient.post<User>(url, userData)
  }

  // get req for user's Lists
  userLists(mail : string){
    const url = `https://localhost:7226/api/User/userMail/${decodeURIComponent(mail)}`

    return this.httpclient.get<any>(url)
  }

  //get req for list's Tasks
  listTasks(listId : string){
    const url = `https://localhost:7226/api/User/listId/${listId}`

    return this.httpclient.get<any>(url)
  }
}