import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layouts/main-layout/main-layout.component')
      .then(m => m.MainLayoutComponent),
    children: [
      {
        // Rota vazia (ex: www.alexsandro.dev/) -> Carrega a Home
        path: '',
        loadComponent: () => import('../features/home/home.component')
          .then(m => m.HomeComponent)
      },
      {
        // Rota de projetos (ex: www.alexsandro.dev/projetos)
        path: 'projects',
        loadComponent: () => import('../features/projects/pages/project-list/project-list.component')
          .then(m => m.ProjectListComponent)
      },
      {
        // Rota "Sobre mim" (ex: www.alexsandro.dev/sobre)
        path: 'about',
        loadComponent: () => import('../features/about/about.component')
          .then(m => m.AboutComponent)
      }
    ]
  },
  {
    // Rota de fallback: Se o usuário digitar qualquer coisa errada, joga para a Home
    path: '**',
    redirectTo: ''
  }
];
