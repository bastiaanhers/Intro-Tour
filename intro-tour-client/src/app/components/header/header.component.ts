import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private localstorageService: LocalstorageService, private teamService: TeamService) { }

	public teamName;
	public timeLimit: number;
	public timeRemaining: number = 0;
	private timer;

	// Timer functions
	private startTimer() {
		let timeNow: number = Math.round((new Date()).getTime() / 1000);
		let timeEnd: number = timeNow + this.timeLimit;
		this.timeRemaining = this.timeLimit;

		this.timer = setInterval(() => {
			if (this.timeRemaining <= 0) {
				clearInterval(this.timer);
			}

			return this.timeRemaining = timeEnd - Math.round((new Date()).getTime() / 1000);
		}, 500);
	}
	private stopTimer() {
		clearInterval(this.timer);
	}

	ngOnInit() {
		//teamname in header
		setTimeout(() => {
			if (this.localstorageService.getItem('team') == null) {
				this.teamService.teamName('INTRO TOUR');
				this.teamService.currentTeamName.subscribe(name => this.teamName = name);
			} else {
				this.teamName = this.localstorageService.getItem('team').team_name;
			}
		}, 100);
	}

}
