import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-template',
  templateUrl: './login-form-template.component.html',
  styleUrls: ['./login-form-template.component.css']
})
export class LoginFormTemplateComponent implements OnInit {

  user = { username: 'defaultuser', password: 'defaultpassword'}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  constructor() { }

  onSubmitTemplateBased() {

  }

}
