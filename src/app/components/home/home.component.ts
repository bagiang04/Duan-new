import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 products: IProduct[] = [];
 constructor(private ProductsService: ProductsService){}
 ngOnInit() {
   this.ProductsService.Get_All_Products().subscribe(data => {
     this.products = data;
   });
 }
}
