import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { airports, flightBookings, cities, flights, Flightusers, stationsData, Trains, trainBookings } from '../data.type';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {
 flightBooking= new EventEmitter <flightBookings []>
 trainBooking= new EventEmitter<trainBookings[]>
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

// << -- Train Booking Related -->>

  bookTrain(data:trainBookings){
     return this.http.post('http://localhost:3000/trainBookings', data)
  }

  getTrainById(id:string ){
    return this.http.get<Trains>(`http://localhost:3000/trains/${id}`)
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
    return this.http.get<Flightusers[]>(`http://localhost:3000/users?email=${user.email}&password=${user.password}`,{observe:'response'}).subscribe(
      (result:any)=>{
      if(result && result.body && result.body.length===1){
        this.isLoginFailed.emit(false);
        localStorage.setItem('users', JSON.stringify(result.body[0]));;
         this.router.navigate(['/home']);

  }})
  }

  addUser(user:Flightusers){
    this.http.get<Flightusers[]>(`http://localhost:3000/users?email=${user.email}`).subscribe(
      (result)=>{
        if(result && result.length>0){
          console.log("error")
        }else{
           this.http.post('http://localhost:3000/users', user, {observe:'response'}).subscribe((res)=>{
            localStorage.setItem('users',JSON.stringify(user));
            this.isUserLoggedIn.next(true);
            this.router.navigate(['/home']);

          })
        }
      })

  }


  reloadUser() {
  if (localStorage.getItem('users')) {
    this.isUserLoggedIn.next(true),
    this.router.navigate(['/home']);
  }
}

// <<-- flight booking related -->>

bookNow(data:flightBookings){
  return this.http.post('http://localhost:3000/flightBookings', data)
}

bookingList(){
  let userStore= localStorage.getItem('users')
  let userData= userStore && JSON.parse(userStore)
   return this.http.get<flightBookings[]>('http://localhost:3000/flightBookings?email='+ userData.email);

}
   

}
