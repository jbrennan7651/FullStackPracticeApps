import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user = {
    uid:0,
    uname: "",
    pword: ""

  }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  processUpdate(uname: any): void {
    console.log("processUpdate() called=" + JSON.stringify(this.user));
    this.userService.update(uname,this.user)
      .subscribe( {
        next: (msg) => {
          console.log(JSON.stringify(msg));
        },
        error: (error) => {
          console.log(error);
        }});
  }
}
