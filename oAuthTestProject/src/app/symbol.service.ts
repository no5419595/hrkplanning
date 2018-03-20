import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class SymbolService {
  
  // Observable string sources
  private selectedSymbolSource = new Subject<string>();

  // Observable string streams
  selectedSymbol$ = this.selectedSymbolSource.asObservable();

  // Service message commands
  selectSymbol(symbol: string) {
    this.selectedSymbolSource.next(symbol);
  }

  getSymbol() {
    return this.selectedSymbol$;
  }

}