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

  }
};

export let APP_CONFIG = new InjectionToken('app.config');
