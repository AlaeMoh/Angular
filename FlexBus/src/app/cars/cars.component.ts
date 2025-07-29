import { Component, OnInit } from '@angular/core';
import { CarsService } from '../service/cars.service';
import { cars } from '../data.type';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit{
 cars: cars[] =[]
  constructor(private carservice:CarsService){}
  ngOnInit(): void {
    this.carservice.getCars().subscribe(result=>{
      this.cars= result
    })
  }

}
