import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainComponent } from './train/train.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { FinaliseFlightComponent } from './finalise-flight/finalise-flight.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'trains',component:TrainComponent},
  {path:'flights',component:FlightsComponent},
  {path:'flightdetails/:Id',component:FlightDetailsComponent},
  {path:'register',component:RegistrationComponent},
  {path:'finalBooking/:Id',component:FinaliseFlightComponent},
  {path:'tickets',component:TicketsComponent},

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
