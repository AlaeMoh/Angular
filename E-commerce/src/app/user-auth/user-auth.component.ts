import { UserService } from '../service/user.service';
import { cart, Login, products, signUp  } from './../../export-files/data.type';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit{
  admin = {
    email: '',
    password: '',
    name:'',
  };

  adminLogin:boolean= true;
  authLoginFailed:string='';
constructor(private user:UserService , private product: ProductsService){}

  ngOnInit(): void {
    this.user.userReload();
  }

  login(data:Login){
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result)=>{
      
      if(result){
        this.authLoginFailed="Email or password is incorrect"
      }else{
        this.localCToUserC()
      }
      
    })

    
  }

  signUp(data:signUp){
    this.user.userSignUp(data);
   this.localCToUserC()
  }

  openSignIn(){
    this.adminLogin=true
  }

  openSignUp(){
 this.adminLogin=false
  }

  localCToUserC(){
    let data = localStorage.getItem('localCart')
    let user= localStorage.getItem('user');
    let userId= user && JSON.parse(user).id;
    if(data){
      

      let cartDataList:products[]= JSON.parse(data)
       cartDataList.forEach((product:products, index)=>{
        let cartData:cart={
          ...product,
          userId,
          productId:product.id
        }
        delete cartData.id;
       setTimeout(() => {
         this.product.addToCart(cartData).subscribe((result)=>{
          if(result){
            console.log('data is installed')
          }
        })
       }, 500);
       if(cartDataList.length===index+1){
        localStorage.removeItem('localCart')
       }
       })

      }
    setTimeout(() => {
      this.product.getCartList(userId)
    }, 2000);
  }

}