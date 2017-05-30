import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Album } from '.';

import { AlbumAdminService } from '.';

@Component({
    selector: 'album-add',
    templateUrl: 'album-add.component.html'
})

export class AlbumAddComponent implements OnInit {
    albumForm: FormGroup;    

    constructor(private albumAdminService: AlbumAdminService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() { 
        this.albumForm = this.formBuilder.group({
            title: ['', Validators.required]
        });
    }

    save() {
        const title: string = this.albumForm.get('title').value;
        const genre: string = "Country";
        const price: number = 10.99;
        const artist: string = "Prince";
        const albumArtUrl: string = "url";
        
        const album = new Album(title, genre, price, artist, albumArtUrl);
        
        this.albumAdminService.createAlbum(album);
        this.router.navigate(['/admin/album-admin']);
    }

    cancel() {
        this.router.navigate(['/admin/album-admin']);
    }
}