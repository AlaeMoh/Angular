import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { products } from 'src/export-files/data.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit{

  productList: undefined | products[];
  deletedMessage: undefined | string;
  constructor(private product:ProductsService){
  }

ngOnInit(): void { 
  this.list();
}

deleteProduct(id:string){
  this.product.deleteItem(id).subscribe((result)=>{
    if(result){
      this.deletedMessage="Item deleted successfully"
      this.list();
    }
    
  });
  setTimeout(() => {
  this.deletedMessage= undefined;
}, 3000);
}

list(){
  this.product.productList().subscribe((result)=>{
    console.log(result)
    if(result){
      this.productList=result;
    }
  })
}

}
