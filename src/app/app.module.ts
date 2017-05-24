import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

import { APP_CONFIG, MUSIC_STORE_APP_CONFIG } from './app.config';

import { AppComponent } from './app.component';
import { NavBarComponent, GenreMenuComponent } from './nav';
import { TopSellingComponent, BrowseComponent } from './albums';
import { CustomerFormComponent } from './forms';
import { ErrorComponent } from './error';

import { DataService } from './data';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GenreMenuComponent,
    TopSellingComponent,
    CustomerFormComponent,
    BrowseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    { provide: APP_CONFIG, useValue: MUSIC_STORE_APP_CONFIG },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
