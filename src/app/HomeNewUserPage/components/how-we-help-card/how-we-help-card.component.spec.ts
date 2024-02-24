import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HowWeHelpCardComponent } from './how-we-help-card.component'

describe('HowWeHelpButtonComponent', () => {
  let component: HowWeHelpCardComponent
  let fixture: ComponentFixture<HowWeHelpCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowWeHelpCardComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HowWeHelpCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
