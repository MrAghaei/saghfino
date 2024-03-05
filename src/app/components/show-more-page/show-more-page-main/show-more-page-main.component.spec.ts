import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMorePageMainComponent } from './show-more-page-main.component';

describe('ShowMorePageMainComponent', () => {
  let component: ShowMorePageMainComponent;
  let fixture: ComponentFixture<ShowMorePageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowMorePageMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowMorePageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
