import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Genre } from '.';

import { GenreAdminService } from '.';

@Component({
    selector: 'app-genre-add',
    templateUrl: 'genre-add.component.html'
})

export class GenreAddComponent implements OnInit {
    form: FormGroup;    
    @Output() hasSaved: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private genreAdminService: GenreAdminService, private formBuilder: FormBuilder) { }

    ngOnInit() { 
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    save() {
        const name: string = this.form.get('name').value;
        const description: string = this.form.get('description').value;

        const genre = new Genre(null, name, description);

        this.genreAdminService.createGenre(genre);
        this.hasSaved.emit(true);
    }

    cancel() {
        this.hasSaved.emit(false);
    }
}
