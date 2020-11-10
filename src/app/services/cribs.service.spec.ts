import { TestBed } from '@angular/core/testing';

import { CribsService } from './cribs.service';

describe('CribsService', () => {
  let service: CribsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CribsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
