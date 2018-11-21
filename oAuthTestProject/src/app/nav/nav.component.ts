import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular5-social-login";
import { LoginService } from "../login.service";
import { Constants} from '../Constants';
import { SymbolService} from '../symbol.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  signOutURL: string;
  searchFor: string;

  constructor(
    private socialAuthService: AuthService,
    private loginService: LoginService,
    private symbolService: SymbolService
  ) { 
    this.signOutURL= Constants.SIGNOUT;
  }

  ngOnInit() {
  }

  signOut(){
    this.socialAuthService.signOut();
    this.loginService.logout();
  }

  search(){
    this.symbolService.updateSearchTerm(this.searchFor);
  }

}
