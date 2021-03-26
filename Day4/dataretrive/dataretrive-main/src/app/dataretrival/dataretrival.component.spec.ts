import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataretrivalComponent } from './dataretrival.component';

describe('DataretrivalComponent', () => {
  let component: DataretrivalComponent;
  let fixture: ComponentFixture<DataretrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataretrivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataretrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
