import { TestBed } from '@angular/core/testing';

import { BatimentService } from './batiment.service';

describe('BatimentService', () => {
  let service: BatimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
