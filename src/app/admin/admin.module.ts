import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './adminComponent';
import { AdminMenuComponent } from './adminMenu';
import { AlbumAddComponent } from "./albumAdd";
import { AlbumAdminComponent } from "./albumAdmin";
import { LoginComponent } from './login';

import { adminRoutes } from './admin.routes';

import { AlbumAdminService, UserService } from './adminShared';

@NgModule({
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        AlbumAddComponent,
        AlbumAdminComponent,
        LoginComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(adminRoutes),
        FormsModule 
    ],
    exports: [ RouterModule ],
    providers: [ 
        AlbumAdminService,
        UserService 
    ]
})
export class AdminModule {}