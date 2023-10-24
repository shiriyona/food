import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { FoodModalComponent } from './components/home/food-modal/food-modal.component';
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
  }
  

@NgModule({
    declarations: [
        HomeComponent,
        FoodModalComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
      HomeRoutingModule,
      HttpClientModule,
      MatDialogModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    ],
    providers: [],
    exports:[HomeComponent]
  })
  
  export class HomeModule { }