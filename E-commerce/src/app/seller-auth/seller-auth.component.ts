import { Login } from './../../export-files/data.type';
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
    user = {
    email: '',
    password: '',
    name:'',
  };
  sellerLogin=false;
  authLoginFailed:string='';
  constructor(private seller:SellerService){

  }



  ngOnInit(): void {
  this.seller.reloadSeller();
  }

  signUp(user:signUp){
    this.seller.userSignUp(this.user);
      }
   
  login(user:signUp){
    this.seller.userLogin(this.user);
    this.seller.isLoginFailed.subscribe((isError)=>{
      if(isError){
      this.authLoginFailed="Email or password is incorrect";
      }
    })
   }    
  openSignIn(){
    this.sellerLogin=true
  }


  openSignUp(){
    this.sellerLogin=false;
  }


}
