import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipes = [];
  getRecipeSubscription: Subscription;

  constructor(private http: HttpClient, public dialog: MatDialog) {  
  }

  ngOnInit(): void {
    this.getFood();
  }

  getFood() {
    const url: string = '/assets/data/recipes.json'
    this.getRecipeSubscription = this.http.get<{ recipe }>(url).subscribe((response) => {
      this.recipes = response.recipe;
    });
  }

  openAddNewRecipe() {
    const dialogRef = this.dialog.open(AddRecipeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editRecipe(selectedRecioe) {
    selectedRecioe.isOpen = !selectedRecioe.isOpen;
  }

}
