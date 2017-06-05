import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Album, AlbumService, CartService } from '../data';

@Component({
    selector: 'app-album-details',
    templateUrl: './album-details.component.html'
})
export class AlbumDetailsComponent implements OnInit {
    album: Album;

    constructor(
        private albumService: AlbumService, 
        private cartService: CartService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        let albumKey = this.route.snapshot.params['albumKey'];

        this.albumService.getAlbum(albumKey)
            .subscribe(snapshot => {
                console.log(snapshot);
                this.album = new Album(
                    snapshot.$key,
                    snapshot.title,
                    snapshot.genreKey,
                    snapshot.price,
                    snapshot.artist,
                    snapshot.albumArtUrl);
            });
    }

    addToCart(){
        this.cartService.addCartItem(this.album.albumKey)
    }
}
