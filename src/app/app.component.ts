import { Component, OnInit } from "@angular/core";

import { PeopleService } from "./shared/people.service";
import { Person } from "./shared/models/person.model";

@Component({
  selector: "app-root",
  template: `
    <app-observables-example></app-observables-example>
  `
})
export class AppComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }
}
