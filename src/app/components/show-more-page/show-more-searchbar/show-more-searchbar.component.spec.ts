import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreSearchbarComponent } from './show-more-searchbar.component';

describe('ShowMoreSearchbarComponent', () => {
  let component: ShowMoreSearchbarComponent;
  let fixture: ComponentFixture<ShowMoreSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowMoreSearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowMoreSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
