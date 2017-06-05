import { Injectable, Inject } from '@angular/core';

import { 
    AngularFireDatabase, 
    FirebaseListObservable, 
    FirebaseObjectObservable } from 'angularfire2/database';

import { APP_CONFIG, AppConfig } from 'app/config/app.config';

import { CartItem } from '.';

@Injectable()
export class CartService {
    cartKey: string;

    constructor(private db: AngularFireDatabase) {
        this.cartKey = this.getCartKey();
    }

    addCartItem(albumKey: string) {
        const cartItems = this.getCartItems();
        cartItems.push({ 
            'albumKey' : albumKey,
            'count':  1,
            'createdOn': new Date().getTime() });
    }

    emptyCart(){
        this.getCartItems().remove();
    }

    getCartItems(): FirebaseListObservable<any> {
        const cartItems = this.db.list('carts/' + this.cartKey  + '/cartItems');
        return cartItems;
    }

    removeCartItem(cartItemKey){
        this.getCartItems().remove(cartItemKey);
    }

    private createCart(): string {
        return this.db.list('carts').push({}).key;
    }

    private getCartKey(): string {
        const key = 'cartKey';

        if (typeof (Storage) === 'undefined') {
            // Raise error here
        } else {
            var value = localStorage.getItem(key);

            if (value === null) {
                value = this.createCart();
                localStorage.setItem(key, value);
            }

            return value;
        }
    }
}  
