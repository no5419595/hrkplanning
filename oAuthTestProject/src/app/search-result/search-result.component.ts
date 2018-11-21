import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { LoginService } from "../login.service";
import { Router } from '@angular/router';
import { Constants} from '../Constants';
import { HttpClient} from '@angular/common/http';
import { SymbolService} from '../symbol.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  signOutURL: string;

  symbols: any[]=[];
  displaySymbols: any[]=[];
  typeList: any[]=[];
  filters: string[];
  type_symMapping: any= {};

  //symbol
  selectedSymbol: string;
  searchFor: string;

  subscription: Subscription;
  searchTermSubscription: Subscription;


  //pagination
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
    this.subscription =  
      this.symbolService.enabledFilters$.subscribe(filtersEnabled =>{
        console.log('filtersEnabled:', filtersEnabled);
        this.filters= filtersEnabled;
        this.refreshView();
      });

    this.searchTermSubscription= 
      this.symbolService.searchTerm$.subscribe(searchTerm =>{
        console.log('searchTerm:', searchTerm);
      });
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
    this.symbolService.pushNewFilterMapChange(undefined);
    this.symbolService.updateFilterList(undefined);
    this.symbolService.selectSymbol(undefined);
    this.type_symMapping={};

    this.http.get(Constants.API_CONSTANT + '/ref-data/symbols' ).subscribe( data=> {
      let retrievedSymbols: any= data;
      this.symbols= retrievedSymbols.filter( s => s.symbol.indexOf(this.searchFor)!==-1);

      this.typeList=[];
      this.initializeTypeList().then(res=>{
          this.symbolService.updateFilterList(res);
          console.log('type- sym mapping', this.type_symMapping);
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
    // console.log('hereee');
    this.symbols.forEach(function(sym) {
      promises.push(
        new Promise((resolve, reject) => {
          that.http.get(Constants.API_CONSTANT + '/stock/' +  sym.symbol + '/company')

          .toPromise()
          .then(res => { // Success
            console.log('what is this:', res );
            console.log('what is this2:', JSON.parse(JSON.stringify(res)).sector );

            let sector = JSON.parse(JSON.stringify(res)).sector;

            if(sector==undefined){
              resolve(undefined);
            }
            let mappingJsonArray = that.type_symMapping[sector];
            if(mappingJsonArray===undefined){
              mappingJsonArray = [];
            }
            mappingJsonArray.push(sym);
            that.type_symMapping[sector]=mappingJsonArray;     
            resolve(sector!=undefined || sector!==""? sector: undefined);
          }).catch(err=>{
            resolve(undefined);
          });
        }));
    });

    return new Promise((resolve) => {
      Promise.all(promises).then(values=> {
        resolve(values.filter((v,i) => values.indexOf(v) === i && v!=undefined));
      })
    });
  }

  refreshView(){
    if(this.symbols!=undefined){
      this.displaySymbols=[];
      let tempDisplaySymbols=[];

      if(this.filters!=undefined){
        
        for (var sector in this.filters) {
          // console.log('f:' , sector);
          // console.log('?', this.filters[sector]);
          if(this.filters[sector]){
            // console.log('true!');
            let symbolsInWithThisFilter= this.type_symMapping[sector];
            symbolsInWithThisFilter.forEach(symbol=>{
              tempDisplaySymbols.push(symbol);
            });
          }
        }
        if(tempDisplaySymbols.length==0){
          tempDisplaySymbols= this.symbols;
        }
        console.log('finally...!', tempDisplaySymbols);
      }else{
        tempDisplaySymbols= this.symbols;
      }
      this.displaySymbols = tempDisplaySymbols.slice((this.pageNumber -1) * this.pageSize, this.pageNumber * this.pageSize);

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
