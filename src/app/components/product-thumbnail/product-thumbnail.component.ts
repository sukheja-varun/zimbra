import { Component, OnInit, Input } from '@angular/core';

// Models
import { ProductI } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {

  @Input() product: ProductI;

  constructor() { }

  ngOnInit() {
  }

}
