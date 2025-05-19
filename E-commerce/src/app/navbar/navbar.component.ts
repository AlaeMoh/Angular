import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  sellerName:string="";
  navbar:string="default"
  constructor(private route:Router){

  }
 ngOnInit(): void {
   this.route.events.subscribe((val: any)=>{
    if(val.url){
      if(localStorage.getItem('seller') && val.url.includes('seller')){
          
        let sellerStore= localStorage.getItem('seller');
        let sellerData= sellerStore && JSON.parse(sellerStore); 
        console.log(sellerData)
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
}
