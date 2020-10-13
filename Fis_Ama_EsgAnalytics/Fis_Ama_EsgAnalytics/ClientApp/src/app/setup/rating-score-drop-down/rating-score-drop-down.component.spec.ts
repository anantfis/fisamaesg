import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingScoreDropDownComponent } from './rating-score-drop-down.component';

describe('RatingScoreDropDownComponent', () => {
  let component: RatingScoreDropDownComponent;
  let fixture: ComponentFixture<RatingScoreDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingScoreDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingScoreDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
