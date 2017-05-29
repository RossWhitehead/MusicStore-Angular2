import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AlbumAdminService, UserService } from '../adminShared';
import { Album } from 'app/data';

@Component({
    templateUrl: 'album-admin.component.html',
    styleUrls: ['album-admin.component.css']
})
export class AlbumAdminComponent implements OnInit {
    userName: string;
    mode: string;
    albums: any;

    constructor(private albumAdminService: AlbumAdminService, private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.userName = this.userService.userName;
        this.getAlbums();
    }

    getAlbums() {
        this.albumAdminService.getAlbums().then(snapshot => {
            const json: string[] = snapshot.val();
            this.albums = Object.keys(json).map(key => json[key]);
        });
    }

    createAlbum(album: Album) {
        const albumsRef = firebase.database().ref('albums/');
        const newAlbumRef = albumsRef.push().set({
            title: album.title,
            artist: album.artist,
            genre: album.genre,
            price: album.price,
            albumArtUrl: album.albumArtUrl
        }, function (error) {
            if (error) {
                alert(`${error.message} Unable to log in. Please try again.`);
            }
        });
    }

    chooseMode(mode: string) {
        this.mode = mode;
    }
}
