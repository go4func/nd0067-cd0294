import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: Product[] = [];
  fullName: string = '';
  address: string = '';
  creditCardNO: string = '';

  constructor(private cartSvc: CartService) {}

  ngOnInit(): void {
    this.cartSvc.getCart().forEach((prd) => {
      this.cart.push(prd);
    });
  }
}
