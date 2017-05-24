import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminRoutes } from './routes';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        RouterModule.forChild(AdminRoutes),
        FormsModule ],
    exports: [ RouterModule ],
    providers: [],
    bootstrap: []
})
export class AdminModule {}