import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentName !: any;
  currentPass !: any;
  constructor(private loginService : LoginService,
    private activeRouter : ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.currentName = this.activeRouter.snapshot.paramMap.get('uname');
  }

  public isMenuCollapsed = true;
  public isCollapsed = true;
}