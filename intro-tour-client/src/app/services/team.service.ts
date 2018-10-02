import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamPinSource = new BehaviorSubject<any>('0000');
  public currentTeamPin = this.teamPinSource.asObservable();

  private teamNameSource = new BehaviorSubject<any>('No Team Name');
  public currentTeamName = this.teamNameSource.asObservable();

  constructor() { }

  public teamPin(teamPin: string) {
    this.teamPinSource.next(teamPin);
  }

  public teamName(teamName: string) {
    this.teamNameSource.next(teamName);
  }
}
