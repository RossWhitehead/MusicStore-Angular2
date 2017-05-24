import { Routes } from '@angular/routing';

import { LoginComponent } from './login';
import { SignUpComponent } from './signUp';
import { AdminMenuComponent } from '/adminMenu';

export const AdminRoutes: Routes = [
    { 
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path:'', component: AdminMenuComponent, canActivate: [] }        
        ]    
     }
];