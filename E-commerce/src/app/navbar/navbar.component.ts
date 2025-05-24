import { query } from '@angular/animations';
import { ProductsService } from './../service/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products } from 'src/export-files/data.type';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  sellerName:string="";
  navbar:string="default"
  searchResult: undefined | products [];
  constructor(private route:Router , private products:ProductsService){

  }
 ngOnInit(): void {
   this.route.events.subscribe((val: any)=>{
    if(val.url){
      if(localStorage.getItem('seller') && val.url.includes('seller')){
          
        let sellerStore= localStorage.getItem('seller');
        let sellerData= sellerStore && JSON.parse(sellerStore); 
        this.sellerName= sellerData.name;
        // this.sellerName=sellerStore
         this.navbar="seller-nav"
      
      }else{
         this.navbar="default"

      }
    }
   })
 }


 logout(){
  localStorage.removeItem('seller');
  this.route.navigateByUrl('/home')
 }


 searchProduct(query:KeyboardEvent){
  if(query){
    const element= query.target as HTMLInputElement;
      this.products.searchProduct(element.value).subscribe((result)=>{
        this.searchResult=result;
        if(result.length>5){
          result.length=length;
        }
  })
  }

 }

 hideSearch(){
  this.searchResult=undefined;
 }

 submitSearch(val:string){
  console.log(val)
  this.route.navigate([`/search/${val}`])
 }
}
