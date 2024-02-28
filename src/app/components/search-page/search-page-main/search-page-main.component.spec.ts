import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageMainComponent } from './search-page-main.component';

describe('SearchPageMainComponent', () => {
  let component: SearchPageMainComponent;
  let fixture: ComponentFixture<SearchPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPageMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
