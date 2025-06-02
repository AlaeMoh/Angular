import { products } from 'src/export-files/data.type';
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
  constructor(private router:ActivatedRoute, private products:ProductsService){}

  ngOnInit(): void {
    let productId= this.router.snapshot.paramMap.get('productId');

    productId && this.products.getProduct(productId).subscribe((result)=>{
      if(result){
        this.productData=result;
      }
    })
     
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
    }
  }
 }
}
