import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Constants} from '../Constants';
import { SymbolService} from '../symbol.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  symbol: any;
  topsData;
  deepData;
  subscription: Subscription;
  
  constructor(
    private http: HttpClient,
    private symbolService: SymbolService
  ) {

    this.subscription =  
      this.symbolService.selectedSymbol$.subscribe(
      selectedSymbol => {
        this.symbol= selectedSymbol;
        this.getData(selectedSymbol);
    });
  }

  ngOnInit() {
  }
  
  getData(symbol:string):void{
    this.http.get(Constants.API_CONSTANT + '/tops?symbols=' +  symbol).subscribe(data => {
      this.topsData = data[0];
      console.log('topsData:' , this.topsData);
    });

    this.http.get(Constants.API_CONSTANT + '/deep?symbols=' +  symbol).subscribe(data => {
        this.deepData = data;
        console.log('deepData:' , data);
    });
  }
}
