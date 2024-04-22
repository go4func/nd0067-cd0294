import { Injectable } from '@angular/core';
import { Confirmation, Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Map<number, Product>;
  confirmation: Confirmation;

  constructor() {
    this.cart = new Map();
    this.confirmation = {
      name: '',
      total: 0,
    };
  }

  addToCart(product: Product): void {
    if (!product.quantity && this.cart.delete(product.id)) {
      alert(`Removed ${product.name} from cart!`);
      return;
    }

    if (!product.quantity) {
      alert(`Please input quantity for ${product.name}!`);
      return;
    }
    if (product.quantity && product.quantity < 0) {
      alert(`Please input positive number!`);
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

  clearCart(): void {
    this.cart.clear();
  }

  setConfirmation(confirmation: Confirmation): void {
    this.confirmation = confirmation;
  }

  getConfirmation(): Confirmation {
    return this.confirmation;
  }
}
