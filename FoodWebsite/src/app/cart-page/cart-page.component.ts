import { cartItem } from './../shared/food/cartItem';
import { Cart } from './../shared/food/cart';
import { CartService } from '../service/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { parseHostBindings } from '@angular/compiler';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartservice:CartService){
    this.setCart();
  }

  ngOnInit(): void {
    
      console.log('Cart contents:', this.cart);
      console.log('Total price:', this.cart.getTotalPrice());
    
  }

  removeFromCart(cartItem:cartItem){
   this.cartservice.removeFromCart(cartItem.food.id);
   this.setCart();
   this.saveCartToStorage();
   
  }

  changwQuantityCart(cartItem:cartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
    this.saveCartToStorage();
  }

  setCart(){
    this.cart=this.cartservice.getCart();
    this.saveCartToStorage();
  }
  

  saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
