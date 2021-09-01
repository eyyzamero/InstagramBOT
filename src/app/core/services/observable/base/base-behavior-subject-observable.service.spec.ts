import { TestBed } from '@angular/core/testing';

import { BaseBehaviorSubjectObservableService } from './base-behavior-subject-observable.service';

describe('BaseBehaviorSubjectObservableService', () => {
  let service: BaseBehaviorSubjectObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseBehaviorSubjectObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
