import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../adminShared';

@Component({
    templateUrl: './admin-menu.component.html',
    styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
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