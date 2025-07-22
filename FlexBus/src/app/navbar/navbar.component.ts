import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
   userName:string= ''
   navbar:string= "default"
  constructor(private service:MainService, private route:Router){}
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('users')){
          let userStore= localStorage.getItem('users');
          let userData= userStore  && JSON.parse(userStore);
         this.userName= userData.name
          this.navbar="user-nav"

        }else{
          this.navbar="default"
        }
      }
    })
  }
 
  logout(){
    localStorage.removeItem('users');
    this.route.navigateByUrl('/home');
  }
}
