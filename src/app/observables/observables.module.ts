import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesExampleComponent } from './observables-example.component';
import { EvensObservableComponent } from './evens/evens-observable.component';
import { OperatorsObservableComponent } from './operators-observable.component';
import { SimpleObservableComponent } from './simple-observable.component';
import { OddsObservableComponent } from './odds-observable.component';



@NgModule({
  declarations: [ObservablesExampleComponent,EvensObservableComponent, SimpleObservableComponent, OddsObservableComponent, OperatorsObservableComponent],
  imports: [
    CommonModule
  ]
})
export class ObservablesModule { }
