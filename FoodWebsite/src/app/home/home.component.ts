import { Component, OnInit } from '@angular/core';
import { FoodService } from './../service/food/food.service';
import { Food } from '../shared/food/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];

  constructor(private foodService:FoodService, private route:ActivatedRoute){}
ngOnInit(): void {
  this.route.params.subscribe(params=>{
    if(params['searchTerm'])
      this.foods=this.foodService.getAll().filter(food=> food.name.toLocaleLowerCase().includes(params['searchTerm'].toLocaleLowerCase()));
    else  this.foods = this.foodService.getAll()
  })

}
}
