import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from './../service/food/food.service';
import { Food } from '../shared/food/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit{
  food!:Food;
constructor(private route:ActivatedRoute, private foodService:FoodService){
route.params.subscribe((params)=>{
  if (params['id'])
    this.food= foodService.getFoodById(params['id'])
   
})
}
ngOnInit(): void {

}
}
