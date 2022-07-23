import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private loginService : LoginService,
    private router: Router) { }

  users : User[] = [];
  user !: User;
  updateToggle = false;
  addToggle = false;
  passwordToggle=  false;
  currentName !: string;

  ngOnInit(): void {
    this.getUsers();
  }

  getClickedUser(uname: string){
    this.loginService.loadUserByName(uname).subscribe((data : any) =>{
      this.user = data;
    })
  }
  
  getUsers(){
    this.loginService.loadAllUsers().subscribe((data : any) => {
      this.users = data;
      console.log(data)
    })
  }

  deleteUser(uname : string){
    this.loginService.deleteUser(uname).subscribe((data : any)=> {
      console.log(data);
      this.getUsers();
    })
  }

  onSubmit(uname : string, user: User){
  }

  refresh() : void{
    window.location.reload();
  }

  click(uname : string){
    
    this.loginService.loadUserByName(uname).subscribe((data : any)=>{
      this.user = data
    })
    this.updateToggle = true;
  }
  addClick(){
    this.addToggle = true;
  }

}
