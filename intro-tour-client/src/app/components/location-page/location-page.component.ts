import { Component, OnInit } from '@angular/core';
import { LOCATIONS } from '../../mock-locations';
import { QUESTIONS } from '../../mock-questions';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {
  z: number;
  icons: Array<any>;

  ky;kx;dy;dx;km;

  locations = LOCATIONS;

  curLocation = {
    id: null,
    x: null,
    y: null
  }

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  isTracking = false;

  constructor() { 

  }


  ngOnInit() {
    this.trackMe();
    this.z = 18;
    this.icons = [
      {
        url: '/assets/images/marker.png', 
        scaledSize: {height: 40,width: 40}
      },
      {
        url: '/assets/images/marker-q.png', 
        scaledSize: {height: 40,width: 40}
      }
    ];
  }
  
  public trackMe(){  
    if(navigator.geolocation){
      this.isTracking = true;
      navigator.geolocation.watchPosition(
        (position) => {this.showTrackingPosition(position);}, 
        (err) => {console.error('ERROR(' + err.code + '): ' + err.message);},
        {maximumAge:600000, timeout:5000, enableHighAccuracy: true}
      );  
    }else{
      alert("geolocation is not supported by your browser");
    }
  }

  public showTrackingPosition(position){
    this.curLocation.x = position.coords.latitude;
    this.curLocation.y = position.coords.longitude;

    this.showHidePopup()
  }

  public showHidePopup(){
    this.locations.forEach(location => {
      if(this.arePointsNear(location)){
        this.showWindow(location.id);
      }else if(!this.arePointsNear(location)){
        this.hideWindow(location.id);
      }
    });
  }

  public arePointsNear(location){
    this.km = location.radius / 1000;

    this.ky = 40000 / 360;
    this.kx = Math.cos(Math.PI * location.x / 180.0) * this.ky;
    
    this.dx = Math.abs(location.y - this.curLocation.y) * this.kx;
    this.dy = Math.abs(location.x - this.curLocation.x) * this.ky;

    return Math.sqrt(this.dx * this.dx + this.dy * this.dy) <= this.km;
  }

  public showWindow(id){
    document.getElementById(`popup-${id}`).classList.add('active');
  }
  public hideWindow(id){
    document.getElementById(`popup-${id}`).classList.remove('active');
  }
}
