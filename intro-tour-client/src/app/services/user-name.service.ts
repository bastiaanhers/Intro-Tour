import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class UserNameService {

  private userNameSource = new BehaviorSubject<string>('John Doe');
  currentName = this.userNameSource.asObservable();

  constructor() { }

  newName(name: string) {
    this.userNameSource.next(name);
  }
}
