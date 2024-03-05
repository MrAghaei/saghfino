import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCardPageMainComponent } from './house-card-page-main.component';

describe('HouseCardPageMainComponent', () => {
  let component: HouseCardPageMainComponent;
  let fixture: ComponentFixture<HouseCardPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseCardPageMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseCardPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
