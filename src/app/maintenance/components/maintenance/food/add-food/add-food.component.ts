import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Food } from 'src/app/header/shared/models/food.model';
import { MaintenanceService } from 'src/app/maintenance/services/maintenance.service';
import { uuid } from 'uuidv4';
// import {food} from 'src/assets/data/food.json';
// import * as fs from 'fs';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent {

  constructor(private maintenanceSrvice: MaintenanceService, private http: HttpClient) {
  }

  addFood() {
    const url: string = 'https://food-data-ea6b3-default-rtdb.firebaseio.com/posts/food.json';
    this.http.get(url).subscribe(
      data => {
        const keys = Object.keys(data);
        const lastIndex = keys.length;
        const url2: string = 'https://food-data-ea6b3-default-rtdb.firebaseio.com/posts/food/' +lastIndex+ '.json';
        const newFood: Food = {id: uuid(), name:'f', description:'c', img:''}; 
        this.http.put(url2, newFood).subscribe(
          postData => {
            console.log(postData);
          }
        );
      }
      
    );

  }


  
  
  // addFood() {
  //   const url: string = 'https://food-data-ea6b3-default-rtdb.firebaseio.com/posts/food.json'
  //   const newFood: Food = {id: 11, title:'f',description:'c',img:''}
  //   this.http.put(url, newFood).subscribe(
  //     postData => {
  //       console.log(postData);
  //     }
  //   )
  // }

}
