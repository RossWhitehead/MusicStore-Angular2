import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GenreAdminService } from '.';

@Component({
    selector: 'app-genre-delete',
    templateUrl: 'genre-delete.component.html'
})

export class GenreDeleteComponent implements OnInit {
    @Input() genreKey: string;
    @Output() hasDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private genreAdminService: GenreAdminService) { }

    ngOnInit() {

    }

    delete() {
        this.genreAdminService.deleteGenre(this.genreKey);
        this.hasDeleted.emit(true);
    }

    cancel() {
        this.hasDeleted.emit(false);
    }
}
