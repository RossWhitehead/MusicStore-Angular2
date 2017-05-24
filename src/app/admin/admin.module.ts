import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './adminComponent';
import { AdminMenuComponent } from './adminMenu';
import { LoginComponent } from './login';
import { SignUpComponent } from './signUp';

import { AdminRoutes } from './routes';

import { UserService } from './adminShared';

@NgModule({
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        LoginComponent,
        SignUpComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(AdminRoutes),
        FormsModule 
    ],
    exports: [ RouterModule ],
    providers: [ UserService ],
    bootstrap: []
})
export class AdminModule {}