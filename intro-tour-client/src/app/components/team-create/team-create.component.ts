import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../team';

import * as $ from 'jquery';

@Component({
	selector: 'app-team-create',
	templateUrl: './team-create.component.html',
	styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

	constructor(private http: HttpClient,) { }
	team: Team = {
		team_name: '',
    tour_id: null
	}

	private apiUrl: string = 'http://intro-tour.local/api/';

	// post call to create a new team
	private createTeam() {
		this.http.post(this.apiUrl + 'teams', this.team)
		.subscribe(
        (res:Response) => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
	}

	public showValues() {
		this.createTeam();
	}

	ngOnInit() {
	}
}
