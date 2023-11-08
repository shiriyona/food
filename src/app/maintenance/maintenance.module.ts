import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { MaintenanceRoutingModule } from "./maintenance-routing";
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { FoodComponent } from './components/maintenance/food/food.component';
import { EventsComponent } from './components/maintenance/events/events.component';
import { RecipesComponent } from './components/maintenance/recipes/recipes.component';
import { AddFoodComponent } from './components/maintenance/food/add-food/add-food.component';
import { EditFoodComponent } from './components/maintenance/food/edit-food/edit-food.component';

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
        EditFoodComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MaintenanceRoutingModule,
        HttpClientModule,
        MatDialogModule,
        MatTabsModule,
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