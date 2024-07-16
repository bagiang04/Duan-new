import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interface/product';
import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietsanpham.component.html',
  styleUrl: './chitietsanpham.component.css'
})
export class ChitietsanphamComponent {
  products: IProduct[] = [];
  categories: IProduct[] = [];
  productDetail: IProduct | undefined;

  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.getProductDetail(productId);
    });
  }

  getProductDetail(productId: string) {
    this.productService.Get_Product_By_ID(productId).subscribe((data) => {
      this.productDetail = data;
    });

    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
