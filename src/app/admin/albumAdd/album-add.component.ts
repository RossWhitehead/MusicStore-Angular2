import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Album } from 'app/data';

import { AlbumAdminService } from "app/admin/adminShared";

@Component({
    selector: 'album-add',
    templateUrl: 'album-add.component.html'
})

export class AlbumAddComponent implements OnInit {
    album: Album;

    constructor(private albumAdminService: AlbumAdminService, private router: Router) { }

    ngOnInit() { }

    add(album: Album) {
        this.albumAdminService.createAlbum(album);
        this.router.navigate(['/album']);
    }

    cancelAnimationFrame() {
        this.router.navigate(['/album']);
    }
}