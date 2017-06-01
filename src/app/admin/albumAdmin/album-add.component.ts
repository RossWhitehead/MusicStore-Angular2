import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Album } from '.';
import { Genre } from '../genreAdmin';

import { KeyValuePair } from '../adminShared';

import { AlbumAdminService } from '.';
import { GenreAdminService } from '../genreAdmin';

@Component({
    selector: 'app-album-add',
    templateUrl: 'album-add.component.html'
})

export class AlbumAddComponent implements OnInit {
    form: FormGroup;    
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

        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            genreKey: ['', Validators.required],
            price: ['', Validators.required],
            artist: ['', Validators.required],
            albumArtUrl: [''],
        });
    }

    save() {
        const title: string = this.form.get('title').value;
        const genreKey: string = this.form.get('genreKey').value;
        const price: number = this.form.get('price').value;
        const artist: string = this.form.get('artist').value;
        const albumArtUrl: string = this.form.get('albumArtUrl').value;

        const album = new Album(null, title, genreKey, price, artist, albumArtUrl);

        this.albumAdminService.createAlbum(album);
        this.hasSaved.emit(true);
    }

    cancel() {
        this.hasSaved.emit(false);
    }
}