import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interface/product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrl: './seach.component.css'
})
export class SeachComponent {
  productSearch: IProduct[] = [];  
  keywords: string = '';

  constructor(
    private route: ActivatedRoute,
    private searchService: ProductsService  
  ) {}

  ngOnInit () {  
    this.keywords = this.route.snapshot.queryParams['keywords'];
    console.log(this.keywords);

    if (this.keywords) {
      this.searchService.SearchKeyword(this.keywords).subscribe(
        (data: IProduct[]) => {  
          this.productSearch = data;
        },
        error => {
          console.error('Error fetching search results', error);
        }
      );
    }
  }
}
