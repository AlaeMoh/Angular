import { cart, products } from './../../export-files/data.type';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
   
  productData: undefined | products;
  productQuantity:number= 1
  removeCart= false;
  constructor(private router:ActivatedRoute, private products:ProductsService){}

  ngOnInit(): void {
    let productId= this.router.snapshot.paramMap.get('productId');

    productId && this.products.getProduct(productId).subscribe((result)=>{
      if(result){
        this.productData=result;
      }
    });

    let cartData= localStorage.getItem('localCart')
      if(productId && cartData){
        let items= JSON.parse(cartData);
        items= items.filter((item:products)=>productId === item.id)
        if(items.length){
          this.removeCart= true;
        }else{
          this.removeCart= false;
        }
        
      }
     
  }

  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
          this.productQuantity+=1

    }else if( this.productQuantity>1 && val==='mins'){
      this.productQuantity-=1
  }
  }

 addToCart(){
  if(this.productData){
    this.productData.quantity= this.productQuantity
    if(!localStorage.getItem('user')){
      this.products.localAddToCart(this.productData)
    }else{
      let user=localStorage.getItem('user')
      let userId= user &&  JSON.parse(user).id;
      let cartData:cart={
        ...this.productData,
        userId,
        productId:this.productData.id,
      }

      delete cartData.id;
      this.products.addToCart(cartData).subscribe((result)=>{
        if(result){
          console.log(cartData)
        }
      })
      

      
    }
  }
 }

  remvoveItem(productId:string){
    this.products.removeFromCart(productId);
    this.removeCart= false
  }
}
