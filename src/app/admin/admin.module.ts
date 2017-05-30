// Import modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import components
import { AdminComponent } from '.';
import { AdminHomeComponent } from './adminHome';
import { AlbumAdminComponent, AlbumAddComponent } from "./albumAdmin";
import { GenreAdminComponent, GenreAddComponent } from "./genreAdmin";
import { LoginComponent } from './login';

// Import routes
import { adminRoutes } from './admin.routes';

// Import services
import { UserService } from './adminShared';
import { AlbumAdminService } from './albumAdmin';
import { GenreAdminService } from './genreAdmin';

@NgModule({
    declarations: [
        AdminComponent,
        AdminHomeComponent,
        AlbumAddComponent,
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
    exports: [ RouterModule ],
    providers: [ 
        AlbumAdminService,
        GenreAdminService,
        UserService 
    ]
})
export class AdminModule {}