import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { UserService } from '../adminShared';
import { AlbumAdminService } from '.';

import { Album } from '.';

@Component({
    templateUrl: 'album-admin.component.html',
    styleUrls: ['album-admin.component.css']
})
export class AlbumAdminComponent implements OnInit {
    userName: string;
    mode: string;
    albums: any;

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
            let json: string[] = snapshot.val();
            this.albums = Object.keys(json).map(key => json[key]);
        });
    }

    chooseMode(mode: string) {
        this.mode = mode;
    }

    onSave(message: boolean){
        this.chooseMode('');
        if(message === true) {
            this.getAlbums();
        }
    }
}