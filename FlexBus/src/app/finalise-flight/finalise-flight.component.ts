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
  constructor(private mainS:MainService, private router:ActivatedRoute, private route:Router, private http:HttpClient){}
  ngOnInit(): void {

        const flightID = this.router.snapshot.paramMap.get('Id');
   

    flightID && this.mainS.getFlightById(flightID).subscribe(result=>{
      this.flightDetails=result;
    })

}

finalizeBooking(data: any){
  let user= localStorage.getItem('user');
  let userId= user && JSON.parse(user).id;
 
 
  if(this.passengerCount){
    
let booking: flightBookings = {
  id: 0,
  name: this.passenger.fullName,
  nationality: this.passenger.nationality,
  passportNumber: this.passenger.passportNumber,
  dob: this.passenger.dob,
  address: this.passenger.count,
  role: 'user',
  password: '',
  userId: userId,
  flightNumber: this.flightDetails?.flightNumber || '',
  travelDate: this.flightDetails?.travelDate || '',
  price: this.flightDetails?.price || 0,
  totalSeats: this.passengerCount,
  count: '',
  mobileNo: '',
  email: '',
  city: '',
  vendorId: 0,
  arrivalTime: '',
  departureTime: '',
  arrivalAirportName: '',
  arrivalAirportCode: '',
  departureAirportName: '',
  departureAirportCode: '',
  vendorName: '',
  vendorLogoUrl: ''
};
 


    this.mainS.bookNow(data).subscribe((result)=>{
    if(result){
      this.bookingMsg="Booking Successfull"
        console.log("Order Data:", data);
        console.log("Order Details:", data);
          setTimeout(() => {
            this.bookingMsg = undefined;
            this.route.navigate(['/home'])
          }, 4000);
    }

  })

 
    }
} 
}

