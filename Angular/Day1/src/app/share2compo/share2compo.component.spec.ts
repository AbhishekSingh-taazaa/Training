import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Share2compoComponent } from './share2compo.component';

describe('Share2compoComponent', () => {
  let component: Share2compoComponent;
  let fixture: ComponentFixture<Share2compoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Share2compoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Share2compoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
