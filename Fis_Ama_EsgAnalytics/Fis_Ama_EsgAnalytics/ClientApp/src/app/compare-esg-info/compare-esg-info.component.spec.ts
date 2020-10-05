import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareEsgInfoComponent } from './compare-esg-info.component';

describe('CompareEsgInfoComponent', () => {
  let component: CompareEsgInfoComponent;
  let fixture: ComponentFixture<CompareEsgInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareEsgInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareEsgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
