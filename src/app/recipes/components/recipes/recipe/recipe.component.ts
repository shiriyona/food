import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/recipes/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  recipe;
  recipes;
  getRecipeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }
  
  ngOnInit(): void {
    this.getSelectedRecipe();
  }

  getSelectedRecipe() {
    const url: string = '/assets/data/recipes.json'
    this.getRecipeSubscription = this.http.get<{ recipe }>(url).subscribe((response) => {
      this.recipes = response.recipe;
      this.route.params.subscribe(params => {
        const selectedRecipeId = +params['id'];
        const selectedRecipe = this.recipes.find(recipe => recipe.id === selectedRecipeId);
        this.recipe = selectedRecipe;
      });
    });
  }

}
