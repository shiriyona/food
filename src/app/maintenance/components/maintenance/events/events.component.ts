import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/home/models/food.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent { 
  events: Event[] = [];
  getEventSubscription: Subscription;

  constructor(private http: HttpClient) {  
  }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    const url: string = '/assets/data/events.json'
    this.getEventSubscription = this.http.get<{ event: Event[] }>(url).subscribe((response) => {
      this.events = response.event;
    });
  }


}
