import { Component, computed, signal } from '@angular/core';
import { MOCK_PROJECTS } from '../../../../core/mocks/projects-mocks';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

type ProjectFilter = 'all' | 'corporate' | 'personal';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent {
  private readonly allProjects = signal(MOCK_PROJECTS);

  readonly filters: { id: ProjectFilter; label: string }[] = [
    { id: 'all', label: 'Todos' },
    { id: 'corporate', label: 'Corporativos' },
    { id: 'personal', label: 'Pessoais & Acadêmicos' }
  ];

  readonly activeFilter = signal<ProjectFilter>('all');

  readonly visibleProjects = computed(() => {
    const filter = this.activeFilter();
    const projects = this.allProjects();
    if (filter === 'corporate') return projects.filter(p => p.corporate);
    if (filter === 'personal') return projects.filter(p => !p.corporate);
    // Em "Todos", os projetos corporativos aparecem primeiro
    return [...projects].sort((a, b) => Number(!!b.corporate) - Number(!!a.corporate));
  });

  countFor(filter: ProjectFilter): number {
    const projects = this.allProjects();
    if (filter === 'corporate') return projects.filter(p => p.corporate).length;
    if (filter === 'personal') return projects.filter(p => !p.corporate).length;
    return projects.length;
  }
}
