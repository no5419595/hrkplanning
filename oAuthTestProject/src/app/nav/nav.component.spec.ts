import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService, AuthServiceConfig } from 'angular5-social-login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { SymbolService } from '../symbol.service';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent],
      imports:[
        FormsModule,
        RouterModule, 
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        SymbolService, 
        LoginService, 
        AuthService, 
        {provide:AuthServiceConfig, useValue: new AuthServiceConfig([])}
      ]
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
