import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { UserService } from '../adminShared';
import { GenreAdminService } from '.';

import { Genre } from '.';

@Component({
    templateUrl: 'genre-admin.component.html'
})
export class GenreAdminComponent implements OnInit {
    userName: string;
    mode: string;
    genres: Genre[] = [];
    targetGenreKey: string;

    constructor(private genreAdminService: GenreAdminService, private userService: UserService) { }

    ngOnInit() {
        this.userName = this.userService.userName;
        this.getGenres();
    }

    getGenres() {
        this.genreAdminService.getGenres().then(snapshot => {
            this.genres = [];
            snapshot.forEach(snap => {
                this.genres.push(new Genre(snap.key, snap.val().name, snap.val().description));
            });
        });
    }

    add() {
        this.chooseMode('add');
    }

    delete(genreKey: string) {
        this.targetGenreKey = genreKey;
        this.chooseMode('delete');
    }

    edit(genreKey: string) {
        this.targetGenreKey = genreKey;
        this.chooseMode('edit');
    }

    chooseMode(mode: string) {
        this.mode = mode;
    }

    onSave(message: boolean) {
        this.chooseMode('');
        if (message === true) {
            this.getGenres();
        }
    }
}
