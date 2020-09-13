import { TestBed } from '@angular/core/testing';

import { BackTopService } from './back-top.service';

describe('BackTopService', () => {
  let service: BackTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
