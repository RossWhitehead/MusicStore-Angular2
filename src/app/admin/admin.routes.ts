import { Routes } from '@angular/router';

import { AdminComponent } from '.';
import { AdminHomeComponent } from './adminHome';
import { AlbumAdminComponent } from "./albumAdmin";
import { GenreAdminComponent } from "./genreAdmin";
import { LoginComponent } from './login';

import { UserService } from './adminShared';

export const adminRoutes: Routes = [{
    path: 'admin',
    component: AdminComponent,
    children: [
        { path: 'album-admin', component: AlbumAdminComponent, canActivate: [UserService] },
        { path: 'genre-admin', component: GenreAdminComponent, canActivate: [UserService] },
        { path: 'login', component: LoginComponent },
        { path: '', component: AdminHomeComponent, canActivate: [UserService] }
    ]
}];