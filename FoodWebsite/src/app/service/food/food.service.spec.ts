import { TestBed } from '@angular/core/testing';

import { FoodService } from './food.service';
import { HomeComponent } from 'src/app/home/home.component';

describe('FoodService', () => {
  let service: FoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


