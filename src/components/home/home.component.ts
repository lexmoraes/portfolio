import { Component, signal, afterNextRender, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../core/models/project';
import { MOCK_PROJECTS } from '../../core/mocks/projects-mocks';
import { ProjectListComponent } from '../projects/pages/project-list/project-list.component';
import { AboutComponent } from '../about/about.component';
import { ThemeService } from '../../shared/services/theme.service';
import { SeoService } from '../../shared/services/seo.service';
import { ResumeComponent } from '../resume/resume.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';

declare const AOS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ProjectListComponent, AboutComponent, ResumeComponent, ContactComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projects = signal<Project[]>(MOCK_PROJECTS);
  developerName = signal<string>('Alexsandro Moraes');

  themeService = inject(ThemeService);

  constructor() {
    inject(SeoService).update({
      title: 'Alexsandro Moraes | Desenvolvedor Full Stack',
      description: 'Portfólio de Alexsandro Moraes, desenvolvedor Full Stack em Manaus com experiência em Angular, Django REST Framework e PostgreSQL. Projetos, trajetória e currículo.',
      path: '/'
    });

    afterNextRender(() => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-in-out'
        });
        AOS.refresh();
      }
    });
  }
}
