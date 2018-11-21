import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Constants} from '../Constants';
import { SymbolService} from '../symbol.service';
import { Subscription }   from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  subscription: Subscription;
  typeList: string[];
  enabledMap :any = {};

  constructor(
    private http: HttpClient,
    private symbolService: SymbolService
  ) {
    this.subscription =  
      this.symbolService.typeList$.subscribe(
      types => {
        this.typeList= types;
        if(types!=undefined){
          types.forEach(type=>{
            this.enabledMap[type]= false;
          });
          console.log('filters', this.enabledMap);
        }
    });
  }

  ngOnInit() {
  }

  onCheckboxChange(filterName: string){
    console.log('filterNameChecked:' , filterName);
    let temp: boolean = this.enabledMap[filterName];
    this.enabledMap[filterName] =!temp;
    console.log('now the map:' , this.enabledMap);
    this.symbolService.pushNewFilterMapChange(this.enabledMap);
  }
  
}
