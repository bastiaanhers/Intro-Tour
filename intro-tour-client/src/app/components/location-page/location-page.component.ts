import { Component, OnInit } from '@angular/core';
import { Location } from '../../location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {
  x;
  y;


  locations: Location = { 
    location: {
      x: 10,
      y: 20
    },
    radius: 10
  }

  constructor(private router: Router) { }

  location = {}
  public href: string = "";
  isTracking = false;

  ngOnInit() {
    this.trackMe();
  }
  
  trackMe(){  
    if(navigator.geolocation){
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
      });  
    }else{
      alert("geolocation is not supported by your browser");
    }
  }

  showTrackingPosition(position){
    this.x = position.coords.latitude;
    this.y = position.coords.longitude;

    console.log(`tracking postion:  ${this.x} - ${this.y}`);
  }
}
