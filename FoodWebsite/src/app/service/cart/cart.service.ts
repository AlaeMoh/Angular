import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/food/cart';
import { Food } from 'src/app/shared/food/food';
import { cartItem } from './../../shared/food/cartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  constructor(){
    this.loadCartFromStorage();
  }

  private saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

private loadCartFromStorage(){
  const data = localStorage.getItem('cart');
  if (data) {
    const parsed = JSON.parse(data);
    const cart = new Cart();
    cart.items = parsed.items.map((item: any) => 
      new cartItem(item.food)
    );
    this.cart = cart;
  } else {
    this.cart = new Cart();
  }
}

  addToCart(food: Food):void{
    let mycartItem = this.cart.items.find(item => item.food.id === food.id);
    if(mycartItem){
      this.changeQuantity(food.id, mycartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new cartItem(food));
    this.saveCartToStorage();
  }

  removeFromCart(foodId:number){
    this.cart.items = this.cart.items.filter(item=>item.food.id!=foodId);
    this.saveCartToStorage();
  }


  changeQuantity(foodId:number, quantity:number){
    let mycartItem =this.cart.items.find(item=> item.food.id === foodId);
    if(!mycartItem) return;
    mycartItem.quantity=quantity;
    this.saveCartToStorage();
  }

  getCart():Cart{
return this.cart;
this.saveCartToStorage();
  }



}

