import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Food } from 'src/app/home/models/food.model';
import { MaintenanceService } from 'src/app/maintenance/services/maintenance.service';
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
  //   const newFood: Food = {title:'f',description:'c',img:''}
  //   food.event.push(newFood);
  //   fs.writeFileSync('/assets/data/food.json', JSON.stringify(newFood));
  //   const options = { Headers, responseType: 'json' as 'blob' };
  //   this.http.put('/assets/data/food.json', newFood, options).subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   )
  }

}
