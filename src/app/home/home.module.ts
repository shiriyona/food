import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
      HomeRoutingModule
    ],
    providers: [],
    exports:[]
  })
  
  export class HomeModule { }