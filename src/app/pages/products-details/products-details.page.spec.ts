import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsDetailsPage } from './products-details.page';

describe('ProductsDetailsPage', () => {
  let component: ProductsDetailsPage;
  let fixture: ComponentFixture<ProductsDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
