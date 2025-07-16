import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../service/main.service';
import { flights } from '../data.type';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit{

  flightDetails: undefined |flights;
  passengerCount: number = 1;

  
  
 constructor(private router:ActivatedRoute, private mainS:MainService){}
  ngOnInit(): void {
    const flightID = this.router.snapshot.paramMap.get('Id');
   

    flightID && this.mainS.getFlightById(flightID).subscribe(result=>{
      this.flightDetails=result;
       console.log(this.flightDetails)
       if(result){
        let totalprice = this.flightDetails.price * this.passengerCount
        console.log(totalprice)
       }
    });
   
    
  }


}
