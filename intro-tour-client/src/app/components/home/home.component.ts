import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserNameService } from '../../services/user-name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private teamService: TeamService, private userName: UserNameService) { }

  public teamName: string;
  public teamPin: string;
  public name: string;

  ngOnInit() {
    // Subscribe to team name from the team service
    this.teamService.currentTeamName.subscribe(
      teamName => this.teamName = teamName
    );
    // Subscribe to team name from the team service
    this.teamService.currentTeamPin.subscribe(
      teamPin => this.teamPin = teamPin
    );
    // Subscribe to name service
    this.userName.currentName.subscribe(
      name => this.name = name
    );
  }

}
