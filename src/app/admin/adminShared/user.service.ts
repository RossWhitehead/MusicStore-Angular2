import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {
    userIsLoggedIn: boolean = false;

    constructor(private router: Router) {
        // Initialize Firebase
        let config: {
        };
        firebase.initializeApp(config);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (this.userIsLoggedIn) { return true; }

        this.router.navigate(['/admin/login']);
        return false;
    }

}