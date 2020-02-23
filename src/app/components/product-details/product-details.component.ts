import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { ProductService } from 'src/app/services/product.service';
import { ProductI } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  productDetails: ProductI;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) { }

  /**
   * @description we extract route param(product id) from URL and 
   * then we get the product details for that product id.
   *
   * @memberof ProductDetailsComponent
   */
  ngOnInit() {
    this.productId = this._route.snapshot.params['id'];
    this.fetchProductDetails();
  }

  /**
   * @description it is used to fetch the product details
   *
   * @memberof ProductDetailsComponent
   */
  fetchProductDetails() {
    this._productService.fetchProductById(this.productId)
      .subscribe(resp => this.productDetails = resp);
  }

  
}
