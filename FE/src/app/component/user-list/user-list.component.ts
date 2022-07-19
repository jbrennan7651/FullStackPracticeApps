import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[] = [
    {
      id: 1,
      uName: "orange",
      pWord : "blue"
    }
  ];


  constructor(private userService: UsersService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.readUsers();
  }

  private getUsers(){
    this.userService.readAll().subscribe(data=> {
      this.users = data;
      console.log(data)
      console.log(this.users);
      for(let user of data){
        console.log(user)
      }
    })
  }

  readUsers(): void{
    this.userService.readAll().subscribe({
      next: (users) => {
        console.log(JSON.stringify(users));
        this.users = users;
      },
      error: (d) => console.log(d),
      complete: () => console.log('complete')
    })
  }

  // deleteUser( uname: String): void {
  //   console.log("deleteUser() called: Username=" +uname);
  //   this.userService.delete( uname)
  //     .subscribe( {
  //       next: (msg) => {
  //         this.msg = msg;
  //         console.log(this.msg);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       }});
  //   this.readUsers();
  // }
  // updateUser( user: any)   {
  //   console.log("updateUser() called: user=" +JSON.stringify(user));
  //   this.userService.update( user.uname, user)
  //     .subscribe( {
  //       next: (msg) => {
  //         this.msg = msg;
  //         console.log(this.msg);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       }});
  //   this.readUsers();
  // }
  // refresh(): void {
  //   this.readUsers();
  // }

  // setCurrentUser(user: any, index: number): void {
  //   this.currentUser = user;
  //   this.currentIndex = index;
  // }
}
