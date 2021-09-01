import { TestBed } from '@angular/core/testing';

import { BaseObservableService } from './base-observable.service';

describe('BaseObservableService', () => {
  let service: BaseObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
