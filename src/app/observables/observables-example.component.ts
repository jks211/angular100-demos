import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-observables-example",
  template: ` <div class="mt-5 p-5 border rounded border-primary">
              <h2>Evens Observable.</h2><h3> Continues to generate evens every 1 second</h3>
               <p>Open Console. Toggle Evens. Click Subscribe. Watch display. Toggle Again. Note it stops.</p>
              <button (click)="isEvensOn=!isEvensOn">Toggle Evens Observable</button>
              <app-evens-observable *ngIf="isEvensOn"></app-evens-observable></div>

              <div class="mt-5 p-5 border rounded border-primary">
              <h2>Odds Observable.</h2><h3>Continues to generate odds every 1 second, then generates an error</h3>
    <p>Open Console. Toggle Odds. Click Subscribe. Watch display. After 3 is reached an error is thrown by Observable. </p>
              <button (click)="isOddsOn=!isOddsOn">Toggle Odds Observable</button>
              <app-odds-observable *ngIf="isOddsOn"></app-odds-observable>
              </div>

              <div class="mt-5 p-5 border rounded border-primary">
              <h2>RxJS Operators with Observable.</h2><h3>Demos using operators from RxJS</h3>
    <p>Open Console. Toggle Operators. Click Subscribe. Watch display. Notice the time between each additional number, it's filtering by multiple of 3 and negating. </p>
              <button (click)="isOperatorsOn=!isOperatorsOn">Toggle Operators Observable</button>
              <app-operators-observable *ngIf="isOperatorsOn"></app-operators-observable>
              </div>



  `
})
export class ObservablesExampleComponent {
  isEvensOn = false;
  isOddsOn = false;
  isOperatorsOn = false;
}
