import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { LoginService } from "../login.service";
import {Constants} from "../Constants";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imgPath= "../../../assets/btn_google_signin_dark_normal_web2x.png";
  
  constructor(
    private route:Router,
    private socialAuthService: AuthService,
    private loginService: LoginService
  ) { 
    
  }

  ngOnInit() {
  }

  signIn(){
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => { 
         this.route.navigate([Constants.pages['AUTHORIZED']]);
         this.loginService.login(userData.idToken);
      }
    );
  }
}
