import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

import { APP_CONFIG, MUSIC_STORE_APP_CONFIG } from './app.config';

import { AppComponent } from './app.component';
import { NavBarComponent, GenreMenuComponent } from './nav';
import { AlbumService, TopSellingComponent, BrowseComponent } from './albums';
import { CustomerFormComponent } from './forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GenreMenuComponent,
    TopSellingComponent,
    CustomerFormComponent,
    BrowseComponent
  ],
  imports: [
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
