import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from '.';
import { AdminHomeComponent } from './adminHome';
import { AdminNavComponent } from './adminNav';
import { AlbumAdminComponent, AlbumAddComponent, AlbumEditComponent, AlbumDeleteComponent } from './albumAdmin';
import { GenreAdminComponent, GenreAddComponent } from './genreAdmin';
import { LoginComponent } from './login';

import { adminRoutes } from './admin.routes';

import { APP_CONFIG, MUSIC_STORE_APP_CONFIG } from 'app/config/app.config';

import { UserService } from './adminShared';
import { AlbumAdminService } from './albumAdmin';
import { GenreAdminService } from './genreAdmin';

@NgModule({
    declarations: [
        AdminComponent,
        AdminHomeComponent,
        AdminNavComponent,
        AlbumAddComponent,
        AlbumEditComponent,
        AlbumDeleteComponent,
        AlbumAdminComponent,
        GenreAddComponent,
        GenreAdminComponent,
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
        GenreAdminService,
        UserService,
        { provide: APP_CONFIG, useValue: MUSIC_STORE_APP_CONFIG },
    ]
})
export class AdminModule { }
