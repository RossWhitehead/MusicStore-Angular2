import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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
    @Output() hasSaved: EventEmitter<boolean> = new EventEmitter<boolean>();

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
        this.hasSaved.emit(true);
    }

    cancel() {
        this.hasSaved.emit(false);
    }
}