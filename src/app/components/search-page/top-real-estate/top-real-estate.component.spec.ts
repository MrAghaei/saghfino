import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRealEstateComponent } from './top-real-estate.component';

describe('TopRealEstateComponent', () => {
  let component: TopRealEstateComponent;
  let fixture: ComponentFixture<TopRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopRealEstateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
