import { TestBed } from '@angular/core/testing';

import { ServiceRegister } from './service-register';

describe('ServiceRegister', () => {
  let service: ServiceRegister;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegister);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
