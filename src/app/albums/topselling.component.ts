import { Component, OnInit } from '@angular/core';
import { Album, AlbumService } from './index';

@Component({
    selector: 'app-top-selling',
    templateUrl: './topselling.component.html'
})
export class TopSellingComponent implements OnInit {
    albums: Album[];

    constructor(private albumService: AlbumService) {

    }

    ngOnInit() {
        this.albumService.getTopSellingAlbums().subscribe(albums => this.albums = albums);
        console.log(this.albums);
    }
}
