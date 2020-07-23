import { TestBed } from '@angular/core/testing';

import { CreationIDService } from './creation-id.service';

describe('CreationIDService', () => {
  let service: CreationIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
