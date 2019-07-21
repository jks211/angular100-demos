import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesListComponent } from './list/observables-list.component';
import { EvensObservableComponent } from './evens/evens-observable.component';
import { OperatorsObservableComponent } from './operators/operators-observable.component';
import { SimpleObservableComponent } from './simple-observable.component';
import { OddsObservableComponent } from './odds/odds-observable.component';


@NgModule({
  declarations: [ObservablesListComponent, EvensObservableComponent,
    OperatorsObservableComponent, SimpleObservableComponent, OddsObservableComponent],
  imports: [
    CommonModule
  ]
})
export class ObservablesModule { }
