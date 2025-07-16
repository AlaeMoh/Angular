import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';
import { bookings, flights } from '../data.type';

@Component({
  selector: 'app-finalise-flight',
  templateUrl: './finalise-flight.component.html',
  styleUrls: ['./finalise-flight.component.scss']
})
export class FinaliseFlightComponent implements OnInit{
flightDetails: undefined |flights;
 passengerCount: number = 1;
 passenger={
  fullName:'',
  passportNumber:'',
  dob:'',
  nationality:'',
  count:'',
 }

 payment={
  cardNumber:'',
  expiry:'',
  cvv:'',

 }
  constructor(private mainS:MainService, private router:ActivatedRoute){}
  ngOnInit(): void {

        const flightID = this.router.snapshot.paramMap.get('Id');
   

    flightID && this.mainS.getFlightById(flightID).subscribe(result=>{
      this.flightDetails=result;
    })
}

finalizeBooking(){

} 
}

