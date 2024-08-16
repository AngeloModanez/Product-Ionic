import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe({
      next: products => this.products = products
    })
  }

}
