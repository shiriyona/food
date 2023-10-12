import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FOOD_MOCK_DATA } from '../constants/food.mock';
import { Food } from '../models/food.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  item: Food;

  constructor() { }

  getFood() : Observable<Food[]>  {
    return of(FOOD_MOCK_DATA);
  }

  onSelectedFood(item: Food) {
    this.item = item;
  }

  getSelectedFood() {
    return this.item;
  }

}