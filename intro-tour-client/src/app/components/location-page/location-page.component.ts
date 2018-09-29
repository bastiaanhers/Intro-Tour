import { Component, OnInit } from '@angular/core';
import { LOCATIONS } from '../../mock-locations';
import { EventService } from '../../services/event.service';
import { QuestionService } from '../../services/question.service';
import { LocationService } from '../../services/location.service';
@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {
  z: number;
  icons: Array<any>;
  public questions = [];
  public locations = [];

  ky;kx;dy;dx;km;

  public events;

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

  constructor(private _eventService: EventService, private _questionService: QuestionService, private _locationService: LocationService) { 
    this.getEvents();
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
    //this.getEvents();
  }


  private trackMe(){  
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
    this.km = location.radius.data / 1000;

    this.ky = 40000 / 360;
    this.kx = Math.cos(Math.PI * location.x / 180.0) * this.ky;
    
    this.dx = Math.abs(location.longitude - this.curLocation.y) * this.kx;
    this.dy = Math.abs(location.latitude - this.curLocation.x) * this.ky;

    return Math.sqrt(this.dx * this.dx + this.dy * this.dy) <= this.km;
  }

  public showWindow(id){
    document.getElementById(`popup-${id}`).style.display = 'block';
  }
  public hideWindow(id){
    document.getElementById(`popup-${id}`).style.display = 'none';
  }
  public getEvents(){
    this._eventService.getEvents()
        .subscribe((res: any) => {
          this.getLocation(res);
        });
  }
  public getQuestion(events){
    events.forEach((event, index) => {
      this._questionService.getQuestion(event.event.action.data.question_id)
          .subscribe((res: any) => {
            res[0].location_id = event.event.action.data.question_id;

            delete res[0].event_type;
            
            this.questions.push(res[0]);
          });
    });
  }
  public getLocation(events){
    events.forEach(event => {
      this._locationService.getLocation(event.event.trigger.data.location_id)
          .subscribe((res: any) => {
            this.locations.push(res[0]);
            console.log(this.locations);
          });
    });
  }
}
