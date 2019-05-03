import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  template: `
  <div class="container">
  <div class="card-deck">
    <app-person
      *ngFor="let person of peopleArray"
      [name]="person"
      (personClicked)="parentFunctionHandler($event)">
    </app-person>
  </div>
  </div>
    `
})
export class PeopleListComponent implements OnInit {
  peopleArray: any[];

  ngOnInit() {
    this.peopleArray = ['April', 'May', 'June'];
  }

  parentFunctionHandler(name) {
      alert(`You sent ${name} up to list from child`);
  }

}
