import { Component, signal, inject } from '@angular/core';
import { Project } from '../../core/models/project';
import { MOCK_PROJECTS } from '../../core/mocks/projects-mocks';
import { ProjectListComponent } from '../projects/pages/project-list/project-list.component';
import { AboutComponent } from '../about/about.component';
import { ThemeService } from '../../shared/services/theme.service';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectListComponent, AboutComponent, ResumeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  projects = signal<Project[]>(MOCK_PROJECTS);
  developerName = signal<string>('Alexsandro Moraes');

  themeService = inject(ThemeService);
}
