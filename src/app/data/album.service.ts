import { Injectable, Inject } from '@angular/core';

import * as firebase from 'firebase';

import { Album } from '.';

import { APP_CONFIG, AppConfig } from 'app/config/app.config';

@Injectable()
export class AlbumService {

    constructor(@Inject(APP_CONFIG) config: AppConfig) {
        // Initialize Firebase
        firebase.initializeApp(config.firebaseConfig);
    }

    getAlbum(albumKey: string): any {
        const albumsRef = firebase.database().ref('albums/' + albumKey);
        return albumsRef.once('value');
    }

    getTopSellingAlbums(): any {
        // TODO: Implement top selling logic.
        const albumsRef = firebase.database().ref('albums');
        return albumsRef.orderByKey().limitToFirst(5).once('value');
    }
}
