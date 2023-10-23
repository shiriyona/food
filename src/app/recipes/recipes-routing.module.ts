import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
    { path: '', component: RecipesComponent },
    {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule {}