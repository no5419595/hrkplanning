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
  displaySymbols: any[]=[];
  selectedSymbol: string;
  subscription: Subscription;
  searchFor: string;

  typeList: any[]=[];

  listCount: number;
  pageSize: number =8;
  pageNumber: number = 1;
  maxPageNumber : number;

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
    this.symbolService.selectSymbol(s);
  }

  signOut(){
    this.socialAuthService.signOut();
    this.loginService.logout();
 
  }

  search(){
    this.http.get(Constants.API_CONSTANT + '/ref-data/symbols' ).subscribe(data => {
      let retrievedSymbols: any= data;
      // console.log('returnedData:', data);
      this.symbols= retrievedSymbols.filter( s => s.symbol.indexOf(this.searchFor)!==-1);

      let that = this;
      this.typeList=[];
      this.initializeTypeList().then(function(){
        console.log('typeList: ' , that.typeList);
        that.symbolService.updateFilterList(that.typeList);
      });

      this.listCount = this.symbols.length;
      this.pageNumber=1;
      this.refreshView();
    });
  }
  
  initializeTypeList(){
    var promises = [];
    let h= this.http;
    let that = this;
    this.symbols.forEach(function(sym) {
      promises.push(
        that.http.get(Constants.API_CONSTANT + '/tops?symbols=' +  sym.symbol).subscribe(topsData => {
          let symbolTops= topsData[0];
          if(symbolTops.sector !='n/a' && that.typeList.indexOf(symbolTops.sector)==-1){
            that.typeList.push(symbolTops.sector);
          }
        })
      );
    });
    return Promise.all(promises);
  }

  refreshView(){
    if(this.symbols!=undefined){
      this.displaySymbols = this.symbols.slice((this.pageNumber -1) * this.pageSize, this.pageNumber * this.pageSize);
    }
  }


  //pagination
  goToPage(n: number): void {
    this.pageNumber = n;
    this.refreshView();
  }

  onNext(): void {
      this.pageNumber++;
      this.refreshView();
  }

  onPrev(): void {
      this.pageNumber--;
      this.refreshView();
  }

}
