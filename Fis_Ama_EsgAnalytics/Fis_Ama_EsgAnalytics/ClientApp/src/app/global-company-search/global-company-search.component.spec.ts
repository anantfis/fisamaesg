import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCompanySearchComponent } from './global-company-search.component';

describe('GlobalCompanySearchComponent', () => {
  let component: GlobalCompanySearchComponent;
  let fixture: ComponentFixture<GlobalCompanySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCompanySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCompanySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
