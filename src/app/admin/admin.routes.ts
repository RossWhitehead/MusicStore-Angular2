import { Routes } from '@angular/router';

import { AdminComponent } from './adminComponent';
import { AdminMenuComponent } from './adminMenu';
import { AlbumAdminComponent } from "./albumAdmin";
import { LoginComponent } from './login';

import { UserService } from './adminShared';

export const adminRoutes: Routes = [{
    path: 'admin',
    component: AdminComponent,
    children: [
        { path: 'album-admin', component: AlbumAdminComponent, canActivate: [UserService] },
        { path: 'login', component: LoginComponent },
        { path: '', component: AdminMenuComponent, canActivate: [UserService] }
    ]
}];