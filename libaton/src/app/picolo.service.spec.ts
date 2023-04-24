import { TestBed } from '@angular/core/testing';

import { PicoloService } from './picolo.service';

describe('PicoloService', () => {
  let service: PicoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
