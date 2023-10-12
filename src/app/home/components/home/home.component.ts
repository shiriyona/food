import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food.model';
import { Subscription } from 'rxjs';
import { HomeService } from '../../services/home.service';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FoodModalComponent } from './food-modal/food-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  food: Food[] = [];
  events: Food[] = [];
  getFoodSubscription: Subscription;
  getEventSubscription: Subscription;
  
  constructor(private http: HttpClient, private homeService: HomeService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getFood();
    this.getEvents();
  }

  getFood() {
    const url: string = '/assets/data/food.json'
    this.getFoodSubscription = this.http.get<{ food: Food[] }>(url).subscribe((response) => {
      this.food = response.food;
    });
  }

  getEvents() {
    const url: string = '/assets/data/events.json'
    this.getEventSubscription = this.http.get<{ food: Food[] }>(url).subscribe((response) => {
      this.events = response.food;
    });
  }

  openDialog(item: Food) {
    const dialogRef = this.dialog.open(FoodModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.homeService.onSelectedFood(item);
  }

  ngOnDestroy(): void {
    this.getFoodSubscription.unsubscribe();
    this.getEventSubscription.unsubscribe();
  }

  myMobile() {
    let x = document.getElementById("bs-example-navbar-collapse-1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

}
