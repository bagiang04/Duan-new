import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  router = new Router()
  Logout=()=>{
    localStorage.removeItem('user')
    this.router.navigate(['login'])
  }
}
