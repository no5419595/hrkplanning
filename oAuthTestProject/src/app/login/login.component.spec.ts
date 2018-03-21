import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router, RouterOutlet, RouterModule } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService, AuthServiceConfig } from 'angular5-social-login';
import { LoginService } from '../login.service';
import { SymbolService } from '../symbol.service';

const MockRouter=  {}; 
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterModule,RouterTestingModule],
      providers:[
        {provide: Router,  useValue: MockRouter },
        AuthService, 
        {provide:AuthServiceConfig, useValue: new AuthServiceConfig([])},
        LoginService,
        SymbolService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
