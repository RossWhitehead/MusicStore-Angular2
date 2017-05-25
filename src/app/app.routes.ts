import { TopSellingComponent, BrowseComponent } from './albums';
import { CustomerFormComponent } from './forms';
import { ErrorComponent } from './error';

export const appRoutes = [
    { path: 'home', component: TopSellingComponent },
    { path: 'form', component: CustomerFormComponent },
    { path: 'browse/:name', component: BrowseComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];