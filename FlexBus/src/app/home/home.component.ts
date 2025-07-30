import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { cars, flights, stationsData, Trains } from '../data.type';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeSearchService } from '../service/home-search.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
   
  searchParam={
    transportation:'',
    from:'',
    to:'',
  }
 flightList: flights []= []
 trainList: Trains []= []
 carList: cars []= []
  constructor(private search:HomeSearchService){}
  ngOnInit(): void {

  }

 serach(){
    console.log('Form submitted:', this.searchParam)
    const {to, from, transportation}= this.searchParam
    if(transportation === "Flight"){
      this.search.getflights(to, from).subscribe(result=>{
        this.flightList= result
        console.log(this.flightList)
      })
      
    }else if(transportation === "Train"){
      this.search.getTrains(to, from).subscribe(result=>{
        this.trainList=result
         console.log(this.trainList)
      })
    }else if(transportation === "Cars"){
      this.search.getCars().subscribe(result=>{
        this.carList=result
        console.log(this.carList)
      })
    }
 }
}
