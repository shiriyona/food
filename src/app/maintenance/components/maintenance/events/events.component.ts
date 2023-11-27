import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddEventComponent } from './add-event/add-event.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent { 
  events: Event[] = [];
  getEventSubscription: Subscription;

  constructor(private http: HttpClient, public dialog: MatDialog) {  
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

  openAddNewEvent() {
    const dialogRef = this.dialog.open(AddEventComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editEvent(selectedRecioe) {
    selectedRecioe.isOpen = !selectedRecioe.isOpen;
  }

}
