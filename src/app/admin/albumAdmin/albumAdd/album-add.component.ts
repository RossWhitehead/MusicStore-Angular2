import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Album } from 'app/data';

import { AlbumAdminService } from 'app/admin/adminShared';

@Component({
    selector: 'app-album-add',
    templateUrl: 'album-add.component.html'
})

export class AlbumAddComponent implements OnInit {
    albumForm: FormGroup;

    constructor(private albumAdminService: AlbumAdminService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.albumForm = this.formBuilder.group({
            title: ['', Validators.required],
            genre: ['', Validators.required],
            price: ['', Validators.required],
            artist: ['', Validators.required],
            albumArtUrl: [''],
        });
    }

    save() {
        const title: string = this.albumForm.get('title').value;
        const genre: string = this.albumForm.get('genre').value;
        const price: number = this.albumForm.get('price').value;
        const artist: string = this.albumForm.get('artist').value;
        const albumArtUrl: string = this.albumForm.get('albumArtUrl').value;

        const album = new Album(title, genre, price, artist, albumArtUrl);

        this.albumAdminService.createAlbum(album);
        this.router.navigate(['admin/album-admin']);
    }

    cancel() {
        this.router.navigate(['admin/album-admin']);
    }
}
