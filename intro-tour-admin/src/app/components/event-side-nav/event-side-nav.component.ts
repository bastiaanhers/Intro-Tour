import { Component, OnInit } from '@angular/core';
import {TourService} from '../../services/tour.service';
import { environment } from 'src/environments/environment';
import { Tour } from 'src/app/tour';

@Component({
  selector: 'app-event-side-nav',
  templateUrl: './event-side-nav.component.html',
  styleUrls: ['./event-side-nav.component.css']
})
export class EventSideNavComponent implements OnInit {
  private apiUrl: string = environment.API_URL;
  public events;
  public tours: Array<Tour>;
  public tour: Tour = new Tour;

  constructor(private _TourService: TourService) { }

  ngOnInit() {
    this._TourService.getUserTours(1)
    .subscribe((res:Array<Tour>) => {
      this.tours = res;

      
      console.log(this.tours);
    }, (err) => {});
    
  }

}