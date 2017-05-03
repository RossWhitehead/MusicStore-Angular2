import { Component } from '@angular/core';
import { Genre } from './index';

@Component({
    selector: 'app-genre-menu',
    templateUrl: './genre-menu.component.html',
})
export class GenreMenuComponent {
    genres: Genre [] = [
        new Genre('Country'),
        new Genre('R&B')
    ];
}
