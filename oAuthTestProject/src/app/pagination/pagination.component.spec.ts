import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { Router, RouterOutlet, RouterModule } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService, AuthServiceConfig } from 'angular5-social-login';
import { LoginService } from '../login.service';
import { SymbolService } from '../symbol.service';

const MockRouter=  {}; 
describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ],
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
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
