import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  categoryId: number = 1;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.fetchProductsByCategoryId();
  }

  fetchProductsByCategoryId() {
    this._productService.fetchProductByCategoryId(this.categoryId).subscribe(
      resp => console.log(resp)
    );
  }

}
