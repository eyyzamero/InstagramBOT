import { TestBed } from '@angular/core/testing';

import { TasksQueueObservableService } from './tasks-queue-observable.service';

describe('TasksQueueObservableService', () => {
  let service: TasksQueueObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksQueueObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
