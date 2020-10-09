import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgParametersComponent } from './esg-parameters.component';

describe('EsgParametersComponent', () => {
  let component: EsgParametersComponent;
  let fixture: ComponentFixture<EsgParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsgParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsgParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
