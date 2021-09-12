import { TestBed } from '@angular/core/testing';

import { AppLoadingObservableService } from './app-loading-observable.service';

describe('AppLoadingObservableService', () => {
  let service: AppLoadingObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLoadingObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
