import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { stationsData, Trains } from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }


  getLocations() {
  return this.http.get<stationsData[]>('http://localhost:3000/Stations');
}

  getTrains(from:string , to: string){
  return this.http.get<Trains[]>(`http://localhost:3000/Trains/?departureStationName=${from}&arrivalStationName=${to}`)  
}
}
