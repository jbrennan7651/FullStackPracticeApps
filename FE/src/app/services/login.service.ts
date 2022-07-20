import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

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
    return this.httpClient.get(`${this.baseUrl}/${user.uname}`)
  }

  updateUser(uname : string, user : User){
    console.log(user);
    this.loadUser(user);
    return this.httpClient.put(`${this.baseUrl}/${uname}`, user)
  }

  deleteUser(uname: string){
    console.log(uname);
    return this.httpClient.delete(`${this.baseUrl}/${uname}`)
  }
}
