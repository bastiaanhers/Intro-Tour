import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl:string = 'http://intro-tour.local/api/';

  constructor(private http: HttpClient) { }

  public getLocation(id): Observable<any>{
    return this.http.get(this.apiUrl + 'locations/' + id);
  }
}