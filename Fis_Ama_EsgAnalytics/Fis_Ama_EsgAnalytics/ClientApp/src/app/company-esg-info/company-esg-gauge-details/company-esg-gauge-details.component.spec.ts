import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEsgGaugeDetailsComponent } from './company-esg-gauge-details.component';

describe('CompanyEsgGaugeDetailsComponent', () => {
  let component: CompanyEsgGaugeDetailsComponent;
  let fixture: ComponentFixture<CompanyEsgGaugeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEsgGaugeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEsgGaugeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
