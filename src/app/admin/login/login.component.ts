import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../adminShared'; 

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(private userService: UserService, private router: Router) { }

    login(){
        this.userService.login(this.email, this.password);
        this.userService.verifyUser();
    }

    cancel(){
        this.router.navigate(['']);
    }

    ngOnInit() { }
}