import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEsgInfoComponent } from './company-esg-info.component';

describe('CompanyEsgInfoComponent', () => {
  let component: CompanyEsgInfoComponent;
  let fixture: ComponentFixture<CompanyEsgInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEsgInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEsgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
