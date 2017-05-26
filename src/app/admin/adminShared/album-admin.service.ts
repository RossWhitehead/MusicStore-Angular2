import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { Album } from "app/data";

@Injectable()
export class AlbumAdminService {
    albums: any;

    getAlbums(): any {
        let albumsRef = firebase.database().ref('albums');
        return albumsRef.once('value')
    }

    createAlbum(album: Album) {
        let albumsRef = firebase.database().ref('albums');
        let newAlbumRef = albumsRef.push().set({
            title: album.title,
            artist: album.artist,
            genre: album.genre,
            price: album.price,
            albumArtUrl: album.albumArtUrl
        }, function (error) {
            if(error){
                alert(`${error.message} Unable to log in. Please try again.`);
            }
            else
            {
                alert('Album saved.');
            }
        });
    }
}