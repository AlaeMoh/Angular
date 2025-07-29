import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsBookingComponent } from './cars-booking.component';

describe('CarsBookingComponent', () => {
  let component: CarsBookingComponent;
  let fixture: ComponentFixture<CarsBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsBookingComponent]
    });
    fixture = TestBed.createComponent(CarsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
