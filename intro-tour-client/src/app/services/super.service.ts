import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class SuperService {

  private apiUrl:string = environment.API_URL;

  constructor(private http: Http) { }

  public getMedia(eventId): Observable<any>{

    return this.http.get(this.apiUrl + 'mediafile/' + eventId);
  }

 public uploadMedia() {
    // let headers = new Headers();
    // const formData: FormData =new FormData();
    // formData.append('fileKey', mediaFile, mediaFile.name);
    // let body;
    // return this.http.post(this.apiUrl + 'mediafileupload', formData)

    return 'It Works!!';

    //* .map(() => { return true; })
    //* .catch((e) => this.handleError(e));
    //* const endpoint = this.apiUrl + 'mediafileupload';
    //* const formData: FormData = new FormData();
    //* formData.append('fileKey', mediaFile, mediaFile.name);
    //* return this.http
    //*   .post(endpoint, formData)
    //*   .map(() => { return true; })
    //*   .catch((e) => this.handleError(e));
  }

  public testFunction(){
    return 'Maybe Something Wrong?';
  }
}
