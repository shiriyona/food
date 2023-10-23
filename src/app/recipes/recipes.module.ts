import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


@NgModule({
    declarations: [ 
    RecipesComponent, RecipeComponent
  ],
    imports: [
        FormsModule,
        CommonModule,
        RecipesRoutingModule,
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
    exports: []
})

export class RecipesModule { }