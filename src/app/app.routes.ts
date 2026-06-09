import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/routes').then(m => m.HOME_ROUTES)
      },
      {
        path: 'projects',
        loadChildren: () => import('./features/projects/routes').then(m => m.PROJECTS_ROUTES)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
