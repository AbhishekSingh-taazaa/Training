import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectreplaycompComponent } from './subjectreplaycomp.component';

describe('SubjectreplaycompComponent', () => {
  let component: SubjectreplaycompComponent;
  let fixture: ComponentFixture<SubjectreplaycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectreplaycompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectreplaycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
