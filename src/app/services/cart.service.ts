import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Map<number, Product> = new Map();

  constructor() {}

  addToCart(product: Product): void {
    if (!product.quantity && this.cart.delete(product.id)) {
      alert(`Removed ${product.name} from cart!`);
      return;
    }

    if (!product.quantity) {
      alert(`Please select quantity for ${product.name}!`);
      return;
    }

    const hasProduct = this.cart.has(product.id);
    this.cart.set(product.id, product);
    if (hasProduct) {
      alert(`Updated ${product.name} quantity to ${product.quantity}!`);
    } else {
      alert(`Added ${product.quantity} ${product.name} to cart!`);
    }
  }

  getCart(): Map<number, Product> {
    return this.cart;
  }
}
