import { Component, OnInit } from '@angular/core';
import { Album, DataService } from '../data';

@Component({
    selector: 'app-top-selling',
    templateUrl: './topselling.component.html'
})
export class TopSellingComponent implements OnInit {
    albums: Album[];

    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.dataService.getTopSellingAlbums().subscribe(albums => this.albums = albums);
        console.log(this.albums);
    }
}
