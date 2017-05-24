import { Routes } from '@angular/router';

import { AdminComponent } from './adminComponent';
import { AdminMenuComponent } from './adminMenu';
import { LoginComponent } from './login';
import { SignUpComponent } from './signUp';

import { UserService } from './adminShared';

export const AdminRoutes: Routes = [{ 
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path:'', component: AdminMenuComponent, canActivate: [ UserService ] }        
        ]    
     }
];