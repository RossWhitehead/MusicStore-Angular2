import { Component, OnInit } from '@angular/core';
import { Genre, GenreService } from '../data';

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {
    genre: Genre;

    constructor(private genreService: GenreService) {

    }

    ngOnInit() {
        // this.genreService.getGenre().subscribe(
        //     genre => this.genre = genre,
        //     function (error) { console.log('Error happened' + error); },
        //     function () { console.log('the subscription is completed - ' + this.genre); });
    }
}
