import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/home/models/food.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
    const url: string = '/assets/data/food.json';
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

  deleteItem (item: Food) {
    // const url: string = '/assets/data/food.json';
    const url: string = 'C:/Users/97254/Downloads/angularCourse/my-food-and-kitchens/src/assets/data/food.json';
    const options = {
      // body,
    };
    this.http.delete(url, options).subscribe((s) => {
      console.log(s);
    });
    this.http.delete<{ food: Food[] }>(url).subscribe((response) => {
      const index = response.food.findIndex((food) => food.id === item.id);
      if (index !== -1) {
        response.food.splice(index, 1);
      }
    });
  }


    // const options = {
    //   url: 'https://bittrex.com/api/v1.1/public/getmarketsummaries',
    //   method: 'GET',
    // };

    // app.get("/api", function (req, res) {
    //   request(options, function (err, output, body) {
    //     var json = JSON.parse(body);
    //     delete json['USDT-BTC']; // THIS IS NOT WORKING WHAT DO I HAVE TO DO?
    //     console.log(json);
    //     res.json(json)
    //     json.food = json.food.map(item => (
    //       item.MarketName == 'USDT-BTC' ?
    //         { ...item, food: 17000.00000001 } : item);
    // )}

}
