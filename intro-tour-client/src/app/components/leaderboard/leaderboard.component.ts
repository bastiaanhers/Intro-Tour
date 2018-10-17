import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageTypes } from '../../message-types';
import { MessagesService } from '../../services/messages.service';

import { SCORES } from '../../mock-scores';

@Component({
	selector: 'app-leaderboard',
	templateUrl: './leaderboard.component.html',
	styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
	constructor(private http: HttpClient, private router: Router, private messagesServices: MessagesService) {
		// Temporary for mock data
		let scoresArray: Array<number>;

		SCORES.sort((a, b) => (a.team_score < b.team_score) ? 1 : ((b.team_score < a.team_score) ? -1 : 0));
	}

	private apiUrl: string = 'http://intro-tour.local/api/';
	public tableData: any = SCORES;
	private tourID: number = 1;

	// private getTeamsByTourID() {
	// 	this.http.get(this.apiUrl + 'teams?tour=' + this.tourID).subscribe(
	// 		(res: Response) => {
	// 			this.sortArrayByScore(res);
	// 		},
	// 		err => {
	// 			document.getElementById('tour_id_input').classList.add('error');
	// 			this.messagesServices.setMessage(MessageTypes.Error, 'Fout', 'Tour ID bestaat niet');
	// 			console.error(err);
	// 		}
	// 	);
	// }

	// private sortArrayByScore(teams) {
	// 	teams.sort((a, b) => (a.team_score < b.team_score) ? 1 : ((b.team_score < a.team_score) ? -1 : 0));
	// 	this.tableData = teams;
	// }

	ngOnInit() {
		// this.getTeamsByTourID();
	}

}
