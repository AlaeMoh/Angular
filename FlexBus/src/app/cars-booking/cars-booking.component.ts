import { Component, OnInit } from '@angular/core';
import { CarsService } from '../service/cars.service';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { carBooking, cars } from '../data.type';

@Component({
  selector: 'app-cars-booking',
  templateUrl: './cars-booking.component.html',
  styleUrls: ['./cars-booking.component.scss']
})
export class CarsBookingComponent implements OnInit{
  selectedCar: undefined | cars;
  bookingData={
 pickupDate: '',
 dropoffDate:'',
 paymentMethod:'',
 Card:''
  }
  bookingMsg: string |undefined
 constructor(private service:CarsService, private  router:ActivatedRoute, private route:Router){}
  ngOnInit(): void {
    let carID= this.router.snapshot.paramMap.get('id');
   carID && this.service.getCarById(carID).subscribe(result=>{
      this.selectedCar=result;
    })
  }
  finalizeBooking(){
    let user= localStorage.getItem('users');
    let userID= user&& JSON.parse(user).id;
    if (userID){
      let bookingDetails: carBooking={
        userID,
        pickupDate: this.bookingData.pickupDate,
        dropoffDate: this.bookingData.dropoffDate,
        paymentMethod: this.bookingData.paymentMethod,
        Card: this.bookingData.Card,
        brand: this.selectedCar?.brand || "",
        model: this.selectedCar?.model || "",
        year: this.selectedCar?.year || 0,
        price: this.selectedCar?.dailyRate || 0,
        id: 0,
        color: '',
        dailyRate: 0,
        carImage: '',
        regNo: ''
      }
      console.log(bookingDetails);
      this.service.bookedCar(bookingDetails).subscribe(result=>{
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
}
