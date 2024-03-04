import { TestBed } from '@angular/core/testing';

import { GetHousesService } from './get-houses.service';

describe('GetHousesService', () => {
  let service: GetHousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
