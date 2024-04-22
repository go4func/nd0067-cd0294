import { Component } from '@angular/core';
import { Confirmation, Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: Product[] = [];
  total: number = 0;
  fullName: string = '';
  address: string = '';
  creditCardNO: string = '';

  constructor(private cartSvc: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartSvc.getCart().forEach((prd) => {
      this.cart.push(prd);
      this.total += prd.price * (prd.quantity ?? 0);
    });
  }

  submitForm(): void {
    const confirmation: Confirmation = {
      name: this.fullName,
      total: this.total,
    };
    this.cartSvc.setConfirmation(confirmation);
    this.router.navigate(['/confirmation']);
  }
}
