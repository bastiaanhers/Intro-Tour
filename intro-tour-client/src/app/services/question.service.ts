import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl:string = 'http://intro-tour.local/api/';

  constructor(private http: HttpClient) { }

  public getQuestion(id:number): Observable<any> {
    return this.http.get(this.apiUrl + 'questions/' + id)
              .pipe(
                retryWhen((errors) => {
                  return errors
                })
              );
  }
}
