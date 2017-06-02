import { Injectable, Inject } from '@angular/core';

import * as firebase from 'firebase';

import { Genre } from '.';

import { APP_CONFIG, AppConfig } from 'app/config/app.config';

@Injectable()
export class GenreService {
    
    constructor(@Inject(APP_CONFIG) config: AppConfig) {
        // Initialize Firebase
        firebase.initializeApp(config.firebaseConfig);
    }

    getGenre(genreKey: string): any {
        const genreRef = firebase.database().ref('genres/' + genreKey);
        return genreRef.once('value');
    }

    getGenres(): any {
        const genresRef = firebase.database().ref('genres');
        return genresRef.once('value');
    }
}
