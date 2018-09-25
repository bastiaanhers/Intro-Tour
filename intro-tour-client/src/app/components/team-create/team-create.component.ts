import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserNameService } from '../../services/user-name.service';
import { Router } from '@angular/router';
import {Player} from '../../player';
import { Team } from '../../team';
import { User } from '../../user';
 
import * as $ from 'jquery';

@Component({
	selector: 'app-team-create',
	templateUrl: './team-create.component.html',
	styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

	constructor(private http: HttpClient, private username: UserNameService, private router: Router) { }


  player: Player = {
    name: "",
    tour_id: null
  }
	team: Team = {
		team_name: '',
    tour_id: null
	}
	user: User = {
		name: 'Klaas',
    role: 'master',
    team_id: null,
	}

	private apiUrl: string = 'http://intro-tour.local/api/';
	private addLoader() {$('.ui.loader').parent().addClass(['active', 'dimmer'])};
	private removeLodaer() {$('.ui.loader').parent().removeClass(['active', 'dimmer']); this.router.navigateByUrl('/home');	};

	private errorHandler() {
    if(this.team.team_name == "" || this.team.tour_id == null){
      document.getElementById('error_message').classList.remove('hidden');
      if(this.team.team_name == ""){
        document.getElementById('name_input').classList.add('error');
        
      }else{
        document.getElementById('name_input').classList.remove('error');
      }
      if(this.team.tour_id == null){
        document.getElementById('tour_id_input').classList.add('error');
      }else{
        document.getElementById('tour_id_input').classList.remove('error');
      }
    }else{
			this.addLoader();
		}
	}

	private hideComponent() {
		document.getElementById('error_message').classList.add('hidden');
      $('app-team-create div').animate({top: '100%', height: '0px'}, 500);
      setTimeout(() => {
        $('app-team-create').css('display', 'none');
      }, 500)      
	}

	// post call to create a new team
	private createTeam() {
		this.http.post(this.apiUrl + 'teams', this.team)
		.subscribe(
        (res:Response) => {
					this.createUser(res);
        },
        err => {
					console.log("Error occured");
					this.removeLodaer();
        }
      );
	}

	// Post call to create new user
	private createUser(res) {
		this.user.team_id = res.id;
		this.user.name = this.player.name;
		this.http.post(this.apiUrl + 'participants', this.user)
		.subscribe(
			(res:Response) => {
				this.hideComponent();
				this.removeLodaer();
			},
			err => {
				console.log("Error occured");
				this.removeLodaer();
			}
		);
	}

	public createTeamAndUser() {
		this.createTeam();
		this.errorHandler();
	}
	
	ngOnInit() {
		this.username.currentName.subscribe(name => this.player.name = name);
		if(this.player.name == 'John Doe' || this.player.name == undefined){
			this.router.navigateByUrl('/login');
		}else{
			console.log(this.player);
		}
		
	}
}
