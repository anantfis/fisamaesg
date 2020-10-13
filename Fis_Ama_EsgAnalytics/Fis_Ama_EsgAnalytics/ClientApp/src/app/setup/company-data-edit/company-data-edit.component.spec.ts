import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDataEditComponent } from './company-data-edit.component';

describe('CompanyDataEditComponent', () => {
  let component: CompanyDataEditComponent;
  let fixture: ComponentFixture<CompanyDataEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDataEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
