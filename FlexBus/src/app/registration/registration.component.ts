import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
 isuserLoggedIn= false;
  constructor(private mainS:MainService, private router:ActivatedRoute, private route:Router){}
  ngOnInit(): void {
    this.mainS.reloadUser();
  }

  registerUser(user: Flightusers){
    
    this.mainS.addUser(user)
    //  this.route.navigate(['/home'])
    
  }

  loginUser(user: Flightusers){
    this.mainS.getUsers(user);
    // this.route.navigate(['/home'])

  }

  openSignUp(){
    this.login= false;
  }

  openLogin(){
    this.login= true;
  }
}
