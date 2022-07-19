import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const baseURL = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  readAll(): Observable<any> {
    console.log('readAll():');
    let users = this.httpClient.get<User[]>(baseURL);
    console.log('users:' + JSON.stringify(users));
    return users
  }

  read(uname: any): Observable<any> {
    return this.httpClient.get(`${baseURL}${uname}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(`${baseURL}`, data);
  }

  update(uname: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${uname}`, data);
  }

  delete(uname: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${uname}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }
}
