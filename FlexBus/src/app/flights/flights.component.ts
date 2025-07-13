import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';
import { airports, cities, flights } from '../data.type';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})


export class FlightsComponent implements OnInit{
 airportList:airports []=[];

 flightData: any ={
  flyFrom: '',
  flyTo: '',
  date: '',
 }

 flightList: flights []=[];
 filteredFlight: flights[]=[]


  constructor( private mainS:MainService, private router:ActivatedRoute){

  }
  ngOnInit(): void {
    
    this.mainS.getAirports().subscribe(result=>{
      this.airportList= result;
    })
  
  }

availaibleFlights(){
  
  const {flyFrom , flyTo ,date} = this.flightData;
  const selectedDate= date;
 this.mainS.getFlights(flyFrom, flyTo).subscribe(result=>{
  this.flightList= result;
  this.filteredFlight= result.filter(flight=>
    flight.travelDate.startsWith(selectedDate)
    );
  console.log('Form submitted:', this.filteredFlight);
 });
}

bookFlight(){
 
}
}    
