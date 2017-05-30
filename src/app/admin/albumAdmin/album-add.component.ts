import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Album } from '.';
import { Genre } from '../genreAdmin';

import { KeyValuePair } from '../adminShared';

import { AlbumAdminService } from '.';
import { GenreAdminService } from '../genreAdmin';

@Component({
    selector: 'album-add',
    templateUrl: 'album-add.component.html'
})

export class AlbumAddComponent implements OnInit {
    albumForm: FormGroup;    
    genreOptions: KeyValuePair[] = [];

    constructor(
        private albumAdminService: AlbumAdminService, 
        private genreAdminService: GenreAdminService,
        private router: Router, 
        private formBuilder: FormBuilder) { }

    ngOnInit() { 
        this.genreAdminService.getGenres().then(snapshot => {
            snapshot.forEach(snap => {
                console.log(snap);
                this.genreOptions.push(new KeyValuePair(snap.key, snap.val().name));       
            });
        });

        this.albumForm = this.formBuilder.group({
            title: ['', Validators.required],
            genreId: ['', Validators.required]
        });
    }

    save() {
        const title: string = this.albumForm.get('title').value;
        const genreId: string = this.albumForm.get('genreId').value;
        const price: number = 10.99;
        const artist: string = "Prince";
        const albumArtUrl: string = "url";
        
        const album = new Album(title, genreId, price, artist, albumArtUrl);
        
        this.albumAdminService.createAlbum(album);
        this.router.navigate(['/admin/album-admin']);
    }

    cancel() {
        this.router.navigate(['/admin/album-admin']);
    }
}