import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cart } from '../shared/food/cart';
import { cartItem } from '../shared/food/cartItem';
import { CartService } from '../service/cart/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  cart!:Cart;
  constructor( private cartService:CartService){

  }
ngOnInit(): void {
  this.cart = this.cartService.getCart();
}
}
