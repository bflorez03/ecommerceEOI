import { Component, OnInit } from '@angular/core';
import { Item } from '../../entities/item.model';
import { ItemService } from '../shared/item.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/entities/cart.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  title = 'My first Angular App';
  selected: boolean;
  myItems: Item[];
  numItemCart: number;

  constructor(private itemService: ItemService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.getItemList();
    this.selected = false;
    this.numItemCart = 0;
  }

  getItemList() {
    this.itemService.getItemList().
      subscribe((data: Item[]) => this.myItems = data,
        error => console.error(error),
        () => console.log('My item list is loaded!')
      );
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item).
      subscribe(
        () => this.getItemList()
      );
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).
      subscribe(
        () => this.getItemList()
      );
  }

  isSelected(e) {
    this.selected = !this.selected;
    console.log(e.type);
  }

  addNewItem = () => this.router.navigate(['new']);

  addToCart(cartItem: CartItem) {
    this.numItemCart = this.numItemCart + cartItem.quantity;
    this.cartService.addCartItem(cartItem);
  }

  order = () => this.router.navigate(['order']);

}
