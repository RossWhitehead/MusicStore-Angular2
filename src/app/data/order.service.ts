import { Injectable, Inject } from '@angular/core';

import {
    AngularFireDatabase,
    FirebaseListObservable,
    FirebaseObjectObservable
} from 'angularfire2/database';

import { CartService } from '.';

import { Order, OrderAddress, OrderLine } from ".";

@Injectable()
export class OrderService {

    constructor(private cartService: CartService, private db: AngularFireDatabase) {
    }

    placeOrder(orderAddress: OrderAddress): string {
        let orderLines: OrderLine[];

        const cartItems = this.cartService.getCartItems().subscribe(snapshots => {
            orderLines = snapshots.map(snapshot =>
                new OrderLine(
                    snapshot.$key,
                    snapshot.albumKey,
                    snapshot.count,
                    9.99
                ));
        });

        const order = new Order(
            null,
            'userName',
            new Date().getTime(),
            orderAddress,
            orderLines
        );

        const ordersRef = this.db.list('/orders');

        return ordersRef.push(order).key;
    }
}  
