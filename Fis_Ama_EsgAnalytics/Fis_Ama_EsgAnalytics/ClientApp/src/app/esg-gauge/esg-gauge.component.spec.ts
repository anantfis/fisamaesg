import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgGaugeComponent } from './esg-gauge.component';

describe('EsgGaugeComponent', () => {
  let component: EsgGaugeComponent;
  let fixture: ComponentFixture<EsgGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsgGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsgGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
