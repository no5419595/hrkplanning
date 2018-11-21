import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class SymbolService {
  
  /*symbol source*/
  private selectedSymbolSource = new Subject<string>();

  selectedSymbol$ = this.selectedSymbolSource.asObservable();

  selectSymbol(symbol: string){
    this.selectedSymbolSource.next(symbol);
  }


  /* Filter List*/
  private sectorTypeList = new Subject<any>();

  typeList$ = this.sectorTypeList.asObservable();

  updateFilterList(typeList: any){
    this.sectorTypeList.next(typeList);
  }

  /* search term */
  private search = new Subject<any>();
  searchTerm$ = this.search.asObservable();

  updateSearchTerm(e: any){
    this.search.next(e);
  }



}