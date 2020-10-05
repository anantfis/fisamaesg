import { TestBed } from '@angular/core/testing';

import { EsgDataService } from './esg-data.service';

describe('EsgDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsgDataService = TestBed.get(EsgDataService);
    expect(service).toBeTruthy();
  });
});
