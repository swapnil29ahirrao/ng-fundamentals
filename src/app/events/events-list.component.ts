import { EventThumbnailComponent } from './event-thumbnail.component';
import { Component } from '@angular/core';

@Component({
  selector : 'event-list',
  template : `<div>
  <h1>Upcoming event list</h1>
  <hr/>
  <event-thumbnail [event]="event1"></event-thumbnail>
  </div>`
})
export class EventListComponent {
  event1 = {
    id : 1,
    name : 'Learn Angular',
    date : '09/29/2019',
    time : '10:00 am',
    price : 599.99,
    location : {
      address : '10,Pol Heights',
      city : 'Pune',
      country : 'India'
    }
  }


  event2 = {
    id : 1,
    name : 'Learn Angular 2',
    date : '09/29/2019',
    time : '10:00 am',
    price : 599.99,
    location : {
      address : '10,Pol Heights',
      city : 'Pune',
      country : 'India'
    }
  }

}
