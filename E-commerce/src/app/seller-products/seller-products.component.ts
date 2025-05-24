import { products, signUp } from 'src/export-files/data.type';
import { ProductsService } from './../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss']
})
export class SellerProductsComponent implements OnInit{
Product = {
    name: '',
    category:'',
    price: '',
    color:'',
    description:'',
    image:'',
  };

  newProduct:string | undefined ="";
    constructor(private product:ProductsService){

    }
  ngOnInit(): void {
    
  }

  submit(data:products){
    this.product.addProduct(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.newProduct="New product added successfully"
      }
    })
  }
}
