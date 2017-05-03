import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'customer-form',
    templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent implements OnInit {
    customerForm: FormGroup;

    formErrors = {
        'firstName': '',
        'lastName': '',
        'emailGroup.email': '',
        'emailGroup.confirmEmail': ''
    };

    validationMessages = {
        'firstName': {
            'required': 'First name is required.',
            'minlength': 'First name must be at least 2 characters long.'
        },
        'lastName': {
            'required': 'Last name is required.',
            'minlength': 'Last name must be at least 2 characters long.'
        },
        'emailGroup.email': {
            'required': 'Email is required.'
        },
        'emailGroup.confirmEmail': {
            'required': 'Email confirmation is required.'
        }
    };

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.customerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            emailGroup: this.formBuilder.group({
                email: ['', Validators.required],
                confirmEmail: ['', Validators.required]
            }),
            phone: '',
            sendCatalog: true,
            notification: 'email'
        });

        this.customerForm.valueChanges.subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.customerForm) { return; }
        const form = this.customerForm;

        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);

                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }

    populateTestData() {
        this.customerForm.setValue({
            firstName: 'Ross',
            lastName: 'Whitehead',
            email: 'ross@acme.com',
            phone: '0123498765',
            sendCatalog: false,
            notification: 'email'
        });
    }

    setNotification(preference: string) {
        const phoneFormControl = this.customerForm.get('phone');

        if (preference === 'text') {
            phoneFormControl.setValidators(Validators.required);
        } else {
            phoneFormControl.clearValidators();
        }

        phoneFormControl.updateValueAndValidity();
    }

}

