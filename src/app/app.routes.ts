import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../layouts/main-layout/main-layout.component')
        .then(m => m.MainLayoutComponent),

    children: [
      {
        path: '',
        loadComponent: () =>
          import('../components/home/home.component')
            .then(m => m.HomeComponent)
      },

      {
        path: 'curriculo',
        loadComponent: () =>
          import('../components/resume/resume.component')
            .then(m => m.ResumeComponent)
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];
