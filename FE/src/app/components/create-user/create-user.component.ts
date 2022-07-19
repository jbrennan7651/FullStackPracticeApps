import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

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
