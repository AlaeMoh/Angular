import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { signUp } from 'src/export-files/data.type';
import { SellerService } from '../service/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit{
 
  constructor(private seller:SellerService){

  }

  ngOnInit(): void {
  this.seller.reloadSeller();
  }

  signUp(data:signUp){
   console.log(data);
    this.seller.userSignUp(data);
      }
    

}
