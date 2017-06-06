import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.component.html'
})

export class CheckoutComponent implements OnInit {
    form: FormGroup;   

    constructor(private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit() {
         this.form = this.formBuilder.group({
            firstName: ['', Validators.required], 
            lastName: ['', Validators.required],         
            address: ['', Validators.required],
            city: [''],
            state: [''],
            postCode: ['', Validators.required],
            country: ['', Validators.required],
            email: ['', Validators.required],
        });
     }

     placeOrder(){
        
     }

     backToCart(){
        this.router.navigate(['cart']);
     }
}