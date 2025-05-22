import { products } from './../../export-files/data.type';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 popularProducts:undefined|products[];
 trendyProducts:undefined|products[];
  constructor(private products:ProductsService){

  }
  ngOnInit(): void {
    this.products.popularProduct().subscribe((data)=>{
      this.popularProducts=data;
    });

    this.products.trendyProduct().subscribe((data)=>{
      this.trendyProducts=data;
    });
  }
}
