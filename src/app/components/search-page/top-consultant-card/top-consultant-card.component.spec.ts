import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopConsultantCardComponent } from './top-consultant-card.component';

describe('TopConsultantCardComponent', () => {
  let component: TopConsultantCardComponent;
  let fixture: ComponentFixture<TopConsultantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopConsultantCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopConsultantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
