import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/entities/cart.model';
import { Item } from 'src/app/entities/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: CartItem[];
  @Output() total: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.total.emit(this.getTotalCart());
  }

  remove(itemRemoved: number) {
    this.cart = this.cart.filter(cartItem => cartItem.item.id !== itemRemoved);
    this.total.emit(this.getTotalCart());
  }

  getTotalCart(): number {
    if (this.cart.length === 0) {
      return 0;
    } else { return (this.cart.map((item) => item.quantity)).reduce((a, b) => a + b); }
  }

  totalCostItem = (item: Item, quantity: number) => item.price * quantity;
}
