import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { flightBookings, flights } from '../data.type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-finalise-flight',
  templateUrl: './finalise-flight.component.html',
  styleUrls: ['./finalise-flight.component.scss']
})
export class FinaliseFlightComponent implements OnInit{
bookingMsg: string | undefined;
flightDetails: flights |undefined;
 passengerCount: number = 1;
 passenger={
  fullName:'',
  email:'',
  passportNumber:'',
  dob:'',
  nationality:'',
  count:0,
  
 }

 payment={
  cardNumber:'',
  expiry:'',
  cvv:'',

 }
  constructor(private mainS:MainService, private router:ActivatedRoute, private route:Router, private http:HttpClient){}
  ngOnInit(): void {

        const flightID = this.router.snapshot.paramMap.get('Id');
   

    flightID && this.mainS.getFlightById(flightID).subscribe(result=>{
      this.flightDetails=result;
    })

}

finalizeBooking(data: any){
  let user= localStorage.getItem('users');
  let userId= user && JSON.parse(user);
 
let booking: flightBookings = {
  id: 0,
  name: this.passenger.fullName,
  nationality: this.passenger.nationality,
  passportNumber: this.passenger.passportNumber,
  dob: this.passenger.dob,
  role: 'users',
  userId: userId,
  flightNumber: this.flightDetails?.flightNumber || '',
  travelDate: this.flightDetails?.travelDate || '',
  price: this.flightDetails?.price || 0,
  totalSeats: this.passengerCount || 0,
  count: this.passengerCount,
  email: this.passenger.email || '',
  vendorId: 0,
  arrivalTime: this.flightDetails?.arrivalTime || '',
  departureTime: this.flightDetails?.departureTime || '',
  arrivalAirportName: this.flightDetails?.arrivalAirportName || '',
  arrivalAirportCode: this.flightDetails?.arrivalAirportCode || '',
  departureAirportName: this.flightDetails?.departureAirportName || '',
  departureAirportCode: this.flightDetails?.departureAirportCode || '',
  vendorName: this.flightDetails?.vendorName || '',
  vendorLogoUrl: this.flightDetails?.vendorLogoUrl || ''
}
 


    this.mainS.bookNow(booking).subscribe((result)=>{
    if(result){
      this.bookingMsg="Booking Successfull"
          setTimeout(() => {
            this.bookingMsg = undefined;
            this.route.navigate(['/home'])
          }, 4000);
    }

  })

 
    }
} 


