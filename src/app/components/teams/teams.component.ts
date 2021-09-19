import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsData: any = [];
  constructor() { }

  ngOnInit() {
    this.teamsData = [
      {
        id: 1,
        name: 'Jacky Chan',
        speciality: "Marketing & Management",
        image: '/assets/images/team_1.jpg',
        socialMedia: {
          facebook: 'https://facebook.com/mondauto',
          twitter: 'https://twitter.com/m_mediouni',
          googlePlus: 'https://google.tn'
        }
      },
      {
        id: 2,
        name: 'Bruce Lee',
        speciality: "Designer & Website",
        image: '/assets/images/team_2.jpg',
        socialMedia: {
          facebook: '#',
          twitter: '#',
          googlePlus: '#'
        }
      },
      {
        id: 3,
        name: 'Van Damme',
        speciality: "Quantum mechanics",
        image: '/assets/images/team_3.jpg',
        socialMedia: {
          facebook: '#',
          twitter: '#',
          googlePlus: '#'
        }
      },
      {
        id: 3,
        name: 'James Bond',
        speciality: "Math & Physics",
        image: '/assets/images/team_4.jpg',
        socialMedia: {
          facebook: '#',
          twitter: '#',
          googlePlus: '#'
        }
      },

    ]
  }

}
