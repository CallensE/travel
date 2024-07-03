import { Routes } from '@angular/router';
import { packingListItemResolver } from '../resolvers/packing-list-item.resolver';
import { PackingListItemPageComponent } from './packing-list-item-page/packing-list-item-page.component';
import { PackingListPageComponent } from './packing-list-page/packing-list-page.component';

export const packingListRoutes: Routes = [
  {
    path: '',
    component: PackingListPageComponent,
  },
  {
    path: ':id',
    component: PackingListItemPageComponent,
    resolve: { item: packingListItemResolver },
  },
];
