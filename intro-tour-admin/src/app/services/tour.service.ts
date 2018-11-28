import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  public getUserTours(id: number) {
    return this.http.get(this.apiUrl + 'admin/gettours/' + id);
  }

}
