import { Login, signUp } from 'src/export-files/data.type';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //  isUserLoggedIn = new BehaviorSubject <boolean>(false);
   invalidUserAuth= new EventEmitter <boolean>(false)
  constructor( private http:HttpClient, private route:Router) { }

  userSignUp(user:signUp){
    this.http.post('http://localhost:3001/users', user, {observe:'response'}).subscribe((result)=>{
      if(result){
        localStorage.setItem('user', JSON.stringify(user));
        this.route.navigate(['home']);
      }
    })

  }
    userReload(){
    if(localStorage.getItem('user')){
      this.route.navigate(['/home']);
    }
    
  }

    userLogin(data:Login){
    this.http.get<signUp[]>(`http://localhost:3001/users?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result:any)=>{
      console.log(result);
      if(result && result.body?.length>=1){
        
        
         localStorage.setItem('user', JSON.stringify(result.body[0]));
         this.route.navigate(['/home']);
         this.invalidUserAuth.emit(false);
      }else{
        this.invalidUserAuth.emit(true)
      }
    })



  }



}
