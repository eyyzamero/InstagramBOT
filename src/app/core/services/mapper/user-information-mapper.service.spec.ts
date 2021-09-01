import { TestBed } from '@angular/core/testing';

import { UserInformationMapperService } from './user-information-mapper.service';

describe('UserInformationMapperService', () => {
  let service: UserInformationMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInformationMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
