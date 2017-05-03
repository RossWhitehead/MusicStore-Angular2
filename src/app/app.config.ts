import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  apiEndpoint: string;
  title: string;
}

export const MUSIC_STORE_APP_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection'
};

export let APP_CONFIG = new OpaqueToken('app.config');