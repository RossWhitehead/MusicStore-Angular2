import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AlbumAdminService, UserService } from '../adminShared';
import { Album } from "app/data";

@Component({
    templateUrl: 'album-admin.component.html',
    styleUrls: ['album-admin.component.css']
})
export class AlbumAdminComponent implements OnInit {
    userName: string;
    menuChoice: string;
    albums: Album[];

    constructor(private albumAdminService: AlbumAdminService, private userService: UserService, private router: Router) { }

    ngOnInit() { 
        this.userName = this.userService.userName;
        this.getAlbums();
    }

    getAlbums() {
        this.albums = this.albumAdminService.getAlbums();
    }

    createAlbum(album: Album) {
        let albumsRef = firebase.database().ref('albums/');
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
    
    chooseMode(mode: string){
        this.menuChoice = mode;
    }
}