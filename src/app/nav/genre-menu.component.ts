import { Component } from '@angular/core';
import { Genre } from '../data';

@Component({
    selector: 'genre-menu',
    templateUrl: './genre-menu.component.html',
})
export class GenreMenuComponent {
    genres: Genre [] = [
        new Genre(1, 'Country'),
        new Genre(2, 'R&B')
    ];
}