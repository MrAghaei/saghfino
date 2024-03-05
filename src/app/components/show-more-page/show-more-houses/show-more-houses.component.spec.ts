import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreHousesComponent } from './show-more-houses.component';

describe('ShowMoreHousesComponent', () => {
  let component: ShowMoreHousesComponent;
  let fixture: ComponentFixture<ShowMoreHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowMoreHousesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowMoreHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
