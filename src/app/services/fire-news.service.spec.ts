import { TestBed } from '@angular/core/testing';

import { FireNewsService } from './fire-news.service';

describe('FireNewsService', () => {
  let service: FireNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
