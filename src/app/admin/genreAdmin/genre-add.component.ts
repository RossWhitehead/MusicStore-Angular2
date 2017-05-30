import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Genre } from '.';

import { GenreAdminService } from '.';

@Component({
    selector: 'genre-add',
    templateUrl: 'genre-add.component.html'
})

export class GenreAddComponent implements OnInit {
    form: FormGroup;    

    constructor(private genreAdminService: GenreAdminService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() { 
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['']
        });
    }

    save() {
        const name: string = this.form.get('name').value;
        const description: string = this.form.get('description').value;
        
        const genre = new Genre(name, description);
        
        this.genreAdminService.createGenre(Genre);
        this.router.navigate(['/admin/genre-admin']);
    }

    cancel() {
        this.router.navigate(['/admin/genre-admin']);
    }
}