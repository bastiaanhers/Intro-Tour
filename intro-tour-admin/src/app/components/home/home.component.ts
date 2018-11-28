import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {TourService} from '../../services/tour.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiUrl: string = environment.API_URL;
  public events;

  constructor(private _TourService: TourService) { }

  ngOnInit() {
   this._TourService.getUserTours(1)
        .subscribe((res) => {console.log(res)}, (err) => {});
  }

  

}
