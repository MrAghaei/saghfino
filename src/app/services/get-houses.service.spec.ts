import { TestBed } from '@angular/core/testing'

import { HousesService } from './houses.service'

describe('GetHousesService', () => {
  let service: HousesService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(HousesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
