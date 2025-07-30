import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { carBooking, cars } from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
 carBooking= new EventEmitter <carBooking[]>
  constructor(private http:HttpClient, private router:Router) { }

 getCars(){
  return this.http.get<cars[]>('http://localhost:3000/cars')
 }

 getCarById(id:string){
   return this.http.get<cars>(`http://localhost:3000/cars/${id}`)
 }

 bookedCar(data:carBooking){
   return this.http.post<carBooking[]>('http://localhost:3000/carBooking', data)
 }

 getBooking(){
  let user= localStorage.getItem('users')
  let userData= user && JSON.parse(user)
  return this.http.get<carBooking[]>('http://localhost:3000/carBooking/?email=' + userData.email )
 }
}
