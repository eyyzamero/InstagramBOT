import { TestBed } from '@angular/core/testing';

import { UserInformationObservableService } from './user-information-observable.service';

describe('UserInformationObservableService', () => {
  let service: UserInformationObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInformationObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
