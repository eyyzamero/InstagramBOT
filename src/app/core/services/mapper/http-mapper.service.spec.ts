import { TestBed } from '@angular/core/testing';

import { HttpMapperService } from './http-mapper.service';

describe('HttpMapperService', () => {
  let service: HttpMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
