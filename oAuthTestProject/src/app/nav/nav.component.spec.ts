import { async, fakeAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService, AuthServiceConfig } from 'angular5-social-login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { SymbolService } from '../symbol.service';
import { Observable } from 'rxjs/Rx';

declare var __karma__: any;

describe('NavComponent', () => {
  let component: any;
  let fixture: ComponentFixture<NavComponent>;
  let symbolService: SymbolService;
  let loginService: LoginService;
  let socialAuthService: AuthService;

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

  beforeEach(async(inject([SymbolService],(_symbolService: SymbolService) => {

    __karma__.config.testGroup = '';
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    symbolService =_symbolService;

  })));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should select the symbol in the service', inject([SymbolService], (s) => {
    component.symbolService= s;    
    expect(s).toBeDefined();
    let spy = spyOn(component.symbolService , "selectSymbol");
    component.selectSymbol('testASDF');
    expect(spy).toHaveBeenCalledWith('testASDF');
  }));


  it('should filter the data by the keyword', () => {
    let mockData= [{symbol: "AA"},{symbol:"BB"},{symbol:"CC"}];
    component.filterBySymbol(mockData, "BB");
    expect(component.symbols).toEqual([{symbol: "BB"}]);
  });

  it('should sign out', inject([AuthService, LoginService], (_socialAuthService, _loginService) => {
    expect(_socialAuthService).toBeDefined();
    expect(_loginService).toBeDefined();

    component.socialAuthService= _socialAuthService; 
    component.loginService = _loginService;

    let spy = spyOn(component.socialAuthService , "signOut");
    let spy2 = spyOn(component.loginService , "logout");

    component.signOut();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  }));

});
