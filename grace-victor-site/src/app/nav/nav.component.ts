import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { LoginService } from "../login.service";
import { Router } from '@angular/router';
import { Constants} from '../Constants';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  signOutURL: string;

  constructor(
    private socialAuthService: AuthService,
    private loginService: LoginService,
    private route: Router
  ) { 
    this.signOutURL= Constants.SIGNOUT;
  }

  ngOnInit() {
  }

  signOut(){
    this.socialAuthService.signOut().then(signOut => {
      this.loginService.logout();
    });
  }

}
