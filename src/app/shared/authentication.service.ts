import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../users/model/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private router: Router){}

  public redirectUrl = '';
  isLoggedIn = false;
  @Output() getLoggedInStatus: EventEmitter<any> = new EventEmitter();

  login(username: string, password: string): Observable<boolean> {
      if (username === 'user' && password === 'root') {
          this.getLoggedInStatus.emit(true);
          this.isLoggedIn = true;
          localStorage.setItem('currentUser','loggedin')
          return of(true);
      } else {
          this.isLoggedIn = false;
          this.getLoggedInStatus.emit(false);
          return of(false);
      }
  }

  logout(): void {
      this.getLoggedInStatus.emit(false);
      this.isLoggedIn = false;
      console.log('logging out user');
      localStorage.removeItem('currentUser');
      this.router.navigate(['./login']);
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }


  // logout() {
  //   // remove user from local storage to log user out
  //   // localStorage.removeItem('currentUser');
  //   // this.currentUserSubject.next(null);
  //   return of(null);
  // }
}
