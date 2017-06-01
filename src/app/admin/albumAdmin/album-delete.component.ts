import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AlbumAdminService } from '.';

@Component({
    selector: 'app-album-delete',
    templateUrl: 'album-delete.component.html'
})

export class AlbumDeleteComponent implements OnInit {
    @Input() albumKey: string;
    @Output() hasDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private albumAdminService: AlbumAdminService) { }

    ngOnInit() {

    }

    delete() {
        this.albumAdminService.deleteAlbum(this.albumKey);
        this.hasDeleted.emit(true);
    }

    cancel() {
        this.hasDeleted.emit(false);
    }
}
