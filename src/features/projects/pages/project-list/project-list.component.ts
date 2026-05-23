import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AnimationCallbackEvent } from '@angular/core';
import { Project } from '../../../../core/models/project';
import { MOCK_PROJECTS } from '../../../../core/mocks/projects-mocks';
import { gsap } from 'gsap';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent {
  allProjects = signal<Project[]>(MOCK_PROJECTS);
  selectedTag = signal<string>('All');

  featuredProject = computed(() =>
    this.allProjects().find(p => p.title === 'Planit')
  );

  tagsList = computed(() => {
    const tags = new Set<string>();
    this.allProjects().forEach(project => {
      project.technologies.forEach(tech => tags.add(tech));
    });
    return ['All', ...Array.from(tags)];
  });

  filteredProjects = computed(() => {
    const tag = this.selectedTag();
    if (tag === 'All') return this.allProjects();
    return this.allProjects().filter(project => project.technologies.includes(tag));
  });

  setFilter(tag: string) {
    this.selectedTag.set(tag);
  }

  onProjectEnter(event: AnimationCallbackEvent) {
    gsap.fromTo(event.target,
      { opacity: 0, scale: 0.9, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }

  onProjectLeave(event: AnimationCallbackEvent) {
    gsap.to(event.target, {
      opacity: 0,
      scale: 0.9,
      y: -30,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => (event as any).done()
    });
  }
}
