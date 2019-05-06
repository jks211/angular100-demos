import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {
  userArray: User[];
  showCard = true;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.userArray = this.service.getUsers();
  }

  parentFunctionHandler(name) {
    alert(`You sent ${name} up to list from child`);
  }

}
