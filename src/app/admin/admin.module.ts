import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from '.';
import { AdminHomeComponent } from './adminHome';
import { AlbumAdminComponent, AlbumAddComponent } from './albumAdmin';
import { LoginComponent } from './login';

import { adminRoutes } from './admin.routes';

import { APP_CONFIG, MUSIC_STORE_APP_CONFIG } from 'app/config/app.config';

import { UserService } from './adminShared';
import { AlbumAdminService } from './albumAdmin';

@NgModule({
    declarations: [
        AdminComponent,
        AdminHomeComponent,
        AlbumAddComponent,
        AlbumAdminComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule],
    providers: [
        AlbumAdminService,
        UserService,
        { provide: APP_CONFIG, useValue: MUSIC_STORE_APP_CONFIG },
    ]
})
export class AdminModule { }
