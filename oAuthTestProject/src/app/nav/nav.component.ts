import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { LoginService } from "../login.service";
import { Router } from '@angular/router';
import { Constants} from '../Constants';
import { HttpClient} from '@angular/common/http';
import { SymbolService} from '../symbol.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  signOutURL: string;
  symbols: any[]=[];
  selectedSymbol: string;
  subscription: Subscription;
  searchFor: string;
  

  constructor(
    private socialAuthService: AuthService,
    private loginService: LoginService,
    private route: Router,
    private http: HttpClient,
    private symbolService: SymbolService
  ) { 
    this.signOutURL= Constants.SIGNOUT;

  }

  ngOnInit() {
  
  }

  selectSymbol(s: string){
    this.selectedSymbol=s;
    console.log('selectedSymbol:' + this.selectedSymbol);
    this.symbolService.selectSymbol(s);
  }

  signOut(){
    this.socialAuthService.signOut().then(signOut => {
      this.loginService.logout();
    });
  }

  search(){
    this.http.get(Constants.API_CONSTANT + '/ref-data/symbols' ).subscribe(data => {
      console.log('returnedData:', data);
      this.symbols=[];
      this.filterBySymbol(data, this.searchFor);
    });
  }

  filterBySymbol(data:any, searchFor: string){
    for(let d of data){
      if(d.symbol.indexOf(searchFor)!==-1){
        this.symbols.push(d);
      }
    }
    console.log('symbols:', this.symbols);
  }

}
