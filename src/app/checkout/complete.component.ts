import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-complate',
    templateUrl: 'complete.component.html'
})

export class CompleteComponent implements OnInit {
    orderNumber: string = '12345678';

    constructor() { }

    ngOnInit() { }
}