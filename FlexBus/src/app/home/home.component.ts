import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { cars, flights, stationsData, Trains } from '../data.type';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private search:HomeSearchService, private router:Router){}
  ngOnInit(): void {

  }

 serach(){
    console.log('Form submitted:', this.searchParam)
    const {to, from, transportation}= this.searchParam
    if(transportation === "Flight"){
      this.search.getflights(to, from).subscribe(result=>{
        this.flightList= result
        console.log(this.flightList)
        this.router.navigate(['/results'], {
        queryParams: {
       transportation: transportation,
       from: from,
       to: to
       }
      });  
        })
      
    }else if(transportation === "Train"){
      this.search.getTrains(to, from).subscribe(result=>{
        this.trainList=result
         console.log(this.trainList)
      this.router.navigate(['/results'], {
        queryParams: {
       transportation: transportation,
       from: from,
       to: to
       }
      });  
      })
    }else if(transportation === "Cars"){
      this.search.getCars().subscribe(result=>{
        this.carList=result   
        console.log(this.carList)
      this.router.navigate(['/results'], {
        queryParams: {
       transportation: transportation,
       from: from,
       to: to
       }
      });  
      })
    }
 }
}
