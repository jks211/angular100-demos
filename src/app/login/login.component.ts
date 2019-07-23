import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,
              private router: Router) { }

  ngOnInit() {

  }

  changeLogin() {
    // this.loggedIn = !this.loggedIn;
    // if (this.loggedIn) {
       this.authService.login('user', 'root');
    // }
  }

  login() {
    this.authService.login('user', 'root');
    // this.authService.login().subscribe(() => {
    //   this.setMessage();
    //   if (this.authService.isLoggedIn) {
    //     // Get the redirect URL from our auth service
    //     // If no redirect has been set, use the default
    //     let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/admin';

        // Redirect the user
        this.router.navigateByUrl(this.authService.redirectUrl);
  }

  logout() {
    this.authService.logout();
  }

}
