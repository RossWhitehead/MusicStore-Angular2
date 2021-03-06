import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { Album } from '.';

import { APP_CONFIG, AppConfig } from 'app/config/app.config';

@Injectable()
export class AlbumAdminService {

    getAlbum(albumKey: string): any {
        const albumsRef = firebase.database().ref('albums/' + albumKey);
        return albumsRef.once('value');
    }

    getAlbums(): any {
        const albumsRef = firebase.database().ref('albums');
        return albumsRef.once('value');
    }

    createAlbum(album: Album) {
        const albumsRef = firebase.database().ref('albums');
        const newAlbumRef = albumsRef.push().set({
            title: album.title,
            artist: album.artist,
            genreKey: album.genreKey,
            price: album.price,
            albumArtUrl: album.albumArtUrl
        }, function (error) {
            if (error) {
                alert(`${error.message} Unable to save album. Please try again.`);
            } else {
                console.log('Album saved.');
            }
        });
    }

    modifyAlbum(album: Album) {
        const albumsRef = firebase.database().ref('albums/' + album.albumKey);
        const newAlbumRef = albumsRef.set({
            title: album.title,
            artist: album.artist,
            genreKey: album.genreKey,
            price: album.price,
            albumArtUrl: album.albumArtUrl
        }, function (error) {
            if (error) {
                alert(`${error.message} Unable to modify album. Please try again.`);
            } else {
                console.log('Album modified.');
            }
        });
    }

    deleteAlbum(albumKey: string) {
        const albumsRef = firebase.database().ref('albums/' + albumKey);
        const newAlbumRef = albumsRef.remove(
            function (error) {
                if (error) {
                    alert(`${error.message} Unable to delete album. Please try again.`);
                } else {
                    console.log('Album deleted.');
                }
        });
    }
}
