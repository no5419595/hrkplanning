import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authorized-page',
  templateUrl: './authorized-page.component.html',
  styleUrls: ['./authorized-page.component.scss']
})
export class AuthorizedPageComponent implements OnInit {

  constructor(){}

  ngOnInit() {  
  }

}
