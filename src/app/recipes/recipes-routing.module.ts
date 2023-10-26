import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';

var id: number;

const routes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'recipe/:id', component: RecipeComponent },
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