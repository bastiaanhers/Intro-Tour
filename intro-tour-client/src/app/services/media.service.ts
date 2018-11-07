import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private apiUrl:string = 'http://intro-tour.local/api/';

  constructor(private http: Http) { }

  public getMedia(eventId): Observable<any>{

    return this.http.get(this.apiUrl + 'mediafile/' + eventId);
  }

  public uploadMedia(mediaFile: File): Observable<any>{
    let headers = new Headers();
    const formData: FormData =new FormData();
    formData.append('fileKey', mediaFile, mediaFile.name);
    let body;
    return this.http.post(this.apiUrl + 'mediafileupload/', formData, body).pipe(map(data => {}));

    // return this.http.post(this.apiUrl + 'mediafileupload', formData)
    // .map(() => { return true; })
    // .catch((e) => this.handleError(e));
    
    // const endpoint = this.apiUrl + 'mediafileupload';
    // const formData: FormData = new FormData();
    // formData.append('fileKey', mediaFile, mediaFile.name);
    // return this.http
    //   .post(endpoint, formData)
    //   .map(() => { return true; })
    //   .catch((e) => this.handleError(e));
  }
}
