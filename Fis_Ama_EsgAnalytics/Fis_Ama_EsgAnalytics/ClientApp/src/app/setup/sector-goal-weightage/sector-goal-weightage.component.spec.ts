import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorGoalWeightageComponent } from './sector-goal-weightage.component';

describe('SectorGoalWeightageComponent', () => {
  let component: SectorGoalWeightageComponent;
  let fixture: ComponentFixture<SectorGoalWeightageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorGoalWeightageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorGoalWeightageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
