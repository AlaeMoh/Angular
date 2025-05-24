import { products } from './../../export-files/data.type';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-update-products',
  templateUrl: './seller-update-products.component.html',
  styleUrls: ['./seller-update-products.component.scss']
})
export class SellerUpdateProductsComponent implements OnInit{
  Product = {
    name: '',
    category:'',
    price: '',
    color:'',
    description:'',
    image:'',
  };

  productData: undefined | products
  updateMessage:string |undefined
  constructor(private product:ProductsService, private route:ActivatedRoute){

  }
ngOnInit(): void {
  let productId= this.route.snapshot.paramMap.get('id');
  productId && this.product.getProduct(productId).subscribe((data)=>{
    this.productData=data;
  })
}

submit(data:products){

  if(this.productData){
    data.id=this.productData.id;
  }
  this.product.updatedProduct(data).subscribe((result)=>{
    if(result){
      this.updateMessage="Item updated successfully"
    }
  }),  setTimeout(() => {
  this.updateMessage= undefined;
}, 3000);
}
}
