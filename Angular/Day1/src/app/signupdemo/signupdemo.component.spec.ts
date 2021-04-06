import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupdemoComponent } from './signupdemo.component';

describe('SignupdemoComponent', () => {
  let component: SignupdemoComponent;
  let fixture: ComponentFixture<SignupdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
