import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe;

  constructor() { }

  onSelectedRecipe(recipe) {
    this.recipe = recipe;
    // localStorage.setItem("selectedRecipe", JSON.stringify(recipe)); // Store the recipe in localStorage
  }

  getSelectedRecipe() {
    // this.recipe = JSON.parse(localStorage.getItem("selectedRecipe")); // Retrieve the recipe from localStorage
    return this.recipe; // Return the retrieved recipe
  }
}
