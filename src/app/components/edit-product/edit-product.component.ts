import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from '../../interface/product';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  constructor(private productService:ProductsService,private route:ActivatedRoute){}
  productform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    image: new FormControl(''),
    cat_id: new FormControl(1),
    price: new FormControl(1000,Validators.min(2000))
  })
  productID = this.route.snapshot.params['id']
  ngOnInit(){
      this.productService.Get_Product_By_ID(this.productID)
      .subscribe(data=>{
        console.log(data);
        this.productform.controls.name.setValue(data.name)
        this.productform.controls.image.setValue(data.image)
        this.productform.controls.cat_id.setValue(data.cat_id)
        this.productform.controls.price.setValue(data.price)
      })
  }
  router = new Router();
  onSubmit=async () => {
    const productdata = this.productform.value as IProduct
    this.productService.Update_Product(this.productID,productdata).subscribe(data=>{
        alert("Cập nhật thành công")
        this.router.navigate(['dashboard/add-product'])
    })
    // this.productService.add_Product(productdata).subscribe(data=>{
    //     alert('Thêm thành công')
    //     // this.products.push(data)
    // })
  }
}
