import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { Page404Component } from './components/page404/page404.component';
import { AddproductComponent } from './components/admin/addproduct/addproduct.component';
import { adminGuard } from './Guard/admin.guard';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ChitietsanphamComponent } from './components/chitietsanpham/chitietsanpham.component';
import { SeachComponent } from './components/seach/seach.component';
const routes: Routes = [
  {path:'',component:ClientComponent,children:[
      {path:'home',component:HomeComponent},
      {path:'cart',component:CartComponent},
      {path:'ctsp/:id',component:ChitietsanphamComponent},
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},
      {path:'seach',component:SeachComponent}
  ]},
  {path:'dashboard',component:AdminComponent,canActivate:[adminGuard], children:[
    {path:'add-product',component:AddproductComponent},
    {path:'edit-product/:id',component:EditProductComponent}
  ]},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
