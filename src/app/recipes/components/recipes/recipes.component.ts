import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/home/models/food.model';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipes;
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

  openRecipe(selectedRecipe) {
    this.recipeService.onSelectedRecipe(selectedRecipe);
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree(['/recipe'])
    // );
    // window.open(url, '_blank');
    this.router.navigate(['/recipe']);

  }

}
