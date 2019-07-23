import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-login-form-reactive',
  templateUrl: './login-form-reactive.component.html',
  styleUrls: ['./login-form-reactive.component.css']
})
export class LoginFormReactiveComponent  {

  loginForm: FormGroup;
  isSubmitted  =  false;
  username = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);

    constructor(private authService: AuthenticationService, private router: Router, fb: FormBuilder) {
        this.loginForm = fb.group({
            "username": this.username,
            "password": ["", Validators.required]
        });
    }
    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.loginForm);
    }

  login() {
    this.authService.login('user', 'root');
    if (!this.authService.redirectUrl) {
      this.authService.redirectUrl = '/home';
    }
    this.router.navigateByUrl(this.authService.redirectUrl);
  }

  logout() {
    this.authService.logout();
    this.authService.redirectUrl = '/login';
  }


}
