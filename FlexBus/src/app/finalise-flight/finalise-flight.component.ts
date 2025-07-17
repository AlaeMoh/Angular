import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { bookings, flights } from '../data.type';

@Component({
  selector: 'app-finalise-flight',
  templateUrl: './finalise-flight.component.html',
  styleUrls: ['./finalise-flight.component.scss']
})
export class FinaliseFlightComponent implements OnInit{
  bookingMsg: string | undefined;
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
  constructor(private mainS:MainService, private router:ActivatedRoute, private route:Router){}
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
    
    let booking :bookings ={
      id: 0,
      name: '',
      mobileNo: '',
      email: '',
      city: '',
      address: '',
      role: '',
      vendorId: 0,
      password: '',
      userId: '',
      ...this.passenger,
      
    }
    

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

