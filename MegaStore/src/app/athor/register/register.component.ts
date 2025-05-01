import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
FormGroup
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm:FormGroup= new FormGroup({
    name: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
    passwordConfirm: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
    
  });
  



  sendData(data:FormGroup){
    console.log(data);
  }

  
}
