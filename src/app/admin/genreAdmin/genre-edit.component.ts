import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Genre } from '.';

import { GenreAdminService } from '.';

@Component({
    selector: 'app-genre-edit',
    templateUrl: 'genre-edit.component.html'
})
export class GenreEditComponent implements OnInit {
    @Input() genreKey: string;
    @Output() hasSaved: EventEmitter<boolean> = new EventEmitter<boolean>();
    genre: Genre;
    form: FormGroup;

    constructor(private genreAdminService: GenreAdminService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.buildForm();
        this.getFormDataAndPopulateForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    getFormDataAndPopulateForm() {
        this.genreAdminService.getGenre(this.genreKey).then(snapshot => {
            this.genre = new Genre(
                snapshot.key,
                snapshot.val().name,
                snapshot.val().description
            );

            this.populateForm();
        });
    }

    populateForm() {
        this.form.setValue({
            name: this.genre.name,
            description: this.genre.description
        });
    }

    save() {
        const name: string = this.form.get('name').value;
        const description: string = this.form.get('description').value;
      
        const genre = new Genre(this.genre.genreKey, name, description);

        this.genreAdminService.modifyGenre(genre);
        this.hasSaved.emit(true);
    }

    cancel() {
        this.hasSaved.emit(false);
    }
}