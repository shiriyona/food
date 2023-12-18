import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/home/models/food.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddFoodComponent } from './add-food/add-food.component';

// import cors from 'cors';



// import * as fs from 'fs';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  url: string
  food: Food[] = [];
  events: Food[] = [];
  getFoodSubscription: Subscription;
  getEventSubscription: Subscription;

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.url = '/https://github.com/shiriyona/food/blob/main/src/assets/data/food.json';
    
  }

  ngOnInit(): void {
    this.getPosts();
  }


  
  jsonp(url: string, callback: (data: any) => void) {
    
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data: any) {
      delete window[callbackName];
      document.body.removeChild(script);
      callback(data);
    };
  
    const script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
  }
  

  getPosts(){
    // this.jsonp(this.url, function(data) {})
    let endPoints=""
    this.getFoodSubscription = this.http.get<{ food: Food[] }>(this.url+endPoints).subscribe((response) => {
      this.food = response.food;
    });
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

  // deleteItem (item: Food) {
  //   // const url: string = '/assets/data/food.json';
  //   const url: string = 'C:/Users/97254/Downloads/angularCourse/my-food-and-kitchens/src/assets/data/food.json';
  //   const options = {
  //     // body,
  //   };
  //   this.http.delete(url, options).subscribe((s) => {
  //     console.log(s);
  //   });
  //   this.http.delete<{ food: Food[] }>(url).subscribe((response) => {
  //     const index = response.food.findIndex((food) => food.id === item.id);
  //     if (index !== -1) {
  //       response.food.splice(index, 1);
  //     }
  //   });
  // }

  deleteItem(item: Food) {
    const url2: string = '/assets/data/food.json';
    const url: string = 'C:/Users/97254/Downloads/angularCourse/my-food-and-kitchens/src/assets/data/food.json';
    this.http.get<{ food: Food[] }>(url).subscribe((response) => {
      const index = response.food.findIndex((food) => food.id === item.id);
      if (index !== -1) {
        response.food.splice(index, 1);
        this.http.put(url, response).subscribe((s) => {
          console.log(s);
        });
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
