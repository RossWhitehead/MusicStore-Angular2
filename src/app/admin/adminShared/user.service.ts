import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { APP_CONFIG, AppConfig } from 'app/config/app.config';

@Injectable()
export class UserService implements CanActivate {
    // tslint:disable-next-line:no-inferrable-types
    isLoggedIn: boolean = false;
    userName: string;
    authUser: any;

    constructor(private router: Router, private angularFireAuth: AngularFireAuth, @Inject(APP_CONFIG) config: AppConfig) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const url = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (this.isLoggedIn) { return true; }

        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string) {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                alert(`${error.message} Please try again.`);
            });
    }

    verifyUser() {
        this.authUser = this.angularFireAuth.authState;

        if (this.authUser) {
            this.userName = this.authUser.email;
            this.isLoggedIn = true;
            this.router.navigate(['/admin']);
        }
    }

    login(email: string, password: string) {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                alert(`${error.message} Unable to log in. Please try again.`);
            });
    }

    logout() {
        this.angularFireAuth.auth.signOut().then(
            function () {
                this.isLoggedIn = false;
            },
            function (error) {
                alert(`${error.message} Unable to log in. Please try again.`);
            });
    }
}
