import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderAddress } from "../data";

import { OrderService } from "../data";

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.component.html'
})

export class CheckoutComponent implements OnInit {
    form: FormGroup;

    constructor(
        private orderService: OrderService,
        private formBuilder: FormBuilder, 
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address: ['', Validators.required],
            city: [''],
            state: [''],
            postCode: ['', Validators.required],
            country: ['', Validators.required],
            phone: [''],
            email: ['', Validators.required],
            promoCode: [''],
        });
    }

    placeOrder() {
        const orderAddress = new OrderAddress(
            this.form.get('firstName').value,
            this.form.get('lastName').value,
            this.form.get('address').value,
            this.form.get('city').value,
            this.form.get('state').value,
            this.form.get('postCode').value,
            this.form.get('country').value,
            this.form.get('phone').value,
            this.form.get('email').value
        );

        const orderKey = this.orderService.placeOrder(orderAddress);

        this.router.navigate(['complete', orderKey]);
    }

    backToCart() {
        this.router.navigate(['cart']);
    }
}