import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CatService} from '../cat.service';


@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {

  constructor(private router: Router, private catService: CatService) { }

  ngOnInit() {
    this.catService.getAllCats().toPromise().then(cats =>{
      console.log('cats', cats);
    });
  }
  goToSignIn(){
    this.router.navigate(['login']);
  }

}
