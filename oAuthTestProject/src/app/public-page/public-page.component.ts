import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToSignIn(){
    this.router.navigate(['login']);
  }
}
