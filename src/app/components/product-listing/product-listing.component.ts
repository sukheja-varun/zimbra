import { Component, OnInit } from '@angular/core';

// Services
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

// Models
import { ProductI } from 'src/app/models/product.model';
import { CategoryI } from 'src/app/models/category.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productList: ProductI[] = [];
  categoryList: CategoryI[] = [];
  selectedCategory: CategoryI;

  constructor(
    private _productService: ProductService,
    private _categoryService: CategoryService
  ) { }

  /**
   * @description this component is driven by category
   * hence we are fetching categories 1st of all.
   *
   * @memberof ProductListingComponent
   */
  ngOnInit() {
    this.fetchCategories();
  }

  /**
   * @description it is triggered while component is initialized.
   * - It fetches all the categories from server
   * - then shows it in dropdown, allowing user to change category selection
   * - then it fetches all the products belonging to 1st category in list.
   *
   * @memberof ProductListingComponent
   */
  fetchCategories() {
    this._categoryService.fetchAllCategories()
      .subscribe(resp => {
        this.categoryList = resp;
        this.selectedCategory = this.categoryList[0];
        this.fetchProductsByCategory(this.selectedCategory);
      });
  }

  /**
   * @description it is triggered whenever the category is changes.
   * It fetches the product list based on selected category.
   *
   * @param {CategoryI} category
   * @memberof ProductListingComponent
   */
  fetchProductsByCategory(category: CategoryI) {
    this._productService.fetchProductByCategoryId(category.id)
      .subscribe(
        resp => this.productList = resp
      );
  }

  /**
   * @description it is triggered when user clicks on an option in dropdown.
   * It gets the category which used selects and then
   * it calls the fetchProductListByCategory to update product list.
   *
   * @param {CategoryI} category
   * @memberof ProductListingComponent
   */
  onCategoryChange(category: CategoryI) {
    this.selectedCategory = category;
    this.fetchProductsByCategory(this.selectedCategory);
  }

}
