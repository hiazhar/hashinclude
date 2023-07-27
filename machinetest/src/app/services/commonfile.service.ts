import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from './Data';

@Injectable({
  providedIn: 'root'
})
export class CommonfileService {
  constructor() { }
  private Selection = new BehaviorSubject<Data>({category:'',subCategory:[]}); 

  setData(value: Data) {
    this.Selection.next(value);
  }

  getData():Observable <Data> {
    return this.Selection.asObservable();
  }

}
