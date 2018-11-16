
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MediaFileService {
  private apiUrl:string = environment.API_URL;

  constructor(private http: HttpClient) { }

  public getMedia(eventId): Observable<any>{

    return this.http.get(this.apiUrl + 'mediafile/' + eventId);
  }

 public uploadMedia(mediaFile: File){
  //try no1
    // let headers = new Headers();
    // const formData: FormData =new FormData();
    // formData.append('fileKey', mediaFile, mediaFile.name);
    // let body;
    // console.log(formData);
    //return this.http.post(this.apiUrl + 'mediafileupload', formData);

//try no2
    // var fd = new FormData();
    //     fd.append('filekey', mediaFile,mediaFile.name)
    //     for (var pair of fd.entries()) {
    //       console.log(pair[0]+ ', ' + pair[1]); 
    //     }

//try no5
    var myFormData = {
      key1: mediaFile,
      key2: mediaFile.name
  };
  
  var fd = new FormData();

  for (var key in myFormData) {
      console.log(key, myFormData[key]);
      fd.append(key, myFormData[key]);
  }
   console.log(this.http.post(this.apiUrl + 'mediafileupload', fd));
   return 
    //try no4
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

