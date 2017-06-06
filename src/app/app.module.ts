// Import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Import app config
import { APP_CONFIG, MUSIC_STORE_APP_CONFIG } from './config/app.config';

// Import components
import { AppComponent } from './app.component';
import { NavComponent, GenreMenuComponent } from './nav';
import { HomeComponent } from './home';
import { AlbumDetailsComponent, BrowseComponent } from './albums';
import { CustomerFormComponent } from './forms';
import { Error404Component } from './error';
import { CartComponent } from './cart';
import { CheckoutComponent, CompleteComponent } from './checkout';

// Import services
import { AlbumService, CartService, GenreService, OrderService } from './data';

// Import modules
import { AdminModule } from './admin';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GenreMenuComponent,
    CustomerFormComponent,
    AlbumDetailsComponent,
    BrowseComponent,
    Error404Component,
    CartComponent,
    CheckoutComponent, 
    CompleteComponent
  ],
  imports: [
    AdminModule, // Must be placed before AppRoutingModule
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(MUSIC_STORE_APP_CONFIG.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    AlbumService,
    CartService,
    GenreService,
    OrderService,
    { provide: APP_CONFIG, useValue: MUSIC_STORE_APP_CONFIG },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
