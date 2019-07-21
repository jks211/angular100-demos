import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservablesModule } from './observables/observables.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ObservablesModule, UsersModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
