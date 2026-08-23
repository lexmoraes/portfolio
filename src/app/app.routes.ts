import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../layouts/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),

    children: [
      {
        path: '',
        title: 'Alexsandro Moraes — Desenvolvedor Full Stack',
        data: {
          description:
            'Portfólio de Alexsandro Moraes, desenvolvedor Full Stack especializado em Angular, Django REST Framework e PostgreSQL. Conheça projetos, experiência profissional e trajetória.',
        },
        loadComponent: () =>
          import('../components/home/home.component').then((m) => m.HomeComponent),
      },

      {
        path: 'curriculo',
        title: 'Currículo — Alexsandro Moraes',
        data: {
          description:
            'Currículo de Alexsandro Moraes, desenvolvedor Full Stack com experiência em Angular, Django REST Framework, PostgreSQL e suporte de TI. Baixe o currículo em PDF.',
        },
        loadComponent: () =>
          import('../components/resume/pages/resume-page/resume-page.component').then(
            (m) => m.ResumePageComponent,
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
