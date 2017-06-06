import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-complete',
    templateUrl: 'complete.component.html'
})

export class CompleteComponent implements OnInit {
    orderKey: string;

    constructor(route: ActivatedRoute) { 
        console.log(route.snapshot.params);
        this.orderKey = route.snapshot.params['orderKey'];
    }

    ngOnInit() { }
}