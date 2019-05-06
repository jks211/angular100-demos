import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PeopleListComponent } from "./people-list.component";
import { PersonDetailComponent } from "./person/person-detail.component";
import { ProductListComponent } from "./products/product-list.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "people", component: PeopleListComponent },
  { path: "people/:id", component: PersonDetailComponent },
  { path: "products", component: ProductListComponent },
  { path: "**", redirectTo: "/people" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
