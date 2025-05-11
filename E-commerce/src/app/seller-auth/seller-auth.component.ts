import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit{
  ngOnInit(): void {
 
  }
     signUp(data:object){
      console.log(data)
    }
}
