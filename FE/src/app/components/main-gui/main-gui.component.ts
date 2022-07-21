import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserInfo } from 'src/app/models/user-info';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main-gui',
  templateUrl: './main-gui.component.html',
  styleUrls: ['./main-gui.component.scss']
})
export class MainGuiComponent implements OnInit {

  user : User = new User;
  userInfo : UserInfo = new UserInfo;
  
  currentName !: any;
  currentInfoName !: any;
  currentPass !: any;
  currentEmail !: any;
  constructor(private loginService : LoginService,
    private activeRouter : ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    this.currentName = this.activeRouter.snapshot.paramMap.get('uname');
    this.loadUserInfo(this.currentName);
    this.currentInfoName = this.currentName;
    this.user.uname = this.currentName;
  }


  onSubmitUser(uname : string, user: User){
    this.loginService.updateUser(uname, user).subscribe(data =>{
        this.user.uname = user.uname;
        this.user.password = user.password;
        this.currentName = user.uname;
        console.log(user);
      })
      this.user.password = '';
  }

  onSubmitUserInfo(uname : string, userInfo: UserInfo){
    this.loginService.updateUserInfo(uname, userInfo).subscribe(data =>{
        this.userInfo.uname = userInfo.uname;
        this.userInfo.email = userInfo.email;
        this.currentInfoName = userInfo.uname;
        console.log(userInfo);
      })
      this.user.password = '';
  }

  loadUserInfo(uname : string){
    this.loginService.loadUserInfo(uname).subscribe((data:any)=> {
      this.userInfo = data;
      this.currentEmail = this.userInfo.email
      console.log(data)
    })
  }

  deleteUser(uname : string){
    this.loginService.deleteUser(uname).subscribe(data => {
      this.user.uname = uname;
      this.router.navigate(['/login'])
    })
    
  }

  public isMenuCollapsed = true;
  public updateCollapsed = true;
  public deleteCollapsed = true;


}
