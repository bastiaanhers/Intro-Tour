import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  curPosition = {
    x: null,
    y: null
  }

  chosen_lat = null;
  chosen_long = null;


  constructor() { }

  ngOnInit() {
    this.getLocation();
  }

  public getLocation(){
    if (navigator.geolocation) {
			navigator.geolocation.watchPosition(
        (position) => { 
          this.curPosition.y = position.coords.longitude; 
          this.curPosition.x = position.coords.latitude;
        },
				(err) => { console.error('ERROR(' + err.code + '): ' + err.message); },
				{ maximumAge: 600000, timeout: 5000, enableHighAccuracy: true }
			);
		} else {
			alert("Je locatie kan helaas niet worden gevonden");
		}
  }

  public getLocationOnMap(event){
    this.chosen_lat = event.coords.lat;
    this.chosen_long = event.coords.lng;
  }

}
