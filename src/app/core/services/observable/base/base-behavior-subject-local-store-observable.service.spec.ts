import { TestBed } from '@angular/core/testing';

import { BaseBehaviorSubjectLocalStoreObservableService } from './base-behavior-subject-local-store-observable.service';

describe('BaseBehaviorSubjectLocalStoreObservableService', () => {
  let service: BaseBehaviorSubjectLocalStoreObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseBehaviorSubjectLocalStoreObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
