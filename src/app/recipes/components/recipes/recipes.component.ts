import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/home/models/food.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  food: Food[] = [];
  getFoodSubscription: Subscription;
  getEventSubscription: Subscription;
  
  constructor(private http: HttpClient, private router: Router) {
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

  openRecipe() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/recipe'])
    );
    window.open(url, '_blank');
  }

}
