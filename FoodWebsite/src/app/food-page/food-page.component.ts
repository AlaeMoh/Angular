import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from './../service/food/food.service';
import { Food } from '../shared/food/food';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit{
  food!:Food;
constructor(private route:ActivatedRoute, private foodService:FoodService, private cartService:CartService, private router:Router){
route.params.subscribe((params)=>{
  if (params['id'])
    this.food= foodService.getFoodById(params['id'])
   
})
}
ngOnInit(): void {

}

addToCart(){
  this.cartService.addToCart(this.food);
  // this.router.navigateByUrl('/cartPage');
}
}
