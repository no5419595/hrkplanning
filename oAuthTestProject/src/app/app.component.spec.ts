import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, RouterOutlet, RouterModule } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { PublicPageComponent } from './public-page/public-page.component';

class MockRouter { public navigate() {}; }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        {provide: Router,  useClass: MockRouter }
      ],
      imports:[
        RouterModule, 
        RouterTestingModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'oAuth sample app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('OAuth sample app');
  }));
});
