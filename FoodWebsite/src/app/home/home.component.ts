import { Component, OnInit } from '@angular/core';
import { FoodService } from './../service/food/food.service';
import { Food } from '../shared/food/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];

  constructor(private foodService:FoodService){}
ngOnInit(): void {
 this.foods = this.foodService.getAll()
}
}
