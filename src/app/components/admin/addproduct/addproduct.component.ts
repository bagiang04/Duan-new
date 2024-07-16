import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {IProduct} from '../../../interface/product'
import axios from 'axios';
import { ProductsService } from '../../../products.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})

export class AddproductComponent {
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
  onDelete = (id:any,event:Event)=>{
    // console.log(id);
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
          this.productService.Delete_Product(id).subscribe(data=>{
          this.products = this.products.filter(product=>product.id!==id)
            })
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Xóa thành công' });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Bạn đã hủy xóa' });
      }
  });
    if (confirm("Bạn thực sự muốn xóa?")){
      this.productService.Delete_Product(id).subscribe(data=>{
          alert('Xóa thành công')
          this.products = this.products.filter(product=>product.id!==id)
      })
    }
  }
}
