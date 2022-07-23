import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserInfo } from 'src/app/models/user-info';
import { LoginService } from 'src/app/services/login.service';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-user-info-list',
  templateUrl: './user-info-list.component.html',
  styleUrls: ['./user-info-list.component.scss']
})
export class UserInfoListComponent implements OnInit {

  usersInfo : UserInfo[] =[
    {
      "uname": "user1",
      "email": "user1@email.com",
      "phone": "555-555-5555",
      "street": "1 street st.",
      "city": "metropolis",
      "country": "USA"
  }
  ];
  userInfo !: UserInfo;
  users : User[] = [];
  user !: User;
  currentName !: string;
  addToggle = false;
  updateToggle = false;
  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUsers(){
    this.loginService.loadAllUsers().subscribe((data : any) => {
      this.users = data;
      console.log(data)
      this.refresh()
    })
  }

  getUserInfo(){
    this.loginService.loadAllUsersInfo().subscribe((data : any) =>{
      this.usersInfo = data;
      console.log(data)
    })
  }

  updateClick(uname : string){
    this.updateToggle = true;
    this.loginService.loadUserByName(uname).subscribe((data : any) =>{
      this.user = data;
      console.log("data is " + this.user)
    })
    this.addToggle = false;
    
  }

  closePassword(){
    this.updateToggle = false
  }

  addClick(){
   switch(this.addToggle){
    case true: 
      this.addToggle = false;
      break;
    case false:
      this.addToggle = true;
    }
    this.updateToggle = false;
  }

  click(uname : string){
    
    this.loginService.loadUserByName(uname).subscribe((data : any)=>{
      this.user = data
    })
    this.updateToggle = true;
  }
  deleteUser(uname : string){
    this.loginService.deleteUser(uname).subscribe((data : any)=> {
      console.log(data);
      this.getUsers();
    })
  }

  refresh() : void{
    window.location.reload();
  }

}
