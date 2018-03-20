import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';


@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  loggedIn:boolean=false;

  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.loginService.isLoggedIn().subscribe(l =>{
        this.loggedIn=l; 
      });
      if (this.loggedIn) { 
        return true;
      } else {
        this.router.navigate(['/']);
      }
      return false;

  }
}
