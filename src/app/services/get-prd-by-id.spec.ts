import { TestBed } from '@angular/core/testing';

import { GetPrdById } from './get-prd-by-id';

describe('GetPrdById', () => {
  let service: GetPrdById;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPrdById);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
