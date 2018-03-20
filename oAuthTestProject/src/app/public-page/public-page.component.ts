import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  goToSignIn(){
    this.router.navigate(['login']);
  }
}
