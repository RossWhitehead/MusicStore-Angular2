import { Injectable, Inject } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Album } from '.';

import { APP_CONFIG, AppConfig } from 'app/config/app.config';

@Injectable()
export class AlbumService {

    constructor(private db: AngularFireDatabase) {
    }

    getAlbum(albumKey: string): any {
        const albumsRef = this.db.list('albums/' + albumKey);
        return albumsRef;
    }

    getTopSellingAlbums(): any {
        // TODO: Implement top selling logic.
        const albums = this.db.list('albums', {
            query: {
                orderByKey: true,
                limitToFirst: 5
            }
        });
        console.log(albums);
        return albums;
    }
}
