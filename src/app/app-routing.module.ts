import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AlbumDetailsComponent, BrowseComponent } from './albums';
import { CustomerFormComponent } from './forms';
import { Error404Component } from './error';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'form', component: CustomerFormComponent },
    { path: 'browse/:genreName', component: BrowseComponent },
    { path: 'album-details/:albumKey', component: AlbumDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

