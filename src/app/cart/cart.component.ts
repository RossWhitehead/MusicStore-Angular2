import { Component, OnInit } from '@angular/core';

import { CartItem, CartService } from '../data';

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {
    cartItems: CartItem[];
    
    constructor(private cartService: CartService) { }

    ngOnInit() { 
        this.cartService.getCartItems().subscribe(snapshots => {
            this.cartItems = [];

            snapshots.forEach(snapshot => {
                this.cartItems.push(new CartItem(
                    snapshot.$key,
                    snapshot.albumKey,
                    snapshot.count,
                    snapshot.createdOn
                ));
            });
        });
    }

    emptyCart(){
        this.cartService.emptyCart();
    }
}
