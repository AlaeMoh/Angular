import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './athor/register/register.component';
import { LoginComponent } from './athor/login/login.component';

const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'register', component:RegisterComponent},
{path:'login', component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
