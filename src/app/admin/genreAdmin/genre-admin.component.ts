import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { UserService } from '../adminShared';
import { GenreAdminService } from '.';

import { Genre } from '.';

@Component({
    templateUrl: 'genre-admin.component.html',
    styleUrls: ['genre-admin.component.css']
})
export class GenreAdminComponent implements OnInit {
    userName: string;
    mode: string;
    genres: Genre[];

    constructor(private genreAdminService: GenreAdminService, private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.userName = this.userService.userName;
        this.getGenres();
    }

    getGenre() {
        this.genreAdminService.getGenres().then(snapshot => {
            let json: string[] = snapshot.val();
            this.genres = Object.keys(json).map(key => json[key]);
        });
    }

    createGenre(genre: Genre) {
        let albumsRef = firebase.database().ref('albums/');
        let newAlbumRef = albumsRef.push().set({
            name: genre.name,
            description: genre.description
        }, function (error) {
            if (error) {
                alert(`${error.message} Unable to create genre. Please try again.`);
            }
        });
    }

    chooseMode(mode: string) {
        this.mode = mode;
    }
}

