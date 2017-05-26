import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import * as firebase from "firebase";

@Injectable()
export class UserService implements CanActivate {
    isLoggedIn: boolean = false;
    userName: string;
    authUser: any;

    constructor(private router: Router) {
        // Initialize Firebase
        firebase.initializeApp({

        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (this.isLoggedIn) { return true; }

        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                alert(`${error.message} Please try again.`);
            });
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;

        if (this.authUser) {
            this.userName = this.authUser.email;
            this.isLoggedIn = true;
            this.router.navigate(['/admin']);
        }
    }

    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                alert(`${error.message} Unable to log in. Please try again.`);
            });
    }

    logout() {
        firebase.auth().signOut().then(
            function () {
                this.isLoggedIn = false;
            },
            function (error) {
                alert(`${error.message} Unable to log in. Please try again.`);
            });
    }
}
