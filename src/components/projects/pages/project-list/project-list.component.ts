import { Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../../../core/models/project';
import { MOCK_PROJECTS } from '../../../../core/mocks/projects-mocks';

type ProjectFilter = 'all' | 'corporate' | 'personal';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  allProjects = signal<Project[]>(MOCK_PROJECTS);
  activeFilter = signal<ProjectFilter>('all');

  filteredProjects = computed(() => {
    const projects = this.allProjects();
    switch (this.activeFilter()) {
      case 'corporate':
        return projects.filter((p) => p.corporate);
      case 'personal':
        return projects.filter((p) => !p.corporate);
      default:
        return projects;
    }
  });

  setFilter(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
  }
}
