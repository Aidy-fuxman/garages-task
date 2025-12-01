import { Routes } from '@angular/router';
import { GaragesPage } from './features/garages/pages/garages-page/garages-page';

export const routes: Routes = [
  {
    path: 'garages',
    component: GaragesPage
  },
  {
    path: '',
    redirectTo: 'garages',
    pathMatch: 'full'
  }
];
