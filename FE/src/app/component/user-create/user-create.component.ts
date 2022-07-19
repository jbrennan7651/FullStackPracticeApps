import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user={
    uid:0,
    uname: "",
    pword:""
  }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  processCreate(): void {
    console.log("processCreate() called=" + JSON.stringify(this.user));
    this.userService.create(this.user)
      .subscribe( {
        next: (msg) => {
          console.log(JSON.stringify(msg));
        },
        error: (error) => {
          console.log(error);
        }});
  }

}
