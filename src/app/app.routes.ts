import { Routes } from '@angular/router';
import { packingListRoutes } from './packing-list/packing-list.routes';
import { testGuard } from './test.guard';

export const routes: Routes = [
  {
    path: 'destinations',
    loadComponent: async () => (await import('./destination/destination-page/destination-page.component')).DestinationPageComponent
  },
  {
    path: 'packing-list',
    canActivate: [testGuard],
    children: packingListRoutes,
  },
  {
    path: 'countdown',
    loadComponent: async () => (await import('./countdown/countdown-page/countdown-page.component')).CountdownPageComponent
  }
];
