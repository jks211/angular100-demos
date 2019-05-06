import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PersonDetailComponent } from "./person/person-detail.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PeopleListComponent } from "./people-list.component";
import { ProductListComponent } from "./products/product-list.component";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    NavbarComponent,
    PeopleListComponent,
    ProductListComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
