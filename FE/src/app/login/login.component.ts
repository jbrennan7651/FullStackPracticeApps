import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    uname: new FormControl(''),
    password: new FormControl('')
  });

  user: User = new User;
  constructor(private loginService : LoginService,
    private router : Router) { }

  ngOnInit(): void {
  }

  get uname(){
    return this.loginForm.get('uname');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onSubmit(){
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data =>{
      alert("Login Successful!")
      this.router.navigate([`/main/${this.user.uname}`])
    },error => alert("Please enter correct information or Create a new User"))
  }

  createUser(){
    this.router.navigate(['create'])
  }

}
