import { TopSellingComponent, BrowseComponent } from './albums';
import { CustomerFormComponent } from './forms';

export const appRoutes = [
    { path: 'topselling', component: TopSellingComponent },
    { path: 'form', component: CustomerFormComponent },
    { path: 'browse/:name', component: BrowseComponent },
    { path: '', redirectTo: '/form', pathMatch: 'full' }
];