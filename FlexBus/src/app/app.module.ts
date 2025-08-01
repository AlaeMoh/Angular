import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainComponent } from './train/train.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { FinaliseFlightComponent } from './finalise-flight/finalise-flight.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TrainBookingComponent } from './train-booking/train-booking.component';
import { CarsComponent } from './cars/cars.component';
import { CarsBookingComponent } from './cars-booking/cars-booking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TrainComponent,
    FlightsComponent,
    FlightDetailsComponent,
    RegistrationComponent,
    FinaliseFlightComponent,
    TicketsComponent,
    TrainBookingComponent,
    CarsComponent,
    CarsBookingComponent,
    ContactUsComponent,
    ResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
