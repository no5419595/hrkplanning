import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LoginService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }

  public getToken() : string {
    return localStorage.getItem('token');
  }


  /**
  *  Login the user then tell all the subscribers about the new status
  */
  login(userToken) : void {
    localStorage.setItem('token', userToken);
    this.isLoginSubject.next(true);
  }

  /**
  * Log out the user then tell all the subscribers about the new status
  */
  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  /**
  *
  * @returns {Observable<T>}
  */
  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

}