import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Food } from 'src/app/home/models/food.model';


@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  subject = new Subject<Food>()
  item: Food;

  constructor() { }

  addFood(newFood: Food) {
    this.subject.next(newFood);
  }

  getSelectedFood() {
    return this.item;
  }

}