import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { cart, products } from './../../export-files/data.type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartData: cart[] | undefined
  constructor( private product:ProductsService , private router:Router){}


    
  removeFromCart(){

  }

  getTotalPrice(){
    
  }
}
