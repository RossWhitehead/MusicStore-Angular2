import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { Genre } from '.';

import { APP_CONFIG, AppConfig } from 'app/config/app.config';

@Injectable()
export class GenreAdminService {

    getGenre(genreKey: string): any {
        const genreRef = firebase.database().ref('genres/' + genreKey);
        return genreRef.once('value');
    }

    getGenres(): any {
        const genresRef = firebase.database().ref('genres');
        return genresRef.once('value');
    }

    createGenre(genre: Genre) {
        const genresRef = firebase.database().ref('genres');
        const newGenreRef = genresRef.push().set({
            name: genre.name,
            description: genre.description
        }, function (error) {
            if (error) {
                alert(`${error.message} Unable to save genre. Please try again.`);
            } else {
                console.log('Genre saved.');
            }
        });
    }

    modifyGenre(genre: Genre) {
        const genresRef = firebase.database().ref('genres/' + genre.genreKey);
        const newGenreRef = genresRef.set({
            name: genre.name,
            description: genre.description
        }, function (error) {
            if (error) {
                alert(`${error.message} Unable to save genre. Please try again.`);
            } else {
                console.log('Genre saved.');
            }
        });
    }

    deleteGenre(genreKey: string) {
        const genreRef = firebase.database().ref('genres/' + genreKey);
        genreRef.remove(
            function (error) {
                if (error) {
                    alert(`${error.message} Unable to delete album. Please try again.`);
                } else {
                    console.log('Album deleted.');
                }
        });
    }
}
