import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { cart, order, products } from './../../export-files/data.type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  orderDetails={
    name: "",
    email: "",
    phone: "",
    shippingAddress: "",

  }


  totalPrice: number | undefined;
  cartData: cart[] | undefined;
  orderMsg: string | undefined;
  constructor(private product:ProductsService, private route:Router){

  }
ngOnInit(): void {
  this.loadDetails()
}

  loadDetails(){
    this.product.currentCart().subscribe((result)=>{
    this.cartData=result;
    console.log(result)

     let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity)
        }
      })

  

      this.totalPrice= price+ (price/10)+ 30- (price/10);
      
    })}

placeOrder(data:order){

  let user= localStorage.getItem('user');
  let userId= user && JSON.parse('user').id;
  if(this.totalPrice){
    let orderData: order={
      ...data,
      totalPrice: this.totalPrice,
      userId,
    id: undefined,
    }

    this.product.orderNow(orderData).subscribe((result)=>{
    if(result){
      this.orderMsg="Order Placed Successfully"
          setTimeout(() => {
            this.orderMsg = undefined;
            // this.route.navigate(['/my-orders'])
          }, 4000);
    }
     console.log(orderData)
  })

 
    }

    // this.cartData?.forEach((item)=>{
    //   setTimeout(() => {
    //      item.id && this.product.deleteCartItems(item.id);
    //   }, 7000);

    // })

}


}
