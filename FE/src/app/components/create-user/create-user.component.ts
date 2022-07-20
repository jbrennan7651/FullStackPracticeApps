import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  loginForm = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&]).{6,20}$")])
  });

  get uname(){
    return this.loginForm.get('uname');
  }

  get password(){
    return this.loginForm.get('password');
  }

  user : User = new User;
  constructor(private loginService : LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createUser(){
    this.loginService.createUser(this.user).subscribe(data=>{
      alert("Successfully Created New User")
      this.router.navigate(['login'])
    }, error => alert("User already Exists")
    );
  }

}
