import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { cart, priceSummary, products } from './../../export-files/data.type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cartData: cart[] | undefined
    priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }
  
  itemTotal=0;
  constructor( private product:ProductsService , private router:Router){}

  ngOnInit(): void {
    this.loadDetails()
  }

    
  removeFromCart(cartId:string | undefined){
   cartId && this.cartData && this.product.removeCart(cartId).subscribe((result)=>{
    this.loadDetails();
   })
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

    

      // result.forEach((item)=>{
      // if(item.quantity && item.quantity>1){
      //     this.itemTotal= +item.price * +item.quantity;
        
          
      //   }else{
      //     this.itemTotal= item.price
      //   }
      //   console.log(this.itemTotal)
      // })
      this.priceSummary.price=price;
      this.priceSummary.tax=price/10
      this.priceSummary.discount=price/10
      this.priceSummary.delivery=30;
      this.priceSummary.total= price+ (price/10)+ 30- (price/10);
      console.log(this.priceSummary.total)
    })}


    checkOut(){
      this.router.navigate(['/check-out'])
    }
    
  }