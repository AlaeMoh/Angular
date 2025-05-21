import { authGuard } from './../auth.guard';
import { Login, signUp } from './../../export-files/data.type';
import { EventEmitter, importProvidersFrom, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
 isSellerLoggedIn = new BehaviorSubject<boolean>(false);
 isLoginFailed= new EventEmitter<boolean>(false)

  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(user:signUp){
     this.http.post('http://localhost:3000/seller', user,{observe:'response'}).subscribe((result=>{
      if(result){
        localStorage.setItem('seller',JSON.stringify(user));
        this.isSellerLoggedIn.next(true);
        this.router.navigate(['seller-home']);
      }
     }));
  
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true),
      this.router.navigate(['seller-home'])
    }
  }

  userLogin(user:Login){
    this.http.get(`http://localhost:3000/seller?email=${user.email}&password=${user.password}`,{observe:'response'}).subscribe(
      (result:any)=>{
      if(result && result.body && result.body.length===1){
        this.isLoginFailed.emit(false);
        localStorage.setItem('seller', JSON.stringify(result.body[0]));;
        this.router.navigate(['seller-home']);
      }else{
        this.isLoginFailed.emit(true);
      }
    })

  }


}
