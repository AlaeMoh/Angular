import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HomeSearchService } from '../service/home-search.service';
import { cars, flights, Trains } from '../data.type';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{
  transportation!:string
  from!:string
  to!:string
 flightList: flights[]=[]
  trainList: Trains[]=[]
  carList: cars[]=[]
  sortOption: string = '';

  constructor( private route:ActivatedRoute, private search:HomeSearchService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.transportation = params['transportation'];
    this.from = params['from'];
    this.to = params['to']; 
          if (this.transportation === 'Flight') {
      this.search.getflights(this.to, this.from).subscribe(result => this.flightList = result);
    } else if (this.transportation === 'Train') {
      this.search.getTrains(this.to, this.from).subscribe(result => this.trainList = result);
    } else if (this.transportation === 'Cars') {
      this.search.getCars().subscribe(result => this.carList = result);
    }
  });
 

  }


sortResults(){
 let sortFn;
 if(this.sortOption ==='priceAsc') sortFn = (a:any,b:any)=> a.price - b.price;
 if(this.sortOption ==='priceDesc') sortFn = (a:any,b:any)=> b.price - a.price; 
 if(this.sortOption ==='dateAsc') sortFn = (a:any,b:any)=> new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime();
 if(this.sortOption ==='dateDesc') sortFn = (a:any,b:any)=>new Date(b.departureDate).getTime() - new Date(a.departureDate).getTime();
 
  if (this.transportation === 'Flight') this.flightList.sort(sortFn);
  if (this.transportation === 'Train') this.trainList.sort(sortFn);
  if (this.transportation === 'Cars') this.carList.sort(sortFn);

}



}
