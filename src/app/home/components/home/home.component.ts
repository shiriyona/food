import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food.model';
import { Subscription } from 'rxjs';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  food: Food[] = [];
  getFoodSubscription: Subscription;
  
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getFood();
  }

  getFood() {
    this.getFoodSubscription = this.homeService.getFood().subscribe(res => { 
      this.food = res; 
      console.log(this.food); 
    });
  }

  ngOnDestroy(): void {
    this.getFoodSubscription.unsubscribe();
  }

}
