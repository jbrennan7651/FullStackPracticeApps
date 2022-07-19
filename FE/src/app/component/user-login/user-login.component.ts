import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.pattern("^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")]),
    pword: new FormControl('', Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"))

  })

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.loginForm.value);
   }
   get uname(){
    return this.loginForm.get('uname');
   }
  
   get pword(){
    return this.loginForm.get('pword');
   }
}
