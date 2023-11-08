import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/recipes/models/recipe.model';
import { RecipeService } from 'src/app/recipes/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  recipe: Recipe;
  recipes: Recipe[] = [];
  getRecipeSubscription: Subscription;


  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }
  
  ngOnInit(): void {
    this.getUrl()
  }

  getUrl() {
    this.route.params.subscribe(params => {
      const selectedRecipeId = +params['id'];
      this.getSelectedRecipe(selectedRecipeId);
    });
  }

  getSelectedRecipe(selectedRecipeId: number) {
    const url: string = '/assets/data/recipes.json'
    this.getRecipeSubscription = this.http.get<{ recipe }>(url).subscribe((response) => {
      this.recipes = response.recipe;
      const selectedRecipe = this.recipes.find(recipe => recipe.id === selectedRecipeId);
      this.recipe = selectedRecipe;
    });
  }

  ngOnDestroy(): void {
    if (this.getRecipeSubscription) {
      this.getRecipeSubscription.unsubscribe();
    }
  }

}
