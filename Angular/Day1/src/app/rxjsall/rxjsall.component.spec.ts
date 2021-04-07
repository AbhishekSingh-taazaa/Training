import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsallComponent } from './rxjsall.component';

describe('RxjsallComponent', () => {
  let component: RxjsallComponent;
  let fixture: ComponentFixture<RxjsallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
