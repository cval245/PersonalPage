import { TestBed } from '@angular/core/testing';

import { EmailSerService } from './email-ser.service';

describe('EmailSerService', () => {
  let service: EmailSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
