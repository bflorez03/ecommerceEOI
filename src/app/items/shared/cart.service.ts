import { CartItem } from 'src/app/entities/cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
    cart: CartItem[];

    constructor() {
        this.clear();
    }

    addCartItem(cartItem: CartItem) {
        this.cart.map((items) => {
            if (items.item.id === cartItem.item.id) {
                items.quantity = items.quantity + cartItem.quantity;
            }
        });
        this.cart.push(cartItem);
    }

    clear = () => this.cart = [];
}
