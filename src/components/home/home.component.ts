import { Component, computed, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProjectListComponent } from '../projects/pages/project-list/project-list.component';
import { AboutComponent } from '../about/about.component';
import { ThemeService } from '../../shared/services/theme.service';
import { SeoService } from '../../shared/services/seo.service';
import { ResumeComponent } from '../resume/resume.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, ProjectListComponent, AboutComponent, ResumeComponent, ContactComponent, SkillsComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly themeService = inject(ThemeService);

  /** Uma foto por tema (WebP, 800px de largura). */
  readonly profileImage = computed(() => {
    switch (this.themeService.currentTheme()) {
      case 'matrix': return 'assets/images/profile/profile-matrix.webp';
      case 'light': return 'assets/images/profile/profile-light.webp';
      default: return 'assets/images/profile/profile-dark.webp';
    }
  });

  constructor() {
    inject(SeoService).update({
      title: 'Alexsandro Moraes | Desenvolvedor Full Stack',
      description: 'Portfólio de Alexsandro Moraes, desenvolvedor Full Stack em Manaus com experiência em Angular, Django REST Framework e PostgreSQL. Projetos, trajetória e currículo.',
      path: '/'
    });
  }
}
