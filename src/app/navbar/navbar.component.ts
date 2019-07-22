import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {

  loggedIn = false;


  constructor(private authService: AuthenticationService) {}

  changeLogin() {
    this.loggedIn = !this.loggedIn;
    if (this.loggedIn) {
      this.authService.login('user', 'root')
    }
  }


  ngOnInit() {
    this.loggedIn = this.authService.isUserLoggedIn();
  }
}
