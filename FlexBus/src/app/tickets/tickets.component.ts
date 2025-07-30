import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { carBooking, flightBookings, trainBookings } from '../data.type';
import { CarsService } from '../service/cars.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit{
  bookings: flightBookings [] | undefined
  trainBooking: trainBookings[] | undefined
  carBooking: carBooking[] | undefined
  constructor(private service:MainService, private car:CarsService){}

  ngOnInit(): void {
   this.getMyBookings()
   this.getMyTrainBooking()
   this.getMycarrental()
  }

  getMyBookings(){
    this.service.bookingList().subscribe(result=>{
      this.bookings=result
    })
  }

  getMyTrainBooking(){
    this.service.getTrainBooking().subscribe(result=>{
      this.trainBooking= result
    })
  }

  getMycarrental(){
    this.car.getBooking().subscribe(result=>{
      this.carBooking= result
    })
  }
}
