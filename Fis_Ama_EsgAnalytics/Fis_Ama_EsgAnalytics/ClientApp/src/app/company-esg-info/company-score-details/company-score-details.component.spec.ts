import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyScoreDetailsComponent } from './company-score-details.component';

describe('CompanyScoreDetailsComponent', () => {
  let component: CompanyScoreDetailsComponent;
  let fixture: ComponentFixture<CompanyScoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyScoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyScoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
