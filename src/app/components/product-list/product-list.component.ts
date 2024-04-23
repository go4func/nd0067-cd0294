import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { HttpService } from '../../services/http.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private httpSvc: HttpService, private cartSvc: CartService) {}

  ngOnInit(): void {
    const cart = this.cartSvc.getCart();
    this.httpSvc.getProducts().subscribe((products) => {
      products.map((prd) => {
        prd.quantity = cart.get(prd.id)?.quantity || 0;
      });
      this.products = products;
    });
  }

  changeQuantity(event: Product): void {
    if (event.quantity === 0) {
      this.cartSvc.removeFromCart(event);
    }
  }

  addToCart(event: Product): void {
    this.cartSvc.addToCart(event);
  }
}
