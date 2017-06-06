import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartItem, CartService } from '../data';

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {
    cartItems: CartItem[];

    constructor(private cartService: CartService, private router: Router) { }

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

    checkout() {
        this.router.navigate(['checkout']);
    }

    emptyCart() {
        this.cartService.emptyCart();
    }
}
