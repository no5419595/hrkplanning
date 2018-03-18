import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { LoginService } from '../login.service';


@Component({
  selector: 'app-authorized-page',
  templateUrl: './authorized-page.component.html',
  styleUrls: ['./authorized-page.component.scss']
})
export class AuthorizedPageComponent implements OnInit {

  isLoggedIn:boolean;
  constructor(
    private http: HttpClient,
    private loginService: LoginService){
  }

  ngOnInit() {      
    this.loginService.isLoggedIn().subscribe(loggedIn =>{
      this.isLoggedIn = loggedIn;
      console.log('what is the vlaue?', loggedIn);
    });
    console.log('logged in?', this.isLoggedIn);
    this.sendToRestApiMethod();
  }
  sendToRestApiMethod() : void {
    if(this.isLoggedIn){
      console.log('token!', this.loginService.getToken());

      this.http.post('url to google login in your rest api', { token: this.loginService.getToken() })
        .subscribe(onSuccess => {
        //login was successful
        //save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login

        }, onFail => {
          //login was unsuccessful
          //show an error message
      }
    );
  }
 }

}
