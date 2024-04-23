import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() changeQuantity: EventEmitter<Product> = new EventEmitter();
  @Output() addCart: EventEmitter<Product> = new EventEmitter();

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  addToCart(): void {
    this.addCart.emit(this.product);
  }

  quantityChange(quantity: number): void {
    this.product.quantity = quantity;
    this.changeQuantity.emit(this.product);
  }
}
