import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeHelpComponent } from './how-we-help.component';

describe('HowWeHelpComponent', () => {
  let component: HowWeHelpComponent;
  let fixture: ComponentFixture<HowWeHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowWeHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowWeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
