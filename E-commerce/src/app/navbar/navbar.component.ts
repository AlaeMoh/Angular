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
  userName:string="";
  navbar:string="default"
  searchResult: undefined | products [];
  cartItem:number=0
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
      
      }else if(localStorage.getItem('user')){
        let userStore=localStorage.getItem('user');
        let userData= userStore&& JSON.parse(userStore);
         this.userName=userData.name;
         this.navbar="user-nav"
        
      
      }else{
         this.navbar="default"

      }
    }

   })

   let cardData = localStorage.getItem('localCart');
   if(cardData){
    this.cartItem= JSON.parse(cardData).length
    
   }

   this.products.cartData.subscribe((items)=>{
    this.cartItem=items.length
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

  userLogout(){
   localStorage.removeItem('user');
   this.route.navigateByUrl('/user-auth') 
  }


}
