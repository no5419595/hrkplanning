import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuard, LoginService],
      imports:[
        RouterTestingModule
      ]
    });
  });

  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
