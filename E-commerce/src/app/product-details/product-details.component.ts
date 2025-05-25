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
  constructor(private router:ActivatedRoute, private products:ProductsService){}

  ngOnInit(): void {
    let productId= this.router.snapshot.paramMap.get('productId');

    productId && this.products.getProduct(productId).subscribe((result)=>{
      if(result){
        this.productData=result;
      }
    })
     
  }
}
