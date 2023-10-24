import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/recipes/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  recipe;

  constructor(private recipeService: RecipeService) {
  }
  
  ngOnInit(): void {
    this.recipe = this.recipeService.getSelectedRecipe()
  }

}
