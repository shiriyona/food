import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/home/models/food.model';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-food-modal',
  templateUrl: './food-modal.component.html',
  styleUrls: ['./food-modal.component.scss']
})
export class FoodModalComponent {
  food: Food;
  getFoodSubscription: Subscription;

  constructor(private http: HttpClient, private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.food = this.homeService.getSelectedFood()
  }

}
