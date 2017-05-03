import { Component, OnInit } from '@angular/core';
import { Genre, AlbumService } from './index';

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {
    genre: Genre;

    constructor(private albumService: AlbumService) {

    }

    ngOnInit() {
        this.albumService.getGenre().subscribe(
            genre => this.genre = genre,
            function (error) { console.log('Error happened' + error); },
            function () { console.log('the subscription is completed - ' + this.genre); });
    }
}
