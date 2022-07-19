import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

user ={
  uid: 0,
  uname: "",
  pword:""
}

  constructor(private route: ActivatedRoute,
    private userService: UsersService) { }

  ngOnInit(): void {
    let currentUname = this.route.snapshot.paramMap.get("uname");
    this.readUser(currentUname);
  }

  readUser(uname: any): void {
    console.log("readUser() called");
    this.userService.read(uname)
      .subscribe({
        next: (user) => {
          this.user = user;
          console.log(JSON.stringify(user));
        },
        error: (error) => {
          console.log(error);
        }});
  }

}
