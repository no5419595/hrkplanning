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

  getSymbol() {
    return this.selectedSymbol$;
  }

  /* Filter List*/
  private sectorTypeList = new Subject<any>();

  typeList$ = this.sectorTypeList.asObservable();

  updateFilterList(typeList: any){
    this.sectorTypeList.next(typeList);
  }

  getTypeList() {
    return this.typeList$;
  }

  private enabledFilterMap = new Subject<any>();
  enabledFilters$ = this.enabledFilterMap.asObservable();

  pushNewFilterMapChange(e: any){
    this.enabledFilterMap.next(e);
  }

  getEnabledFilters() {
    return this.enabledFilters$;
  }

}