import { Component } from '@angular/core';
import { publicEncrypt } from 'crypto';

@Component({
  selector : 'event-list',
  templateUrl : './events-list.component.html'
})
export class EventListComponent {

  event = {
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

}
