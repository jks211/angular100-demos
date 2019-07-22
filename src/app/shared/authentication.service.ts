import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../users/model/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {

        if (username === 'user' && password === 'root') {
            const user =
            {
              id: "1111",
              "first_name": "Bengt",
              "last_name": "Wankel",
              "email": "bwankel9@upenn.edu",
              "gender": "Male",
              "img": "male2.png",
              "dob": "10/02/1978",
              "isActive": true,
              "username": "username",
              "password": "password"
            };

           // return of({username: 'username', password: 'root'});
            this.currentUserSubject.next(user);
                 return user;
        }


        // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        //         user.authdata = window.btoa(username + ':' + password);
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         this.currentUserSubject.next(user);
        //         return user;
        //     }));
    }

    logout() {
        // remove user from local storage to log user out
        // localStorage.removeItem('currentUser');
        // this.currentUserSubject.next(null);
        return of(null);
    }
}
