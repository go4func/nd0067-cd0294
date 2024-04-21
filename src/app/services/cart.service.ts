import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    this.cart.push(product);
    alert(`Added ${product.quantity} ${product.name} to cart`);
  }

  getCart(): Product[] {
    return this.cart;
  }
}
