import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraldirectivedemoComponent } from './structuraldirectivedemo.component';

describe('StructuraldirectivedemoComponent', () => {
  let component: StructuraldirectivedemoComponent;
  let fixture: ComponentFixture<StructuraldirectivedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuraldirectivedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuraldirectivedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
