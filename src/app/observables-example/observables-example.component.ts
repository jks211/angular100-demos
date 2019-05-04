import { Component, OnInit, OnDestroy } from "@angular/core";
import { from, of, Observable, Subscription } from "rxjs";

@Component({
  selector: "app-observables-example",
  template: ` <button (click)="isEvensOn=!isEvensOn">Toggle Evens Observable</button>
              <app-evens-observable *ngIf="isEvensOn"></app-evens-observable>
  `
})
export class ObservablesExampleComponent {
  isEvensOn = false;
}
