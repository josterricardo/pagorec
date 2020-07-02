import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

// Common Components

import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

// Page Components

import {PageHome01Component} from "./components/page-home01/page-home01.component";

const routes: Routes = [
 {
    path: "",
    component: PageHome01Component
  }, {
    path: "",
    redirectTo: "/home-01",
    pathMatch: "full"
  }, {
    path: "**",
    component: PageNotFoundComponent,
    data: {
      className: "error-page"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
