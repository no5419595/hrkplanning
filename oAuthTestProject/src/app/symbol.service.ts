import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class SymbolService {
  
  // Observable string sources
  private selectedSymbolSource = new Subject<string>();

  // Observable string sources
  private sectorTypeList = new Subject<any>();


  // Observable string streams
  selectedSymbol$ = this.selectedSymbolSource.asObservable();

  // Observable string streams
  typeList$ = this.sectorTypeList.asObservable();

  selectSymbol(symbol: string){
      this.selectedSymbolSource.next(symbol);
  }

  updateFilterList(typeList: any){
    this.sectorTypeList.next(typeList);
  }

  getSymbol() {
    return this.selectedSymbol$;
  }

  getTypeList() {
    return this.typeList$;
  }

}