import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { ResumeView } from '../../shared/resume-view/resume-view';
import { ResumeComponent } from './resume.component';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [ResumeView, ResumeComponent, RouterLink, MatIcon],
  template: `
    <section class="py-16 px-4 sm:px-6 print:p-0">
      <div class="max-w-[800px] mx-auto mb-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between print:hidden">
        <a routerLink="/"
           class="inline-flex items-center gap-1 text-sm font-medium text-portfolio-text hover:text-portfolio-primary transition-colors min-h-11">
          <mat-icon class="!w-5 !h-5 !text-[20px]" aria-hidden="true">arrow_back</mat-icon>
          Voltar ao portfólio
        </a>
        <app-resume label="Baixar PDF" />
      </div>
      <app-resume-view />
    </section>
  `
})
export class ResumePageComponent {
  constructor() {
    inject(SeoService).update({
      title: 'Currículo | Alexsandro Moraes',
      description: 'Currículo de Alexsandro Moraes, desenvolvedor Full Stack (Angular, Django REST Framework, PostgreSQL): formação, experiência, projetos e habilidades.',
      path: '/curriculo'
    });
  }
}
