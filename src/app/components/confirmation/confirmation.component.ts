import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Confirmation } from '../../models/product';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  confirmation: Confirmation;

  constructor(private cartSvc: CartService, private router: Router) {
    this.confirmation = {
      name: '',
      total: 0,
    };
  }

  ngOnInit(): void {
    this.confirmation = this.cartSvc.getConfirmation();
  }
  ngOnDestroy(): void {
    this.cartSvc.setConfirmation({
      name: '',
      total: 0,
    });
  }

  backToProducts(): void {
    this.router.navigate(['/products']);
  }
}
