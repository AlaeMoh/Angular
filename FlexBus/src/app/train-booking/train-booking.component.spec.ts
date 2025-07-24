import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainBookingComponent } from './train-booking.component';

describe('TrainBookingComponent', () => {
  let component: TrainBookingComponent;
  let fixture: ComponentFixture<TrainBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainBookingComponent]
    });
    fixture = TestBed.createComponent(TrainBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
