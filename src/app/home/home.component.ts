import { Component, OnInit } from '@angular/core';
import { Album, AlbumService } from '../data';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    albums: Album[];

    constructor(private albumService: AlbumService) {

    }

    ngOnInit() {
        this.albumService.getTopSellingAlbums().subscribe(albums => this.albums = albums);
        console.log(this.albums);
    }
}
