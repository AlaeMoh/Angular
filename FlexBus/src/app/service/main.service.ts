import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { airports, bookings, cities, flights, Flightusers, stationsData, Trains } from '../data.type';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {
 booking= new EventEmitter <bookings []>
 isUserLoggedIn = new BehaviorSubject <boolean>(false);
 isLoginFailed= new EventEmitter <boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }

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
         this.router.navigate(['home']);

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
            this.router.navigate(['home']);

          })
        }
      })

  }


  reloadUser() {
  if (localStorage.getItem('users')) {
    this.isUserLoggedIn.next(true),
    this.router.navigate(['home']);
  }
}

// <<-- booking related -->>

getBookings(data:bookings){
let booking= [];
let localBookings= localStorage.getItem('localBookings');
if(!localBookings){
  localStorage.setItem('localBooking', JSON.stringify([data]))
  this.booking.emit([data])
}else{
  booking=  JSON.parse(localBookings);
  booking.push(data);
   localStorage.setItem('localBooking', JSON.stringify([data]));
  this.booking.emit([data])

}
}
}
