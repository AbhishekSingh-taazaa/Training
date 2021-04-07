import { TestBed } from '@angular/core/testing';

import { SubjectbehaviourService } from './subjectbehaviour.service';

describe('SubjectbehaviourService', () => {
  let service: SubjectbehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectbehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
