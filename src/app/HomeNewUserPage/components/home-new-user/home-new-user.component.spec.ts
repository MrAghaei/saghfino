import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewUserComponent } from './home-new-user.component';

describe('HomeNewUserComponent', () => {
  let component: HomeNewUserComponent;
  let fixture: ComponentFixture<HomeNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeNewUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
