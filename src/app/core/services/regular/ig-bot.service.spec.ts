import { TestBed } from '@angular/core/testing';

import { IgBotService } from './ig-bot.service';

describe('IgBotService', () => {
  let service: IgBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
