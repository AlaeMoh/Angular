import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit{

  sellerSignUp:FormGroup= new FormGroup({
    name:new FormControl(null),
    password:new FormControl(null),
    email:new FormControl(null),
  })

  ngOnInit(): void {
 
  }

  signUp(data:FormGroup){
    console.log(data.value);
  }


}
