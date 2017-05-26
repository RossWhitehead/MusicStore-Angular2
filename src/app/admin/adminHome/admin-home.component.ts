import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../adminShared';

@Component({
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
    userName: string;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() { 
        this.userName = this.userService.userName;
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }
}