import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesCardComponent } from './houses-card.component';

describe('HousesCardComponent', () => {
  let component: HousesCardComponent;
  let fixture: ComponentFixture<HousesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HousesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
