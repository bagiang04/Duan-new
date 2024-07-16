import { Component } from '@angular/core';
import { IProduct } from '../../interface/product';
import { ProductsService } from '../../products.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  products:IProduct[] = []
  constructor(
    private productService:ProductsService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ){}
  productform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    image: new FormControl(''),
    cat_id: new FormControl(1),
    price: new FormControl(1000,Validators.min(2000))
  })
  ngOnInit(){
    console.log('sdfdsf');
    
    this.productService.Get_All_Products().subscribe(data=>{
      // console.log(data);
      this.products = data
    })
  }
   onSubmit=async () => {
    const productdata = this.productform.value as IProduct
    this.productService.add_Product(productdata).subscribe(data=>{
        alert('Thêm thành công')
        this.products.push(data)
    })
  }
 
}
