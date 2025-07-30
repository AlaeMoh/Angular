import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cars, flights, Trains } from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class HomeSearchService {

  constructor(private http:HttpClient) { }

  getTrains(to: string , from: string){
   return this.http.get<Trains[]>(`http://localhost:3000/Trains/?departureStationName=${from}&arrivalStationName=${to}`)
  }

    getflights(to: string , from: string){
   return this.http.get<flights[]>(`http://localhost:3000/flights/?departureAirportName=${from}&arrivalAirportName"=${to}`)
  }

  getCars(){
 return this.http.get<cars[]>('http://localhost:3000/cars')
  }
}
