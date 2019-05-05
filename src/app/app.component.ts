import { Component, OnInit } from "@angular/core";

import { PeopleService } from "./shared/people.service";
import { Person } from "./shared/models/person.model";

@Component({
  selector: "app-root",
  template: `<h2>Open Console.</h2>
   <p>Toggle Evens. Click Subscribe. Watch display. Toggle Again. Note it stops.</p>
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
