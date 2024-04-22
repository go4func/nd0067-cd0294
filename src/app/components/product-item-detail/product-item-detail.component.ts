import { Component, Input, numberAttribute } from '@angular/core';
import { Product } from '../../models/product';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetailComponent {
  @Input({ transform: numberAttribute }) id = 0;
  product: Product;

  constructor(private httpSvc: HttpService, private cartSvc: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  ngOnInit(): void {
    const cart = this.cartSvc.getCart();
    this.httpSvc.getProducts().subscribe((products) => {
      this.product = products.find((prd) => prd.id === this.id) as Product;
      if (cart.has(this.product.id)) {
        this.product.quantity = cart.get(this.product.id)?.quantity;
      } else {
        this.product.quantity = 0;
      }
    });
  }

  addToCart(product: Product): void {
    this.cartSvc.addToCart(product);
  }
}
