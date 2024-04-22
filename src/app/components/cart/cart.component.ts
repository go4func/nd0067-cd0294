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
  cart: Product[] = [
    {
      id: 1,
      name: 'Book',
      price: 9.99,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'You can read it!',
      quantity: 2,
    },
  ];
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
