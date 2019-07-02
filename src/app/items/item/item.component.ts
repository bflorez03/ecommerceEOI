import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/entities/item.model';
import { ItemService } from '../shared/item.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/entities/cart.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() delete = new EventEmitter<number>();
  @Output() addCart = new EventEmitter<CartItem>();

  private quantity: number;
  private tempQuantity: number;
  private tempStock: number;
  private selected: boolean;
  private editable: boolean;
  private selectCart: boolean;

  constructor(private itemService: ItemService, private router: Router) {
    this.quantity = 0;
    this.tempQuantity = 0;
    this.selected = false;
    this.editable = false;
    this.selectCart = false;
  }

  ngOnInit() {
    this.tempStock = this.item.stock;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item).
      subscribe();
  }

  // totalItems = () => this.myItems.reduce((prev, current) => prev + current.stock, 0);

  // 0: Update by input field, 1: + button, 2: - button
  updateQuantity = (item: Item, action: number) => {
    if (action === 1 && item.stock > 0) {
      this.tempQuantity = this.tempQuantity + 1;
      this.quantity = this.quantity + 1;
      item.stock = item.stock - 1;
    }
    if (action === 2 && this.quantity > 0) {
      this.tempQuantity = this.tempQuantity - 1;
      this.quantity = this.quantity - 1;
      item.stock = item.stock + 1;
    }
    if (action === 0 && this.tempQuantity <= item.stock && this.tempQuantity >= 0) {
      if (this.tempQuantity === 0 || this.tempQuantity === null) {
        item.stock = this.tempStock;
        this.tempQuantity = 0;
      } else {
        this.quantity = this.quantity + this.quantity;
        item.stock = item.stock - this.tempQuantity;
      }
    }
  }

  deleteItem = () => this.delete.emit(this.item.id);

  showName(e) {
    console.log(e.type);
  }

  changeState = () => this.editable = !this.editable;

  saveChangeDescription(item: Item, event: any) {
    item.description = event.target.value;
    this.changeState();
    this.updateItem(item);
  }

  isSelected(e) {
    console.log(e.type);
    this.selected = !this.selected;
  }

  editItem = () => this.router.navigate(['item', this.item.id]);

  addToCart() {
    let cartItem = new CartItem();
    cartItem.item = this.item;
    cartItem.quantity = this.quantity;
    this.quantity = 0;
    this.tempQuantity = 0;
    return this.addCart.emit(cartItem);
  }
}
