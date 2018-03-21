import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LoginService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());


  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }

  public getToken() : string {
    return localStorage.getItem('token');
  }


  login(userToken) : void {
    localStorage.setItem('token', userToken);
    this.isLoginSubject.next(true);
  }


  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

}