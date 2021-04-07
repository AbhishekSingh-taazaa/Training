import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectasynccompComponent } from './subjectasynccomp.component';

describe('SubjectasynccompComponent', () => {
  let component: SubjectasynccompComponent;
  let fixture: ComponentFixture<SubjectasynccompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectasynccompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectasynccompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
