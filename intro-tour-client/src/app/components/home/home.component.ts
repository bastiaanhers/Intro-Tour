import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserNameService } from '../../services/user-name.service';
import { ParticipantsService } from '../../services/participants.service';
import { Player } from '../../player';
import { LocalstorageService } from '../../services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private teamService: TeamService, private userName: UserNameService, private participantsService: ParticipantsService, private localstorageService: LocalstorageService, private route: Router) {

  }

  public teamPin: string;
  public name: string;
  public id: number;
  public team = {
    name: ''
  };
  public usr = {
    name: ''
  };

  ngOnInit() {
    // Subscribe to team name from the team service
    
    if (this.id == 0) {
      this.route.navigateByUrl('/');
    }

    if (localStorage.getItem('user') == null) {
      this.userName.currentId.subscribe(id => this.id = id);
      this.teamService.currentTeamPin.subscribe(teamPin => this.teamPin = teamPin);

      if (this.id == 0) {
        this.route.navigateByUrl('/');
      } else {
        this.participantsService.getUserById(this.id)
          .subscribe((res) => {
            this.localstorageService.setItem('user', res);
            this.usr = this.localstorageService.getItem('user');
          });
        this.teamService.getTeamByTeamPin(this.teamPin)
          .subscribe((res) => {
            this.localstorageService.setItem('team', res[0]);
            this.team = this.localstorageService.getItem('team');
            this.teamService.teamName(res[0].team_name);
          });
      }
    } else {
      this.usr = this.localstorageService.getItem('user');
      this.team = this.localstorageService.getItem('team');
    }

  }


  getUssr() {
    console.log(this.usr);
    console.log(this.team);
  }
}
