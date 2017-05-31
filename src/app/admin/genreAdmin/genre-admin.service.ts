import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { Genre } from '.';

@Injectable()
export class GenreAdminService {
    genres: any;

    getGenres() {
        let genresRef = firebase.database().ref('genres');
        return genresRef.once('value');
    }

    createGenre(genre: Genre) {
        let genresRef = firebase.database().ref('genres');
        let newGenreRef = genresRef.push().set({
            name: genre.name,
            description: genre.description
        }, function (error) {
            if(error){
                alert(`${error.message} Unable to create genre. Please try again.`);
            }
            else
            {
                alert('Genre saved.');
            }
        });
    }
}