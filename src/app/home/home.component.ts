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
        this.albumService.getTopSellingAlbums().then(snapshot => {
            this.albums = [];
            snapshot.forEach(snap => {
                this.albums.push(new Album(
                    snap.key, 
                    snap.val().title, 
                    snap.val().genreKey, 
                    snap.val().price, 
                    snap.val().artist, 
                    snap.val().albumArtUrl
                ));
            });
        });
        console.log(this.albums);
    }
}
