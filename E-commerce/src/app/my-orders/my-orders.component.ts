import { order, products } from 'src/export-files/data.type';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit{
myOrders:order[]|undefined

constructor(private products:ProductsService){}
ngOnInit(): void {
  this.getOrders()
}

getOrders(){
  this.products.orderList().subscribe((result)=>{
    this.myOrders=result
  })
}
}
