import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { flightBookings, trainBookings } from '../data.type';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit{
  bookings: flightBookings [] | undefined
  trainBooking: trainBookings[] | undefined
  constructor(private service:MainService){}

  ngOnInit(): void {
   this.getMyBookings()
   this.getMyTrainBooking()
   
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
}
