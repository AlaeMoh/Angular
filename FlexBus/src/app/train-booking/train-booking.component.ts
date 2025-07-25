import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trainBookings, Trains } from '../data.type';

@Component({
  selector: 'app-train-booking',
  templateUrl: './train-booking.component.html',
  styleUrls: ['./train-booking.component.scss']
})
export class TrainBookingComponent implements OnInit{

  
 trainDetails: undefined | Trains 
 passengerCount:number = 1;
 passenger={
  name:'',
  email:'',
  mobileNo:'',
  city:'',
  address:'',
  count:'',
  
 }


 payment={
  cardNumber:'',
  expiry:'',
  cvv:'',

 }

 bookingMsg:string | undefined

  constructor( private service:MainService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    const trainID= this.route.snapshot.paramMap.get('id');

    trainID && this.service.getTrainById(trainID).subscribe(result=>{
      this.trainDetails=result;
    })

  }

  
  finalizeBooking(data:any){
  let user= localStorage.getItem('users');
  let userId= user && JSON.parse(user);

  let booking:trainBookings={
  id: 0,
  name: this.passenger.name,
  address: this.passenger.address,
  role: 'users',
  userId: userId,
  trainNo: this.trainDetails?.trainNo || '',
  departureDate: this.trainDetails?.departureDate || '',
  price: this.trainDetails?.price || 0,
  totalSeats: this.passengerCount,
  count: this.passenger.count || '',
  mobileNo: this.passenger.mobileNo || '',
  email:this.passenger.email || '',
  city:this.passenger.city || '',
  arrivalTime: this.trainDetails?.arrivalTime || '',
  departureTime: this.trainDetails?.departureTime || '',
  arrivalStationName: this.trainDetails?.arrivalStationName || '',
  ddepartureStationName:this.trainDetails?.departureStationName || '',
    vendorId: 0,


  }

 this.service.bookTrain(booking).subscribe(result=>{
  if(result){
      this.bookingMsg="Booking Successfull"
          setTimeout(() => {
            this.bookingMsg = undefined;
            this.router.navigate(['/home'])
          }, 4000);
 }})

}
}