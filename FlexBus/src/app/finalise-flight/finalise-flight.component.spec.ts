import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaliseFlightComponent } from './finalise-flight.component';

describe('FinaliseFlightComponent', () => {
  let component: FinaliseFlightComponent;
  let fixture: ComponentFixture<FinaliseFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinaliseFlightComponent]
    });
    fixture = TestBed.createComponent(FinaliseFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
