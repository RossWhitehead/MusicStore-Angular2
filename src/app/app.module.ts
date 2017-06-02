import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { APP_CONFIG, MUSIC_STORE_APP_CONFIG } from './config/app.config';

import { AppComponent } from './app.component';
import { AppMenuComponent, GenreMenuComponent } from './appMenu';
import { HomeComponent } from './home';
import { BrowseComponent } from './albums';
import { CustomerFormComponent } from './forms';
import { ErrorComponent } from './error';

import { AlbumService } from './data';

import { AdminModule } from './admin';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    HomeComponent,
    GenreMenuComponent,
    CustomerFormComponent,
    BrowseComponent,
    ErrorComponent
  ],
  imports: [
    AdminModule, // Must be placed before the RouterModule
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AlbumService,
    { provide: APP_CONFIG, useValue: MUSIC_STORE_APP_CONFIG },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
