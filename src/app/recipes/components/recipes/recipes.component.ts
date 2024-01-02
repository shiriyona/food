import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/header/shared/models/food.model';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipes: Recipe[] = [];
  getRecipeSubscription: Subscription;
  getEventSubscription: Subscription;
  
  constructor(private http: HttpClient, private router: Router, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    const url: string = '/assets/data/recipes.json'
    this.getRecipeSubscription = this.http.get<{ recipe }>(url).subscribe((response) => {
      this.recipes = response.recipe;
     });
  }

  openRecipe(selectedRecipe: Recipe) {
    const id =selectedRecipe.id;
    console.log(selectedRecipe.id)
    this.recipeService.onSelectedRecipe(selectedRecipe);
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/recipe', id])
    );
    window.open(url, '_blank');
  }

  ngOnDestroy(): void {
    if (this.getRecipeSubscription) {
      this.getRecipeSubscription.unsubscribe();
    }
  }

}
