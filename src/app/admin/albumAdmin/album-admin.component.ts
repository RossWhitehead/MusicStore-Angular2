import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { UserService } from '../adminShared';
import { AlbumAdminService } from '.';

import { Album } from '.';

@Component({
    templateUrl: 'album-admin.component.html'
})
export class AlbumAdminComponent implements OnInit {
    userName: string;
    mode: string;
    albums: Album[] = [];
    targetAlbumKey: string;

    constructor(
        private albumAdminService: AlbumAdminService,
        private userService: UserService,
        private router: Router) { }

    ngOnInit() {
        this.userName = this.userService.userName;
        this.getAlbums();
    }

    getAlbums() {
        this.albumAdminService.getAlbums().then(snapshot => {
            this.albums = [];
            snapshot.forEach(snap => {
                this.albums.push(new Album(snap.key, snap.val().title, snap.val().genreKey, snap.val().price, snap.val().artist, snap.val().albumArtUrl));
            });
        });
    }

    add() {
        this.chooseMode('add');
    }

    delete(albumKey: string) {
        this.targetAlbumKey = albumKey;
        this.chooseMode('delete');
    }

    edit(albumKey: string) {
        this.targetAlbumKey = albumKey;
        this.chooseMode('edit');
    }

    chooseMode(mode: string) {
        this.mode = mode;
    }

    onSave(message: boolean) {
        this.chooseMode('');
        if (message === true) {
            this.getAlbums();
        }
    }
}
