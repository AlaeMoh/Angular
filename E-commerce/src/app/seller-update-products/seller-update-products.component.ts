import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { products } from 'src/export-files/data.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-update-products',
  templateUrl: './seller-update-products.component.html',
  styleUrls: ['./seller-update-products.component.scss']
})
export class SellerUpdateProductsComponent implements OnInit{
  Product = {
    Pname: '',
    Pcategory:'',
    Pprice: '',
    Pcolor:'',
    Pdescription:'',
    Pimage:'',
  };

  productData: undefined | products
  constructor(private product:ProductsService, private route:ActivatedRoute){

  }
ngOnInit(): void {
  let productId= this.route.snapshot.paramMap.get('id');
  productId && this.product.getProduct(productId).subscribe((data)=>{
    this.productData=data;
  })
}

submit(data:products){
  console.log(data);
}
}
