import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackTopService {
  private scrollbarSource = new BehaviorSubject('scrollbar');
  scrollbarObservable = this.scrollbarSource.asObservable();

  constructor() { }

  goBackTop(): Observable<string> {
    return this.scrollbarObservable;
  }
}
