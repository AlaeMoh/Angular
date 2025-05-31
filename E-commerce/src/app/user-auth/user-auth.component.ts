import { UserService } from '../service/user.service';
import { Login, signUp  } from './../../export-files/data.type';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
constructor(private user:UserService){}

  ngOnInit(): void {
    this.user.userReload();
  }

  login(data:Login){
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result)=>{
      
      if(result){
        this.authLoginFailed="Email or password is incorrect"
      }
      
    })

    
  }

  signUp(data:signUp){
    this.user.userSignUp(data);

  }

  openSignIn(){
    this.adminLogin=true
  }

  openSignUp(){
 this.adminLogin=false
  }


}
