import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';
import { Flightusers } from '../data.type';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
 signupData: any={
  name: '',
  email:'',
  password: '',
 }

 loginData: any={
  email:'',
  password: '',
 }

 login= false;
  constructor(private mainS:MainService, private router:ActivatedRoute){}
  ngOnInit(): void {
    
  }

  registerUser(user: Flightusers){
    let userid= 
    this.mainS.addUser(user)
    
  }

  loginUser(){

  }

  openSignUp(){
    this.login= false;
  }

  openLogin(){
    this.login= true;
  }
}
