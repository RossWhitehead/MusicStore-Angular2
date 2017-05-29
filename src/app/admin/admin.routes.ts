import { Routes } from '@angular/router';

import { AdminComponent } from '.';
import { AdminHomeComponent } from './adminHome';
import { AlbumAdminComponent } from './albumAdmin';
import { LoginComponent } from './login';

import { UserService } from './adminShared';

export const adminRoutes: Routes = [{
    path: 'admin',
    component: AdminComponent,
    children: [
        { path: 'album-admin', component: AlbumAdminComponent, canActivate: [UserService] },
        { path: 'login', component: LoginComponent },
        { path: '', component: AdminHomeComponent, canActivate: [UserService] }
    ]
}];