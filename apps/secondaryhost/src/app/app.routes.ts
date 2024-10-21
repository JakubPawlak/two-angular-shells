import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'myremote',
    loadChildren: () =>
      loadRemoteModule('myremote', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'myremote',
    pathMatch: 'full',
  },
];
