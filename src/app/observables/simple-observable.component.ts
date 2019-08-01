import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  template: `<button (click)="getData()">Start Subscribe</button>{{numbers}}`
})
export class SimpleObservableComponent {
  numbers = [];
  // emit number values, in turn, when subscribed to
  arraySource: Observable<number> = from([1, 2, 3, 4]);

  getData() {
    // when clicked, this function subscribes, values added to array
    this.arraySource.subscribe(emittedValue => {
      console.log(`values`, emittedValue);
      (this.numbers = [...this.numbers, emittedValue]);
    });
  }
}


