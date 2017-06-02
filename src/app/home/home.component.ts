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
        this.albums = [];
        this.albumService.getTopSellingAlbums().subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                this.albums.push(new Album(
                    snapshot.$key,
                    snapshot.title,
                    snapshot.genreKey,
                    snapshot.price,
                    snapshot.artist,
                    snapshot.albumArtUrl
                ));
            });
        });
        
        console.log(this.albums);
    }
}
