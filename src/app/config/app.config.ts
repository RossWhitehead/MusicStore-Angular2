import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiEndpoint: string;
  title: string;
  routes: {
    home: string,
    form: string,
    browse: string
  };
  firebaseConfig: { };
}

export const MUSIC_STORE_APP_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection',
  routes: {
    home: 'home',
    form: 'form',
    browse: 'browse/:name'
  },
  firebaseConfig: {
    apiKey: 'AIzaSyCIStFdv9CPHAVPu6MAMll0xtivhr9exqU',
    authDomain: 'musicstore-470a5.firebaseapp.com',
    databaseURL: 'https://musicstore-470a5.firebaseio.com',
    projectId: 'musicstore-470a5',
    storageBucket: 'musicstore-470a5.appspot.com',
    messagingSenderId: '285354500382'
  }
};

export let APP_CONFIG = new InjectionToken('app.config');
