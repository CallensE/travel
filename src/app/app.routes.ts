import { Routes } from '@angular/router';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { PackingListPageComponent } from './packing-list/packing-list-page/packing-list-page.component';
import { PackingListItemPageComponent } from './packing-list/packing-list-item-page/packing-list-item-page.component';
import { packingListItemResolver } from './resolvers/packing-list-item.resolver';
import { testGuard } from './test.guard';

export const routes: Routes = [
    {
        path: 'destinations',
        component: DestinationPageComponent
    },
    {
        path: 'packing-list',
        component: PackingListPageComponent
    },
    {
        path: 'packing-list/:id',
        component: PackingListItemPageComponent,
        resolve: { item: packingListItemResolver},
        canActivate: [testGuard]
    }
];
