import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { NgOptimizedImage } from '@angular/common'
import { MaintenanceRoutingModule } from "./maintenance-routing";
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { FoodComponent } from './components/maintenance/food/food.component';
import { EventsComponent } from './components/maintenance/events/events.component';
import { RecipesComponent } from './components/maintenance/recipes/recipes.component';
import { AddFoodComponent } from './components/maintenance/food/add-food/add-food.component';
import { AddRecipeComponent } from './components/maintenance/recipes/add-recipe/add-recipe.component';
import { AddEventComponent } from './components/maintenance/events/add-event/add-event.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


@NgModule({
    declarations: [
        MaintenanceComponent,
        FoodComponent,
        EventsComponent,
        RecipesComponent,
        AddFoodComponent,
        AddRecipeComponent,
        AddEventComponent,
        FileUploadComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        MaintenanceRoutingModule,
        HttpClientModule,
        MatDialogModule,
        MatTabsModule,
        NgOptimizedImage,
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

export class MaintenanceModule { }