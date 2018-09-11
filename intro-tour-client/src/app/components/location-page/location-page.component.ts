import { Component, OnInit } from '@angular/core';
import { Location } from '../../location';
import { LOCATIONS } from '../../mock-locations';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {
  x: number;
  y: number;
  z: number;
  icon;
  icon_q;

  rad;

  ky;
  kx;
  dy;
  dx;
  km;

  locations = LOCATIONS;
  curLocation: Location = {
    id: null,
    location: {
      x: null,
      y: null,
    },
    radius: null
  }

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  

  constructor() { }

  isTracking = false;

  ngOnInit() {
    this.trackMe();
    this.z = 18;
    this.icon = {
      url: '/assets/images/marker.png', 
      scaledSize: {
        height: 40,
        width: 40
      }
    };
    this.icon_q = {
      url: '/assets/images/marker-q.png', 
      scaledSize: {
        height: 40,
        width: 40
      }
    };
    this.rad = 5;

    console.log(this.locations);

  }
  
  trackMe(){  
    if(navigator.geolocation){
      this.isTracking = true;
      navigator.geolocation.watchPosition(
        (position) => {this.showTrackingPosition(position);}, 
        (err) => {console.warn('ERROR(' + err.code + '): ' + err.message);}
      );  
    }else{
      alert("geolocation is not supported by your browser");
    }
  }

  showWindow(id){
    document.getElementById(`popup-${id}`).classList.add('active');
  }
  hideWindow(id){
    document.getElementById(`popup-${id}`).classList.remove('active');
  }

  showTrackingPosition(position){
    this.x = position.coords.latitude;
    this.y = position.coords.longitude;
    

    this.curLocation.location.x = position.coords.latitude;
    this.curLocation.location.y = position.coords.longitude;

    console.log(`tracking postion:  ${this.x} - ${this.y}`);

    this.locations.forEach(location => {
      if(this.arePointsNear(location) == true){
        this.showWindow(location.id);
      }else if(this.arePointsNear(location) == false){
        this.hideWindow(location.id);
      }
      console.log(this.arePointsNear(location));
    })
    
  }

  arePointsNear(location){
    this.km = location.radius / 1000;


    this.ky = 40000 / 360;
    this.kx = Math.cos(Math.PI * location.location.x / 180.0) * this.ky;
    
    this.dx = Math.abs(location.location.y - this.curLocation.location.y) * this.kx;
    this.dy = Math.abs(location.location.x - this.curLocation.location.x) * this.ky;

    return Math.sqrt(this.dx * this.dx + this.dy * this.dy) <= this.km;
  }
}
