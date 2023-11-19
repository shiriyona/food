import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/home/models/food.model';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddFoodComponent } from './add-food/add-food.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  food: Food[] = [];
  events: Food[] = [];
  getFoodSubscription: Subscription;
  getEventSubscription: Subscription;

  constructor(private http: HttpClient, public dialog: MatDialog) {  
  }

  ngOnInit(): void {
    this.getFood();
  }

  getFood() {
    const url: string = '/assets/data/food.json'
    this.getFoodSubscription = this.http.get<{ food: Food[] }>(url).subscribe((response) => {
      this.food = response.food;
    });
  }

  openAddNewFood() {
    const dialogRef = this.dialog.open(AddFoodComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editFood(selectedFood) {
    selectedFood.isOpen = !selectedFood.isOpen;
  }

}
