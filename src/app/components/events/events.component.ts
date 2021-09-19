import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventsData: any = [];
  constructor() { }

  ngOnInit() {
    this.eventsData = [
      {
        id: 1,
        title: 'Event 1',
        time: "11:00",
        date: '11',
        month:'Aug',
        description: 'Learn to count to 11',
        img: 'assets/images/event_1.jpg',
        adress:'11 Rue de la paie',
      },
      {
        id: 2,
        title: 'Event 2',
        time: "12:00",
        date: '12',
        month:'Aug',
        description: 'Learn to count to 12',
        img: 'assets/images/event_2.jpg',
        adress:'12 Rue de la joie',
      },
      {
        id: 3,
        title: 'Event 3',
        time: "13:00",
        date: '13',
        month:'Aug',
        description: 'Learn to count to 13',
        img: 'assets/images/event_3.jpg',
        adress:'13 Rue de la patate'
      },
      {
        id: 4,
        title: 'Event 4',
        time: "14:00",
        date: '14',
        month:'Aug',
        description: 'Learn to count to 14',
        img: 'assets/images/event_4.jpg',
        adress:'14 Rue de la fraise',
      },
    ]
  }

}
