import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { LoginService } from "../login.service";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

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
      (userData) => { //on success
         //this will return user data from google. What you need is a user token which you will send it to the server
         console.log('beforeSending', userData.idToken);
         this.route.navigate(['authorized-page']);
         this.loginService.login(userData.idToken);
      }
    );
  }
}
