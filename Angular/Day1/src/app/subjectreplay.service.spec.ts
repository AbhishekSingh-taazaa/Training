import { TestBed } from '@angular/core/testing';

import { SubjectreplayService } from './subjectreplay.service';

describe('SubjectreplayService', () => {
  let service: SubjectreplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectreplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
