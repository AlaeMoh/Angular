import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { airports, cities, flights, stationsData, Trains } from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  // <<--trains related-->>
  
  getLocations() {
  return this.http.get<stationsData[]>('http://localhost:3000/Stations');
}

  getTrains(from:string , to: string){
  return this.http.get<Trains[]>(`http://localhost:3000/Trains/?departureStationName=${from}&arrivalStationName=${to}`)  
}

  // <<--flights related-->>

  getAirports(){
    return this.http.get<airports[]>('http://localhost:3000/airports');
  }
 
  getFlights(from:string , to: string){
    return this.http.get<flights[]>(`http://localhost:3000/flights?departureAirportName=${from}&arrivalAirportName=${to}`);
  }

  getFlightById(Id: string){
    return this.http.get<flights>(`http://localhost:3000/flights/${Id}`);
  }
}
