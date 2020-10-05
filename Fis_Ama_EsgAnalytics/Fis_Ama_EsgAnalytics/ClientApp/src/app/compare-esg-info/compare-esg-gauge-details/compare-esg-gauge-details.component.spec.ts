import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareEsgGaugeDetailsComponent } from './compare-esg-gauge-details.component';

describe('CompareEsgGaugeDetailsComponent', () => {
  let component: CompareEsgGaugeDetailsComponent;
  let fixture: ComponentFixture<CompareEsgGaugeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareEsgGaugeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareEsgGaugeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
