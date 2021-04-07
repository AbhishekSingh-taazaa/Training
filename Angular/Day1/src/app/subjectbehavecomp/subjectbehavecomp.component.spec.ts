import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectbehavecompComponent } from './subjectbehavecomp.component';

describe('SubjectbehavecompComponent', () => {
  let component: SubjectbehavecompComponent;
  let fixture: ComponentFixture<SubjectbehavecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectbehavecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectbehavecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
