import { TestBed } from '@angular/core/testing';

import { PredmetyService } from './predmety.service';

describe('PredmetyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredmetyService = TestBed.get(PredmetyService);
    expect(service).toBeTruthy();
  });
});
