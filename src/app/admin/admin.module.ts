import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './adminComponent';
import { AdminMenuComponent } from './adminMenu';
import { LoginComponent } from './login';

import { adminRoutes } from './admin.routes';

import { UserService } from './adminShared';

@NgModule({
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        LoginComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(adminRoutes),
        FormsModule 
    ],
    exports: [ RouterModule ],
    providers: [ UserService ]
})
export class AdminModule {}