import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTableProductComponent } from './material-table-product.component';

describe('MaterialTableProductComponent', () => {
  let component: MaterialTableProductComponent;
  let fixture: ComponentFixture<MaterialTableProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTableProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
