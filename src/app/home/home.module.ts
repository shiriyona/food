import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
      HomeRoutingModule,
    ],
    providers: [],
    exports:[]
  })
  
  export class HomeModule { }