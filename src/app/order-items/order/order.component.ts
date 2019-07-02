import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/entities/cart.model';
import { CartService } from 'src/app/items/shared/cart.service';
import { ShippingInfo } from 'src/app/entities/shippingInfo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart: CartItem[];
  shippingInfo: ShippingInfo;
  ordered: boolean;
  total: number;
  endShipping: boolean;

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.cart = [];
    this.cart = this.cartService.cart;
    this.ordered = false;
    this.total = 0;
    this.endShipping = false;
  }

  updateTotal = (total: number) => this.total = total;

  saveShippingInfo(shippingInfo: ShippingInfo) {
    this.shippingInfo = shippingInfo;
    if (this.total > 0) { this.endShipping = true; }
  }

  cancelOrder = () => this.router.navigate(['']);

  okOrder = () => this.router.navigate(['']);


}
