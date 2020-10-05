import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareScoreDetailsComponent } from './compare-score-details.component';

describe('CompareScoreDetailsComponent', () => {
  let component: CompareScoreDetailsComponent;
  let fixture: ComponentFixture<CompareScoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareScoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareScoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
