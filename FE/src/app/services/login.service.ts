import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private baseUrl = "http://localhost:8080/users"

  constructor(private httpClient : HttpClient) { }
  

  loginUser(user :User): Observable<Object>{
    console.log(user);
    this.loadUser(user);

    return this.httpClient.post(`${this.baseUrl}/login`, user)
    
  }

  createUser(user : User){
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/create`, user)
  }


  loadUser(user : User){
    console.log(user.uname, user.password);
    this.loadUserInfo(user.uname);
    return this.httpClient.get(`${this.baseUrl}/${user.uname}`)
  }
  loadUserInfo(uname : string){
    return this.httpClient.get(`${this.baseUrl}/${uname}/info`)
  }

  loadAllUsers(){
    return this.httpClient.get(`${this.baseUrl}`)
  }

  updateUser(uname : string, user : User){
    console.log(user);
    this.loadUser(user);
    return this.httpClient.put(`${this.baseUrl}/${uname}`, user)
  }

  updateUserInfo(uname : string, userInfo : UserInfo){
    console.log(userInfo);
    this.loadUserInfo(userInfo.uname);
    return this.httpClient.put(`${this.baseUrl}/${uname}/info`, userInfo)
  }

  deleteUser(uname: string){
    console.log(uname);
    return this.httpClient.delete(`${this.baseUrl}/${uname}`)
  }
}
