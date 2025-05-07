import { cartItem } from "./cartItem";

export class Cart{
    items:cartItem[] = [];

    getTotalPrice(): number {
        let totalPrice= 0;
         this.items.forEach(item=> totalPrice += item.price);
         return totalPrice;
      }
    

    // getTotalPrice(){
    //     let totalPrice= 0;
    //     this.items.forEach(item=> totalPrice += item.getPrice());
    //     return totalPrice;
    // }
}