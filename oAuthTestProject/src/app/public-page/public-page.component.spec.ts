import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicPageComponent } from './public-page.component';
import { Router, RouterOutlet, RouterModule } from "@angular/router";
const MockRouter=  {}; 

describe('PublicPageComponent', () => {
  let component: PublicPageComponent;
  let fixture: ComponentFixture<PublicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPageComponent ],
      providers:[
        {provide: Router,  useValue: MockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
