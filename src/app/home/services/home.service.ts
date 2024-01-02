import { Injectable } from '@angular/core';
import { Food } from '../../header/shared/models/food.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  item: Food;

  constructor() { }

  onSelectedFood(item: Food) {
    this.item = item;
  }

  getSelectedFood() {
    return this.item;
  }

}