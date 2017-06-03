import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { appRoutes } from './app.routes';

import { APP_CONFIG, MUSIC_STORE_APP_CONFIG } from './config/app.config';

import { AppComponent } from './app.component';
import { NavComponent, GenreMenuComponent } from './nav';
import { HomeComponent } from './home';
import { BrowseComponent } from './albums';
import { CustomerFormComponent } from './forms';
import { ErrorComponent } from './error';

import { AlbumService, GenreService } from './data';

import { AdminModule } from './admin';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(MUSIC_STORE_APP_CONFIG.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    AlbumService,
    GenreService,
    { provide: APP_CONFIG, useValue: MUSIC_STORE_APP_CONFIG },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
