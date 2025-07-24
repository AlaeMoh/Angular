import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trains } from '../data.type';

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
  constructor( private service:MainService, private route:ActivatedRoute){}
  ngOnInit(): void {
    const trainID= this.route.snapshot.paramMap.get('id');

    trainID && this.service.getTrainById(trainID).subscribe(result=>{
      this.trainDetails=result;
    })

  }
  finalizeBooking(){}
}
