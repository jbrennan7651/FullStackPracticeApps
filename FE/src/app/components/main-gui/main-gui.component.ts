import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main-gui',
  templateUrl: './main-gui.component.html',
  styleUrls: ['./main-gui.component.scss']
})
export class MainGuiComponent implements OnInit {

  user : User = new User;
  currentName !: any;
  currentPass !: any;
  constructor(private loginService : LoginService,
    private activeRouter : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.currentName = this.activeRouter.snapshot.paramMap.get('uname');
  }

  onSubmit(uname : string, user: User){
    this.loginService.updateUser(uname, user).subscribe(data =>{
        this.user.uname = user.uname;
        this.user.password = user.password;
        this.currentName = user.uname;
        console.log(user);
      })
  }


}
