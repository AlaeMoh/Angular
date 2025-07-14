import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
 signupData={
  name: '',
  email:'',
  password: '',
 }
  constructor(private mainS:MainService, private router:ActivatedRoute){}
  ngOnInit(): void {
    
  }

  registerUser(){

  }
}
