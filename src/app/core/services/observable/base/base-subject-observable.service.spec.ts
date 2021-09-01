import { TestBed } from '@angular/core/testing';

import { BaseSubjectObservableService } from './base-subject-observable.service';

describe('BaseSubjectObservableService', () => {
  let service: BaseSubjectObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSubjectObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
