import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product: Product = {} as Product;

  constructor(private service: ProductService,
    private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getProductById(id).subscribe({
        next: product => this.product = product
      })

    }
  }

}
