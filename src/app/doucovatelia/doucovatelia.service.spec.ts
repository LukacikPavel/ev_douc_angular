import { TestBed } from '@angular/core/testing';

import { DoucovateliaService } from './doucovatelia.service';

describe('DoucovateliaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoucovateliaService = TestBed.get(DoucovateliaService);
    expect(service).toBeTruthy();
  });
});
