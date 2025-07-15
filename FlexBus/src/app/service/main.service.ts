import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { airports, cities, flights, Flightusers, stationsData, Trains } from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class MainService {
 isUserLoggedIn = new BehaviorSubject <boolean>(false);
 isLoginFailed= new EventEmitter <boolean>(false)
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



  // <<-- users related -->>

  getUsers(user: Flightusers){
    return this.http.get<Flightusers[]>(`http://localhost:3001/seller?email=${user.email}&password=${user.password}`,{observe:'response'}).subscribe(
      (result:any)=>{
      if(result && result.body && result.body.length===1){
        this.isLoginFailed.emit(false);
        localStorage.setItem('users', JSON.stringify(result.body[0]));;
  }})
  }

  addUser(user:Flightusers){
    this.http.get<Flightusers[]>(`http://localhost:3001/seller?email=${user.email}`).subscribe(
      (result)=>{
        if(result && result.length>0){
          console.log("error")
        }else{
           this.http.post('http://localhost:3000/users', user, {observe:'response'}).subscribe((res)=>{
            localStorage.setItem('users',JSON.stringify(user));
            this.isUserLoggedIn.next(true);

          })
        }
      })

  }
}
