import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEsgScoreComponent } from './input-esg-score.component';

describe('InputEsgScoreComponent', () => {
  let component: InputEsgScoreComponent;
  let fixture: ComponentFixture<InputEsgScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEsgScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEsgScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
