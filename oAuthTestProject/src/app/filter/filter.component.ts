import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Constants} from '../Constants';
import { SymbolService} from '../symbol.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  subscription: Subscription;
  typeList: string[];
  
  constructor(
    private http: HttpClient,
    private symbolService: SymbolService
  ) {
    this.subscription =  
      this.symbolService.typeList$.subscribe(
      types => {
        this.typeList = types;
    });
  }

  ngOnInit() {
  }
  
}
