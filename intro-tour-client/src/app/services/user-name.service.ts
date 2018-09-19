import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {

  private userNameSource = new BehaviorSubject<string>('Kaas');
  public currentName = this.userNameSource.asObservable();

  constructor() { }

  userName(name: string) {
    this.userNameSource.next(name);
  }
}
