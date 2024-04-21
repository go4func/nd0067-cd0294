import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { HttpService } from '../../services/http.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private httpSvc: HttpService) {}

  ngOnInit(): void {
    this.httpSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
    debugger;
  }
}
