import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRealEstateCardComponent } from './top-real-estate-card.component';

describe('TopRealEstateCardComponent', () => {
  let component: TopRealEstateCardComponent;
  let fixture: ComponentFixture<TopRealEstateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopRealEstateCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRealEstateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
