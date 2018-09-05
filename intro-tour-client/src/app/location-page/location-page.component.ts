import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {

  location: Location = { 
    location: {
      x: 10,
      y: 20
    },
    radius: 10
  }

  constructor() { }

  ngOnInit() {
  }
  

}
