import { Component } from '@angular/core';
import { IProduct } from './interface/product';
import { IStudent } from './interface/student';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'web208';
  // product:IProduct = {
  //   "id": 1,
  //   "title": "iPhone 9",
  //   "description": "An apple mobile which is nothing like apple",
  //   "price": 549,
  //   "discountPercentage": 12.96,
  //   "rating": 4.69,
  //   "stock": 94,
  //   "brand": "Apple",
  //   "category": "smartphones",
  //   "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
  //   "images": [
  //     "https://cdn.dummyjson.com/product-images/1/1.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/2.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/3.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/4.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  //   ]
  // }
  students:IStudent[]=[
    {
      name:"SV 1",
      age:18,
      address:"Hà Nội",
      classname:"WD18336"
    },
    {
      name:"SV 2",
      age:19,
      address:"Hà Nội",
      classname:"WD18336"
    }
  ]
  addStudent=(data:IStudent)=>{
    this.students.push(data)
  }
}