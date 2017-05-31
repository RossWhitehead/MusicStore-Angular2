import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../adminShared';

@Component({
    selector: 'app-admin-nav',
    templateUrl: 'admin-nav.component.html',
    styleUrls: ['admin-nav.component.css']
})

export class AdminNavComponent implements OnInit {
    @Input() selectedMenuItem: string;
    userName: string;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.userName = this.userService.userName;
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}
