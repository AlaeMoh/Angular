import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { flightBookings } from '../data.type';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit{
  bookings: flightBookings [] | undefined
  constructor(private service:MainService){}

  ngOnInit(): void {
   this.getMyBookings()
  }

  getMyBookings(){
    this.service.bookingList().subscribe(result=>{
      this.bookings=result
    })
  }
}
