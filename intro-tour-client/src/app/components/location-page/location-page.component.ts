import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { QuestionService } from '../../services/question.service';
import { LocationService } from '../../services/location.service';
import { MediaService } from '../../services/media.service';
import { HttpClientModule } from "@angular/common/http"
@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {
  z: number;
  icons: Array<any>;
  private given_answer;
  public question;
  public locations = [];
  //variables for file system
  public mediaFile;
  public selectedFile;

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

  constructor(private _httpModule: HttpClientModule, private _mediaService: MediaService ,private _eventService: EventService, private _questionService: QuestionService, private _locationService: LocationService) { 
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
  }

  //**functions for file uploading to api */
  onFileSelected(fileEvent: FileList){
    this.selectedFile = fileEvent.item(0);
  }

  uploadSelectedFile(){
    // let fd = new FormData();
    //   fd.append('help', this.selectedFile, this.selectedFile.name);
    // let fd = {
    //   file: this.selectedFile,
    //   fileName: this.selectedFile.name
    // };
    this._mediaService.uploadMedia(this.selectedFile);
  }
  //** end of file uploading */

  private trackMe(){  
    if(navigator.geolocation){
      this.isTracking = true;
      navigator.geolocation.watchPosition(
        (position) => {this.showTrackingPosition(position);}, 
        (err) => {console.error('ERROR(' + err.code + '): ' + err.message);},
        {maximumAge:600000, timeout:5000, enableHighAccuracy: true}
      );  
    }else{
      alert("Je locatie kan helaas niet worden gevonden");
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
        this.showWindow(location);
      }else if(!this.arePointsNear(location)){
        this.hideWindow(location.id);
      }
    });
  }

  public arePointsNear(location){
    this.km = location.radius.data / 1000;

    this.ky = 40000 / 360;
    this.kx = Math.cos(Math.PI * location.latitude / 180.0) * this.ky;
    
    this.dx = Math.abs(location.longitude - this.curLocation.y) * this.kx;
    this.dy = Math.abs(location.latitude - this.curLocation.x) * this.ky;

    return Math.sqrt(this.dx * this.dx + this.dy * this.dy) <= this.km;
  }


  public showWindow(location){
    this._questionService.getQuestion(location.question_id)
        .subscribe((question) => {
          this.question = question[0];
          document.getElementById(`popup-${location.id}`).style.display = 'block';
        });
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
  public getQuestion(id){
    this._questionService.getQuestion(id).subscribe((question) => {this.question = question[0]; console.log(this.question)});
  }
  public getLocation(events){
    events.forEach(event => {

      //get media file and save in assets
      this.mediaFile = this._mediaService.getMedia(event.event_id);

      this._locationService.getLocation(event.event.trigger.data.location_id)
          .subscribe((res: any) => {
            res[0].question_id = event.event.action.data.question_id;
            this.locations.push(res[0]);
          });
    });
  }

  public checkAnswer(id){
    if(this.given_answer == undefined){
      alert('Je moet wel een antwoord kiezen');
    }else if(this.given_answer == 1){
      alert('Goed Gedaan!');
      this.hideWindow(id);
      this.deleteLocation(id);
    }else{
      alert('Helaas');
      this.hideWindow(id);
      this.deleteLocation(id);
    }
  }
  public setValue(answer){
    this.given_answer = answer;
  }
  private deleteLocation(id){ 
    this.locations.forEach((location, index) => {
      if(location.id == id){
        this.locations.splice(index, 1);
      }
    });
  }
}
