import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  users : User[] = [];
  user !: User;
  toggle = false;
  currentName !: string;
  ngOnInit(): void {
    this.getUsers();
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

  click(user : User){
    this.user = user
    this.toggle = true;
  }

  public isMenuCollapsed = true;
  public updateCollapsed = true;
  public deleteCollapsed = true;



}
