import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesListComponent } from './observables-list.component';
import { EvensObservableComponent } from './evens-observable.component';
import { OperatorsObservableComponent } from './operators-observable.component';
import { SimpleObservableComponent } from './simple-observable.component';
import { OddsObservableComponent } from './odds-observable.component';


@NgModule({
  declarations: [ObservablesListComponent, EvensObservableComponent,
    OperatorsObservableComponent, SimpleObservableComponent, OddsObservableComponent],
  imports: [
    CommonModule
  ]
})
export class ObservablesModule { }
