import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Album } from '.';
import { Genre } from '../genreAdmin';

import { KeyValuePair } from '../adminShared';

import { AlbumAdminService } from '.';
import { GenreAdminService } from '../genreAdmin';

@Component({
    selector: 'app-album-edit',
    templateUrl: 'album-edit.component.html'
})

export class AlbumEditComponent implements OnInit {
    @Input() albumKey: string;
    @Output() hasSaved: EventEmitter<boolean> = new EventEmitter<boolean>();
    album: Album;
    form: FormGroup;
    genreOptions: KeyValuePair[] = [];

    constructor(
        private albumAdminService: AlbumAdminService,
        private genreAdminService: GenreAdminService,
        private router: Router,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.buildForm();
        this.getFormDataAndPopulateForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            genreKey: ['', Validators.required],
            price: ['', Validators.required],
            artist: ['', Validators.required],
            albumArtUrl: [''],
        });
    }

    getFormDataAndPopulateForm() {
        this.albumAdminService.getAlbum(this.albumKey).then(snapshot => {
            this.album = new Album(
                snapshot.key,
                snapshot.val().title,
                snapshot.val().genreKey,
                snapshot.val().price,
                snapshot.val().artist,
                snapshot.val().albumArtUrl);

            this.genreAdminService.getGenres().then(snapshot => {
                snapshot.forEach(snap => {
                    this.genreOptions.push(new KeyValuePair(snap.key, snap.val().name));
                });

                this.populateForm();
            });
        });
    }

    populateForm() {
        this.form.setValue({
            title: this.album.title,
            genreKey: this.genreOptions,
            price: this.album.price,
            artist: this.album.artist,
            albumArtUrl: this.album.albumArtUrl
        });
    }

    save() {
        const title: string = this.form.get('title').value;
        const genreKey: string = this.form.get('genreKey').value;
        const price: number = this.form.get('price').value;
        const artist: string = this.form.get('artist').value;
        const albumArtUrl: string = this.form.get('albumArtUrl').value;

        const album = new Album(this.album.albumKey, title, genreKey, price, artist, albumArtUrl);

        this.albumAdminService.modifyAlbum(album);
        this.hasSaved.emit(true);
    }

    cancel() {
        this.hasSaved.emit(false);
    }
}