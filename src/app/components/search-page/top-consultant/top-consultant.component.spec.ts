import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopConsultantComponent } from './top-consultant.component';

describe('TopConsultantComponent', () => {
  let component: TopConsultantComponent;
  let fixture: ComponentFixture<TopConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
