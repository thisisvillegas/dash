import { NgIf } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';

let rapidapi = 'e4107e33e5msh76c70dcc39cafacp14663bjsn1ede35f0193b'

@Component({
  selector: 'footballscore',
  templateUrl: './footballscore.component.html',
  standalone: true,
  imports: [NgIf, footballscore],
})
export class footballscore implements OnInit {
  constructor() {
    this.rank = 0;
    this.date = '';
  }
  away: any;
  home: any;
  rank: number;
  date: string;

  ngOnInit() {
    axios({
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
      params: { season: '2023', team: '16489', timezone: 'America/Chicago', next: '1' },
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': rapidapi,
      },
    })
      .then(response => {
        console.log('fixture api:', response.data);
        console.log('fixture api:', response.data.response[0].teams);
        this.date = response.data.response[0].fixture.date;
        this.away = response.data.response[0].teams.away;
        this.home = response.data.response[0].teams.home;
      })
      .catch(error => {
        console.log(error);
      });

    axios({
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: { season: '2023', league: '253', team: '16489' },
      headers: {
        'x-rapidapi-key': rapidapi,
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      },
    })
      .then(response => {
        console.log(response.data.response[0].league.standings[0][0].rank);
        this.rank = response.data.response[0].league.standings[0][0].rank;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
