import { TestBed } from '@angular/core/testing';

import { EventLoggerObservableService } from './event-logger-observable.service';

describe('EventLoggerObservableService', () => {
  let service: EventLoggerObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventLoggerObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
